// telc Deutsch B1 style "Sprachbausteine".
// Teil 1: a letter with 10 gaps, three options each (a/b/c). 1.5 points per gap.
// Teil 2: a text with 10 gaps filled from a bank of 15 words (each used at most once). 1.5 points per gap.
// Gaps are written as [1] … [10] inside the text. `topic` links each gap to a grammar topic.
window.EXAMS = {
  teil1: [
    {
      title: "E-Mail an eine Freundin",
      text: "Liebe Anna,\n\nvielen Dank für deine E-Mail. Ich habe mich sehr [1] gefreut. Du fragst, [2] ich im Sommer Zeit habe. Leider muss ich bis Ende Juli arbeiten, [3] ich im August frei habe. Danach [4] ich gern zu dir kommen. Ich habe gehört, dass es bei euch viele schöne Wanderwege [5]. Wenn das Wetter gut [6], könnten wir eine Tour machen. Ich interessiere mich auch [7] alte Städte. Kannst du mir sagen, [8] lange man von dir aus nach Wien fährt? Ich würde mich freuen, [9] wir zusammen etwas planen. Schreib mir bitte, [10] dir das passt.\n\nLiebe Grüße\nMarta",
      gaps: [
        { options: ["darüber", "darauf", "davon"], answer: 0, topic: "24", explain: "sich freuen über (past/now) → darüber." },
        { options: ["ob", "dass", "wenn"], answer: 0, topic: "04", explain: "Embedded yes/no question → ob." },
        { options: ["bevor", "obwohl", "nachdem"], answer: 0, topic: "23", explain: "bevor = before: work until July, then free in August." },
        { options: ["würde", "werde", "wurde"], answer: 0, topic: "11", explain: "Polite wish → würde … kommen." },
        { options: ["gibt", "geben", "gegeben"], answer: 0, topic: "02", explain: "es gibt, verb at the end of the dass-clause." },
        { options: ["ist", "sein", "wäre"], answer: 0, topic: "02", explain: "Real condition with wenn → Präsens ist." },
        { options: ["für", "auf", "an"], answer: 0, topic: "15", explain: "sich interessieren für." },
        { options: ["wie", "wo", "wann"], answer: 0, topic: "04", explain: "wie lange = how long." },
        { options: ["wenn", "ob", "dass"], answer: 0, topic: "02", explain: "Ich würde mich freuen, wenn … (condition)." },
        { options: ["ob", "dass", "wenn"], answer: 0, topic: "04", explain: "Tell me whether … → ob." }
      ]
    },
    {
      title: "Termin verschieben (formelle E-Mail)",
      text: "Sehr geehrte Frau Berger,\n\nich schreibe Ihnen, [1] ich am Freitag leider nicht zu unserem Termin kommen kann. Mein Sohn ist krank [2], und ich muss ihn zum Arzt bringen. Ich hoffe, [3] Sie dafür Verständnis haben. [4] es Ihnen passt, würde ich den Termin gern auf nächste Woche verschieben. Am Dienstag [5] ich den ganzen Tag Zeit. Könnten Sie mir bitte [6], ob das möglich ist? Die Unterlagen, [7] Sie mir geschickt haben, habe ich bereits [8]. Ich habe noch eine Frage [9] den Kosten. Vielen Dank [10] Ihre Hilfe.\n\nMit freundlichen Grüßen\nOmar Haddad",
      gaps: [
        { options: ["weil", "denn", "deshalb"], answer: 0, topic: "02", explain: "Verb at the end (kommen kann) → weil." },
        { options: ["geworden", "worden", "gewesen"], answer: 0, topic: "10", explain: "krank werden → ist krank geworden." },
        { options: ["dass", "ob", "wenn"], answer: 0, topic: "02", explain: "Ich hoffe, dass …" },
        { options: ["Wenn", "Als", "Ob"], answer: 0, topic: "23", explain: "Condition → wenn." },
        { options: ["hätte", "hatte", "wäre"], answer: 0, topic: "11", explain: "Polite / hypothetical: hätte ich Zeit." },
        { options: ["mitteilen", "mitteilt", "mitgeteilt"], answer: 0, topic: "18", explain: "Könnten + infinitive at the end." },
        { options: ["die", "denen", "der"], answer: 0, topic: "17", explain: "die Unterlagen (plural), object → die." },
        { options: ["ausgefüllt", "ausfüllen", "füllt aus"], answer: 0, topic: "06", explain: "habe … ausgefüllt (Perfekt)." },
        { options: ["zu", "an", "für"], answer: 0, topic: "15", explain: "eine Frage zu + Dativ." },
        { options: ["für", "um", "auf"], answer: 0, topic: "15", explain: "danken für / Vielen Dank für." }
      ]
    },
    {
      title: "Umzug nach Leipzig",
      text: "Hallo Jonas,\n\nseit zwei Wochen [1] ich jetzt in Leipzig. Die Wohnung, [2] ich gefunden habe, liegt direkt im Zentrum. Sie ist zwar [3] als meine alte Wohnung, aber viel heller. Am Anfang [4] ich mich nicht so gut aus, [5] habe ich einen Stadtplan gekauft. Meine Nachbarn sind sehr nett; gestern [6] sie mir beim Tragen der Möbel geholfen. Nächsten Monat [7] ich mit einem Deutschkurs an, [8] ich die B1-Prüfung machen will. Ich weiß noch nicht, [9] ich am Wochenende arbeiten muss. Ich freue mich sehr [10] deinen Besuch!\n\nBis bald\nDiego",
      gaps: [
        { options: ["wohne", "wohnte", "habe gewohnt"], answer: 0, topic: "23", explain: "seit + Präsens." },
        { options: ["die", "der", "das"], answer: 0, topic: "17", explain: "die Wohnung, Akkusativ → die." },
        { options: ["kleiner", "kleinste", "klein"], answer: 0, topic: "21", explain: "Comparative + als." },
        { options: ["kannte", "kenne", "gekannt"], answer: 0, topic: "07", explain: "Am Anfang (past) → kannte … aus." },
        { options: ["deshalb", "weil", "denn"], answer: 0, topic: "03", explain: "deshalb + verb (habe ich)." },
        { options: ["haben", "sind", "hatten"], answer: 0, topic: "06", explain: "helfen → haben geholfen." },
        { options: ["fange", "fängt", "anfange"], answer: 0, topic: "18", explain: "ich fange … an (separable)." },
        { options: ["weil", "denn", "deshalb"], answer: 0, topic: "02", explain: "Verb at the end (machen will) → weil." },
        { options: ["ob", "wenn", "dass"], answer: 0, topic: "04", explain: "I don’t know whether → ob." },
        { options: ["auf", "über", "für"], answer: 0, topic: "15", explain: "sich freuen auf (future visit)." }
      ]
    }
  ],
  teil2: [
    {
      title: "Stadtbibliothek verlängert Öffnungszeiten",
      text: "Die Stadtbibliothek verlängert ab November ihre Öffnungszeiten. Montags [1] freitags ist sie bereits ab 8 Uhr geöffnet, [2] zwei Abenden pro Woche sogar bis 21 Uhr. Damit reagiert die Bibliothek auf die Wünsche [3] Berufstätigen und Studierenden. Neu ist außerdem ein stiller Arbeitsraum, [4] nur für Personen ab 16 Jahren gedacht ist. Die Nutzung bleibt [5]; für die Ausleihe bestimmter Medien ist jedoch [6] ein Ausweis erforderlich. Wer [7] Ausweis hat, kann ihn am Empfang beantragen. [8] Sie dafür bitte ein Dokument mit Foto mit. Die Bibliothek bittet alle Besucher, Handys [9] Lesesaal auf lautlos zu stellen. Weitere Informationen [10] Sie auf der Website.",
      bank: ["bis", "an", "von", "der", "kostenlos", "weiterhin", "keinen", "Bringen", "im", "finden", "nach", "dem", "Bringt", "am", "findet"],
      answers: ["bis", "an", "von", "der", "kostenlos", "weiterhin", "keinen", "Bringen", "im", "finden"],
      topics: ["13", "14", "13", "17", "20", "03", "22", "26", "14", "05"],
      explain: ["montags bis freitags", "an zwei Abenden (Dativ plural)", "die Wünsche von + Dativ", "der Arbeitsraum (masc., subject) → der", "bleibt kostenlos (adjective, no ending)", "weiterhin = still", "keinen Ausweis (masc. Akk.)", "Sie-imperative: Bringen Sie … mit", "im Lesesaal (in dem)", "finden Sie (Sie-form)"]
    },
    {
      title: "Neue Fahrradstation am Hauptbahnhof",
      text: "Die Stadt hat neben dem Hauptbahnhof eine neue Fahrradstation [1]. Dort können 300 Fahrräder sicher abgestellt [2]. Die ersten 30 Minuten sind kostenlos, [3] kostet die Nutzung einen kleinen Betrag. Wer ein Monatsabo besitzt, [4] zusätzlich Schließfächer nutzen. Reparaturen werden nicht angeboten, [5] direkt neben der Station befindet sich eine Werkstatt. Die Station ist rund um die Uhr geöffnet, [6] man eine Chipkarte hat. Diese Karte kann man [7] Automaten kaufen. Viele Pendler freuen sich [8] das neue Angebot, [9] sie bisher oft keinen Platz für ihr Fahrrad gefunden haben. Die Stadt plant, im nächsten Jahr eine [10] Station am Südbahnhof zu bauen.",
      bank: ["eröffnet", "werden", "danach", "kann", "aber", "wenn", "am", "über", "weil", "zweite", "eröffnen", "wurden", "bevor", "muss", "auf"],
      answers: ["eröffnet", "werden", "danach", "kann", "aber", "wenn", "am", "über", "weil", "zweite"],
      topics: ["06", "12", "03", "07", "03", "23", "14", "15", "02", "20"],
      explain: ["hat … eröffnet (Perfekt)", "können … abgestellt werden (passive with modal)", "danach = after that, verb follows", "kann … nutzen", "aber = but (position 0)", "wenn = if", "am Automaten (an dem)", "sich freuen über (something that exists now)", "weil + verb at the end", "eine zweite Station (feminine Akk → -e)"]
    },
    {
      title: "Informationen zum neuen B1-Kurs",
      text: "Liebe Kursteilnehmerinnen und Kursteilnehmer,\n\nab Montag beginnt unser neuer B1-Kurs. Der Unterricht findet dienstags und donnerstags [1] 18:30 bis 20:00 Uhr statt. Bitte [2] Sie pünktlich, damit wir rechtzeitig anfangen können. Das Lehrbuch [3] Sie in der ersten Stunde von uns. Wer [4] Kurs nicht teilnehmen kann, soll sich bitte [5] vorher abmelden. Die Prüfung findet Ende Dezember statt; die Anmeldung [6] bis zum 1. November möglich. In den Unterrichtsräumen darf nicht gegessen [7]; Getränke sind erlaubt. Räume für Gruppenarbeit [8] vorher reserviert werden. Wenn Sie Fragen haben, [9] Sie sich gern an das Sekretariat. Wir freuen uns [10] einen interessanten Kurs mit Ihnen!",
      bank: ["von", "kommen", "bekommen", "am", "telefonisch", "ist", "werden", "müssen", "wenden", "auf", "nach", "kommt", "bekommt", "im", "sind"],
      answers: ["von", "kommen", "bekommen", "am", "telefonisch", "ist", "werden", "müssen", "wenden", "auf"],
      topics: ["14", "26", "05", "15", "01", "05", "12", "12", "26", "15"],
      explain: ["von … bis", "Sie-imperative: kommen Sie", "bekommen Sie (Sie-form)", "teilnehmen an + Dativ: am Kurs", "telefonisch = by phone (manner)", "die Anmeldung ist möglich (singular)", "darf nicht gegessen werden (passive)", "müssen … reserviert werden", "wenden Sie sich an", "sich freuen auf (future)"]
    }
  ]
};
