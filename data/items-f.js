// Topics 19–27, set 2: same patterns, new vocabulary
window.addItems(({ T, mc, fill, order, wrong, extra }) => {

T("19"); // Infinitive with zu
mc(1, "Lena trainiert jeden Tag, ___ fit zu bleiben.", ["damit", "um", "ohne"], 1, "Purpose with the same subject → um … zu (fit bleiben = to stay fit).");
mc(1, "Es ist nicht leicht, eine Wohnung ___ finden.", ["zu", "um", "zum"], 0, "After ‘Es ist + adjective’ the verb takes zu + infinitive.");
mc(1, "Murat kauft ein Ticket, ___ seine Tochter das Konzert besuchen kann.", ["um", "damit", "zu"], 1, "Different subjects (Murat / seine Tochter) → damit.");
fill(1, "Ich habe vergessen, die Tür ___. (abschließen)", "abzuschließen", "Separable verb: ab-zu-schließen (abschließen = to lock).");
fill(1, "Statt im Bett zu bleiben, ___ Omar joggen. (gehen)", "geht", "After the statt … zu group the main clause starts with the verb.");
fill(2, "Sofia fährt zum Markt, um frisches Gemüse ___. (einkaufen)", "einzukaufen", "um … zu with a separable verb: ein-zu-kaufen.");
fill(2, "Vergiss nicht, den Arzt ___ fragen.", "zu", "vergessen + zu + infinitive.");
order(2, "Er verlässt das Haus, ohne zu frühstücken.", "ohne … zu + infinitive at the end (frühstücken = to have breakfast).", ["Ohne zu frühstücken, verlässt er das Haus."]);
mc(2, "Join with um…zu: Anna spart Geld. Sie möchte ein Fahrrad kaufen.", ["Anna spart Geld, damit ein Fahrrad zu kaufen.", "Anna spart Geld, um sie ein Fahrrad kauft.", "Anna spart Geld, um ein Fahrrad zu kaufen."], 2, "Same subject → um … zu; no subject inside the group, infinitive at the end.");
fill(2, "Wir haben vor, im Sommer nach Kroatien ___ fahren.", "zu", "vorhaben + zu + infinitive (vorhaben = to plan).");
order(3, "Jonas übt jeden Tag Gitarre, um besser zu werden.", "um … zu werden at the end (üben = to practise).", ["Um besser zu werden, übt Jonas jeden Tag Gitarre."]);
order(3, "Aylin kocht früher, damit die Gäste pünktlich essen können.", "Different subjects → damit-clause with the verb at the end.", ["Damit die Gäste pünktlich essen können, kocht Aylin früher."]);
extra(3, "Wir machen Urlaub, um dass uns zu erholen.", "dass", "um … zu takes no conjunction (sich erholen = to relax, to recover).");
wrong(3, "Ich schicke dir die Adresse, um du den Weg findest.", "um", "damit", "The clause has its own subject (du) and a conjugated verb → damit, not um … zu.");
fill(3, "Es macht Spaß, mit Freunden Fußball ___ spielen.", "zu", "Spaß machen + zu + infinitive.");

T("20"); // Adjective endings
mc(1, "ein ___ Tag (schön)", ["schöne", "schöner", "schönes"], 1, "Masculine Nominativ after ein → -er (like der).");
mc(1, "eine ___ Idee (gut)", ["gutes", "guter", "gute"], 2, "Feminine Nominativ → -e.");
mc(1, "ein ___ Haus (alt)", ["altes", "alte", "alter"], 0, "Neuter after ein → -es (like das).");
fill(1, "Ich suche einen ___ Job. (neu)", "neuen", "Masculine Akkusativ → -en.");
fill(1, "der ___ Zug (schnell)", "schnelle", "After der (Nominativ) → -e.");
fill(2, "bei einer ___ Firma (groß)", "großen", "Dativ → -en, always.");
fill(2, "Sie trägt ein ___ Kleid. (rot)", "rotes", "Neuter Akkusativ after ein → -es (das Kleid = the dress).");
fill(2, "Wir wohnen in einem ___ Dorf. (klein)", "kleinen", "in + Dativ → -en.");
mc(2, "Das ist eine ___ Nachricht. (wichtig)", ["wichtiges", "wichtige", "wichtigen"], 1, "Feminine after eine → -e.");
fill(2, "Hier gibt es ___ Restaurants. (viel)", "viele", "Plural without article → -e.");
wrong(3, "Ich habe ein interessante Buch gelesen.", "interessante", "interessantes", "Neuter after ein → -es: ein interessantes Buch.");
wrong(3, "Er arbeitet mit einem netter Kollegen.", "netter", "netten", "mit + Dativ → -en.");
extra(3, "Ich kaufe eine die warme Jacke.", "die", "Only one article: eine warme Jacke (feminine Akkusativ → -e).");
fill(3, "Ich mag die ___ Farben. (hell)", "hellen", "Plural after die → -en (hell = light, bright).");
order(3, "Wir haben eine schöne Wohnung gefunden.", "eine schöne Wohnung: feminine Akkusativ → -e.", ["Eine schöne Wohnung haben wir gefunden."]);

T("21"); // Comparison
mc(1, "jung → comparative", ["junger", "jünger", "am jüngsten"], 1, "Umlaut + -er: jünger.");
mc(1, "gern → comparative", ["lieber", "gerner", "am liebsten"], 0, "Irregular: gern – lieber – am liebsten.");
mc(1, "Der Zug ist schneller ___ der Bus.", ["wie", "dass", "als"], 2, "Comparative + als.");
fill(1, "Dein Zimmer ist so groß ___ meins.", "wie", "so … wie for equality.");
fill(1, "nah → comparative: ___", "näher", "nah – näher – am nächsten.");
fill(2, "teuer → comparative: ___", "teurer", "teuer drops the e: teurer.");
fill(2, "billig → superlative: am ___", "billigsten", "am + -sten.");
fill(2, "Im Winter sind die Tage am ___. (kurz)", "kürzesten", "Umlaut and -esten after -z: am kürzesten.");
mc(2, "Ich esse ___ Obst als Süßigkeiten.", ["vieler", "mehr", "am meisten"], 1, "viel – mehr – am meisten (Süßigkeiten = sweets).");
fill(2, "Pavel läuft genauso schnell ___ Murat.", "wie", "(genau)so … wie.");
wrong(3, "Meine Schwester ist alter als ich.", "alter", "älter", "alt takes an umlaut: älter.");
wrong(3, "Dieses Handy ist billiger wie das andere.", "wie", "als", "After a comparative use als, not wie.");
order(3, "Im Sommer ist es hier am heißesten.", "Superlative am heißesten (-esten after -ß).", ["Hier ist es im Sommer am heißesten."]);
fill(3, "Welches ist das ___ Gebäude der Stadt? (hoch)", "höchste", "hoch – höher – das höchste (attributive superlative).");
extra(3, "Mein Vater ist mehr älter als mein Onkel.", "mehr", "The comparative ending -er already means ‘more’; no extra mehr.");

T("22"); // Negation
mc(1, "Ich habe ___ Hunger.", ["nicht", "keinen", "kein"], 1, "Hunger is masculine and has no article → keinen.");
mc(1, "Die Suppe ist ___ heiß.", ["nicht", "keine", "kein"], 0, "Adjective → nicht.");
fill(1, "Wir haben ___ Lust. (no …)", "keine", "Lust is feminine → keine.");
fill(1, "Sofia arbeitet morgen ___.", "nicht", "Whole sentence negated → nicht at the end.");
mc(1, "Das ist ___ Omar, das ist sein Bruder.", ["kein", "keine", "nicht"], 2, "Names are negated with nicht.");
fill(2, "Correct: Ich habe nicht Fahrrad. → Ich habe ___ Fahrrad.", "kein", "Neuter noun → kein.");
fill(2, "Negate the noun: Er isst Fleisch. → Er isst ___ Fleisch.", "kein", "Fleisch (neuter, no article) → kein.");
mc(2, "Negate only ‘mit dem Auto’:", ["Ich fahre nicht mit dem Auto, sondern mit dem Zug.", "Ich fahre mit dem Auto nicht, sondern mit dem Zug.", "Ich nicht fahre mit dem Auto."], 0, "nicht stands directly before the part it negates.");
fill(2, "Ich habe ihn gestern ___ angerufen. (not)", "nicht", "nicht before the participle.");
fill(2, "Hana hat ___ Geschwister.", "keine", "Plural → keine (Geschwister = siblings).");
wrong(3, "Ich habe nicht Geld dabei.", "nicht", "kein", "Indefinite noun without article → kein-.");
wrong(3, "Der Film war keine spannend.", "keine", "nicht", "Adjectives are negated with nicht (spannend = exciting).");
order(3, "Wir fahren nicht heute, sondern am Samstag.", "nicht … sondern for a contrast.", ["Nicht heute, sondern am Samstag fahren wir."]);
extra(3, "Er hat kein keinen Termin beim Zahnarzt.", "kein", "One negative article is enough: keinen Termin (masculine Akkusativ).");
fill(3, "Wir haben ___ Antwort bekommen. (no …)", "keine", "Antwort is feminine → keine.");

T("23"); // Time clauses
mc(1, "___ Aylin 18 war, machte sie den Führerschein.", ["Wenn", "Als", "Bis"], 1, "One single past event → als (der Führerschein = driving licence).");
mc(1, "Immer ___ es schneit, fahren die Busse langsamer.", ["wenn", "als", "nachdem"], 0, "Repeated → wenn.");
mc(1, "___ ich koche, läuft das Radio.", ["Bevor", "Nachdem", "Während"], 2, "At the same time → während.");
fill(1, "___ du gehst, mach bitte das Licht aus. (before)", "Bevor", "bevor = before.");
fill(1, "Wir warten, ___ der Regen aufhört. (until)", "bis", "bis = until.");
fill(2, "___ Murat in Köln arbeitet, fährt er mit der Bahn. (since)", ["Seit", "Seitdem"], "seit/seitdem + Präsens.");
fill(2, "___ wir umgezogen waren, suchten wir eine neue Schule. (after)", "Nachdem", "nachdem + Plusquamperfekt (umziehen = to move house).");
order(2, "Als ich klein war, hatte ich einen Hund.", "als-clause first, then the verb starts the main clause.", ["Ich hatte einen Hund, als ich klein war."]);
mc(2, "Which sentence is correct?", ["Wenn wir letzten Sommer im Urlaub waren, haben wir jeden Tag gegrillt.", "Bis wir letzten Sommer im Urlaub waren, haben wir jeden Tag gegrillt.", "Als wir letzten Sommer im Urlaub waren, haben wir jeden Tag gegrillt."], 2, "letzten Sommer = one single past period → als.");
fill(2, "Seit einem Monat ___ Hana in der Bäckerei. (arbeiten)", "arbeitet", "seit + Präsens in German.");
order(3, "Seitdem er Sport macht, fühlt er sich besser.", "seitdem-clause first, main clause starts with the verb.", ["Er fühlt sich besser, seitdem er Sport macht."]);
order(3, "Bevor wir essen, decken wir den Tisch.", "bevor-clause, then verb first (den Tisch decken = to set the table).", ["Wir decken den Tisch, bevor wir essen."]);
wrong(3, "Als ich früher Zeit hatte, ging ich immer ins Kino.", "Als", "Wenn", "früher + immer = repeated past → wenn.");
wrong(3, "Wenn Lena gestern nach Hause kam, war die Tür offen.", "Wenn", "Als", "gestern = one single past event → als.");
extra(3, "Während als ich auf den Bus warte, lese ich die Nachrichten.", "als", "Only one conjunction: während = while.");

T("24"); // da- and wo- compounds
mc(1, "träumen von etwas → Sie träumt ___.", ["darauf", "davon", "daran"], 1, "da + von (von starts with a consonant, so no r).");
mc(1, "___ kümmerst du dich?", ["Worum", "Womit", "Woran"], 0, "wo + r + um (sich kümmern um = to take care of).");
mc(1, "___ hast du dich gestritten? (a person)", ["Womit", "Worüber", "Mit wem"], 2, "People: preposition + wem (sich streiten mit = to argue with).");
fill(1, "sich vorbereiten auf etwas → Ich bereite mich ___ vor.", "darauf", "da + r + auf.");
fill(1, "nachdenken über etwas → Er denkt ___ nach.", "darüber", "da + r + über.");
fill(2, "Question: ___ hängt das ab? (von was)", "Wovon", "wo + von (abhängen von = to depend on).");
fill(2, "Question: ___ brauchst du Hilfe? (bei was)", "Wobei", "wo + bei.");
fill(2, "Ich bin stolz ___, dass ich die Prüfung bestanden habe.", "darauf", "The da-word points forward to the dass-clause (stolz auf = proud of).");
mc(2, "Er hat mit dem Training angefangen. → Er hat ___ angefangen.", ["daran", "damit", "darauf"], 1, "mit → damit.");
fill(2, "___ hast du gestern gewartet? (a person, warten auf)", "Auf wen", "People: preposition + wen (Akkusativ).");
wrong(3, "Woran denkst du gerade? – An meine Oma.", "Woran", "An wen", "For a person: An wen, not woran.");
wrong(3, "Ich kümmere mich darüber, dass alles pünktlich fertig ist.", "darüber", "darum", "sich kümmern um → darum.");
order(3, "Wir denken darüber nach, ein Haus zu kaufen.", "darüber + zu-infinitive (nachdenken über = to think over).");
fill(3, "Nimmst du an dem Wettbewerb teil? – Ja, ich nehme ___ teil.", "daran", "an → daran (der Wettbewerb = competition).");
extra(3, "Wovon träumst du von?", "von", "Wovon already contains von.");

T("25"); // Pronoun order
mc(1, "Ich schicke ___ die Rechnung. (meine Chefin → pronoun)", ["ihm", "ihr", "sie"], 1, "Dativ feminine pronoun = ihr (die Rechnung = the bill).");
mc(1, "Ich erkläre es ___. (mein Vater → pronoun)", ["ihr", "ihn", "ihm"], 2, "Dativ masculine = ihm.");
mc(1, "Er bringt ___.", ["uns die Pizza", "die Pizza uns", "wir die Pizza"], 0, "Pronoun first, Dativ uns.");
fill(1, "Kannst du ___ das Rezept geben? (ich, Dat)", "mir", "ich → mir (das Rezept = the recipe).");
fill(1, "Ich leihe ___ mein Fahrrad. (du, Dat)", "dir", "du → dir (leihen = to lend).");
fill(2, "Ich schenke meiner Oma die Blumen. → Ich schenke ___ meiner Oma. (die Blumen)", "sie", "The Akkusativ pronoun sie comes before the noun.");
order(2, "Sie zeigt dem Gast das Zimmer.", "Dativ noun before Akkusativ noun.", ["Dem Gast zeigt sie das Zimmer.", "Das Zimmer zeigt sie dem Gast."]);
order(2, "Ich schicke sie dir.", "Two pronouns: Akkusativ (sie) before Dativ (dir).");
mc(2, "Replace both objects: Er erklärt den Kindern die Regel.", ["Er erklärt ihnen sie.", "Er erklärt sie ihnen.", "Er erklärt sie ihm."], 1, "sie (Akk) before ihnen (Dat plural).");
fill(2, "Wir zeigen ___ die Stadt. (die Touristen → pronoun)", "ihnen", "Dativ plural = ihnen.");
order(3, "Kannst du mir bitte den Schlüssel bringen?", "Modal + Dativ pronoun + … + infinitive.");
wrong(3, "Ich leihe dich mein Auto.", "dich", "dir", "The person is Dativ: dir.");
wrong(3, "Sie schenkt ihn ein Buch zum Geburtstag.", "ihn", "ihm", "schenken + Dativ person: ihm.");
extra(3, "Sag mir mich bitte die Wahrheit!", "mich", "Only the Dativ pronoun mir: the person receives the thing (die Wahrheit = the truth).");
fill(3, "Correct: Wir geben ihr ihn. → Wir geben ___.", "ihn ihr", "Two pronouns: Akkusativ (ihn) before Dativ (ihr).");

T("26"); // Imperative
mc(1, "du: schlafen →", ["Schläf gut!", "Schlaf gut!", "Schlafst gut!"], 1, "du-imperative = stem; a→ä verbs keep the plain vowel: Schlaf!");
mc(1, "ihr: aufräumen →", ["Räum auf!", "Räumen Sie auf!", "Räumt auf!"], 2, "ihr-form without pronoun; the prefix goes to the end (aufräumen = to tidy up).");
mc(1, "Sie: anrufen →", ["Rufen Sie mich morgen an!", "Ruft mich morgen an!", "Ruf mich morgen an!"], 0, "Sie-form keeps the pronoun.");
fill(1, "du: essen → ___ mehr Gemüse!", "Iss", "e→i verbs keep the change: Iss!");
fill(1, "du: helfen → ___ mir bitte!", "Hilf", "helfen → Hilf!");
fill(2, "ihr: haben → ___ keine Angst!", "Habt", "haben, ihr → Habt!");
fill(2, "du: sein → ___ nicht so laut!", "Sei", "sein, du → Sei!");
fill(2, "du: laufen → ___ nicht so schnell!", ["Lauf", "Laufe"], "a→ä verbs lose the umlaut in the imperative: Lauf!");
mc(2, "du: vergessen →", ["Vergess nicht!", "Vergiss nicht!", "Vergisst nicht!"], 1, "vergessen → Vergiss!");
fill(2, "du: warten → ___ bitte einen Moment!", "Warte", "A stem ending in -t adds -e: Warte!");
extra(3, "Du trink bitte mehr Wasser!", "Du", "No pronoun in the du-imperative.");
wrong(3, "Werf den Ball nicht ins Wasser!", "Werf", "Wirf", "werfen → Wirf! (e→i)");
wrong(3, "Sind Sie bitte ruhig!", "Sind", "Seien", "Sie-imperative of sein: Seien Sie!");
order(3, "Schreibt mir bitte eine Nachricht!", "ihr-imperative: verb first, no pronoun.");
fill(3, "ihr: mitbringen → ___ bitte Getränke mit!", "Bringt", "ihr-form: Bringt … mit!");

T("27"); // N-declension and genitive
mc(1, "Ich frage den ___. (Polizist)", ["Polizist", "Polizisten", "Polizistes"], 1, "N-declension: den Polizisten.");
mc(1, "Sie hilft dem ___. (Patient)", ["Patient", "Patientes", "Patienten"], 2, "Dativ: dem Patienten.");
mc(1, "Das ist die Tasche meiner ___. (Mutter)", ["Mutters", "Mutter", "Muttern"], 1, "Genitiv feminine: only the article changes (meiner Mutter).");
fill(1, "Der Hund des ___ bellt laut. (Nachbar)", "Nachbarn", "N-declension: des Nachbarn (bellen = to bark).");
fill(1, "Ich kenne den ___ nicht. (Junge)", "Jungen", "Akkusativ: den Jungen.");
fill(2, "das Fahrrad / mein Sohn → das Fahrrad ___ Sohnes", "meines", "Genitiv masculine: meines Sohnes.");
fill(2, "Die Nummer des ___ steht auf der Karte. (Tourist)", "Touristen", "N-declension: des Touristen.");
fill(2, "Das ist die Praxis ___ Ärztin. (eine, Genitiv)", "einer", "Genitiv feminine: einer Ärztin (die Praxis = the doctor’s office).");
mc(2, "Which form is right?", ["Das Büro von Herrn Yilmaz ist im dritten Stock.", "Das Büro von Herr Yilmaz ist im dritten Stock.", "Das Büro von Herren Yilmaz ist im dritten Stock."], 0, "Herr → Herrn after a preposition (Dativ).");
fill(2, "Der Preis ___ Hauses ist gestiegen. (das Haus)", "des", "Genitiv neuter: des Hauses.");
wrong(3, "Ich habe gestern einen Kollege getroffen.", "Kollege", "Kollegen", "N-declension in the Akkusativ: einen Kollegen.");
wrong(3, "Die Wohnung meines Onkel ist sehr groß.", "Onkel", "Onkels", "Genitiv masculine adds -s: meines Onkels.");
order(3, "Der Name des Praktikanten steht auf der Liste.", "Genitive after the noun; N-declension des Praktikanten (der Praktikant = the intern).");
fill(3, "Trotz ___ Regens gehen wir wandern. (der Regen)", "des", "trotz + Genitiv: des Regens.");
extra(3, "Die Jacke von des Jungen liegt hier.", "von", "Either genitive (des Jungen) or von + Dativ (von dem Jungen), never both.");
});
