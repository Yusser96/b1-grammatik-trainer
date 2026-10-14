// Exercise engine: renders one item and checks the answer.
// Engine.render(item, container, {immediate, onAnswer}) → controller {evaluate(), reveal()}
// immediate=true: feedback shown as soon as the user answers (practice).
// immediate=false: the user's choice is stored; evaluate() checks later (exam).
window.Engine = (() => {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const norm = s => String(s).toLowerCase().trim().replace(/\s+/g, " ")
    .replace(/[.!?,;:„“"‚‘’]+$/g, "").replace(/^[„“"‚‘]+/g, "")
    .replace(/ß/g, "ss").replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue");
  const stripPunct = w => w.replace(/^[„“"‚‘(]+|[.,!?;:„“"‘’)]+$/g, "");
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

  // prompt text: "___" becomes a gap, "(hint)" at the end becomes muted
  function promptHTML(prompt, filled) {
    let p = esc(prompt);
    p = p.replace(/\(([^()]*)\)\s*$/, '<span class="hint">($1)</span>');
    p = p.replace(/___/g, filled != null ? `<span class="gap">${esc(filled)}</span>` : '<span class="gap">&nbsp;</span>');
    return p;
  }
  const instr = {
    mc: "Choose the correct option.", fill: "Type the missing word(s).", order: "Tap the words in the right order.",
    wrong: "Tap the word that is wrong.", extra: "Tap the word that does not belong."
  };

  // Correct answer as display text
  function solution(item) {
    switch (item.type) {
      case "mc": return item.options[item.answer];
      case "fill": return item.answer.join(" / ");
      case "order": return item.answer;
      case "wrong": return item.sentence.split(" ").map(w => stripPunct(w) === item.wrongWord ? w.replace(item.wrongWord, item.correction) : w).join(" ");
      case "extra": return item.sentence.split(" ").filter(w => stripPunct(w) !== item.extraWord).join(" ");
    }
    return "";
  }
  // A solved version of an item (for "similar example")
  function solvedHTML(item) {
    switch (item.type) {
      case "mc": return item.prompt.includes("___") ? promptHTML(item.prompt, item.options[item.answer]) : `${promptHTML(item.prompt)} <b class="de">${esc(item.options[item.answer])}</b>`;
      case "fill": return promptHTML(item.prompt, item.answer[0]);
      default: return `<span class="de">${esc(solution(item))}</span>`;
    }
  }

  function render(item, container, opts) {
    const immediate = opts.immediate !== false;
    const onAnswer = opts.onAnswer || (() => {});
    container.innerHTML = "";
    const instrEl = el("div", "instr", instr[item.type]);
    container.appendChild(instrEl);
    let done = false, evaluate = () => ({ answered: false, correct: false, user: "" });
    const finish = (correct, user) => { if (done) return; done = true; onAnswer(correct, user); };

    if (item.type === "mc") {
      container.appendChild(el("div", "prompt", promptHTML(item.prompt)));
      const opts_ = el("div", "opts");
      const perm = shuffle(item.options.map((o, i) => i));
      const buttons = perm.map((idx, k) => {
        const b = el("button", "opt", `<span class="k">${k + 1}</span><span>${esc(item.options[idx])}</span>`);
        b.dataset.idx = idx;
        b.onclick = () => {
          if (done) return;
          const correct = idx === item.answer;
          if (immediate) {
            buttons.forEach(x => { x.disabled = true; if (+x.dataset.idx === item.answer) x.classList.add("ok"); });
            if (!correct) b.classList.add("bad");
            finish(correct, item.options[idx]);
          } else {
            buttons.forEach(x => x.classList.remove("sel")); b.classList.add("sel");
            sel = idx; onAnswer(null, item.options[idx]);
          }
        };
        opts_.appendChild(b); return b;
      });
      let sel = null;
      container.appendChild(opts_);
      evaluate = () => ({ answered: sel != null, correct: sel === item.answer, user: sel == null ? "" : item.options[sel] });
      container._keys = n => { const b = buttons[n - 1]; if (b && !b.disabled) b.click(); };
      return { evaluate, reveal: () => buttons.forEach(x => { x.disabled = true; if (+x.dataset.idx === item.answer) x.classList.add("ok"); else if (x.classList.contains("sel")) x.classList.add("bad"); }) };
    }

    if (item.type === "fill") {
      container.appendChild(el("div", "prompt", promptHTML(item.prompt)));
      const row = el("div", "fill-row");
      const input = el("input", "text"); input.type = "text"; input.autocapitalize = "off"; input.autocomplete = "off"; input.spellcheck = false; input.placeholder = "…";
      input.setAttribute("aria-label", "Your answer");
      const btn = el("button", "btn primary", "Check");
      row.append(input, btn); container.appendChild(row);
      const check = () => {
        if (done) return; const v = input.value; if (!v.trim()) { input.focus(); return; }
        const correct = item.answer.some(a => norm(a) === norm(v));
        input.disabled = true; btn.disabled = true;
        container.querySelector(".gap").textContent = v;
        container.querySelector(".gap").style.color = correct ? "var(--green)" : "var(--red)";
        finish(correct, v);
      };
      if (immediate) { btn.onclick = check; input.onkeydown = e => { if (e.key === "Enter") check(); }; }
      else { btn.remove(); input.oninput = () => onAnswer(null, input.value); }
      setTimeout(() => input.focus(), 50);
      evaluate = () => ({ answered: !!input.value.trim(), correct: item.answer.some(a => norm(a) === norm(input.value)), user: input.value });
      return { evaluate, reveal: () => { input.disabled = true; } };
    }

    if (item.type === "order") {
      const words = item.answer.split(" ");
      let perm = shuffle(words.map((w, i) => i));
      if (perm.every((p, i) => p === i)) perm = perm.reverse();
      const line = el("div", "answer-line"); line.setAttribute("aria-label", "Your sentence");
      const pool = el("div", "words");
      const placed = []; // indices in order
      const tiles = perm.map(idx => {
        const t = el("button", "tile", esc(words[idx])); t.dataset.idx = idx;
        t.onclick = () => { if (done) return; t.classList.add("ghost"); t.disabled = true; placed.push(idx); redraw(); };
        pool.appendChild(t); return t;
      });
      const btn = el("button", "btn primary", "Check"); btn.disabled = true;
      const redraw = () => {
        line.innerHTML = "";
        placed.forEach((idx, k) => {
          const t = el("button", "tile", esc(words[idx]));
          t.onclick = () => { if (done) return; placed.splice(k, 1); const orig = tiles.find(x => +x.dataset.idx === idx); orig.classList.remove("ghost"); orig.disabled = false; redraw(); };
          line.appendChild(t);
        });
        if (!placed.length) line.appendChild(el("span", "muted small", "Your sentence appears here"));
        btn.disabled = placed.length !== words.length;
        if (!immediate) onAnswer(null, placed.map(i => words[i]).join(" "));
      };
      redraw();
      const result = () => {
        const user = placed.map(i => words[i]).join(" ");
        const ok = [item.answer, ...item.alt].some(a => norm(a) === norm(user));
        return { answered: placed.length === words.length, correct: ok, user };
      };
      const check = () => { if (done || placed.length !== words.length) return; const r = result(); line.classList.add(r.correct ? "ok" : "bad"); line.querySelectorAll("button").forEach(b => b.disabled = true); btn.disabled = true; finish(r.correct, r.user); };
      container.append(line, pool);
      if (immediate) { container.appendChild(el("div", "row", "")).appendChild(btn); btn.onclick = check; container._enter = check; }
      evaluate = result;
      return { evaluate, reveal: () => { line.querySelectorAll("button").forEach(b => b.disabled = true); tiles.forEach(t => t.disabled = true); } };
    }

    if (item.type === "wrong" || item.type === "extra") {
      const target = item.type === "wrong" ? item.wrongWord : item.extraWord;
      if (item.note) instrEl.innerHTML += ` <span class="muted">${esc(item.note)}</span>`;
      const s = el("div", "sentence");
      const toks = item.sentence.split(" ");
      let sel = null;
      const btns = toks.map(w => {
        const b = el("button", "w", esc(w));
        b.onclick = () => {
          if (done) return;
          const correct = stripPunct(w) === target;
          if (immediate) {
            btns.forEach(x => x.disabled = true);
            if (correct) { b.classList.add("strike"); if (item.type === "wrong") b.insertAdjacentHTML("afterend", `<span class="ink de">${esc(item.correction)}</span>`); }
            else { b.classList.add("sel"); const t = btns.find(x => stripPunct(x.textContent) === target); t.classList.add("strike"); if (item.type === "wrong") t.insertAdjacentHTML("afterend", `<span class="ink de">${esc(item.correction)}</span>`); }
            finish(correct, w);
          } else { btns.forEach(x => x.classList.remove("sel")); b.classList.add("sel"); sel = w; onAnswer(null, w); }
        };
        s.appendChild(b); s.appendChild(document.createTextNode(" ")); return b;
      });
      container.appendChild(s);
      evaluate = () => ({ answered: sel != null, correct: sel != null && stripPunct(sel) === target, user: sel || "" });
      return { evaluate, reveal: () => { btns.forEach(x => x.disabled = true); const t = btns.find(x => stripPunct(x.textContent) === target); t.classList.add("strike"); if (item.type === "wrong") t.insertAdjacentHTML("afterend", `<span class="ink de">${esc(item.correction)}</span>`); } };
    }
    container.appendChild(el("p", "muted", "Unknown exercise type."));
    return { evaluate, reveal() {} };
  }

  return { render, solution, solvedHTML, promptHTML, esc, norm, shuffle, instr };
})();
