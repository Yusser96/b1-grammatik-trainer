// Progress store: localStorage only. Shape documented in docs/superpowers/specs.
window.Store = (() => {
  const KEY = (window.CONFIG && CONFIG.storageKey) || "b1trainer.v1";
  const blank = () => ({ items: {}, mocks: [], days: {}, settings: { theme: "auto", fs: "normal", timer: 30 } });
  let data = blank();
  try { const raw = localStorage.getItem(KEY); if (raw) data = Object.assign(blank(), JSON.parse(raw)); } catch (e) { /* private mode */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* ignore */ } };
  const today = () => new Date().toISOString().slice(0, 10);

  function record(itemId, correct) {
    const s = data.items[itemId] || { a: 0, c: 0, s: 0, t: 0 };
    s.a++; if (correct) { s.c++; s.s++; } else { s.s = 0; }
    s.t = Date.now();
    data.items[itemId] = s;
    const d = data.days[today()] || { a: 0, c: 0 };
    d.a++; if (correct) d.c++;
    data.days[today()] = d;
    save();
  }
  const stat = id => data.items[id] || { a: 0, c: 0, s: 0, t: 0 };
  // mastery of an item: 0 unseen/last wrong, .5 one right in a row, 1 two or more in a row
  const itemMastery = id => Math.min(1, stat(id).s / 2);

  function bucket(topic, level) {
    const items = window.ITEMS.filter(i => i.topic === topic && (!level || i.level === level));
    let a = 0, c = 0, seen = 0, m = 0;
    for (const i of items) { const s = stat(i.id); a += s.a; c += s.c; if (s.a) seen++; m += itemMastery(i.id); }
    return { total: items.length, seen, attempts: a, correct: c, accuracy: a ? c / a : 0, mastery: items.length ? m / items.length : 0 };
  }
  function totals() {
    let a = 0, c = 0; for (const id in data.items) { a += data.items[id].a; c += data.items[id].c; }
    return { attempts: a, correct: c, accuracy: a ? c / a : 0 };
  }
  function streak() {
    let n = 0; const d = new Date();
    for (;;) {
      const k = d.toISOString().slice(0, 10);
      if (data.days[k] && data.days[k].a > 0) { n++; d.setDate(d.getDate() - 1); }
      else if (n === 0 && k === today()) { d.setDate(d.getDate() - 1); } // today not yet practised: look at yesterday
      else break;
    }
    return n;
  }
  const todayCount = () => (data.days[today()] || { a: 0 }).a;
  function addMock(m) { data.mocks.unshift(Object.assign({ ts: Date.now() }, m)); data.mocks = data.mocks.slice(0, 50); save(); }
  function setSetting(k, v) { data.settings[k] = v; save(); }
  const exportJSON = () => JSON.stringify(data, null, 1);
  function importJSON(txt) { const o = JSON.parse(txt); if (!o || typeof o.items !== "object") throw new Error("Not a trainer backup"); data = Object.assign(blank(), o); save(); }
  function reset() { data = blank(); save(); }
  // weakest topics by mastery (only topics with some attempts rank first; unseen after)
  function weakest(n) {
    return window.TOPICS.map(t => ({ t, b: bucket(t.id) }))
      .sort((x, y) => (x.b.mastery - y.b.mastery) || (y.b.attempts - x.b.attempts))
      .slice(0, n);
  }
  return { get data() { return data; }, record, stat, itemMastery, bucket, totals, streak, todayCount, addMock, setSetting, exportJSON, importJSON, reset, weakest, today };
})();
