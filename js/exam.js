// telc-style mock exam: Teil 1 (letter, a/b/c), Teil 2 (text + word bank), Teil 3 (grammar mix).
window.Exam = (() => {
  const esc = Engine.esc;
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const POINTS = 1.5;

  function build(cfg) {
    // Teil 1: shuffle the a/b/c options of every gap so the right answer is not always (a)
    const t1raw = pick(EXAMS.teil1), t2 = pick(EXAMS.teil2);
    const t1 = Object.assign({}, t1raw, { gaps: t1raw.gaps.map(g => { const idx = Engine.shuffle(g.options.map((_, i) => i)); return Object.assign({}, g, { options: idx.map(i => g.options[i]), answer: idx.indexOf(g.answer) }); }) });
    // Teil 3: 20 items, spread across topics, respecting the chosen level
    const pool = ITEMS.filter(i => cfg.level === "mix" || i.level === +cfg.level);
    const byTopic = {}; for (const i of pool) (byTopic[i.topic] = byTopic[i.topic] || []).push(i);
    const topics = Engine.shuffle(Object.keys(byTopic));
    const items = []; let round = 0;
    while (items.length < cfg.count && round < 10) {
      for (const t of topics) { const list = Engine.shuffle(byTopic[t]); if (list[round] && items.length < cfg.count) items.push(list[round]); }
      round++;
    }
    return {
      cfg, t1: { src: t1, answers: Array(10).fill(null) }, t2: { src: t2, answers: Array(10).fill(null) },
      t3: { items: Engine.shuffle(items), ctrls: [], answers: items.map(() => "") }, startedAt: Date.now()
    };
  }

  function render(container, exam, { onSubmit }) {
    container.innerHTML = "";
    if (exam.cfg.minutes && !exam.deadline) exam.deadline = Date.now() + exam.cfg.minutes * 60000;
    let part = 1, timerId = null, remaining = exam.deadline ? Math.max(0, Math.round((exam.deadline - Date.now()) / 1000)) : null;
    const head = el("div", "exam-head");
    const title = el("div", "", "<b>Mock exam</b>");
    const timer = el("div", "timer num", remaining == null ? "No timer" : fmt(remaining));
    const submitBtn = el("button", "btn small", "Finish exam");
    head.append(title, el("div", "row", ""));
    head.lastChild.append(timer, submitBtn);
    const parts = el("div", "parts");
    const body = el("div");
    container.append(head, parts, body);
    const partBtns = [1, 2, 3].map(n => { const b = el("button", "chip", ["", "Teil 1 · a/b/c", "Teil 2 · word bank", "Teil 3 · grammar mix"][n]); b.onclick = () => show(n); parts.appendChild(b); return b; });
    function fmt(s) { return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; }
    if (remaining != null) timerId = setInterval(() => { remaining = Math.max(0, Math.round((exam.deadline - Date.now()) / 1000)); timer.textContent = fmt(remaining); if (remaining <= 120) timer.classList.add("low"); if (remaining <= 0) finish(true); }, 1000);
    function finish(auto) {
      if (!auto) { const unanswered = countUnanswered(); if (unanswered && !confirm(`${unanswered} gap(s) are still empty. Finish anyway?`)) return; }
      clearInterval(timerId); onSubmit(score(exam));
    }
    submitBtn.onclick = () => finish(false);
    function countUnanswered() {
      return exam.t1.answers.filter(a => a == null).length + exam.t2.answers.filter(a => a == null).length +
        exam.t3.ctrls.filter(c => c && !c.evaluate().answered).length;
    }
    // Teil 3 nodes are created once so answers persist while switching parts
    if (!exam.t3.body) {
      const t3Body = el("div");
      exam.t3.items.forEach((item, k) => {
        const card = el("div", "card exercise exam-item");
        card.appendChild(el("div", "topic-line", `<span>${k + 1} / ${exam.t3.items.length}</span><span>${esc(TOPICS.find(t => t.id === item.topic).title)}</span>`));
        const box = el("div"); card.appendChild(box);
        exam.t3.ctrls[k] = Engine.render(item, box, { immediate: false, onAnswer: () => {} });
        t3Body.appendChild(card);
      });
      const t3Foot = el("div", "row", ""); const fin = el("button", "btn primary", "Finish exam"); t3Foot.appendChild(fin); t3Body.appendChild(t3Foot);
      exam.t3.body = t3Body;
    }
    const t3Body = exam.t3.body;
    t3Body.querySelector(".row .btn.primary").onclick = () => finish(false);

    function show(n) {
      part = n; partBtns.forEach((b, i) => b.classList.toggle("on", i === n - 1));
      body.innerHTML = "";
      if (n === 1) body.appendChild(renderTeil1(exam, () => show(2)));
      if (n === 2) body.appendChild(renderTeil2(exam, () => show(3)));
      if (n === 3) body.appendChild(t3Body);
      window.scrollTo({ top: 0 });
    }
    show(1);
    return { stop: () => clearInterval(timerId) };
  }

  function clozeHTML(text, gapHTML) {
    return esc(text).replace(/\[(\d+)\]/g, (m, n) => gapHTML(+n));
  }

  function renderTeil1(exam, next) {
    const wrap = el("div");
    const { src, answers } = exam.t1;
    wrap.appendChild(el("div", "card", `<h2>Teil 1 · Sprachbausteine</h2><p class="muted">Read the letter and choose the right word for each gap (a, b or c). ${CONFIG.teil1Note}</p><h3 class="de">${esc(src.title)}</h3><div class="cloze" id="t1-cloze"></div>`));
    const rows = el("div", "gaprows");
    const draw = () => {
      wrap.querySelector("#t1-cloze").innerHTML = clozeHTML(src.text, n => `<span class="g"><span class="n">${n}</span>${answers[n - 1] == null ? "&nbsp;" : esc(src.gaps[n - 1].options[answers[n - 1]])}</span>`);
      rows.querySelectorAll(".abc button").forEach(b => b.classList.toggle("sel", answers[+b.dataset.g] === +b.dataset.i));
    };
    src.gaps.forEach((gap, g) => {
      const r = el("div", "gaprow", `<span class="n">${g + 1}</span>`);
      const abc = el("div", "abc");
      gap.options.forEach((o, i) => { const b = el("button", "", `<span class="k muted small">${"abc"[i]}</span> ${esc(o)}`); b.dataset.g = g; b.dataset.i = i; b.onclick = () => { answers[g] = i; draw(); }; abc.appendChild(b); });
      r.appendChild(abc); rows.appendChild(r);
    });
    wrap.appendChild(el("div", "card")).appendChild(rows);
    const foot = el("div", "row"); const b = el("button", "btn primary", "Next: Teil 2"); b.onclick = next; foot.appendChild(b); wrap.appendChild(foot);
    draw();
    return wrap;
  }

  function renderTeil2(exam, next) {
    const wrap = el("div");
    const { src, answers } = exam.t2;
    let active = answers.findIndex(a => a == null); if (active < 0) active = 0;
    wrap.appendChild(el("div", "card", `<h2>Teil 2 · Sprachbausteine</h2><p class="muted">Fill the 10 gaps with words from the box. Five words are not needed. Tap a gap, then tap a word; tap a filled gap to clear it.</p><h3 class="de">${esc(src.title)}</h3><div class="cloze" id="t2-cloze"></div>`));
    const bank = el("div", "bank");
    const draw = () => {
      const cl = wrap.querySelector("#t2-cloze");
      cl.innerHTML = clozeHTML(src.text, n => `<button class="g${active === n - 1 ? " active" : ""}" data-g="${n - 1}"><span class="n">${n}</span>${answers[n - 1] == null ? "&nbsp;" : esc(answers[n - 1])}</button>`);
      cl.querySelectorAll(".g").forEach(b => b.onclick = () => { const g = +b.dataset.g; if (answers[g] != null) { answers[g] = null; } active = g; draw(); });
      bank.querySelectorAll(".tile").forEach(t => t.classList.toggle("used", answers.includes(t.dataset.w)));
    };
    Engine.shuffle(src.bank).forEach(w => {
      const t = el("button", "tile", esc(w)); t.dataset.w = w;
      t.onclick = () => { if (answers.includes(w)) return; answers[active] = w; const nx = answers.findIndex(a => a == null); active = nx < 0 ? active : nx; draw(); };
      bank.appendChild(t);
    });
    wrap.appendChild(bank);
    const foot = el("div", "row"); foot.style.marginTop = "14px"; const b = el("button", "btn primary", "Next: Teil 3"); b.onclick = next; foot.appendChild(b); wrap.appendChild(foot);
    draw();
    return wrap;
  }

  function score(exam) {
    const perTopic = {};
    const tally = (topic, ok) => { const p = perTopic[topic] || (perTopic[topic] = { a: 0, c: 0 }); p.a++; if (ok) p.c++; };
    const t1 = exam.t1.src.gaps.map((g, i) => { const u = exam.t1.answers[i]; const ok = u === g.answer; tally(g.topic, ok); return { n: i + 1, user: u == null ? "" : g.options[u], correct: g.options[g.answer], ok, topic: g.topic, explain: g.explain }; });
    const t2 = exam.t2.src.answers.map((a, i) => { const u = exam.t2.answers[i]; const ok = u === a; tally(exam.t2.src.topics[i], ok); return { n: i + 1, user: u || "", correct: a, ok, topic: exam.t2.src.topics[i], explain: exam.t2.src.explain[i] }; });
    const t3 = exam.t3.items.map((item, i) => { const r = exam.t3.ctrls[i].evaluate(); tally(item.topic, r.correct); Store.record(item.id, r.correct); return { n: i + 1, item, user: r.user, correct: Engine.solution(item), ok: r.correct, topic: item.topic, explain: item.explain }; });
    const c1 = t1.filter(x => x.ok).length, c2 = t2.filter(x => x.ok).length, c3 = t3.filter(x => x.ok).length;
    const max = (10 + 10 + t3.length) * POINTS, pts = (c1 + c2 + c3) * POINTS;
    const res = { parts: [{ name: "Teil 1 · a/b/c", correct: c1, total: 10 }, { name: "Teil 2 · word bank", correct: c2, total: 10 }, { name: "Teil 3 · grammar mix", correct: c3, total: t3.length }],
      t1, t2, t3, points: pts, max, pct: Math.round(100 * pts / max), perTopic, level: exam.cfg.level, minutes: Math.round((Date.now() - exam.startedAt) / 60000) };
    Store.addMock({ score: pts, max, pct: res.pct, level: exam.cfg.level, perTopic, minutes: res.minutes });
    return res;
  }

  // Topics where points were lost, worst first
  function missedTopics(res) {
    return Object.entries(res.perTopic).filter(([, p]) => p.c < p.a).sort((a, b) => (b[1].a - b[1].c) - (a[1].a - a[1].c)).map(([t, p]) => ({ tid: t, wrong: p.a - p.c, of: p.a }));
  }
  function renderResults(container, res, { openTopic, onRetry, onPractise }) {
    container.innerHTML = "";
    const pass = res.pct >= CONFIG.passPct;
    const top = el("div", "card summary");
    top.innerHTML = `<h2>Result</h2><div class="big num">${res.points} <span class="muted" style="font-size:1.2rem">/ ${res.max} points</span></div>
      <p class="${pass ? "yes" : "you"}" style="font-weight:700;color:${pass ? "var(--green)" : "var(--red)"}">${res.pct}% · ${pass ? "above" : "below"} the pass line of ${CONFIG.passPct}%</p>
      <div class="stack">${res.parts.map(p => `<div><div class="row between"><span>${p.name}</span><span class="num">${p.correct} / ${p.total}</span></div><div class="bar${p.correct / p.total >= .6 ? " green" : ""}"><i style="width:${100 * p.correct / p.total}%"></i></div></div>`).join("")}</div>
      <p class="muted small" style="margin-top:10px">Time used: about ${res.minutes} min. ${CONFIG.pointsNote}</p>`;
    const btns = el("div", "row"); const again = el("button", "btn primary", "New mock exam"); again.onclick = onRetry; btns.appendChild(again);
    top.appendChild(btns); container.appendChild(top);

    const missed = missedTopics(res), done = res.practised || [];
    const tcard = el("div", "card", `<h3>Where you lost points</h3>${missed.length ? '<p class="muted small">Practise a topic and come back here; practised topics are ticked.</p>' : '<p class="muted">Nothing missed. Impressive.</p>'}`);
    missed.forEach(({ tid, wrong, of }) => {
      const t = TOPICS.find(x => x.id === tid), isDone = done.includes(tid);
      const r = el("div", "row between review-item", `<span><b>${t.id}</b> ${esc(t.title)} <span class="muted small">${wrong} of ${of} wrong</span>${isDone ? ' <span class="yes small" style="color:var(--green)">✓ practised</span>' : ""}</span>`);
      const rb = el("div", "row"); const g = el("button", "btn small quiet", "Read grammar"); g.onclick = () => openTopic(tid); const pr = el("button", "btn small" + (isDone ? " quiet" : ""), isDone ? "Practise again" : "Practise"); pr.onclick = () => onPractise(tid);
      rb.append(g, pr); r.appendChild(rb); tcard.appendChild(r);
    });
    container.appendChild(tcard);

    const review = el("div", "card", "<h3>Review every answer</h3>");
    const section = (name, rows, fmtRow) => { review.appendChild(el("h4", "", name)); rows.forEach(r => review.appendChild(fmtRow(r))); };
    const gapRow = r => el("div", "review-item", `<div><b>${r.n}.</b> <span class="de ${r.ok ? "yes" : "you"}">${esc(r.user || "—")}</span>${r.ok ? "" : ` → <span class="de" style="color:var(--blue)">${esc(r.correct)}</span>`}</div><div class="muted small">${esc(r.explain)}</div>`);
    section("Teil 1", res.t1, gapRow);
    section("Teil 2", res.t2, gapRow);
    section("Teil 3", res.t3, r => el("div", "review-item", `<div class="small muted">${r.n}. ${esc(TOPICS.find(t => t.id === r.topic).title)}</div><div>${Engine.solvedHTML(r.item)}</div><div>Your answer: <span class="de ${r.ok ? "yes" : "you"}">${esc(r.user || "—")}</span></div><div class="muted small">${esc(r.explain)}</div>`));
    container.appendChild(review);
  }

  return { build, render, renderResults, missedTopics };
})();
