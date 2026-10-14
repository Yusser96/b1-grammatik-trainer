// Exercise bank core. Each data/items-*.js file calls window.addItems(fn) with a builder.
// Ids continue per topic across files, so a topic may be extended in a later file.
// that receives small helpers. Levels: 1 Basics (recognition), 2 Solid (production with
// hints), 3 Exam (word order, error spotting, no hints).
window.ITEMS = [];
window.addItems = function (build) {
  const I = window.ITEMS;
  let topic = null, n = 0;
  const push = o => { n++; I.push(Object.assign({ id: `${topic}-${String(n).padStart(2, "0")}`, topic }, o)); };
  const T = id => { topic = id; n = I.filter(i => i.topic === id).length; };
  // multiple choice: options array, answer = index of the correct option
  const mc = (level, prompt, options, answer, explain) => push({ level, type: "mc", prompt, options, answer, explain });
  // fill the blank: prompt contains ___ ; answer = string or array of accepted strings
  const fill = (level, prompt, answer, explain) => push({ level, type: "fill", prompt, answer: [].concat(answer), explain });
  // word order: answer sentence; words are split by spaces at runtime; alt = other accepted orders
  const order = (level, answer, explain, alt) => push({ level, type: "order", answer, alt: alt || [], explain });
  // tap the wrong word: wrongWord must appear in sentence; correction replaces it
  const wrong = (level, sentence, wrongWord, correction, explain, note) => push({ level, type: "wrong", sentence, wrongWord, correction, explain, note });
  // tap the extra word: extraWord must appear in sentence exactly once
  const extra = (level, sentence, extraWord, explain) => push({ level, type: "extra", sentence, extraWord, explain });
  build({ T, mc, fill, order, wrong, extra });
};
