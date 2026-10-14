// Level-specific settings. The same app code serves the A1, A2 and B1 trainers.
window.CONFIG = {
  level: "B1",
  topics: 27,
  storageKey: "b1trainer.v1",
  hero: "Grammatik für die B1-Prüfung",
  examIntro: "Modelled on the telc Deutsch B1 <em>Sprachbausteine</em>: a letter with 10 gaps (a/b/c), a text with 10 gaps from a 15-word bank, then 20 shuffled grammar questions from the bank. No feedback until you finish, as in the real exam.",
  examTiming: "telc allows 90 minutes for reading plus Sprachbausteine together; about 25–30 minutes for the two Sprachbausteine parts is realistic.",
  teil1Note: "In telc this part is worth 15 points.",
  pointsNote: "Each gap counts 1.5 points, as in telc Sprachbausteine.",
  passPct: 60,
  siblings: [
    { level: "A1", url: "https://yusser96.github.io/a1-grammatik-trainer/" },
    { level: "A2", url: "https://yusser96.github.io/a2-grammatik-trainer/" },
    { level: "B1", url: "https://yusser96.github.io/b1-grammatik-trainer/" }
  ]
};
