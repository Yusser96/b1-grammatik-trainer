// Topics 19–27
window.addItems(({ T, mc, fill, order, wrong, extra }) => {

T("19"); // Infinitive with zu
mc(1, "Ich lerne Deutsch, ___ in Deutschland zu arbeiten.", ["um", "damit", "für"], 0, "Purpose with the same subject → um … zu.");
mc(1, "Er geht, ohne sich ___ verabschieden.", ["zu", "um", "dass"], 0, "ohne … zu + infinitive.");
mc(1, "Ich spreche langsam, ___ du mich verstehst.", ["damit", "um", "ohne"], 0, "Different subjects (ich / du) → damit.");
fill(1, "Ich versuche, früher ___. (aufstehen)", "aufzustehen", "Separable: auf-zu-stehen.");
fill(1, "Statt zu lernen, ___ er fern. (sehen)", "sieht", "Main clause after the infinitive group: verb first.");
fill(2, "Ich gehe zur Bank, um Geld ___. (abheben)", "abzuheben", "ab-zu-heben.");
fill(2, "Es ist wichtig, pünktlich ___ sein.", "zu", "zu + infinitive at the end.");
order(2, "Ich lerne Deutsch, um in Deutschland zu arbeiten.", "um … zu arbeiten at the end.");
mc(2, "Join with um…zu: Ich gehe zur Bank. Ich möchte Geld abheben.", ["Ich gehe zur Bank, um Geld abzuheben.", "Ich gehe zur Bank, um Geld zu abheben.", "Ich gehe zur Bank, um ich Geld abhebe."], 0, "No subject in the um…zu group; zu goes inside the separable verb.");
fill(2, "Ich habe keine Lust, heute ___ kochen.", "zu", "keine Lust haben + zu.");
order(3, "Er ging, ohne etwas zu sagen.", "ohne … zu sagen.");
order(3, "Ich spreche langsam, damit du mich verstehst.", "damit-clause with verb at the end.");
extra(3, "Ich gehe einkaufen, um ich Essen zu kaufen.", "ich", "um … zu has no subject of its own.");
wrong(3, "Ich lerne Deutsch, damit in Deutschland zu arbeiten.", "damit", "um", "zu + infinitive without subject → um … zu.");
fill(3, "Hast du Zeit, mir ___ helfen?", "zu", "Zeit haben + zu + infinitive.");
mc(3, "Ich lerne viel, ___ die Prüfung zu bestehen.", ["um", "damit", "dass"], 0, "um … zu for purpose with the same subject.");

T("20"); // Adjective endings
mc(1, "ein ___ Mann (nett)", ["netter", "nette", "netten"], 0, "ein shows nothing → adjective takes -er (like der).");
mc(1, "eine ___ Frau (nett)", ["nette", "netter", "nettes"], 0, "Feminine Nominativ → -e.");
mc(1, "ein ___ Kind (nett)", ["nettes", "nette", "netter"], 0, "Neuter after ein → -es.");
fill(1, "Ich sehe einen ___ Mann. (nett)", "netten", "Akkusativ masculine → -en.");
fill(1, "die ___ Wohnung (groß)", "große", "After die (Nom./Akk.) → -e.");
fill(2, "mit einem ___ Kollegen (neu)", "neuen", "Dativ → -en.");
fill(2, "Wir kaufen ein ___ Auto. (gebraucht)", "gebrauchtes", "Neuter Akkusativ after ein → -es.");
fill(2, "Ich spreche mit der ___ Lehrerin. (freundlich)", "freundlichen", "Dativ → -en.");
mc(2, "Das ist ein ___ Projekt. (neu)", ["neues", "neue", "neuer"], 0, "Neuter after ein → -es.");
fill(2, "Ich habe ___ Freunde. (viel)", "viele", "Plural without article → -e.");
wrong(3, "Das ist ein neue Projekt.", "neue", "neues", "Neuter after ein → neues.");
wrong(3, "Ich wohne in einer kleine Wohnung.", "kleine", "kleinen", "in + Dativ → -en.");
fill(3, "Er trägt einen ___ Mantel. (schwarz)", "schwarzen", "Akkusativ masculine → -en.");
fill(3, "Das sind die ___ Nachbarn. (neu)", "neuen", "Plural after die → -en.");
order(3, "Wir haben ein gebrauchtes Auto gekauft.", "ein gebrauchtes Auto (neuter Akk).");

T("21"); // Comparison
mc(1, "groß → comparative", ["größer", "großer", "am größten"], 0, "Umlaut + -er.");
mc(1, "gut → comparative", ["besser", "guter", "am besten"], 0, "Irregular: gut – besser – am besten.");
mc(1, "Berlin ist größer ___ Saarbrücken.", ["als", "wie", "dass"], 0, "Comparative + als.");
fill(1, "Mein Handy ist genauso teuer ___ deins.", "wie", "so/genauso … wie.");
fill(1, "hoch → comparative: ___", "höher", "hoch – höher – am höchsten.");
fill(2, "viel → comparative: ___", "mehr", "viel – mehr – am meisten.");
fill(2, "schnell → superlative: am ___", "schnellsten", "am + -sten.");
fill(2, "Heute ist es am ___. (warm)", "wärmsten", "Umlaut in the superlative: am wärmsten.");
mc(2, "Ich trinke ___ Tee als Kaffee.", ["lieber", "gerner", "mehr gern"], 0, "gern – lieber – am liebsten.");
fill(2, "Das Auto ist nicht so teuer ___ das andere.", "wie", "(nicht) so … wie.");
wrong(3, "Mein Auto ist großer als deins.", "großer", "größer", "groß takes an umlaut: größer.");
wrong(3, "Mein Auto ist größer wie deins.", "wie", "als", "After a comparative use als.");
order(3, "Mein Auto ist größer als das meines Nachbarn.", "‘das’ stands for ‘das Auto’, followed by the genitive.");
fill(3, "Das ist der ___ Tag des Jahres. (lang)", "längste", "der längste (attributive superlative).");
fill(3, "alt → superlative: am ___", "ältesten", "After -t the superlative takes -esten: am ältesten.");

T("22"); // Negation
mc(1, "Ich habe ___ Auto.", ["kein", "nicht", "keine"], 0, "Indefinite noun → kein (neuter).");
mc(1, "Das Auto ist ___ teuer.", ["nicht", "kein", "keine"], 0, "Adjective → nicht.");
fill(1, "Ich habe ___ Zeit.", "keine", "Zeit is feminine → keine.");
fill(1, "Ich komme heute ___.", "nicht", "Whole sentence negated → nicht at the end.");
mc(1, "Das ist ___ meine Tasche.", ["nicht", "kein", "keine"], 0, "Possessive noun → nicht.");
fill(2, "Correct: Ich habe nicht Bruder. → Ich habe ___ Bruder.", "keinen", "Masculine Akkusativ: keinen.");
fill(2, "Negate the noun: Ich trinke Kaffee. → Ich trinke ___ Kaffee.", "keinen", "Kaffee (masc.) → keinen.");
mc(2, "Negate only ‘heute’:", ["Ich arbeite nicht heute, sondern morgen.", "Ich arbeite heute nicht, sondern morgen.", "Ich nicht arbeite heute."], 0, "nicht goes directly before the element it targets.");
fill(2, "Ich habe gestern ___ geschlafen. (not)", "nicht", "nicht before the participle.");
fill(2, "Wir haben ___ Kinder.", "keine", "Plural → keine.");
wrong(3, "Ich habe nicht Bruder.", "nicht", "keinen", "Indefinite noun → kein-.");
wrong(3, "Das Auto ist kein neu.", "kein", "nicht", "Adjectives are negated with nicht.");
order(3, "Ich kaufe nicht das rote, sondern das blaue Hemd.", "nicht … sondern for a contrast.");
extra(3, "Ich habe keine nicht Zeit.", "nicht", "keine already negates: keine Zeit.");
fill(3, "Ich kenne ___ Menschen hier. (no …)", "keine", "Plural noun → keine.");

T("23"); // Time clauses
mc(1, "___ ich ein Kind war, spielte ich viel draußen.", ["Als", "Wenn", "Während"], 0, "One past period → als.");
mc(1, "___ ich früher krank war, blieb ich immer zu Hause. (repeated)", ["Wenn", "Als", "Bis"], 0, "Repeated past (immer) → wenn.");
mc(1, "___ ich arbeite, höre ich Musik.", ["Während", "Nachdem", "Bevor"], 0, "At the same time → während.");
fill(1, "___ ich esse, wasche ich meine Hände. (before)", "Bevor", "bevor = before.");
fill(1, "Ich bleibe hier, ___ du zurückkommst. (until)", "bis", "bis = until.");
fill(2, "___ ich in Deutschland wohne, lerne ich jeden Tag Deutsch. (since)", ["Seit", "Seitdem"], "seit/seitdem + Präsens.");
fill(2, "___ ich gegessen hatte, ging ich spazieren.", "Nachdem", "nachdem + Plusquamperfekt.");
order(2, "Als ich ein Kind war, aß ich viel Zucker.", "als-clause, then verb first in the main clause.");
mc(2, "Correct: Als ich jeden Montag frei hatte, ging ich schwimmen.", ["Wenn ich jeden Montag frei hatte, ging ich schwimmen.", "Als ich jeden Montag frei hatte, ging ich schwimmen.", "Nachdem ich jeden Montag frei hatte, ging ich schwimmen."], 0, "jeden Montag = repeated → wenn.");
fill(2, "Seit zwei Jahren ___ ich Deutsch. (lernen)", "lerne", "seit + Präsens in German.");
order(3, "Seit ich in Deutschland wohne, lerne ich Deutsch.", "seit-clause first.");
order(3, "Bevor ich ins Bett gehe, schließe ich die Tür ab.", "bevor-clause, separable abschließen.");
wrong(3, "Wenn ich letztes Jahr in Berlin war, habe ich viele Museen besucht.", "Wenn", "Als", "A single past event → als.");
wrong(3, "Als ich jeden Montag frei hatte, ging ich schwimmen.", "Als", "Wenn", "Repeated → wenn.");
fill(3, "___ ich die Prüfung bestanden hatte, feierte ich mit Freunden.", "Nachdem", "nachdem + Plusquamperfekt.");

T("24"); // da- and wo- compounds
mc(1, "warten auf etwas → Ich warte ___.", ["darauf", "daran", "davon"], 0, "da + r + auf.");
mc(1, "___ wartest du?", ["Worauf", "Woran", "Wovon"], 0, "wo + r + auf.");
mc(1, "___ sprichst du? (a person)", ["Mit wem", "Womit", "Wovon"], 0, "People: preposition + wem.");
fill(1, "denken an etwas → Ich denke ___.", "daran", "da + r + an.");
fill(1, "sprechen über etwas → Wir sprechen ___.", "darüber", "da + r + über.");
fill(2, "Question: ___ denkst du? (an was)", "Woran", "wo + r + an.");
fill(2, "Question: ___ sprecht ihr? (über was)", "Worüber", "wo + r + über.");
fill(2, "Ich freue mich ___, dass du kommst.", ["darüber", "darauf"], "da-word points forward to the dass-clause.");
mc(2, "Ich interessiere mich für Kunst. → Ich interessiere mich ___.", ["dafür", "darauf", "damit"], 0, "für → dafür (no r: für starts with a consonant).");
fill(2, "___ fährst du zur Arbeit? (mit was)", "Womit", "wo + mit.");
wrong(3, "Womit sprichst du gerade? – Mit meiner Mutter.", "Womit", "Mit wem", "For a person: Mit wem.");
wrong(3, "Ich warte daran, dass du anrufst.", "daran", "darauf", "warten auf → darauf.");
order(3, "Ich freue mich darauf, dich zu sehen.", "darauf + zu-infinitive.");
fill(3, "Erinnerst du dich an den Urlaub? – Ja, ich erinnere mich gut ___.", "daran", "an → daran.");
extra(3, "Worauf wartest du auf?", "auf", "Worauf already contains auf.");

T("25"); // Pronoun order
mc(1, "Ich gebe ___ das Buch. (meine Schwester → pronoun)", ["ihr", "sie", "ihm"], 0, "Dativ feminine pronoun = ihr.");
mc(1, "Ich gebe es ___. (mein Bruder → pronoun)", ["ihm", "ihn", "ihr"], 0, "Dativ masculine = ihm.");
mc(1, "Sie erklärt ___.", ["mir die Aufgabe", "die Aufgabe mir", "mich die Aufgabe"], 0, "Pronoun first, Dativ mir.");
fill(1, "Kannst du ___ bitte die Adresse schicken? (ich, Dat)", "mir", "ich → mir.");
fill(1, "Ich zeige ___ morgen das Foto. (du, Dat)", "dir", "du → dir.");
fill(2, "Ich gebe meinem Bruder das Handy. → Ich gebe ___ meinem Bruder. (das Handy)", "es", "Akkusativ pronoun es comes first.");
order(2, "Ich gebe dem Kind den Ball.", "Dativ noun before Akkusativ noun.");
order(2, "Ich gebe es ihm.", "Two pronouns: Akk before Dat.");
mc(2, "Replace both objects: Ich gebe meinem Bruder das Handy.", ["Ich gebe es ihm.", "Ich gebe ihm es.", "Ich gebe ihn es."], 0, "es ihm, not ihm es.");
fill(2, "Wir schenken ___ ein Buch. (unsere Eltern → pronoun)", "ihnen", "Dativ plural = ihnen.");
order(3, "Kannst du mir bitte die Adresse schicken?", "Modal + Dativ pronoun + … + infinitive.");
wrong(3, "Ich zeige dich morgen das Foto.", "dich", "dir", "The person is Dativ: dir.");
wrong(3, "Sie erklärt mich die Aufgabe.", "mich", "mir", "erklären + Dativ person: mir.");
order(3, "Ich zeige dir morgen das Foto.", "Pronoun before the noun object.", ["Morgen zeige ich dir das Foto."]);
fill(3, "Correct: Ich gebe ihm es. → Ich gebe ___.", "es ihm", "Two pronouns: Akkusativ first.");

T("26"); // Imperative
mc(1, "du: kommen →", ["Komm!", "Kommst!", "Kommen!"], 0, "du-imperative = stem, no pronoun.");
mc(1, "ihr: warten →", ["Wartet!", "Warte!", "Warten Sie!"], 0, "ihr-form without pronoun.");
mc(1, "Sie: unterschreiben →", ["Unterschreiben Sie bitte hier!", "Unterschreibt bitte hier!", "Unterschreib bitte hier!"], 0, "Sie-form keeps the pronoun.");
fill(1, "du: nehmen → ___ den Bus!", "Nimm", "e→i verbs keep the change: Nimm!");
fill(1, "du: lesen → ___ den Text!", "Lies", "lesen → Lies!");
fill(2, "ihr: sein → ___ leise!", "Seid", "sein, ihr → Seid!");
fill(2, "Sie: sein → ___ bitte vorsichtig!", "Seien Sie", "sein, Sie → Seien Sie!");
fill(2, "du: fahren → ___ langsamer!", ["Fahr", "Fahre"], "a→ä verbs lose the umlaut in the imperative: Fahr!");
mc(2, "du: geben →", ["Gib mir das Buch!", "Geb mir das Buch!", "Gibst mir das Buch!"], 0, "geben → Gib!");
fill(2, "du: sprechen → ___ bitte lauter!", "Sprich", "sprechen → Sprich!");
extra(3, "Du komm bitte pünktlich!", "Du", "No pronoun in the du-imperative.");
wrong(3, "Nehm den Bus!", "Nehm", "Nimm", "nehmen → Nimm!");
wrong(3, "Sein Sie bitte vorsichtig!", "Sein", "Seien", "Sie-imperative of sein: Seien Sie!");
order(3, "Warten Sie bitte hier!", "Verb first, then Sie.");
fill(3, "ihr: aufstehen → ___ bitte auf!", "Steht", "ihr-form: Steht … auf!");

T("27"); // N-declension and genitive
mc(1, "Ich sehe den ___. (Student)", ["Studenten", "Student", "Studentes"], 0, "N-declension: den Studenten.");
mc(1, "Ich spreche mit dem ___. (Kollege)", ["Kollegen", "Kollege", "Kolleges"], 0, "Dativ: dem Kollegen.");
mc(1, "Das ist das Auto meines ___. (Bruder)", ["Bruders", "Bruder", "Brudern"], 0, "Genitiv masculine: -s.");
fill(1, "Das Buch des ___. (Student)", "Studenten", "Genitiv: des Studenten.");
fill(1, "Ich kenne den ___. (Mensch)", "Menschen", "Akkusativ: den Menschen.");
fill(2, "die Wohnung / meine Schwester → die Wohnung ___ Schwester", "meiner", "Genitiv feminine: meiner.");
fill(2, "Der Name des ___ ist bekannt. (Kunde)", "Kunden", "N-declension: des Kunden.");
fill(2, "Das ist das Haus ___ Eltern. (meine, Genitiv)", "meiner", "Genitiv plural: meiner Eltern.");
mc(2, "Which Dativ form is right?", ["Ich spreche mit Herrn Müller.", "Ich spreche mit Herr Müller.", "Ich spreche mit Herren Müller."], 0, "Herr → Herrn in Akk./Dat./Gen. singular.");
fill(2, "Das Fahrrad ___ Kindes ist kaputt. (das Kind)", "des", "Genitiv neuter: des Kindes.");
wrong(3, "Ich spreche mit dem Student.", "Student", "Studenten", "N-declension in the Dativ.");
wrong(3, "Das ist das Auto meines Bruder.", "Bruder", "Bruders", "Genitiv masculine adds -s.");
order(3, "Das ist das Auto meines Bruders.", "Genitive after the noun.");
fill(3, "Wegen ___ Wetters bleiben wir zu Hause. (das Wetter)", "des", "wegen + Genitiv: des Wetters.");
fill(3, "Ich warte auf den ___. (Kunde)", "Kunden", "Akkusativ: den Kunden.");
});
