// Data validation: node tests/validate.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const ctx = { window: {} };
vm.createContext(ctx);
const itemFiles = fs.readdirSync(path.join(root, "data")).filter(f => /^items-.*\.js$/.test(f)).sort().map(f => "data/" + f);
for (const f of ["data/config.js", "data/topics.js", "data/items.js", ...itemFiles, "data/exam.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });
}
const { CONFIG, TOPICS, ITEMS, EXAMS } = ctx.window;
const errors = [];
const err = m => errors.push(m);
const tok = s => s.split(/\s+/).map(w => w.replace(/^[„“"‚‘(]+|[.,!?;:„“"‘’)]+$/g, "")).filter(Boolean);

// topics
const topicIds = new Set(TOPICS.map(t => t.id));
if (TOPICS.length !== CONFIG.topics) err(`expected ${CONFIG.topics} topics, got ${TOPICS.length}`);
for (const k of ["level", "storageKey", "hero", "examIntro", "examTiming", "teil1Note", "pointsNote", "passPct", "siblings"]) if (CONFIG[k] === undefined) err(`config missing ${k}`);
for (const t of TOPICS) {
  for (const k of ["id", "title", "tag", "intuition", "rule", "examples", "trap"]) if (!t[k]) err(`topic ${t.id} missing ${k}`);
  if (t.table && t.table.rows.some(r => r.length !== t.table.head.length)) err(`topic ${t.id} table row length mismatch`);
}

// items
const ids = new Set();
const perBucket = {};
for (const it of ITEMS) {
  if (ids.has(it.id)) err(`duplicate id ${it.id}`); ids.add(it.id);
  if (!topicIds.has(it.topic)) err(`${it.id}: unknown topic ${it.topic}`);
  if (![1, 2, 3].includes(it.level)) err(`${it.id}: bad level`);
  if (!it.explain) err(`${it.id}: missing explain`);
  perBucket[it.topic + "-" + it.level] = (perBucket[it.topic + "-" + it.level] || 0) + 1;
  switch (it.type) {
    case "mc":
      if (!Array.isArray(it.options) || it.options.length < 2) err(`${it.id}: options`);
      if (new Set(it.options).size !== it.options.length) err(`${it.id}: duplicate options`);
      if (!(it.answer >= 0 && it.answer < it.options.length)) err(`${it.id}: answer index`);
      break;
    case "fill":
      if (!it.prompt.includes("___")) err(`${it.id}: fill prompt has no ___`);
      if (!it.answer.length || it.answer.some(a => !a)) err(`${it.id}: fill answer`);
      break;
    case "order": {
      const norm = s => tok(s).map(w => w.toLowerCase()).sort().join("|");
      if (it.answer.split(" ").length < 3) err(`${it.id}: order too short`);
      for (const a of it.alt) {
        if (norm(a) !== norm(it.answer)) err(`${it.id}: alt "${a}" uses different words`);
      }
      break;
    }
    case "wrong": {
      const n = tok(it.sentence).filter(w => w === it.wrongWord).length;
      if (n !== 1) err(`${it.id}: wrongWord "${it.wrongWord}" appears ${n} times`);
      if (it.wrongWord === it.correction) err(`${it.id}: correction equals wrong word`);
      break;
    }
    case "extra": {
      const n = tok(it.sentence).filter(w => w === it.extraWord).length;
      if (n !== 1) err(`${it.id}: extraWord "${it.extraWord}" appears ${n} times`);
      break;
    }
    default: err(`${it.id}: unknown type ${it.type}`);
  }
}
for (const t of TOPICS) for (const l of [1, 2, 3]) {
  const n = perBucket[t.id + "-" + l] || 0;
  if (n < 3) err(`topic ${t.id} level ${l} has only ${n} items`);
}

// exams
for (const [i, e] of EXAMS.teil1.entries()) {
  if (e.gaps.length !== 10) err(`teil1[${i}] needs 10 gaps`);
  for (let g = 1; g <= 10; g++) if (!e.text.includes(`[${g}]`)) err(`teil1[${i}] text missing [${g}]`);
  e.gaps.forEach((gap, k) => {
    if (gap.options.length !== 3) err(`teil1[${i}] gap ${k + 1}: 3 options required`);
    if (!topicIds.has(gap.topic)) err(`teil1[${i}] gap ${k + 1}: topic`);
    if (!gap.explain) err(`teil1[${i}] gap ${k + 1}: explain`);
  });
}
for (const [i, e] of EXAMS.teil2.entries()) {
  if (e.bank.length !== 15 || new Set(e.bank).size !== 15) err(`teil2[${i}] bank must have 15 unique words`);
  if (e.answers.length !== 10 || new Set(e.answers).size !== 10) err(`teil2[${i}] 10 unique answers required`);
  for (const a of e.answers) if (!e.bank.includes(a)) err(`teil2[${i}] answer "${a}" not in bank`);
  for (let g = 1; g <= 10; g++) if (!e.text.includes(`[${g}]`)) err(`teil2[${i}] text missing [${g}]`);
  if (e.topics.length !== 10 || e.explain.length !== 10) err(`teil2[${i}] topics/explain length`);
  for (const t of e.topics) if (!topicIds.has(t)) err(`teil2[${i}] bad topic ${t}`);
}

const byType = {};
for (const it of ITEMS) byType[it.type] = (byType[it.type] || 0) + 1;
console.log(`topics: ${TOPICS.length}, items: ${ITEMS.length}`, byType, `exam texts: ${EXAMS.teil1.length} + ${EXAMS.teil2.length}`);
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("OK");
