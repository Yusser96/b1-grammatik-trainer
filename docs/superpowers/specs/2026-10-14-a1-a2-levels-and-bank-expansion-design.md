# A1 and A2 trainers, and a larger B1 bank

Date: 2026-10-14. Follows the B1 trainer design (2026-10-14-b1-grammar-trainer-design.md).

## Request

Add more exercises to every B1 topic (same patterns, new vocabulary), and build A1 and A2
versions of the trainer in the same style, each in its own GitHub repository.

## Decisions

- **One code base, three data sets.** The app code (`css/`, `js/`, `index.html`, `tests/`) is
  identical in all three repositories. Level-specific text lives in `data/config.js`
  (`level`, `topics`, `storageKey`, `hero`, exam notes, `passPct`, `siblings`). `js/store.js`,
  `js/app.js`, `js/exam.js` and `tests/validate.js` read it. The Home page links to the other
  levels through `siblings`.
- **Separate repositories** (`a1-grammatik-trainer`, `a2-grammatik-trainer`,
  `b1-grammatik-trainer`), as requested, so each has its own GitHub Pages URL and its own
  progress store. Code fixes are copied across by hand (`cp -r css js index.html tests`).
- **Item ids continue per topic across files.** `addItems` now starts numbering at the count of
  items already present for that topic, so `data/items-d.js` can add `01-16 …` after
  `data/items-a.js` ends at `01-15`. The validator loads every `data/items-*.js`.
- **Topic lists.** A1: 20 topics (sein/haben → gern/es gibt). A2: 24 topics (sentence bracket →
  middle-field word order). Both are documented in each repo's `docs/topic-plan.md`.
- **Mock exam format.** All three use the Sprachbausteine shape the engine supports (10-gap
  letter a/b/c, 10-gap text from a 15-word bank, 20-question grammar mix). telc A2 has
  Sprachbausteine in nearly this form (Teil 2 is a dialogue with 8 gaps there). telc A1 has no
  grammar part, which the A1 exam page says plainly.
- **Content rules** are in `docs/content-guide.md` (copied into every repo): levels, validator
  rules, vocabulary spread, "same pattern, new words" pairs, English explanations.

## Targets

| Level | Topics | Items per topic | Exam texts |
|---|---|---|---|
| A1 | 20 | 24 (8 per level) | 3 + 3 |
| A2 | 24 | 24 (8 per level) | 3 + 3 |
| B1 | 27 | 15 existing + 15 new | 3 + 3 (unchanged) |

## Testing

`node tests/validate.js` and the headless-Chrome smoke test in each repo; phone and desktop
screenshots for A1 and A2 once content is in.
