// Browser smoke test. Open tests/smoke.html in a browser (or headless Chrome) and read <pre id="smoke">.
(async () => {
  const log = []; const fail = m => log.push("FAIL " + m); const ok = m => log.push("ok " + m);
  window.onerror = (m, s, l) => fail(`error ${m} at ${s}:${l}`);
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const view = document.getElementById("view");
  const strip = w => w.replace(/^[„“"‚‘(]+|[.,!?;:„“"‘’)]+$/g, "");
  try {
    for (const h of ["home", "learn", "learn/05", "practise", "exam", "profile"]) {
      location.hash = h; await wait(60);
      if (!view.innerHTML.trim()) fail("empty view " + h); else ok("route " + h);
    }
    // drawer
    location.hash = "home"; await wait(60);
    const gBtn = [...view.querySelectorAll("button")].find(b => b.textContent.trim() === "Grammar");
    gBtn.click(); await wait(30);
    if (!document.getElementById("drawer").classList.contains("open")) fail("drawer did not open"); else ok("drawer");
    document.getElementById("drawer").querySelector(".icon-btn").click();
    // every exercise type, correct then wrong
    for (const type of ["mc", "fill", "order", "wrong", "extra"]) {
      for (const want of [true, false]) {
        const item = ITEMS.filter(i => i.type === type)[want ? 0 : 7];
        const box = document.createElement("div"); document.body.appendChild(box); let res = null;
        Engine.render(item, box, { immediate: true, onAnswer: (c, u) => res = { c, u } });
        if (type === "mc") box.querySelector(`.opt[data-idx="${want ? item.answer : (item.answer + 1) % item.options.length}"]`).click();
        if (type === "fill") { const inp = box.querySelector("input"); inp.value = want ? item.answer[0].toUpperCase() + "." : "xyz"; box.querySelector("button.btn").click(); }
        if (type === "order") {
          const words = item.answer.split(" "); const seq = want ? words : words.slice().reverse();
          for (const w of seq) { const t = [...box.querySelectorAll(".words .tile")].find(x => !x.disabled && x.textContent === w); t.click(); }
          box.querySelector("button.btn").click();
        }
        if (type === "wrong" || type === "extra") {
          const target = type === "wrong" ? item.wrongWord : item.extraWord;
          const btns = [...box.querySelectorAll(".w")];
          (want ? btns.find(b => strip(b.textContent) === target) : btns.find(b => strip(b.textContent) !== target)).click();
        }
        if (!res) fail(type + " no answer callback"); else if (res.c !== want) fail(`${type} expected ${want} got ${JSON.stringify(res)} (${item.id})`); else ok(`${type} ${want ? "correct" : "wrong"}`);
        box.remove();
      }
    }
    // practice session through the UI
    location.hash = "practise"; await wait(60);
    view.querySelector(".btn.primary.block").click(); await wait(60);
    if (location.hash !== "#practise/run") fail("session did not start"); else ok("session started");
    for (let k = 0; k < 10; k++) {
      const ex = view.querySelector(".exercise"); if (!ex) { fail("no exercise at step " + k); break; }
      const opt = ex.querySelector(".opt"); const inp = ex.querySelector("input"); const w = ex.querySelector(".w"); const tile = ex.querySelector(".words .tile");
      if (opt) opt.click(); else if (inp) { inp.value = "x"; ex.querySelector(".fill-row button").click(); } else if (w) w.click();
      else if (tile) { ex.querySelectorAll(".words .tile").forEach(t => t.click()); ex.querySelector("button.btn.primary").click(); }
      await wait(20);
      const next = [...ex.querySelectorAll(".feedback .btn.primary")][0]; if (!next) { fail("no feedback/next at step " + k + " instr=" + (ex.querySelector(".instr")||{}).textContent + " html=" + ex.innerHTML.slice(0,300)); break; }
      next.click(); await wait(20);
    }
    if (!view.querySelector(".summary")) fail("no session summary"); else ok("session summary");
    // exam
    window.confirm = () => true;
    const exam = Exam.build({ level: "mix", count: 20, minutes: 0 });
    if (exam.t3.items.length !== 20) fail("exam items " + exam.t3.items.length);
    if (new Set(exam.t3.items.map(i => i.topic)).size < 15) fail("exam topic diversity low");
    const c = document.createElement("div"); document.body.appendChild(c); let result = null;
    Exam.render(c, exam, { onSubmit: r => result = r });
    // Teil 1 via UI
    c.querySelectorAll(".gaprow").forEach((row, g) => row.querySelectorAll(".abc button")[exam.t1.src.gaps[g].answer].click());
    if (exam.t1.answers.some(a => a == null)) fail("teil1 ui answers"); else ok("teil1 ui");
    // Teil 2 via UI
    [...c.querySelectorAll(".chip")][1].click();
    for (const w of exam.t2.src.answers) { const t = [...c.querySelectorAll(".bank .tile")].find(x => x.dataset.w === w); t.click(); }
    if (JSON.stringify(exam.t2.answers) !== JSON.stringify(exam.t2.src.answers)) fail("teil2 ui answers " + JSON.stringify(exam.t2.answers)); else ok("teil2 ui");
    // Teil 3: answer first item only
    [...c.querySelectorAll(".chip")][2].click();
    const first = c.querySelector(".exam-item .opt, .exam-item input, .exam-item .w, .exam-item .tile");
    if (first.tagName === "INPUT") first.value = "x"; else first.click();
    c.querySelector(".exam-head button").click();
    if (!result) fail("no exam result");
    else if (result.parts[0].correct !== 10 || result.parts[1].correct !== 10) fail("exam scoring " + JSON.stringify(result.parts));
    else ok(`exam scored ${result.points}/${result.max}`);
    Exam.renderResults(c, result, { openTopic() {}, onRetry() {}, onPractise() {} });
    if (!c.querySelector(".summary")) fail("no results view"); else ok("results view");
    c.remove();
    const saved = JSON.parse(localStorage.getItem(CONFIG.storageKey));
    if (!saved || !Object.keys(saved.items).length || !saved.mocks.length) fail("progress not persisted"); else ok("persisted " + Object.keys(saved.items).length + " items, " + saved.mocks.length + " mock");
    location.hash = "profile"; await wait(60);
    if (!view.querySelector(".mastery")) fail("profile grid");
  } catch (e) { fail("exception " + e.message + "\n" + e.stack); }
  document.body.insertAdjacentHTML("beforeend", `<pre id="smoke">${log.join("\n").replace(/</g, "&lt;")}\nDONE ${log.filter(l => l.startsWith("FAIL")).length} failures</pre>`);
})();
