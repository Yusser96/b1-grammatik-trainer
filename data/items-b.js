// Topics 10–18
window.addItems(({ T, mc, fill, order, wrong, extra }) => {

T("10"); // haben / sein / werden
mc(1, "Wenn ich mehr Geld ___, würde ich reisen.", ["hätte", "hatte", "habe"], 0, "Unreal condition → hätte.");
mc(1, "Gestern ___ ich krank.", ["war", "wäre", "bin"], 0, "Real past → war.");
mc(1, "Das Auto ___ gerade repariert.", ["wird", "würde", "wurde"], 0, "Right now → present passive: wird.");
fill(1, "Das Auto ___ gestern repariert. (passive, past)", "wurde", "Past passive → wurde.");
fill(1, "Das Auto ist repariert ___.", "worden", "Passive Perfekt: ist … worden.");
fill(2, "Ich ___ morgen anrufen. (werden, 1st sg.)", "werde", "ich werde.");
fill(2, "Wenn ich frei ___, käme ich mit. (sein, Konj. II)", "wäre", "Unreal: wäre.");
fill(2, "Er ___ gestern keine Zeit. (haben, Präteritum)", "hatte", "Real past: hatte.");
mc(2, "Ich ___ gern mehr Zeit.", ["hätte", "hatte", "habe gehabt"], 0, "A wish → hätte.");
mc(2, "Die Straße ___ gestern gesperrt.", ["wurde", "würde", "worden"], 0, "Past passive: wurde + participle.");
wrong(3, "Wenn ich mehr Zeit hatte, würde ich mehr reisen.", "hatte", "hätte", "Both halves of an unreal condition are Konjunktiv II.");
wrong(3, "Das Haus würde nächstes Jahr gebaut werden.", "würde", "wird", "A real plan: wird … gebaut werden.", "(a fixed plan)");
extra(3, "Das Auto wurde gestern repariert worden.", "worden", "Either wurde repariert (Präteritum) or ist repariert worden (Perfekt), never both.");
order(3, "Das Auto ist gestern repariert worden.", "Passive Perfekt: ist + participle + worden.", ["Gestern ist das Auto repariert worden."]);
fill(3, "Wenn ich nicht müde ___, käme ich mit.", "wäre", "Unreal condition → wäre.");

T("11"); // Konjunktiv II
mc(1, "Ich ___ gern einen Kaffee. (polite)", ["hätte", "habe", "hatte"], 0, "Polite wish: Ich hätte gern …");
mc(1, "___ Sie mir bitte helfen?", ["Könnten", "Konnten", "Könnt"], 0, "Polite request: Könnten Sie …?");
mc(1, "Ich ___ gern öfter reisen.", ["würde", "werde", "wurde"], 0, "A wish → würde.");
fill(1, "Wenn ich mehr Zeit ___, würde ich Sport machen. (haben)", "hätte", "Unreal condition: hätte.");
fill(1, "Du ___ mehr schlafen. (sollen, advice)", "solltest", "Advice: du solltest.");
fill(2, "Wenn ich reich wäre, ___ ich ein Haus kaufen.", "würde", "Main clause: würde + infinitive.");
fill(2, "Wenn ich besser Deutsch sprechen ___, würde ich mich sicherer fühlen. (können)", "könnte", "können → könnte.");
order(2, "An deiner Stelle würde ich früher schlafen.", "Advice with würde.");
mc(2, "Rewrite politely: Helfen Sie mir!", ["Könnten Sie mir helfen?", "Konnten Sie mir helfen?", "Helfen Sie mir bitte!"], 0, "Könnten = could (polite).");
fill(2, "Es ___ schön, wenn du kommen könntest. (sein)", "wäre", "Es wäre schön …");
order(3, "Wenn ich du wäre, würde ich warten.", "wäre in the wenn-clause, würde in the main clause.");
order(3, "Wenn ich mehr Zeit hätte, würde ich mehr reisen.", "hätte … würde.");
wrong(3, "Wenn ich mehr Geld hatte, würde ich öfter reisen.", "hatte", "hätte", "Unreal condition → hätte.");
wrong(3, "Ich werde gern öfter reisen, aber ich habe keine Zeit.", "werde", "würde", "A wish that cannot be fulfilled → würde.");
extra(3, "Könnten Sie mir bitte würden helfen?", "würden", "könnten already carries the polite meaning; one Konjunktiv verb is enough.");
fill(3, "Wenn ich das ___ hätte, hätte ich dir geholfen. (wissen)", "gewusst", "Unreal past: hätte + participle (gewusst).");

T("12"); // Passive
mc(1, "Die E-Mail ___ gerade geschrieben.", ["wird", "würde", "ist"], 0, "Present passive: wird + participle.");
mc(1, "Man öffnet die Tür. → Die Tür ___ geöffnet.", ["wird", "hat", "ist"], 0, "Present passive → wird.");
mc(1, "Die Straße ist gestern gesperrt ___.", ["worden", "geworden", "werden"], 0, "Passive Perfekt → worden.");
fill(1, "Man reparierte das Auto. → Das Auto ___ repariert.", "wurde", "Präteritum passive → wurde.");
fill(1, "Die Pakete ___ morgen geliefert werden.", "werden", "Future passive: werden + participle + werden.");
fill(2, "Hier ___ Fahrkarten verkauft. (werden)", "werden", "Plural subject → werden.");
fill(2, "Das Essen ist gestern gekocht ___.", "worden", "ist + gekocht + worden.");
order(2, "Das Haus wird nächstes Jahr gebaut werden.", "Future passive.", ["Nächstes Jahr wird das Haus gebaut werden."]);
mc(2, "Man verkauft hier Fahrkarten. →", ["Hier werden Fahrkarten verkauft.", "Hier wird Fahrkarten verkauft.", "Hier werden Fahrkarten verkaufen."], 0, "Fahrkarten is plural → werden; participle verkauft.");
fill(2, "Das Auto muss repariert ___.", "werden", "Modal + participle + werden.");
order(3, "Hier werden Fahrkarten verkauft.", "Present passive, plural.");
order(3, "Die Wohnung wurde letzte Woche renoviert.", "Präteritum passive.", ["Letzte Woche wurde die Wohnung renoviert."]);
wrong(3, "Das Auto ist repariert geworden.", "geworden", "worden", "Passive Perfekt uses worden.");
extra(3, "Das Essen wurde gekocht worden.", "worden", "wurde gekocht is complete. worden only with ist/sind.");
fill(3, "Man hat die Tür geöffnet. → Die Tür ist geöffnet ___.", "worden", "Perfekt passive.");

T("13"); // Cases and articles
mc(1, "Ich sehe ___ Mann.", ["den", "der", "dem"], 0, "sehen + Akkusativ: den Mann.");
mc(1, "Ich helfe ___ Frau.", ["der", "die", "den"], 0, "helfen + Dativ: der Frau.");
mc(1, "___ Lehrer erklärt die Aufgabe.", ["Der", "Den", "Dem"], 0, "Subject → Nominativ: der Lehrer.");
fill(1, "Das Kind spielt mit ___ Ball. (der Ball)", "dem", "mit + Dativ: dem Ball.");
fill(1, "Ich gebe ___ Kind einen Apfel.", "dem", "The receiver is Dativ: dem Kind.");
fill(2, "Wir besuchen ___ Freunde. (plural)", "die", "Akkusativ plural = die.");
fill(2, "Das ist das Auto ___ Mannes.", "des", "Genitiv masculine: des Mannes.");
fill(2, "Ich danke ___ Lehrer. (der Lehrer)", "dem", "danken + Dativ.");
mc(2, "Ich fahre mit ___ Freunden nach Berlin.", ["meinen", "meine", "meinem"], 0, "mit + Dativ plural: meinen Freunden.");
mc(2, "Sie kauft einen Computer für ___ Sohn.", ["ihren", "ihrem", "ihr"], 0, "für + Akkusativ: ihren Sohn.");
wrong(3, "Ich esse der Kuchen.", "der", "den", "Direct object → Akkusativ: den Kuchen.");
wrong(3, "Ich helfe den Frau.", "den", "der", "helfen + Dativ feminine: der Frau.");
order(3, "Ich gebe dem Mann das Buch.", "Dativ (person) before Akkusativ (thing).");
fill(3, "Wegen ___ Regens bleiben wir zu Hause. (der Regen)", "des", "wegen + Genitiv: des Regens.");
extra(3, "Ich helfe dem der Frau.", "dem", "Only one article: der Frau (Dativ feminine).");

T("14"); // Two-way prepositions
mc(1, "Das Handy liegt auf ___ Tisch.", ["dem", "den", "der"], 0, "liegen = wo? → Dativ.");
mc(1, "Ich lege das Handy auf ___ Tisch.", ["den", "dem", "das"], 0, "legen = wohin? → Akkusativ.");
mc(1, "Das Bild hängt ___ Wand.", ["an der", "an die", "am"], 0, "hängt (location) → Dativ: an der Wand.");
fill(1, "Wir sind in ___ Küche.", "der", "sein = wo? → Dativ.");
fill(1, "Wir gehen in ___ Küche.", "die", "gehen = wohin? → Akkusativ.");
fill(2, "Ich stelle die Flasche in ___ Kühlschrank.", "den", "stellen = wohin? → den.");
fill(2, "Die Kinder spielen zwischen ___ Häusern.", "den", "wo? → Dativ plural: den Häusern.");
mc(2, "Er setzt sich ___ Stuhl.", ["auf den", "auf dem", "auf das"], 0, "sich setzen = wohin? → Akkusativ.");
fill(2, "Ich war gestern ___ Kino. (in dem)", "im", "in dem = im.");
order(2, "Ich hänge das Bild an die Wand.", "Destination → an die Wand.");
wrong(3, "Ich stelle das Bild auf dem Tisch.", "dem", "den", "stellen = wohin? → auf den Tisch.");
wrong(3, "Das Buch liegt auf den Tisch.", "den", "dem", "liegen = wo? → auf dem Tisch.");
order(3, "Die Kinder spielen zwischen den Häusern.", "Location → Dativ plural.");
fill(3, "Sie fährt jeden Tag in ___ Stadt. (die Stadt)", "die", "fahren in = wohin? → die Stadt.");
extra(3, "Das Buch liegt auf dem den Tisch.", "den", "wo? → one Dativ article: dem.");

T("15"); // Verbs with prepositions
mc(1, "Ich warte ___ den Bus.", ["auf", "an", "für"], 0, "warten auf + Akk.");
mc(1, "Ich interessiere mich ___ Musik.", ["für", "auf", "an"], 0, "sich interessieren für + Akk.");
mc(1, "Ich nehme ___ einem Kurs teil.", ["an", "auf", "bei"], 0, "teilnehmen an + Dat.");
fill(1, "Ich träume ___ einem Haus.", "von", "träumen von + Dat.");
fill(1, "Ich frage ___ dem Preis.", "nach", "fragen nach + Dat.");
fill(2, "Ich erinnere mich ___ den Urlaub.", "an", "sich erinnern an + Akk.");
fill(2, "Ich spreche ___ meinem Chef.", "mit", "sprechen mit + Dat.");
fill(2, "Ich freue mich ___ das Wochenende. (look forward to)", "auf", "sich freuen auf = look forward to (future).");
mc(2, "Das hängt ___ Wetter ab.", ["vom", "am", "von das"], 0, "abhängen von + Dat: von dem = vom.");
fill(2, "Ich denke ___ meine Familie.", "an", "denken an + Akk.");
wrong(3, "Ich interessiere mich auf Technik.", "auf", "für", "sich interessieren für.");
wrong(3, "Ich warte an den Bus.", "an", "auf", "warten auf.");
order(3, "Ich bereite mich auf die Prüfung vor.", "sich vorbereiten auf + Akk; prefix vor at the end.");
fill(3, "Er hilft mir ___ der Arbeit.", "bei", "helfen bei + Dat.");
extra(3, "Ich bitte um für Hilfe.", "für", "bitten um + Akk.");
fill(3, "Sie bewirbt sich ___ eine Stelle.", "um", "sich bewerben um + Akk.");

T("16"); // Reflexive verbs
mc(1, "Ich freue ___ auf das Wochenende.", ["mich", "mir", "sich"], 0, "ich → mich.");
mc(1, "Ich interessiere ___ für Kunst.", ["mich", "mir", "sich"], 0, "sich interessieren is Akkusativ-reflexive: mich.");
mc(1, "Er wäscht ___ jeden Morgen.", ["sich", "ihn", "ihm"], 0, "er → sich.");
fill(1, "Du erinnerst ___ an den Termin.", "dich", "du → dich.");
fill(1, "Wir treffen ___ um acht Uhr.", "uns", "wir → uns (each other).");
fill(2, "Ihr müsst ___ beeilen.", "euch", "ihr → euch.");
fill(2, "Ich wasche ___ die Hände. (Dativ)", "mir", "With another object the reflexive is Dativ: mir.");
order(2, "Ich interessiere mich für das Auto.", "Reflexive pronoun right after the verb.");
mc(2, "Rewrite non-reflexive with ‘das Auto’: Ich wasche mich. →", ["Ich wasche das Auto.", "Ich wasche mich das Auto.", "Ich wasche mir das Auto."], 0, "The object replaces the reflexive pronoun.");
fill(2, "Sie kümmert ___ um die Kinder.", "sich", "sie → sich.");
wrong(3, "Ich interessiere mir für Kunst.", "mir", "mich", "sich interessieren takes Akkusativ: mich.");
order(3, "Ihr müsst euch jetzt beeilen.", "Modal + reflexive pronoun + … + infinitive.");
extra(3, "Das Auto interessiert sich mich.", "sich", "Here the car interests me: mich is the object, no reflexive.");
fill(3, "Correct: Ich interessiere für das Auto. → Ich interessiere ___ für das Auto.", "mich", "sich interessieren für always needs the pronoun.");
wrong(3, "Wir treffen sich um acht Uhr.", "sich", "uns", "wir → uns.");

T("17"); // Relative clauses
mc(1, "Das ist der Mann, ___ hier arbeitet.", ["der", "den", "dem"], 0, "Subject of the relative clause → der.");
mc(1, "Das ist der Mann, ___ ich gestern gesehen habe.", ["den", "der", "dem"], 0, "I saw him → Akkusativ den.");
mc(1, "Das ist das Buch, ___ ich gekauft habe.", ["das", "den", "dem"], 0, "Neuter Akk → das.");
fill(1, "Das ist die Frau, ___ ich geholfen habe.", "der", "helfen + Dativ feminine → der.");
fill(1, "Die Stadt, in ___ ich wohne, ist klein.", "der", "in + Dativ feminine → der.");
fill(2, "Das sind die Kinder, ___ im Park spielen.", "die", "Plural subject → die.");
fill(2, "Das ist der Kollege, mit ___ ich arbeite.", "dem", "mit + Dativ masc → dem.");
order(2, "Ich kenne eine Frau, die fünf Sprachen spricht.", "Relative pronoun die, verb at the end.");
mc(2, "Join: Das ist der Kollege. Ich arbeite mit ihm.", ["Das ist der Kollege, mit dem ich arbeite.", "Das ist der Kollege, mit den ich arbeite.", "Das ist der Kollege, den ich mit arbeite."], 0, "Preposition + relative pronoun in Dativ.");
fill(2, "Das Buch, ___ auf dem Tisch liegt, gehört mir.", "das", "Neuter subject → das.");
order(3, "Das ist der Kollege, mit dem ich arbeite.", "mit dem … verb at the end.");
order(3, "Der Mann, den ich sehe, ist mein Nachbar.", "Relative clause inside the main clause.");
wrong(3, "Das ist der Mann, das den Kuchen gegessen hat.", "das", "der", "der Mann is masculine and the subject → der.");
wrong(3, "Die Frau, mit die ich spreche, ist meine Chefin.", "die", "der", "mit + Dativ feminine → der.");
fill(3, "Das sind die Leute, ___ ich geholfen habe.", "denen", "Dativ plural relative pronoun = denen.");
extra(3, "Das ist der Mann, der er hier arbeitet.", "er", "The relative pronoun der is already the subject.");

T("18"); // Separable and inseparable verbs
mc(1, "anrufen: Ich rufe dich später ___.", ["an", "auf", "ab"], 0, "The prefix an- goes to the end.");
mc(1, "Partizip II: besuchen →", ["besucht", "gebesucht", "besuchen"], 0, "Inseparable be- → no ge-.");
mc(1, "Partizip II: verstehen →", ["verstanden", "geverstanden", "verstehen"], 0, "Inseparable ver- → verstanden.");
fill(1, "Perfekt: anrufen → Ich habe dich ___.", "angerufen", "an-ge-rufen.");
fill(1, "Perfekt: einkaufen → Wir haben ___.", "eingekauft", "ein-ge-kauft.");
fill(2, "zu-infinitive: aufstehen → früh ___", "aufzustehen", "zu between prefix and verb.");
fill(2, "Wir ___ heute im Supermarkt ein. (einkaufen)", "kaufen", "wir kaufen … ein.");
order(2, "Ich rufe dich morgen an.", "Prefix at the end of the main clause.", ["Morgen rufe ich dich an."]);
mc(2, "…, weil ich dich morgen ___.", ["anrufe", "rufe an", "an rufe"], 0, "In a sub-clause the verb is whole at the end.");
fill(2, "Der Zug ___ um 9 Uhr ab. (abfahren)", "fährt", "er fährt … ab.");
order(3, "Ich versuche, dich morgen anzurufen.", "anzurufen: zu inside the separable verb.");
wrong(3, "Ich habe meine Freundin gebesucht.", "gebesucht", "besucht", "be- is inseparable: besucht.");
wrong(3, "Ich habe gestern gestudiert.", "gestudiert", "studiert", "-ieren verbs take no ge-.");
extra(3, "Ich habe dich an angerufen.", "an", "The prefix is already inside angerufen.");
fill(3, "Er hat den Text nicht ___. (verstehen)", "verstanden", "Inseparable → verstanden.");
});
