# B1 Grammar Trainer (telc-oriented) — design spec

Date: 2026-10-14. Status: approved by assumption (user offline); user may revise.

## Goal
A static, phone-and-desktop web app to practise German B1 grammar for the telc
Deutsch B1 exam, built from `B1_German_B1_Workbook.docx` (27 topics, ~450 items,
10 mixed mocks) and the public telc Sprachbausteine format.

## Hosting constraint
GitHub Pages, zero build: `index.html` + `css/` + `js/` + `data/`. Everything loads
via `<script>` tags (no `fetch`, so it also works from `file://`). No framework.

## Information architecture (5 tabs)
1. **Home** — today's suggestion (weakest topic), streak, quick-start buttons.
2. **Learn** — 27 topic cards → topic sheet: *Intuition*, *Rule*, *Examples*,
   *Common trap*, *Mini table* (where useful), "Practise this topic" button.
3. **Practise** — pick topics (one / several / all), level (1 Basics, 2 Solid,
   3 Exam, or mixed), exercise types (checkboxes), count (10/20/30). One card at
   a time, instant check, feedback panel with: correct answer, why, **Read the
   grammar** (slide-over drawer with the topic sheet), **Similar example**
   (another solved item or example from the same topic), **Next**.
4. **Mock exam** — telc-style, shuffled every time: Sprachbausteine Teil 1 (letter,
   10 gaps, a/b/c), Teil 2 (text, 10 gaps, 15-word bank), Teil 3 "Grammar mix"
   (20 shuffled items from the pool at the chosen level). Timer (default 30 min,
   adjustable). Results page: points (1.5 per Sprachbausteine item like telc),
   per-topic breakdown, review every item with explanation links.
5. **Profile** — per-topic × per-level mastery bars, totals, accuracy, mock
   history, weakest topics, daily streak, export/import JSON, reset.

## Exercise types (data `type`)
- `mc` — multiple choice (3–4 options).
- `fill` — type the blank; tolerant match (case, trailing punctuation, ß/ss,
  umlaut spelled ae/oe/ue), several accepted answers.
- `order` — tap word tiles to build the sentence (tiles shuffled at runtime).
- `wrong` — tap the word that is wrong (one word in wrong form); shows correction.
- `extra` — tap the word that should not be there.
- `cloze-mc` / `cloze-bank` — exam-only cloze texts.

## Levels
Items carry `level` 1–3. Level 1: recognition (mc, simple fill). Level 2: fill with
hint, order of short sentences. Level 3: order of long sentences, wrong/extra,
fill without hint. The user chooses level freely; nothing is locked.

## Data model
```
TOPICS = [{id:"01", title, short, intuition, rule, examples:[], trap, table?:{head:[],rows:[[]]}}]
ITEMS  = [{id, topic:"01", level:1|2|3, type, prompt?, options?, answer, words?, sentence?, index?, hint?, explain}]
EXAMS  = {teil1:[{title, text:"... [1] ...", gaps:[{options:[a,b,c], answer:i, topic, explain}]}],
          teil2:[{title, text, bank:[15 words], answers:[10 words], topics:[]}]}
```
Progress (localStorage key `b1trainer.v1`):
```
{items:{[id]:{a:attempts,c:correct,s:streak,t:lastTs}}, mocks:[{ts,level,score,max,perTopic}],
 days:{"2026-10-14":n}, settings:{theme,fontSize,timer}}
```
Mastery(topic, level) = weighted accuracy over that bucket's items; 0 if unseen.

## Visual design
Warm off-white paper background, ink-dark text, one accent (deep teal), one
success green, one error coral. Large type (18px base on phone), generous
line-height, max reading width 68ch, big tap targets (min 48px). Dark theme via
`prefers-color-scheme` plus manual toggle. Bottom tab bar on phones, left rail
on ≥900px. Reduced motion respected.

## Files
```
index.html  css/style.css
js/store.js (progress)  js/engine.js (render/check items)  js/exam.js  js/app.js (router, views)
data/topics.js  data/items.js  data/exam.js
README.md (deploy steps)  docs/superpowers/specs/...
```

## Testing
- `tests/validate.js` (node): schema check for all data, every `order` answer uses
  exactly its words, every `wrong`/`extra` index in range, every topic has ≥ 3
  items per level, no duplicate ids.
- Manual smoke test in a headless browser: open each tab, answer one item of
  each type, run a mock, confirm progress persists after reload.

## Out of scope (v1)
Listening/reading/writing modules, accounts, spaced repetition scheduling,
German-language UI toggle.
