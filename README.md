# B1 Grammatik Trainer

A static web app to practise German B1 grammar for the telc Deutsch B1 exam.
Built from the *B1 German Grammar & Exam Workbook*: 27 grammar topics, 815
exercises, five exercise types, three difficulty levels, progress tracking and
a telc-style mock exam (Sprachbausteine Teil 1 + Teil 2 + a grammar mix).

Live: https://yusser96.github.io/b1-grammatik-trainer/

Sister apps: [A1](https://yusser96.github.io/a1-grammatik-trainer/) ·
[A2](https://yusser96.github.io/a2-grammatik-trainer/) ·
[B1](https://yusser96.github.io/b1-grammatik-trainer/)

No build step, no server, no accounts. Progress lives in the browser's local
storage and can be exported/imported as a JSON file.

## Run it locally

Double-click `index.html`, or serve the folder:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Host it on GitHub Pages

1. Create a new repository on GitHub (for example `b1-grammatik-trainer`).
2. In this folder:

   ```sh
   git add .
   git commit -m "B1 grammar trainer"
   git branch -M main
   git remote add origin https://github.com/<your-user>/b1-grammatik-trainer.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch**, branch `main`, folder `/ (root)`. Save.
4. After a minute the site is live at
   `https://<your-user>.github.io/b1-grammatik-trainer/`.

Every later `git push` redeploys automatically.

## Structure

```
index.html          page shell and navigation
css/style.css       design tokens, light/dark themes, layout
js/store.js         progress in localStorage (mastery, streaks, mock history, settings)
js/engine.js        renders and checks the five exercise types
js/exam.js          telc-style mock exam: build, run, score, review
js/app.js           router and the five views (Home, Learn, Practise, Exam, Profile)
data/config.js      level name, storage key, exam notes, links to the other levels
data/topics.js      grammar reference for the 27 topics
data/items*.js      exercise bank (815 items; items-a/b/c set 1, items-d/e/f set 2 with new vocabulary)
data/exam.js        Sprachbausteine texts (3 letters for Teil 1, 3 texts for Teil 2)
docs/content-guide.md  how to write exercises, grammar pages and exam texts
tests/validate.js   data checks: node tests/validate.js
tests/smoke.html    browser smoke test (open it; results appear at the bottom)
```

## Adding exercises

Append to a `data/items-*.js` file (or add a new one; ids continue per topic) using the helpers:

```js
T("15");                       // topic id
mc(1, "Ich warte ___ den Bus.", ["auf", "an", "für"], 0, "warten auf + Akk.");
fill(2, "Ich frage ___ dem Preis.", "nach", "fragen nach + Dat.");
order(3, "Ich bereite mich auf die Prüfung vor.", "explanation", ["alternative order"]);
wrong(3, "Ich warte an den Bus.", "an", "auf", "warten auf.");
extra(3, "Ich bitte um für Hilfe.", "für", "bitten um + Akk.");
```

Then run `node tests/validate.js`. See `docs/content-guide.md` for the full rules.

The app code is shared with the A1 and A2 trainers; only `data/` differs.

## Sources

- Workbook: `B1_German_B1_Workbook.docx` (Goethe-oriented; the exam module here follows telc).
- telc Deutsch B1 Übungstest 1 (Sprachbausteine: 2 × 10 gaps, 1.5 points each, 30 of 300 points):
  https://shop.telc.net/media/catalog/product/file/telc_deutsch_b1_zd_uebungstest_1.pdf
- Sprachbausteine B1 overview and tips: https://levelkraft.de/blog/sprachbausteine-b1-telc-uebungen-loesungen
