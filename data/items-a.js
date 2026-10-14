// Topics 01–09
window.addItems(({ T, mc, fill, order, wrong, extra }) => {

T("01"); // Main-clause word order
mc(1, "Morgen ___ nach Köln.", ["fahre ich", "ich fahre", "ich fahren"], 0, "After a fronted time word the verb stays in position 2 and the subject follows it.");
mc(1, "Which sentence is correct?", ["Heute ich arbeite länger.", "Heute arbeite ich länger.", "Heute länger ich arbeite."], 1, "‘Heute’ takes position 1, so the verb must come next: Heute arbeite ich.");
mc(1, "Nach der Arbeit ___ ich meistens direkt nach Hause.", ["fahre", "fahren", "fährt"], 0, "Subject ‘ich’ → fahre. The verb is in position 2 after the fronted phrase.");
fill(1, "Nach der Arbeit ___ ich meistens direkt nach Hause. (fahren)", "fahre", "ich fahre; position 2 after ‘Nach der Arbeit’.");
fill(1, "Am Wochenende ___ ich meine Eltern. (besuchen)", "besuche", "ich besuche; verb in position 2.");
order(2, "Heute muss ich länger arbeiten.", "Time word first, modal in position 2, infinitive at the end.", ["Ich muss heute länger arbeiten."]);
order(2, "Morgen fahren wir mit dem Bus zur Arbeit.", "Morgen (1) – fahren (2) – wir – manner – place.", ["Wir fahren morgen mit dem Bus zur Arbeit."]);
fill(2, "Start with ‘Am Wochenende’: Ich besuche meine Eltern am Wochenende. → Am Wochenende ___ meine Eltern.", "besuche ich", "Inversion: verb, then subject.");
fill(2, "Correct the order: Danach ich gehe einkaufen. → Danach ___ einkaufen.", "gehe ich", "‘Danach’ is in position 1, so the verb follows immediately.");
mc(2, "In Berlin ___ mit dem Fahrrad.", ["fahren viele Menschen", "viele Menschen fahren", "viele Menschen fährt"], 0, "Place phrase first → verb second → subject.");
order(3, "Heute bleibt er wegen des Regens zu Hause.", "TeKaMoLo: time (heute) – cause (wegen des Regens) – place (zu Hause).", ["Er bleibt heute wegen des Regens zu Hause."]);
order(3, "Ich fahre morgen wegen des Termins mit dem Zug nach Berlin.", "Te (morgen) – Ka (wegen des Termins) – Mo (mit dem Zug) – Lo (nach Berlin).", ["Morgen fahre ich wegen des Termins mit dem Zug nach Berlin."]);
wrong(3, "Nach der Arbeit fahrt ich meistens direkt nach Hause.", "fahrt", "fahre", "ich → fahre. ‘fahrt’ is the ihr-form.");
extra(3, "Ich muss heute länger zu arbeiten.", "zu", "After a modal verb the infinitive stands alone, without zu.");
fill(3, "Start with ‘In Berlin’: Viele Menschen fahren mit dem Fahrrad in Berlin. → In Berlin ___ mit dem Fahrrad.", "fahren viele Menschen", "Verb in position 2, then the subject.");

T("02"); // Subordinate clauses
mc(1, "Ich bleibe zu Hause, weil ich müde ___.", ["bin", "ist", "sein"], 0, "weil-clause: subject ‘ich’ + conjugated verb at the end → bin.");
mc(1, "Ich glaube, dass der Kurs nützlich ___.", ["ist", "sein", "sind"], 0, "dass-clause: ‘der Kurs’ → ist, at the end.");
mc(1, "Which sentence is correct?", ["Obwohl es regnet, ich gehe spazieren.", "Obwohl es regnet, gehe ich spazieren.", "Obwohl regnet es, gehe ich spazieren."], 1, "Sub-clause first = position 1, so the main clause starts with its verb: gehe ich.");
fill(1, "Wenn ich genug Geld ___, kaufe ich ein Fahrrad. (haben)", "habe", "wenn-clause, ‘ich’ → habe at the end.");
fill(1, "Sie sagt, dass sie heute keine Zeit ___. (haben)", "hat", "‘sie’ (she) → hat, at the end of the dass-clause.");
order(2, "weil ich morgen arbeiten muss", "weil + subject + … + modal at the very end.");
order(2, "Ich glaube, dass der Kurs nützlich ist.", "dass-clause: verb at the end.");
fill(2, "Obwohl es windig ___, laufe ich heute. (sein)", "ist", "A clause with an adjective needs sein: windig ist.");
mc(2, "Ich nehme den Bus, ___ mein Auto kaputt ist.", ["weil", "denn", "deshalb"], 0, "Verb at the end → it must be weil (denn keeps normal order).");
fill(2, "Join with obwohl: Er ist krank. Er geht zur Arbeit. → Obwohl er krank ___, geht er zur Arbeit.", "ist", "obwohl sends ‘ist’ to the end of its clause.");
order(3, "Obwohl er krank ist, geht er zur Arbeit.", "Sub-clause first, then the main clause begins with the verb.", ["Er geht zur Arbeit, obwohl er krank ist."]);
order(3, "Weil mein Auto kaputt ist, nehme ich den Bus.", "Weil-clause in position 1 → ‘nehme ich’.", ["Ich nehme den Bus, weil mein Auto kaputt ist."]);
wrong(3, "Ich bleibe zu Hause, weil ich müde ist.", "ist", "bin", "The subject of the weil-clause is ich → bin.");
extra(3, "Ich bleibe zu Hause, weil denn ich krank bin.", "denn", "One conjunction only. weil → verb at the end; denn would keep normal order.");
fill(3, "Put the weil-clause first: Ich nehme den Bus, weil mein Auto kaputt ist. → Weil mein Auto kaputt ist, ___ den Bus.", "nehme ich", "Main clause after a fronted sub-clause starts with the verb.");

T("03"); // Connectors
mc(1, "Ich trinke keinen Kaffee, ___ Tee.", ["sondern", "aber", "denn"], 0, "After a negation, sondern corrects it: not X but Y.");
mc(1, "Ich bleibe zu Hause, ___ ich bin krank.", ["denn", "weil", "deshalb"], 0, "Normal word order (ich bin) → denn, not weil.");
mc(1, "Möchtest du Tee ___ Kaffee?", ["oder", "und", "aber"], 0, "A choice → oder.");
fill(1, "Erst esse ich. ___ mache ich meine Hausaufgaben. (then)", "Dann", "Dann takes position 1, verb follows.");
fill(1, "Ich bin müde. ___ gehe ich früh ins Bett. (that is why)", ["Deshalb", "Deswegen", "Darum"], "Deshalb / deswegen = that is why; verb follows immediately.");
fill(2, "Es regnet. ___ machen wir einen Spaziergang. (nevertheless)", "Trotzdem", "Trotzdem = nevertheless, position 1 → verb next.");
mc(2, "Deswegen ___ später.", ["komme ich", "ich komme", "komme"], 0, "Deswegen is in position 1 → inversion: komme ich.");
order(2, "Sie hat wenig Zeit, aber sie hilft mir.", "aber is in position 0; both clauses keep normal order.");
order(2, "Ich bin müde. Deshalb gehe ich früh ins Bett.", "Deshalb (1) – gehe (2) – ich.");
mc(2, "Ich lerne viel, ___ ich möchte die Prüfung bestehen.", ["denn", "weil", "deshalb"], 0, "‘ich möchte’ keeps main-clause order → denn.");
order(3, "Es regnet. Trotzdem machen wir einen Spaziergang.", "Trotzdem in position 1, verb second.");
wrong(3, "Ich trinke keinen Kaffee, aber Tee.", "aber", "sondern", "After keinen … the correction uses sondern.");
extra(3, "Ich bleibe zu Hause, denn weil ich bin krank.", "weil", "‘ich bin krank’ has normal order, so denn is the right connector; weil is extra.");
fill(3, "Ich bin krank. ___ bleibe ich zu Hause.", ["Deshalb", "Deswegen", "Darum", "Also"], "Consequence connector in position 1.");
mc(3, "Which sentence is correct?", ["Es regnet, trotzdem ich gehe spazieren.", "Es regnet, trotzdem gehe ich spazieren.", "Es regnet, trotzdem gehe spazieren ich."], 1, "trotzdem counts as position 1 → verb next, then subject.");

T("04"); // Indirect questions
mc(1, "Weißt du, ___ das Geschäft heute geöffnet ist?", ["ob", "dass", "wann"], 0, "A yes/no question becomes an ob-clause.");
mc(1, "Ich frage mich, ___ das stimmt.", ["ob", "dass", "wenn"], 0, "Is it true? → ob.");
mc(1, "Kannst du mir sagen, ___ Anna wohnt?", ["wo", "ob", "dass"], 0, "The question word stays: wo.");
fill(1, "Können Sie mir sagen, wie viel das Ticket ___? (kosten)", "kostet", "Verb at the end of the indirect question.");
fill(1, "Sie fragt, warum du so spät ___. (sein)", "bist", "‘du’ → bist, at the end.");
fill(2, "Kommt der Bus pünktlich? → Ich weiß nicht, ___ der Bus pünktlich kommt.", "ob", "Yes/no → ob.");
order(2, "Ich weiß nicht, ob der Bus pünktlich kommt.", "ob + subject + … + verb at the end.");
order(2, "Kannst du mir sagen, wo Anna wohnt?", "wo + subject + verb at the end.");
mc(2, "Ich weiß nicht, ___.", ["wann er kommt", "wann kommt er", "ob wann er kommt"], 0, "Keep the W-word, verb at the end, no ob.");
fill(2, "Hat er Zeit? → Ich möchte wissen, ob er Zeit ___.", "hat", "Verb at the end.");
order(3, "Ich möchte wissen, ob er Zeit hat.", "ob-clause with verb at the end.");
order(3, "Können Sie mir sagen, wo der Bahnhof ist?", "Polite indirect question.");
wrong(3, "Ich frage mich, dass das stimmt.", "dass", "ob", "An embedded yes/no question needs ob, not dass.");
extra(3, "Ich weiß nicht, ob wann er kommt.", "ob", "Never ob + W-word. ‘wann er kommt’ is enough.");
fill(3, "Wo wohnt Anna? → Kannst du mir sagen, wo Anna ___?", "wohnt", "Verb moves to the end.");

T("05"); // Präsens
mc(1, "Er ___ morgen nach Hamburg.", ["fährt", "fahrt", "fahre"], 0, "fahren has a→ä in du/er: er fährt.");
mc(1, "Du ___ sehr gut Deutsch.", ["sprichst", "sprechst", "spricht"], 0, "sprechen: e→i in du/er: du sprichst.");
mc(1, "Das Geschäft ___ um 18 Uhr.", ["schließt", "schließen", "schließe"], 0, "das Geschäft = es → schließt.");
fill(1, "Ich ___ jeden Tag Deutsch. (lernen)", "lerne", "ich → -e.");
fill(1, "Wir ___ um acht Uhr an. (anfangen)", "fangen", "Separable: wir fangen … an.");
fill(2, "Er ___ jeden Abend ein Buch. (lesen)", "liest", "lesen: e→ie: er liest.");
fill(2, "___ du heute Zeit? (haben)", "Hast", "du hast.");
order(2, "Nächstes Jahr ziehen wir nach Köln um.", "Präsens for a planned future; separable prefix um at the end.", ["Wir ziehen nächstes Jahr nach Köln um."]);
mc(2, "Rewrite in Präsens: Ich werde morgen meine Mutter besuchen.", ["Ich besuche morgen meine Mutter.", "Ich besuchte morgen meine Mutter.", "Ich habe morgen meine Mutter besucht."], 0, "Präsens + morgen expresses the future.");
fill(2, "Sie ___ jeden Morgen um sechs Uhr auf. (aufstehen)", "steht", "sie steht … auf.");
order(3, "Morgen fliege ich nach Spanien.", "Präsens with a time word is the normal future.", ["Ich fliege morgen nach Spanien."]);
wrong(3, "Er fahrt morgen nach Hamburg.", "fahrt", "fährt", "Stem change in er-form: fährt.");
wrong(3, "Du arbeitst heute zu Hause.", "arbeitst", "arbeitest", "Stems in -t add -e-: du arbeitest.");
extra(3, "Jeden Montag gehe ich schwimmen gehen.", "gehen", "gehen + infinitive: ‘gehe ich schwimmen’. The second gehen is extra.");
fill(3, "Nimmst du den Bus? → Ja, ich ___ den Bus. (nehmen)", "nehme", "ich nehme (no stem change in ich).");

T("06"); // Perfekt
mc(1, "Sie ___ schnell eingeschlafen.", ["ist", "hat", "war"], 0, "einschlafen = change of state → sein.");
mc(1, "Partizip II of anrufen:", ["angerufen", "angeruft", "geanruft"], 0, "Separable + irregular: an-ge-rufen.");
mc(1, "Ich ___ gestern lange gearbeitet.", ["habe", "bin", "hatte"], 0, "arbeiten takes haben.");
fill(1, "Wir ___ nach Berlin gefahren.", "sind", "fahren (movement A→B) → sein.");
fill(1, "Er hat das Fenster ___. (öffnen)", "geöffnet", "Regular: ge- + öffn + -et.");
fill(2, "Partizip II: einkaufen → ___", "eingekauft", "Separable: ein-ge-kauft.");
fill(2, "Wir sind gestern im Kino ___. (sein)", "gewesen", "sein → ist gewesen.");
order(2, "Wir haben einen Film gesehen.", "haben in position 2, participle at the end.");
mc(2, "Ich ___ meine Hausaufgaben gemacht.", ["habe", "bin", "werde"], 0, "machen → haben.");
fill(2, "Sie ___ um sieben Uhr aufgestanden. (sein)", "ist", "aufstehen → sein.");
order(3, "Ich habe dich gestern angerufen.", "Participle at the end.", ["Gestern habe ich dich angerufen."]);
order(3, "Wir sind am Wochenende nach Berlin gefahren.", "sein + gefahren.", ["Am Wochenende sind wir nach Berlin gefahren."]);
wrong(3, "Ich bin meine Hausaufgaben gemacht.", "bin", "habe", "machen takes haben: Ich habe … gemacht.");
wrong(3, "Ich habe dich gestern angeruft.", "angeruft", "angerufen", "rufen is irregular: gerufen → angerufen.");
extra(3, "Wir sind nach Berlin gefahren worden.", "worden", "This is active Perfekt: sind … gefahren. worden belongs only to the passive.");
fill(3, "Ich habe einen Arzttermin ___. (vereinbaren)", "vereinbart", "Inseparable ver- → no ge-: vereinbart.");

T("07"); // Präteritum
mc(1, "Ich ___ gestern müde.", ["war", "hatte", "wäre"], 0, "sein → war.");
mc(1, "Wir ___ wenig Zeit.", ["hatten", "hatte", "waren"], 0, "haben, wir → hatten.");
mc(1, "Er ___ nicht kommen.", ["konnte", "kannte", "konntet"], 0, "können → konnte (kannte is from kennen).");
fill(1, "sein, ich → Ich ___ krank.", "war", "ich war.");
fill(1, "müssen, ich → Ich ___ gestern arbeiten.", "musste", "ich musste + infinitive.");
fill(2, "Sie ___ ein neues Handy kaufen. (wollen, Präteritum)", "wollte", "sie wollte.");
fill(2, "Ihr ___ gestern nicht kommen. (dürfen, Präteritum)", "durftet", "ihr durftet.");
order(2, "Ich musste gestern lange arbeiten.", "Modal in position 2, infinitive at the end.", ["Gestern musste ich lange arbeiten."]);
mc(2, "Rewrite in Präteritum: Wir haben wenig Zeit.", ["Wir hatten wenig Zeit.", "Wir hätten wenig Zeit.", "Wir haben wenig Zeit gehabt."], 0, "hatten = real past; hätten = unreal; haben gehabt = Perfekt.");
fill(2, "Als Kind ___ ich viel draußen. (spielen)", "spielte", "Regular Präteritum: spiel + te.");
order(3, "Als ich ein Kind war, spielte ich viel draußen.", "als-clause first, then verb.");
wrong(3, "Ich musste gestern gearbeitet.", "gearbeitet", "arbeiten", "After a modal: infinitive, not participle.");
wrong(3, "Er konnte gestern nicht kommt.", "kommt", "kommen", "Modal + infinitive at the end.");
extra(3, "Ich musste gestern lange zu arbeiten.", "zu", "No zu after modal verbs.");
fill(3, "Er ___ gestern keine Zeit. (haben, Präteritum)", "hatte", "er hatte.");

T("08"); // Plusquamperfekt
mc(1, "Als ich ankam, ___ der Film schon angefangen.", ["hatte", "war", "hat"], 0, "anfangen takes haben → hatte angefangen.");
mc(1, "Nachdem er nach Hause gekommen ___, schlief er sofort ein.", ["war", "hatte", "ist"], 0, "kommen → sein → war gekommen.");
mc(1, "Bevor ich zur Arbeit ging, ___ ich gefrühstückt.", ["hatte", "habe", "war"], 0, "Earlier event → hatte gefrühstückt.");
fill(1, "Wir ___ das Hotel schon gebucht, bevor wir die Tickets kauften.", "hatten", "wir hatten gebucht.");
fill(1, "Nachdem sie die Prüfung bestanden ___, feierte sie.", "hatte", "bestehen → haben → hatte.");
fill(2, "Nachdem wir gegessen ___, gingen wir spazieren.", "hatten", "wir hatten gegessen.");
fill(2, "Sie ___ schon eingeschlafen, als ich anrief. (sein)", "war", "einschlafen → sein → war.");
order(2, "Ich hatte gegessen, bevor ich rausging.", "hatte + participle.");
mc(2, "Which sentence marks the earlier event correctly?", ["Ich hatte gegessen, bevor er kam.", "Ich habe gegessen, bevor er gekommen hatte.", "Ich esse, bevor er gekommen war."], 0, "The earlier action (eating) gets Plusquamperfekt.");
fill(2, "Nachdem er die Wohnung ___ hatte, kaufte er neue Möbel. (mieten)", "gemietet", "Participle + hatte.");
order(3, "Nachdem sie angekommen war, rief sie mich an.", "nachdem + Plusquamperfekt, main clause in Präteritum.");
order(3, "Ich war vorher noch nie in Berlin gewesen.", "sein → war gewesen.");
wrong(3, "Nachdem er gekommen hatte, schlief er ein.", "hatte", "war", "kommen uses sein: war gekommen.");
extra(3, "Als ich ankam, hatte der Film schon angefangen gehabt.", "gehabt", "hatte + angefangen is complete; gehabt is a double past.");
fill(3, "Als wir am Bahnhof ankamen, ___ der Zug schon abgefahren. (sein)", "war", "abfahren → sein → war abgefahren.");

T("09"); // Futur I
mc(1, "Ich ___ morgen länger arbeiten.", ["werde", "würde", "wurde"], 0, "werde = will.");
mc(1, "Wir ___ nächstes Jahr heiraten. (definite plan)", ["werden", "würden", "wurden"], 0, "A real plan → werden (würden = would).");
mc(1, "Er wird nächstes Jahr nach Wien ___.", ["ziehen", "zieht", "gezogen"], 0, "werden + infinitive at the end.");
fill(1, "Das Wetter ___ wahrscheinlich besser werden.", "wird", "es wird … werden.");
fill(1, "Ich ___ dich später anrufen. (werden)", "werde", "ich werde.");
order(2, "Er wird ein Auto kaufen.", "werden second, infinitive last.");
order(2, "Ich werde morgen meine Tante besuchen.", "Infinitive at the end.", ["Morgen werde ich meine Tante besuchen."]);
fill(2, "Ihr ___ die Prüfung bestimmt bestehen. (werden)", "werdet", "ihr werdet.");
mc(2, "Rewrite in Futur I: Morgen besuche ich meine Tante.", ["Ich werde morgen meine Tante besuchen.", "Ich würde morgen meine Tante besuchen.", "Ich habe morgen meine Tante besucht."], 0, "werden + infinitive.");
fill(2, "Du ___ das schaffen! (werden)", "wirst", "du wirst.");
order(3, "Es wird später wahrscheinlich regnen.", "Prediction with werden.", ["Wahrscheinlich wird es später regnen.", "Es wird wahrscheinlich später regnen."]);
wrong(3, "Ich werde nach Hause gegangen.", "gegangen", "gehen", "Futur needs the infinitive, not the participle.");
wrong(3, "Wir würden nächstes Jahr heiraten, das ist sicher.", "würden", "werden", "A certain plan → werden; würde is hypothetical.");
extra(3, "Er wird nächstes Jahr nach Wien zu ziehen.", "zu", "werden + bare infinitive, no zu.");
fill(3, "Translate: I will call you later. → Ich ___ dich später anrufen.", "werde", "ich werde … anrufen.");
});
