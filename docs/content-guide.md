# Content guide for the Grammatik Trainer exercise bank

This guide is for anyone (human or agent) writing exercises, grammar pages or mock-exam texts.
The same app code serves the A1, A2 and B1 trainers; only the `data/` folder differs.

## Files

- `data/topics.js` — `window.TOPICS = [ {id, title, tag, intuition, rule:[...], examples:[{de,en}], trap, table?:{head:[...], rows:[[...]]}} , ... ]`
- `data/items-*.js` — each file calls `window.addItems(({ T, mc, fill, order, wrong, extra }) => { ... })`
- `data/exam.js` — `window.EXAMS = { teil1: [...], teil2: [...] }`
- `node tests/validate.js` checks everything. It must print `OK` before content is finished.

## Exercise helpers (data/items-*.js)

```js
T("07");                                   // switch to topic id "07"; ids continue automatically
mc(level, prompt, options, answerIndex, explain);
fill(level, promptWith___, answerOrArray, explain);
order(level, correctSentence, explain, altSentences?);
wrong(level, sentenceWithOneWrongWord, wrongWord, correction, explain, note?);
extra(level, sentenceWithOneExtraWord, extraWord, explain);
```

Levels: `1` Basics (recognise the right form: mostly mc and easy fill), `2` Solid (produce the form:
fill with a hint in brackets, order of short sentences, mc with trickier distractors), `3` Exam
(order of longer sentences, wrong-word and extra-word spotting, fill without hints).

Rules the validator enforces:
- `fill` prompt must contain `___`. Put the infinitive or a hint in brackets at the end for level 1–2:
  `"Am Wochenende ___ ich meine Eltern. (besuchen)"`. The answer is compared case-insensitively, without
  trailing punctuation, and with ß→ss / ä→ae etc., so give alternatives only for real variants:
  `["ins", "in das"]`.
- `order`: the sentence is split on spaces into tiles. Use 4–9 words. Keep punctuation attached to the
  last word (`"Heute muss ich länger arbeiten."`). `alt` lists other correct orders that use exactly the
  same words (capitalisation may differ).
- `wrong`: `wrongWord` must occur exactly once in the sentence (punctuation is stripped when matching),
  and `correction` must differ from it. The sentence must become correct when the word is replaced.
- `extra`: `extraWord` occurs exactly once; removing it gives a correct sentence.
- `mc`: 3 options (sometimes 4), no duplicates, exactly one correct, `answerIndex` is 0-based. Vary which
  index is correct.
- Every item needs an `explain` string.

## Style

- Prompts, sentences and options are in German. `explain` is in **English**, one or two short sentences,
  stating the rule that decides the answer. Gloss a new or less common German word in the explain when it
  helps: `"die Rechnung = the bill"`.
- Keep the grammar strictly at the level: A1 items use only A1 structures and vocabulary, A2 items may
  use A1+A2, B1 items may use everything up to B1. Do not sneak in structures from a higher level.
- Vocabulary must vary. Spread each topic's items across everyday themes: family, home, food and
  shopping, work and job search, school and courses, health and the doctor, travel and transport,
  free time and sport, weather and seasons, city and directions, appointments and phone calls, money and
  banking, media and technology, holidays and celebrations. Do not reuse the same noun or verb in
  more than two items of a topic. Use realistic names from different backgrounds (Lena, Murat, Anna,
  Omar, Sofia, Jonas, Aylin, Pavel, Hana, Tom...).
- Each topic should include at least two pairs of "same pattern, different words" items, so the learner
  meets the rule again with new vocabulary.
- Avoid sentences that are grammatically correct in more than one reading. Every distractor must be
  clearly wrong for the sentence as written.
- Use real German typography: ä ö ü ß, „ “ or plain quotes, and an en dash only inside explains.

## Grammar pages (data/topics.js)

- `intuition`: 2–4 sentences that give the learner a mental picture of the rule (why it works this way,
  what a native speaker expects), in English.
- `rule`: 3–5 bullet strings, each one concrete rule with a German mini-example.
- `examples`: 4 items `{de, en}` – natural sentences with everyday vocabulary from different themes.
- `trap`: the typical learner mistake with ✗ and ✓ versions.
- `table` (optional but recommended for forms): `{head:[...], rows:[[...], ...]}`, every row has the same
  length as `head`.

## Mock exam (data/exam.js)

`teil1`: an array of texts. Each `{ title, text, gaps }` where `text` contains `[1]` … `[10]` (the gap
markers replace exactly one word each) and `gaps` has 10 entries `{ options:[3 strings], answer:index,
topic:"id", explain }`. The text is a personal or semi-formal letter/e-mail of 120–180 words, with a
greeting and a sign-off, separated by `\n\n`.

`teil2`: an array of texts. Each `{ title, text, bank, answers, topics, explain }`: `text` has `[1]` …
`[10]`, `bank` has 15 unique words (10 answers + 5 distractors that look plausible), `answers` lists the
10 solutions in gap order (each exactly as in the bank, used once), `topics` and `explain` have one entry
per gap. Answers are single words. For A1/A2 the text may be a short dialogue or notice; for B1 a short
informative text or circular.

Every gap must test grammar (an article, ending, verb form, preposition, conjunction, pronoun, word
position) at the trainer's level and be linked to the matching topic id.
