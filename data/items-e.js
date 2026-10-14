// Topics 10–18, set 2: same patterns, new vocabulary
window.addItems(({ T, mc, fill, order, wrong, extra }) => {

T("10"); // haben · sein · werden
mc(1, "Wenn ich einen Garten ___, würde ich Tomaten pflanzen.", ["hatte", "hätte", "habe"], 1, "Unreal condition → hätte (Konjunktiv II of haben). pflanzen = to plant.");
mc(1, "Letztes Jahr ___ wir in Italien.", ["wären", "sind", "waren"], 2, "Real past → waren (Präteritum of sein).");
mc(1, "Die Rechnung ___ gerade bezahlt.", ["wird", "wurde", "würde"], 0, "Happening right now → present passive: wird. die Rechnung = the bill.");
fill(1, "Der Brief ___ letzte Woche geschickt. (passive, past)", "wurde", "Past passive → wurde.");
fill(1, "Die Wohnung ist schon vermietet ___.", "worden", "Passive Perfekt: ist … worden. vermieten = to rent out.");
fill(2, "Ohne dich ___ ich jetzt ganz allein. (sein, Konj. II)", "wäre", "Unreal: wäre.");
fill(2, "Wir ___ damals kein Internet. (haben, Präteritum)", "hatten", "Real past, wir → hatten. damals = back then.");
fill(2, "Meine Eltern ___ nächste Woche umziehen. (werden)", "werden", "Futur I: werden + infinitive. umziehen = to move house.");
mc(2, "Ich ___ jetzt gern am Strand.", ["war", "wäre", "bin gewesen"], 1, "A wish about now → wäre.");
mc(2, "Das Paket ___ gestern geliefert.", ["würde", "worden", "wurde"], 2, "Past passive: wurde + participle.");
wrong(3, "Wenn das Wetter besser war, würden wir wandern gehen.", "war", "wäre", "Both halves of an unreal condition are Konjunktiv II → wäre.");
wrong(3, "Der Termin würde auf Montag verschoben.", "würde", "wurde", "A real past event: wurde verschoben (passive Präteritum). verschieben = to postpone.", "(it really happened)");
extra(3, "Das Fenster wurde am Dienstag geputzt worden.", "worden", "Either wurde geputzt (Präteritum) or ist geputzt worden (Perfekt), never both. putzen = to clean.");
order(3, "Die Brücke ist im Sommer renoviert worden.", "Passive Perfekt: ist + participle + worden. die Brücke = the bridge.", ["Im Sommer ist die Brücke renoviert worden."]);
fill(3, "Wenn ich nicht so viel Arbeit ___, käme ich zum Fest.", "hätte", "Unreal condition → hätte.");

T("11"); // Konjunktiv II
mc(1, "Ich ___ gern ein Glas Wasser. (polite)", ["habe", "hatte", "hätte"], 2, "Polite wish: Ich hätte gern …");
mc(1, "___ Sie bitte das Fenster schließen?", ["Könnt", "Könnten", "Konnten"], 1, "Polite request: Könnten Sie …?");
mc(1, "Ich ___ gern in einer größeren Stadt wohnen.", ["würde", "wurde", "werde"], 0, "A wish → würde + infinitive.");
fill(1, "Wenn ich ein Fahrrad ___, würde ich zur Arbeit radeln. (haben)", "hätte", "Unreal condition: hätte. radeln = to cycle.");
fill(1, "Ihr ___ weniger Zucker essen. (sollen, advice)", "solltet", "Advice: ihr solltet.");
fill(2, "Wenn das Ticket billiger wäre, ___ ich nach Wien fliegen.", "würde", "Main clause of an unreal condition: würde + infinitive.");
fill(2, "Wenn ich schwimmen ___, würde ich mit euch an den See fahren. (können)", "könnte", "können → könnte.");
order(2, "An deiner Stelle würde ich den Chef fragen.", "Advice with würde; infinitive at the end.", ["Ich würde an deiner Stelle den Chef fragen."]);
mc(2, "Rewrite politely: Geben Sie mir die Speisekarte!", ["Gaben Sie mir die Speisekarte?", "Geben Sie mir bitte die Speisekarte!", "Könnten Sie mir die Speisekarte geben?"], 2, "Könnten = could (polite). die Speisekarte = the menu.");
fill(2, "Es ___ toll, wenn ihr uns besuchen würdet. (sein)", "wäre", "Es wäre toll …");
order(3, "Wenn ich du wäre, würde ich den Arzt anrufen.", "wäre in the wenn-clause, würde in the main clause.");
order(3, "Wenn es wärmer wäre, würden wir grillen.", "wäre … würden: both parts unreal. grillen = to have a barbecue.");
wrong(3, "Wenn ich ein Auto hatte, würde ich dich abholen.", "hatte", "hätte", "Unreal condition → hätte. abholen = to pick up.");
wrong(3, "Ich werde gern öfter ins Theater gehen, aber die Karten sind zu teuer.", "werde", "würde", "An unfulfilled wish → würde, not werde (will).");
extra(3, "Ich hätte würde gern einen Termin am Freitag.", "würde", "Ich hätte gern = polite wish; one Konjunktiv verb is enough.");

T("12"); // Passive
mc(1, "Der Rasen ___ jeden Samstag gemäht.", ["würde", "wird", "hat"], 1, "Present passive: wird + participle. den Rasen mähen = to mow the lawn.");
mc(1, "Man bringt die Post um 10 Uhr. → Die Post ___ um 10 Uhr gebracht.", ["wird", "hat", "ist"], 0, "man-sentence → present passive: wird.");
mc(1, "Die Bibliothek ist letztes Jahr renoviert ___.", ["geworden", "werden", "worden"], 2, "Passive Perfekt → worden.");
fill(1, "Man baute die Brücke 1990. → Die Brücke ___ 1990 gebaut.", "wurde", "Präteritum passive → wurde.");
fill(1, "Die Zimmer ___ morgen geputzt werden.", "werden", "Future passive, plural subject: werden + participle + werden.");
fill(2, "In dieser Bäckerei ___ frische Brötchen gebacken. (werden)", "werden", "Plural subject (Brötchen) → werden.");
fill(2, "Der Vertrag ist gestern unterschrieben ___.", "worden", "ist + unterschrieben + worden. der Vertrag = the contract.");
order(2, "Der Spielplatz wird im Frühling gebaut werden.", "Future passive: wird … gebaut werden.", ["Im Frühling wird der Spielplatz gebaut werden."]);
mc(2, "Man liefert die Möbel am Dienstag. →", ["Die Möbel wird am Dienstag geliefert.", "Die Möbel werden am Dienstag geliefert.", "Die Möbel werden am Dienstag liefern."], 1, "Möbel is plural → werden; participle geliefert.");
fill(2, "Die Heizung muss dringend repariert ___.", "werden", "Modal + participle + werden. die Heizung = the heating.");
order(3, "In der Küche werden die Teller gespült.", "Present passive, plural. spülen = to wash up.", ["Die Teller werden in der Küche gespült."]);
order(3, "Das Büro wurde am Wochenende gestrichen.", "Präteritum passive. streichen = to paint (a wall).", ["Am Wochenende wurde das Büro gestrichen."]);
wrong(3, "Die Rechnung ist schon bezahlt geworden.", "geworden", "worden", "Passive Perfekt uses worden.");
extra(3, "Der Koffer wurde gestern gepackt worden.", "worden", "wurde gepackt is complete; worden only with ist/sind.");
fill(3, "Man hat den Fehler gefunden. → Der Fehler ist gefunden ___.", "worden", "Perfekt passive.");

T("13"); // Cases and articles
mc(1, "Wir suchen ___ Schlüssel. (der Schlüssel)", ["der", "den", "dem"], 1, "suchen + Akkusativ: den Schlüssel.");
mc(1, "Das Geschenk gefällt ___ Kind.", ["dem", "das", "den"], 0, "gefallen + Dativ: dem Kind.");
mc(1, "___ Ärztin spricht mit dem Patienten.", ["Der", "Die", "Den"], 1, "Subject → Nominativ: die Ärztin.");
fill(1, "Er kommt aus ___ Schweiz. (die Schweiz)", "der", "aus + Dativ: der Schweiz.");
fill(1, "Ich schenke ___ Lehrerin Blumen. (die Lehrerin)", "der", "The receiver is Dativ: der Lehrerin.");
fill(2, "Wir treffen ___ Nachbarn im Hof. (plural, Akkusativ)", "die", "Akkusativ plural = die. der Hof = the courtyard.");
fill(2, "Das ist die Tasche ___ Mädchens. (das Mädchen)", "des", "Genitiv neuter: des Mädchens.");
fill(2, "Ich antworte ___ Kunden. (der Kunde)", "dem", "antworten + Dativ.");
mc(2, "Sie wohnt seit ___ Jahr in Hamburg.", ["ein", "einen", "einem"], 2, "seit + Dativ: einem Jahr.");
mc(2, "Der Kuchen ist für ___ Großmutter.", ["meiner", "meine", "meinem"], 1, "für + Akkusativ: meine Großmutter.");
wrong(3, "Wir brauchen der Drucker für das Büro.", "der", "den", "Direct object → Akkusativ: den Drucker. der Drucker = the printer.");
wrong(3, "Ich danke den Verkäuferin für die Hilfe.", "den", "der", "danken + Dativ feminine: der Verkäuferin.");
order(3, "Ich zeige meiner Schwester die Fotos.", "Dativ (person) before Akkusativ (thing).", ["Die Fotos zeige ich meiner Schwester."]);
fill(3, "Trotz ___ Verspätung sind wir pünktlich angekommen. (die Verspätung)", "der", "trotz + Genitiv feminine: der Verspätung. die Verspätung = the delay.");
extra(3, "Die Jacke gehört den dem Mann.", "den", "gehören + Dativ: dem Mann; only one article.");

T("14"); // Two-way prepositions
mc(1, "Die Katze schläft unter ___ Bett.", ["das", "dem", "den"], 1, "schlafen = wo? → Dativ: unter dem Bett.");
mc(1, "Ich stelle den Stuhl neben ___ Fenster.", ["dem", "der", "das"], 2, "stellen = wohin? → Akkusativ: neben das Fenster.");
mc(1, "Der Spiegel hängt ___ Waschbecken.", ["über das", "über dem", "über den"], 1, "hängt (location) → Dativ: über dem Waschbecken. das Waschbecken = the sink.");
fill(1, "Die Kinder sitzen auf ___ Sofa. (das Sofa)", "dem", "sitzen = wo? → Dativ.");
fill(1, "Die Kinder setzen sich auf ___ Sofa. (das Sofa)", "das", "sich setzen = wohin? → Akkusativ.");
fill(2, "Er legt den Schlüssel in ___ Schublade. (die Schublade)", "die", "legen = wohin? → die. die Schublade = the drawer.");
fill(2, "Das Auto parkt vor ___ Garage. (die Garage)", "der", "parken = wo? → Dativ: der Garage.");
mc(2, "Sie geht ___ Bäckerei.", ["in die", "in der", "ins"], 0, "gehen = wohin? → Akkusativ: in die Bäckerei (ins = in das, neuter).");
fill(2, "Wir treffen uns ___ Bahnhof. (an dem)", "am", "an dem = am.");
order(2, "Ich stelle die Vase auf das Regal.", "Destination → auf das Regal.", ["Auf das Regal stelle ich die Vase."]);
wrong(3, "Er hängt die Jacke an dem Haken.", "dem", "den", "hängen (put) = wohin? → an den Haken. der Haken = the hook.");
wrong(3, "Der Hund liegt unter den Tisch.", "den", "dem", "liegen = wo? → unter dem Tisch.");
order(3, "Die Fahrräder stehen hinter dem Haus.", "Location → Dativ: hinter dem Haus.", ["Hinter dem Haus stehen die Fahrräder."]);
fill(3, "Sie fährt am Wochenende in ___ Berge.", "die", "fahren in = wohin? → Akkusativ plural: in die Berge.");
extra(3, "Die Milch steht im in dem Kühlschrank.", "im", "Use either im or in dem, not both.");

T("15"); // Verbs with prepositions
mc(1, "Sie wartet ___ eine Antwort.", ["für", "auf", "an"], 1, "warten auf + Akk.");
mc(1, "Er interessiert sich ___ Fußball.", ["an", "auf", "für"], 2, "sich interessieren für + Akk.");
mc(1, "Wir nehmen ___ der Besprechung teil.", ["bei", "an", "auf"], 1, "teilnehmen an + Dat. die Besprechung = the meeting.");
fill(1, "Ich träume ___ einer Weltreise.", "von", "träumen von + Dat. die Weltreise = trip around the world.");
fill(1, "Sie fragt ___ dem Weg.", "nach", "fragen nach + Dat.");
fill(2, "Erinnerst du dich ___ unseren Lehrer?", "an", "sich erinnern an + Akk.");
fill(2, "Ich spreche ___ meiner Nachbarin über den Lärm.", "mit", "sprechen mit + Dat. der Lärm = the noise.");
fill(2, "Wir freuen uns ___ die Ferien. (look forward to)", "auf", "sich freuen auf = look forward to (future).");
mc(2, "Das hängt ___ Preis ab.", ["am", "von den", "vom"], 2, "abhängen von + Dat: von dem = vom.");
fill(2, "Sie denkt oft ___ ihre Heimat.", "an", "denken an + Akk. die Heimat = home country.");
wrong(3, "Er interessiert sich an Geschichte.", "an", "für", "sich interessieren für.");
wrong(3, "Wir warten seit einer Stunde für den Arzt.", "für", "auf", "warten auf + Akk.");
order(3, "Wir kümmern uns um den Garten.", "sich kümmern um + Akk. sich kümmern um = to take care of.", ["Um den Garten kümmern wir uns."]);
fill(3, "Kannst du mir ___ dem Umzug helfen?", "bei", "helfen bei + Dat. der Umzug = the move.");
extra(3, "Sie bittet ihn um nach Rat.", "nach", "bitten um + Akk. der Rat = advice.");

T("16"); // Reflexive verbs
mc(1, "Ich ärgere ___ über den Stau.", ["mir", "mich", "sich"], 1, "ich → mich. sich ärgern über = to be annoyed about; der Stau = traffic jam.");
mc(1, "Du musst ___ beeilen!", ["dich", "dir", "sich"], 0, "du → dich.");
mc(1, "Sie zieht ___ warm an.", ["ihr", "sie", "sich"], 2, "sie → sich. sich anziehen = to get dressed.");
fill(1, "Wir erholen ___ am Meer.", "uns", "wir → uns. sich erholen = to relax, recover.");
fill(1, "Ihr freut ___ auf die Party.", "euch", "ihr → euch.");
fill(2, "Die Kinder waschen ___ vor dem Essen.", "sich", "sie (plural) → sich.");
fill(2, "Ich putze ___ die Zähne. (Dativ)", "mir", "With another object (die Zähne) the reflexive is Dativ: mir.");
order(2, "Wir treffen uns vor dem Kino.", "Reflexive pronoun right after the verb.", ["Vor dem Kino treffen wir uns."]);
mc(2, "Rewrite non-reflexive with ‘den Hund’: Sie kämmt sich. →", ["Sie kämmt sich den Hund.", "Sie kämmt den Hund.", "Sie kämmt ihr den Hund."], 1, "The object replaces the reflexive pronoun. kämmen = to comb.");
fill(2, "Er bewirbt ___ um ein Praktikum.", "sich", "er → sich. das Praktikum = internship.");
wrong(3, "Ich erinnere mir an meine Kindheit.", "mir", "mich", "sich erinnern takes Akkusativ: mich.");
order(3, "Du solltest dich endlich entschuldigen.", "Modal + reflexive pronoun + … + infinitive. sich entschuldigen = to apologise.", ["Endlich solltest du dich entschuldigen."]);
extra(3, "Das Angebot interessiert sich uns.", "sich", "Here the offer interests us: uns is a normal object, no reflexive.");
fill(3, "Correct: Ihr müsst beeilen. → Ihr müsst ___ beeilen.", "euch", "sich beeilen always needs the pronoun; ihr → euch.");
wrong(3, "Wir haben sich gestern verlaufen.", "sich", "uns", "wir → uns. sich verlaufen = to get lost.");

T("17"); // Relative clauses
mc(1, "Das ist die Nachbarin, ___ immer so laut ist.", ["die", "der", "den"], 0, "Subject of the relative clause, feminine → die.");
mc(1, "Das ist der Film, ___ wir gestern gesehen haben.", ["der", "den", "dem"], 1, "We saw it → Akkusativ masculine: den.");
mc(1, "Das ist das Café, ___ ich dir empfohlen habe.", ["dem", "den", "das"], 2, "Neuter Akk → das. empfehlen = to recommend.");
fill(1, "Das ist der Freund, ___ ich das Geld geliehen habe.", "dem", "leihen + Dativ (person) → dem.");
fill(1, "Das Dorf, in ___ sie aufgewachsen ist, liegt im Süden.", "dem", "in + Dativ neuter → dem. aufwachsen = to grow up.");
fill(2, "Das sind die Kollegen, ___ mir geholfen haben.", "die", "Plural subject → die.");
fill(2, "Das ist die Firma, bei ___ mein Vater arbeitet.", "der", "bei + Dativ feminine → der.");
order(2, "Ich habe einen Onkel, der in Kanada lebt.", "Relative pronoun der, verb at the end.");
mc(2, "Join: Das ist die Ärztin. Ich vertraue ihr.", ["Das ist die Ärztin, der ich vertraue.", "Das ist die Ärztin, die ich vertraue.", "Das ist die Ärztin, ihr ich vertraue."], 0, "vertrauen + Dativ feminine → der.");
fill(2, "Der Zug, ___ um acht abfährt, ist schon voll.", "der", "Masculine subject → der.");
order(3, "Das ist das Hotel, in dem wir gewohnt haben.", "in dem … verb at the end.");
order(3, "Die Frau, die dort steht, ist meine Tante.", "Relative clause inside the main clause.");
wrong(3, "Das ist das Fahrrad, der ich gekauft habe.", "der", "das", "das Fahrrad is neuter → das.");
extra(3, "Das ist die Lehrerin, die sie uns Deutsch beibringt.", "sie", "The relative pronoun die is already the subject. beibringen = to teach.");
fill(3, "Das sind die Nachbarn, ___ wir gratuliert haben.", "denen", "gratulieren + Dativ plural → denen.");

T("18"); // Separable and inseparable verbs
mc(1, "aufräumen: Ich räume mein Zimmer ___.", ["auf", "an", "ab"], 0, "The prefix auf- goes to the end. aufräumen = to tidy up.");
mc(1, "Partizip II: erklären →", ["geerklärt", "erklärt", "erkläret"], 1, "Inseparable er- → no ge-.");
mc(1, "Partizip II: bezahlen →", ["bezahlen", "gebezahlt", "bezahlt"], 2, "Inseparable be- → bezahlt.");
fill(1, "Perfekt: mitbringen → Sie hat Kuchen ___.", "mitgebracht", "mit-ge-bracht.");
fill(1, "Perfekt: zurückkommen → Er ist spät ___.", "zurückgekommen", "zurück-ge-kommen.");
fill(2, "zu-infinitive: einladen → Ich habe vor, alle Kollegen ___.", "einzuladen", "zu between prefix and verb.");
fill(2, "Der Kurs ___ nächste Woche an. (anfangen)", "fängt", "er fängt … an (stem change a → ä).");
order(2, "Wir steigen am Hauptbahnhof um.", "Prefix at the end of the main clause. umsteigen = to change trains.", ["Am Hauptbahnhof steigen wir um."]);
mc(2, "…, wenn du heute Abend ___.", ["fern siehst", "siehst fern", "fernsiehst"], 2, "In a sub-clause the verb is whole at the end.");
fill(2, "Ich ___ dir das Problem später. (erklären)", "erkläre", "Inseparable: the verb stays whole.");
order(3, "Ich habe vergessen, die Tür abzuschließen.", "abzuschließen: zu inside the separable verb. abschließen = to lock.");
wrong(3, "Hast du die Rechnung schon gebezahlt?", "gebezahlt", "bezahlt", "be- is inseparable: bezahlt.");
wrong(3, "Wir haben den ganzen Abend getelefoniert.", "getelefoniert", "telefoniert", "-ieren verbs take no ge-.");
extra(3, "Die Kinder sind früh auf aufgestanden.", "auf", "The prefix is already inside aufgestanden.");
fill(3, "Hast du die Jacke schon ___? (anprobieren)", "anprobiert", "Separable prefix, but an -ieren verb: an-probiert without ge-.");
});
