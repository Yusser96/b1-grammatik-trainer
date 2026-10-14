// Router and views: home, learn, practise, exam, profile.
(() => {
  const esc = Engine.esc;
  const view = document.getElementById("view");
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const topic = id => TOPICS.find(t => t.id === id);
  const LEVELS = { 1: "Basics", 2: "Solid", 3: "Exam" };
  const TYPES = { mc: "Multiple choice", fill: "Fill the blank", order: "Word order", wrong: "Wrong word", extra: "Extra word" };
  const pct = x => Math.round(100 * x);
  let session = null, examState = null, examResult = null, examCtl = null;
  const cfg = { topics: [], level: "mix", types: Object.keys(TYPES), count: 10 };
  const examCfg = { level: "mix", count: 20, minutes: Store.data.settings.timer };

  // ---------- helpers ----------
  function toast(msg) { const t = el("div", "toast", esc(msg)); document.body.appendChild(t); setTimeout(() => t.remove(), 2200); }
  function go(hash) { location.hash = hash; }
  function applySettings() {
    const s = Store.data.settings;
    if (s.theme === "auto") delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme = s.theme;
    if (s.fs === "normal") delete document.documentElement.dataset.fs; else document.documentElement.dataset.fs = s.fs;
  }
  function levelDots(tid) {
    return `<div class="dots">${[1, 2, 3].map(l => { const m = Store.bucket(tid, l).mastery; return `<i class="${m >= .8 ? "m" : m > 0 ? "p" : ""}" title="Level ${l}: ${pct(m)}%"></i>`; }).join("")}</div>`;
  }
  function sheetHTML(t) {
    return `<div class="sheet">
      <p class="muted">${esc(t.tag)}</p>
      <h3>Intuition</h3><p>${esc(t.intuition)}</p>
      <h3>Rule</h3><ul>${t.rule.map(r => `<li>${esc(r)}</li>`).join("")}</ul>
      <h3>Examples</h3><div class="ex">${t.examples.map(e => `<div><div class="de">${esc(e.de)}</div>${e.en ? `<div class="en">${esc(e.en)}</div>` : ""}</div>`).join("")}</div>
      <h3 style="margin-top:14px">Common trap</h3><div class="callout">${esc(t.trap)}</div>
      ${t.table ? `<h3 style="margin-top:14px">At a glance</h3><div class="table-wrap"><table class="grid"><thead><tr>${t.table.head.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${t.table.rows.map(r => `<tr>${r.map(c => `<td class="de">${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>` : ""}
    </div>`;
  }
  function practiseButtons(tid) {
    const r = el("div", "row");
    [1, 2, 3].forEach(l => { const b = el("button", "btn small", `Practise · ${LEVELS[l]}`); b.onclick = () => startSession({ topics: [tid], level: String(l), types: Object.keys(TYPES), count: 10 }); r.appendChild(b); });
    return r;
  }
  // drawer with the grammar sheet
  const drawer = document.getElementById("drawer");
  function openTopic(tid) {
    const t = topic(tid);
    const panel = drawer.querySelector(".panel");
    panel.innerHTML = `<div class="panel-head"><h2><span class="num">${t.id}</span> · ${esc(t.title)}</h2><button class="icon-btn" aria-label="Close">${icons.close}</button></div>${sheetHTML(t)}`;
    panel.querySelector(".icon-btn").onclick = closeDrawer;
    panel.appendChild(practiseButtons(tid));
    drawer.classList.add("open"); document.body.style.overflow = "hidden";
  }
  function closeDrawer() { drawer.classList.remove("open"); document.body.style.overflow = ""; }
  drawer.addEventListener("click", e => { if (e.target === drawer) closeDrawer(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && drawer.classList.contains("open")) closeDrawer(); });

  const icons = {
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>'
  };

  // ---------- home ----------
  function home() {
    const tot = Store.totals(), weak = Store.weakest(3);
    const v = el("div");
    v.innerHTML = `<div class="hero"><h1>${esc(CONFIG.hero)}</h1><p class="muted">Short sessions, instant correction, and the rule one tap away.</p></div>
      <div class="stats"><div class="stat"><b class="num">${Store.streak()}</b><span>day streak</span></div><div class="stat"><b class="num">${Store.todayCount()}</b><span>answered today</span></div><div class="stat"><b class="num">${tot.attempts ? pct(tot.accuracy) + "%" : "–"}</b><span>accuracy overall</span></div></div>
      <h2 style="margin-top:22px">Start</h2><div class="quick" id="quick"></div>
      <h2 style="margin-top:22px">Needs attention</h2><div class="card" id="weak"></div>
      <p class="muted small" style="margin-top:18px">Other levels: ${CONFIG.siblings.filter(s => s.level !== CONFIG.level).map(s => `<a href="${esc(s.url)}">${esc(s.level)} trainer</a>`).join(" · ")}</p>`;
    const q = v.querySelector("#quick");
    const mk = (label, sub, fn, primary) => { const b = el("button", "btn" + (primary ? " primary" : ""), `<span>${label}<small>${sub}</small></span>`); b.onclick = fn; q.appendChild(b); };
    mk("Quick practice", "10 mixed questions, all levels", () => startSession({ topics: [], level: "mix", types: Object.keys(TYPES), count: 10 }), true);
    mk("Train weak spots", "10 questions from your three weakest topics", () => startSession({ topics: weak.map(w => w.t.id), level: "mix", types: Object.keys(TYPES), count: 10 }));
    mk("Mock exam", "telc-style Sprachbausteine + grammar mix", () => go("exam"));
    mk("Brush up", "Read the grammar overview", () => go("learn"));
    const w = v.querySelector("#weak");
    weak.forEach(({ t, b }) => {
      const r = el("div", "row between review-item", `<span><b>${t.id}</b> ${esc(t.title)}<br><span class="muted small">${b.attempts ? `${pct(b.accuracy)}% correct · mastery ${pct(b.mastery)}%` : "not practised yet"}</span></span>`);
      const rb = el("div", "row"); const g = el("button", "btn small quiet", "Grammar"); g.onclick = () => openTopic(t.id); const p = el("button", "btn small", "Practise"); p.onclick = () => startSession({ topics: [t.id], level: "mix", types: Object.keys(TYPES), count: 10 });
      rb.append(g, p); r.appendChild(rb); w.appendChild(r);
    });
    return v;
  }

  // ---------- learn ----------
  function learn() {
    const v = el("div", "", `<h1>Grammar overview</h1><p class="muted">27 topics from the workbook. Each has an intuition, the rule, examples and the common trap. The small bars show your mastery at levels 1, 2 and 3.</p>`);
    const grid = el("div", "topics");
    TOPICS.forEach(t => { const b = el("button", "topic-card", `<span class="n">${t.id}</span><span><b>${esc(t.title)}</b><span class="tag">${esc(t.tag)}</span>${levelDots(t.id)}</span>`); b.onclick = () => go("learn/" + t.id); grid.appendChild(b); });
    v.appendChild(grid); return v;
  }
  function topicPage(id) {
    const t = topic(id); if (!t) return learn();
    const i = TOPICS.indexOf(t);
    const v = el("div");
    const nav = el("div", "row between", "");
    const back = el("button", "btn small quiet", "← All topics"); back.onclick = () => go("learn");
    nav.appendChild(back); v.appendChild(nav);
    v.appendChild(el("h1", "", `<span class="num">${t.id}</span> · ${esc(t.title)}`));
    const card = el("div", "card", sheetHTML(t)); card.appendChild(el("hr"));
    card.appendChild(practiseButtons(id)); v.appendChild(card);
    const pn = el("div", "row between");
    const prev = el("button", "btn small", i > 0 ? `← ${TOPICS[i - 1].id} ${esc(TOPICS[i - 1].title)}` : ""); prev.disabled = i === 0; prev.onclick = () => go("learn/" + TOPICS[i - 1].id);
    const next = el("button", "btn small", i < TOPICS.length - 1 ? `${TOPICS[i + 1].id} ${esc(TOPICS[i + 1].title)} →` : ""); next.disabled = i === TOPICS.length - 1; next.onclick = () => go("learn/" + TOPICS[i + 1].id);
    pn.append(prev, next); v.appendChild(pn);
    return v;
  }

  // ---------- practise config ----------
  function practise() {
    const v = el("div", "", `<h1>Practise</h1>`);
    const card = el("div", "card stack");
    card.appendChild(el("label", "field", "Topics"));
    const chips = el("div", "row");
    const all = el("button", "chip" + (cfg.topics.length ? "" : " on"), "All topics"); all.onclick = () => { cfg.topics = []; draw(); }; chips.appendChild(all);
    TOPICS.forEach(t => { const c = el("button", "chip" + (cfg.topics.includes(t.id) ? " on" : ""), `${t.id} ${esc(t.title)}`); c.onclick = () => { cfg.topics = cfg.topics.includes(t.id) ? cfg.topics.filter(x => x !== t.id) : [...cfg.topics, t.id]; draw(); }; chips.appendChild(c); });
    card.appendChild(chips);
    card.appendChild(el("label", "field", "Level"));
    const seg = el("div", "seg");
    [["1", "1 · Basics"], ["2", "2 · Solid"], ["3", "3 · Exam"], ["mix", "Mixed"]].forEach(([k, l]) => { const b = el("button", cfg.level === k ? "on" : "", l); b.onclick = () => { cfg.level = k; draw(); }; seg.appendChild(b); });
    card.appendChild(seg);
    card.appendChild(el("p", "muted small", "Basics: recognise the right form. Solid: produce it with a hint. Exam: word order and error spotting without hints."));
    card.appendChild(el("label", "field", "Exercise types"));
    const tchips = el("div", "row");
    Object.entries(TYPES).forEach(([k, l]) => { const c = el("button", "chip" + (cfg.types.includes(k) ? " on" : ""), l); c.onclick = () => { cfg.types = cfg.types.includes(k) ? cfg.types.filter(x => x !== k) : [...cfg.types, k]; if (!cfg.types.length) cfg.types = [k]; draw(); }; tchips.appendChild(c); });
    card.appendChild(tchips);
    card.appendChild(el("label", "field", "Questions"));
    const cseg = el("div", "seg");
    [10, 20, 30].forEach(n => { const b = el("button", cfg.count === n ? "on" : "", String(n)); b.onclick = () => { cfg.count = n; draw(); }; cseg.appendChild(b); });
    card.appendChild(cseg);
    const avail = ITEMS.filter(i => (!cfg.topics.length || cfg.topics.includes(i.topic)) && (cfg.level === "mix" || i.level === +cfg.level) && cfg.types.includes(i.type)).length;
    card.appendChild(el("p", "muted small", `${avail} matching questions in the bank.`));
    const start = el("button", "btn primary block", "Start"); start.disabled = !avail; start.onclick = () => startSession(Object.assign({}, cfg));
    card.appendChild(start);
    v.appendChild(card);
    function draw() { view.innerHTML = ""; view.appendChild(practise()); }
    return v;
  }

  // ---------- session ----------
  function weightedSample(pool, n) {
    const w = pool.map(i => { const s = Store.stat(i.id); return s.a === 0 ? 3 : s.s === 0 ? 4 : s.s === 1 ? 2 : 1; });
    const out = [], idx = pool.map((_, i) => i);
    while (out.length < n && idx.length) {
      const total = idx.reduce((a, i) => a + w[i], 0); let r = Math.random() * total, k = 0;
      for (; k < idx.length; k++) { r -= w[idx[k]]; if (r <= 0) break; }
      k = Math.min(k, idx.length - 1); out.push(pool[idx[k]]); idx.splice(k, 1);
    }
    return out;
  }
  function startSession(c) {
    const pool = ITEMS.filter(i => (!c.topics.length || c.topics.includes(i.topic)) && (c.level === "mix" || i.level === +c.level) && c.types.includes(i.type));
    if (!pool.length) { toast("No questions match these settings."); return; }
    session = { queue: weightedSample(pool, c.count), i: 0, results: [], cfg: c };
    closeDrawer();
    if (location.hash === "#practise/run") runView(); else go("practise/run");
  }
  function runView() {
    view.innerHTML = "";
    if (!session) { go("practise"); return; }
    if (session.i >= session.queue.length) { view.appendChild(summary()); return; }
    const item = session.queue[session.i], t = topic(item.topic);
    const v = el("div");
    const prog = el("div", "progress", `<span class="num small">${session.i + 1} / ${session.queue.length}</span><div class="bar"><i style="width:${100 * session.i / session.queue.length}%"></i></div>`);
    const quit = el("button", "btn small quiet", "End"); quit.onclick = () => { if (confirm("End this session? Progress so far is saved.")) { session.queue = session.queue.slice(0, session.i); runView(); } };
    if (session.cfg.from === "exam" && examResult) { const back = el("button", "btn small quiet", "← Exam results"); back.onclick = () => { if (confirm("Back to the exam results? Progress so far is saved.")) { session.queue = session.queue.slice(0, session.i); go("exam/run"); } }; prog.appendChild(back); }
    prog.appendChild(quit); v.appendChild(prog);
    const card = el("div", "card exercise");
    const tl = el("div", "topic-line", `<span>${t.id} · ${esc(t.title)} · Level ${item.level}</span>`);
    const gl = el("button", "btn small quiet", "Grammar"); gl.onclick = () => openTopic(t.id); tl.appendChild(gl);
    card.appendChild(tl);
    const box = el("div"); card.appendChild(box); v.appendChild(card);
    let answered = false;
    Engine.render(item, box, { immediate: true, onAnswer: (correct, user) => {
      answered = true;
      Store.record(item.id, correct);
      session.results.push({ item, correct, user });
      const fb = el("div", "feedback " + (correct ? "ok" : "bad"));
      fb.innerHTML = `<div class="verdict">${correct ? "Richtig!" : "Not quite."}</div>${correct ? "" : `<div class="correct">${Engine.solvedHTML(item)}</div>`}<div class="why">${esc(item.explain)}</div>`;
      const row = el("div", "row");
      const g = el("button", "btn small", "Read the grammar"); g.onclick = () => openTopic(t.id);
      const s = el("button", "btn small", "Similar example"); let sim = null; s.onclick = () => { if (sim) { sim.remove(); sim = null; return; } sim = similar(item); fb.appendChild(sim); };
      const n = el("button", "btn primary", session.i + 1 < session.queue.length ? "Next" : "See results"); n.onclick = next;
      row.append(g, s, n); fb.appendChild(row); card.appendChild(fb);
      if (correct) setTimeout(() => n.focus(), 50); else setTimeout(() => n.scrollIntoView({ block: "nearest", behavior: "smooth" }), 50);
    } });
    const next = () => { session.i++; runView(); };
    view._keys = e => {
      const tag = e.target.tagName;
      if (tag === "INPUT") return;                       // the input handles Enter itself
      if (e.key === "Enter") { if (tag === "BUTTON") return; if (answered) { e.preventDefault(); next(); } else if (box._enter) box._enter(); }
      else if (/^[1-9]$/.test(e.key) && box._keys && !answered) box._keys(+e.key);
    };
    view.appendChild(v);
    window.scrollTo({ top: 0 });
  }
  function similar(item) {
    const pool = ITEMS.filter(i => i.topic === item.topic && i.id !== item.id);
    const same = pool.filter(i => i.type === item.type);
    const pickFrom = same.length ? same : pool;
    const box = el("div", "similar");
    const draw = () => {
      const t = topic(item.topic);
      if (!pickFrom.length) { box.innerHTML = `<div class="de">${esc(t.examples[0].de)}</div><div class="muted small">${esc(t.examples[0].en)}</div>`; return; }
      const ex = pickFrom[Math.floor(Math.random() * pickFrom.length)];
      box.innerHTML = `<div class="muted small">Similar example</div><div class="de" style="font-size:1.1rem">${Engine.solvedHTML(ex)}</div><div class="muted small">${esc(ex.explain)}</div>`;
      const a = el("button", "btn small quiet", "Another"); a.onclick = draw; box.appendChild(a);
    };
    draw(); return box;
  }
  function summary() {
    const r = session.results, c = r.filter(x => x.correct).length;
    const v = el("div", "", `<h1>Session done</h1>`);
    const card = el("div", "card summary", `<div class="big num">${c} <span class="muted" style="font-size:1.2rem">/ ${r.length} correct</span></div><div class="bar green" style="margin:10px 0"><i style="width:${r.length ? 100 * c / r.length : 0}%"></i></div>`);
    const per = {}; r.forEach(x => { const p = per[x.item.topic] || (per[x.item.topic] = { a: 0, c: 0 }); p.a++; if (x.correct) p.c++; });
    Object.entries(per).sort((a, b) => (a[1].c / a[1].a) - (b[1].c / b[1].a)).forEach(([tid, p]) => {
      const t = topic(tid);
      const row = el("div", "row between review-item", `<span><b>${t.id}</b> ${esc(t.title)} <span class="num muted small">${p.c}/${p.a}</span></span>`);
      const g = el("button", "btn small quiet", "Grammar"); g.onclick = () => openTopic(tid); row.appendChild(g); card.appendChild(row);
    });
    const btns = el("div", "row"); btns.style.marginTop = "14px";
    const wrongOnes = r.filter(x => !x.correct).map(x => x.item);
    const fromExam = session.cfg.from === "exam" && examResult;
    if (fromExam) {
      // Chain through the exam's weak topics: mark this one done, offer the next one
      examResult.practised = examResult.practised || [];
      if (session.cfg.examTid && !examResult.practised.includes(session.cfg.examTid)) examResult.practised.push(session.cfg.examTid);
      const next = Exam.missedTopics(examResult).find(m => !examResult.practised.includes(m.tid));
      if (next) { const nt = topic(next.tid); const nb = el("button", "btn primary", `Next weak area: ${nt.id} ${esc(nt.title)}`); nb.onclick = () => startSession(Object.assign({}, session.cfg, { topics: [next.tid], examTid: next.tid })); btns.appendChild(nb); }
      else v.appendChild(el("p", "muted", "You have practised every topic where you lost points in this exam."));
      const back = el("button", "btn", "Back to exam results"); back.onclick = () => go("exam/run"); btns.appendChild(back);
    }
    if (wrongOnes.length) { const b = el("button", "btn" + (fromExam ? "" : " primary"), `Review ${wrongOnes.length} mistake${wrongOnes.length > 1 ? "s" : ""}`); b.onclick = () => { session = { queue: Engine.shuffle(wrongOnes), i: 0, results: [], cfg: session.cfg }; runView(); }; btns.appendChild(b); }
    const again = el("button", "btn" + (wrongOnes.length || fromExam ? "" : " primary"), "Same settings again"); again.onclick = () => startSession(session.cfg); btns.appendChild(again);
    const ch = el("button", "btn quiet", "Change settings"); ch.onclick = () => go("practise"); btns.appendChild(ch);
    card.appendChild(btns); v.appendChild(card);
    return v;
  }

  // ---------- exam ----------
  function exam() {
    const v = el("div", "", `<h1>Mock exam</h1><p class="muted">${CONFIG.examIntro}</p>`);
    const card = el("div", "card stack");
    card.appendChild(el("label", "field", "Level for the grammar mix"));
    const seg = el("div", "seg");
    [["1", "1 · Basics"], ["2", "2 · Solid"], ["3", "3 · Exam"], ["mix", "Mixed"]].forEach(([k, l]) => { const b = el("button", examCfg.level === k ? "on" : "", l); b.onclick = () => { examCfg.level = k; redraw(); }; seg.appendChild(b); });
    card.appendChild(seg);
    card.appendChild(el("label", "field", "Timer"));
    const tseg = el("div", "seg");
    [[20, "20 min"], [30, "30 min"], [45, "45 min"], [0, "Off"]].forEach(([k, l]) => { const b = el("button", examCfg.minutes === k ? "on" : "", l); b.onclick = () => { examCfg.minutes = k; Store.setSetting("timer", k); redraw(); }; tseg.appendChild(b); });
    card.appendChild(tseg);
    card.appendChild(el("p", "muted small", CONFIG.examTiming));
    const start = el("button", "btn primary block", "Start mock exam"); start.onclick = () => { examState = Exam.build(examCfg); examResult = null; go("exam/run"); };
    card.appendChild(start); v.appendChild(card);
    const hist = Store.data.mocks;
    if (hist.length) {
      const h = el("div", "card", "<h3>Previous mock exams</h3>");
      hist.slice(0, 5).forEach(m => h.appendChild(el("div", "row between review-item", `<span>${new Date(m.ts).toLocaleDateString()} · level ${m.level}</span><span class="num" style="color:${m.pct >= 60 ? "var(--green)" : "var(--red)"}">${m.score} / ${m.max} · ${m.pct}%</span>`)));
      v.appendChild(h);
    }
    function redraw() { view.innerHTML = ""; view.appendChild(exam()); }
    return v;
  }
  function examRun() {
    view.innerHTML = "";
    if (examResult) { Exam.renderResults(view, examResult, { openTopic, onRetry: () => go("exam"), onPractise: tid => startSession({ topics: [tid], level: "mix", types: Object.keys(TYPES), count: 10, from: "exam", examTid: tid }) }); return; }
    if (!examState) { go("exam"); return; }
    examCtl = Exam.render(view, examState, { onSubmit: res => { examResult = res; examState = null; examRun(); window.scrollTo({ top: 0 }); } });
  }

  // ---------- profile ----------
  function profile() {
    const tot = Store.totals();
    const v = el("div", "", `<h1>Your progress</h1>
      <div class="stats"><div class="stat"><b class="num">${Store.streak()}</b><span>day streak</span></div><div class="stat"><b class="num">${tot.attempts}</b><span>answers given</span></div><div class="stat"><b class="num">${tot.attempts ? pct(tot.accuracy) + "%" : "–"}</b><span>accuracy</span></div></div>`);
    const m = el("div", "card", `<h3>Mastery by topic and level</h3><p class="muted small">A question counts as mastered after two correct answers in a row. Tap a cell to practise that topic at that level.</p><div class="mhead"><span>#</span><span>Topic</span><span>Basics</span><span>Solid</span><span>Exam</span></div>`);
    const grid = el("div", "mastery");
    TOPICS.forEach(t => {
      const row = el("div", "mrow", `<span class="muted">${t.id}</span><span class="t">${esc(t.title)}</span>`);
      [1, 2, 3].forEach(l => { const b = Store.bucket(t.id, l); const c = el("button", "cell" + (b.mastery >= .8 ? " m" : ""), `<i style="width:${pct(b.mastery)}%"></i><span>${b.seen ? pct(b.mastery) + "%" : ""}</span>`); c.title = `${t.title} · level ${l}: ${b.seen}/${b.total} seen, ${b.attempts ? pct(b.accuracy) + "% correct" : "no answers yet"}`; c.onclick = () => startSession({ topics: [t.id], level: String(l), types: Object.keys(TYPES), count: 10 }); row.appendChild(c); });
      grid.appendChild(row);
    });
    m.appendChild(grid); v.appendChild(m);
    const hist = Store.data.mocks;
    const h = el("div", "card", "<h3>Mock exam history</h3>" + (hist.length ? "" : '<p class="muted">No mock exams yet.</p>'));
    hist.slice(0, 10).forEach(x => h.appendChild(el("div", "row between review-item", `<span>${new Date(x.ts).toLocaleString()} · level ${x.level} · ${x.minutes} min</span><span class="num" style="color:${x.pct >= 60 ? "var(--green)" : "var(--red)"}">${x.score} / ${x.max} · ${x.pct}%</span>`)));
    v.appendChild(h);
    const s = el("div", "card stack", "<h3>Settings</h3>");
    s.appendChild(el("label", "field", "Theme"));
    const tseg = el("div", "seg"); [["auto", "Auto"], ["light", "Light"], ["dark", "Dark"]].forEach(([k, l]) => { const b = el("button", Store.data.settings.theme === k ? "on" : "", l); b.onclick = () => { Store.setSetting("theme", k); applySettings(); redraw(); }; tseg.appendChild(b); }); s.appendChild(tseg);
    s.appendChild(el("label", "field", "Text size"));
    const fseg = el("div", "seg"); [["small", "Smaller"], ["normal", "Normal"], ["large", "Larger"]].forEach(([k, l]) => { const b = el("button", Store.data.settings.fs === k ? "on" : "", l); b.onclick = () => { Store.setSetting("fs", k); applySettings(); redraw(); }; fseg.appendChild(b); }); s.appendChild(fseg);
    s.appendChild(el("label", "field", "Your data"));
    s.appendChild(el("p", "muted small", "Progress is stored only in this browser. Export a backup to move it to another device."));
    const row = el("div", "row");
    const ex = el("button", "btn small", "Export backup"); ex.onclick = () => { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([Store.exportJSON()], { type: "application/json" })); a.download = `${CONFIG.level.toLowerCase()}-trainer-${Store.today()}.json`; a.click(); };
    const im = el("label", "btn small", "Import backup"); const inp = el("input"); inp.type = "file"; inp.accept = "application/json"; inp.className = "hidden"; inp.onchange = () => { const f = inp.files[0]; if (!f) return; f.text().then(t => { try { Store.importJSON(t); toast("Backup imported."); redraw(); } catch (e) { toast("That file is not a trainer backup."); } }); }; im.appendChild(inp);
    const rs = el("button", "btn small quiet", "Reset all progress"); rs.style.color = "var(--red)"; rs.onclick = () => { if (confirm("Delete all progress in this browser? This cannot be undone.")) { Store.reset(); applySettings(); redraw(); } };
    row.append(ex, im, rs); s.appendChild(row); v.appendChild(s);
    function redraw() { view.innerHTML = ""; view.appendChild(profile()); }
    return v;
  }

  // ---------- router ----------
  const routes = { home, learn, practise, exam, profile };
  function route() {
    const h = (location.hash.slice(1) || "home").split("/");
    const page = routes[h[0]] ? h[0] : "home";
    document.querySelectorAll("nav.tabs button").forEach(b => b.classList.toggle("active", b.dataset.route === page));
    if (examCtl && !(page === "exam" && h[1] === "run")) { examCtl.stop(); examCtl = null; }
    view._keys = null; closeDrawer();
    if (page === "learn" && h[1]) { view.innerHTML = ""; view.appendChild(topicPage(h[1])); }
    else if (page === "practise" && h[1] === "run") runView();
    else if (page === "exam" && h[1] === "run") examRun();
    else { view.innerHTML = ""; view.appendChild(routes[page]()); }
    if (!(page === "practise" && h[1] === "run")) window.scrollTo({ top: 0 });
  }
  document.querySelectorAll("nav.tabs button").forEach(b => b.onclick = () => go(b.dataset.route));
  document.getElementById("theme-btn").onclick = () => {
    const dark = document.documentElement.dataset.theme === "dark" || (!document.documentElement.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
    Store.setSetting("theme", dark ? "light" : "dark"); applySettings();
  };
  document.addEventListener("keydown", e => { if (view._keys && !drawer.classList.contains("open")) view._keys(e); });
  window.addEventListener("hashchange", route);
  applySettings(); route();
})();
