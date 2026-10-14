// Topics 01–09, set 2: same patterns, new vocabulary
window.addItems(({ T, mc, fill, order, wrong, extra }) => {

T("01"); // Main-clause word order
mc(1, "Am Montag ___ zum Zahnarzt.", ["gehe ich", "ich gehe", "ich gehen"], 0, "After a fronted time phrase the verb stays in position 2 and the subject follows: Am Montag gehe ich. (der Zahnarzt = the dentist)");
mc(1, "Which sentence is correct?", ["Im Sommer wir schwimmen oft im See.", "Im Sommer schwimmen oft wir im See.", "Im Sommer schwimmen wir oft im See."], 2, "‘Im Sommer’ takes position 1, so the verb comes next and the subject right after it. (der See = the lake)");
mc(1, "Seit zwei Jahren ___ Murat in Hamburg.", ["wohnen", "wohnt", "wohnst"], 1, "Subject Murat → wohnt. The verb sits in position 2 after the fronted phrase.");
fill(1, "Jeden Freitag ___ Lena im Supermarkt ein. (einkaufen)", "kauft", "Lena kauft … ein: the conjugated part is in position 2, the separable prefix at the end.");
fill(1, "Nächste Woche ___ wir einen neuen Kühlschrank. (bestellen)", "bestellen", "wir bestellen; verb in position 2 after ‘Nächste Woche’. (der Kühlschrank = the fridge)");
order(2, "Abends sehe ich gern fern.", "Time word first, verb in position 2, separable prefix ‘fern’ at the end.", ["Ich sehe abends gern fern."]);
order(2, "Im Winter fahren wir oft in die Berge.", "Im Winter (1) – fahren (2) – wir – oft – place.", ["Wir fahren im Winter oft in die Berge."]);
fill(2, "Start with ‘Nach dem Kurs’: Aylin trinkt nach dem Kurs einen Kaffee. → Nach dem Kurs ___ einen Kaffee.", "trinkt Aylin", "Inversion: verb first, then the subject.");
fill(2, "Correct the order: Deshalb ich brauche einen neuen Pass. → Deshalb ___ einen neuen Pass.", "brauche ich", "‘Deshalb’ fills position 1, so the verb must follow immediately. (der Pass = the passport)");
mc(2, "Bei schlechtem Wetter ___ zu Hause.", ["die Kinder bleiben", "bleiben die Kinder", "bleibt die Kinder"], 1, "Fronted phrase → verb second → subject. ‘die Kinder’ is plural → bleiben.");
order(3, "Wir fahren morgen wegen der Hochzeit nach Hamburg.", "TeKaMoLo: time (morgen) – cause (wegen der Hochzeit) – place (nach Hamburg). (die Hochzeit = the wedding)", ["Morgen fahren wir wegen der Hochzeit nach Hamburg."]);
order(3, "Er kommt heute wegen des Streiks mit dem Rad.", "Te (heute) – Ka (wegen des Streiks) – Mo (mit dem Rad). (der Streik = the strike)", ["Heute kommt er wegen des Streiks mit dem Rad."]);
wrong(3, "Am Samstag kocht meine Eltern immer zusammen.", "kocht", "kochen", "‘meine Eltern’ is plural → kochen. The verb still sits in position 2 after the time phrase.");
extra(3, "Nach dem Abendessen höre ich oft Musik hören.", "hören", "The conjugated verb ‘höre’ in position 2 is the only verb needed; without a modal there is no infinitive at the end.");
fill(3, "Start with ‘Wegen des Staus’: Jonas kommt wegen des Staus zu spät. → Wegen des Staus ___ zu spät.", "kommt Jonas", "Verb in position 2, then the subject. (der Stau = the traffic jam)");

T("02"); // Subordinate clauses
mc(1, "Ich gehe zum Arzt, weil ich Halsschmerzen ___.", ["hat", "haben", "habe"], 2, "weil-clause: subject ‘ich’ + conjugated verb at the end → habe. (Halsschmerzen = sore throat)");
mc(1, "Er sagt, dass die Wohnung zu teuer ___.", ["sein", "ist", "sind"], 1, "dass-clause: ‘die Wohnung’ → ist, at the end.");
mc(1, "Which sentence is correct?", ["Wenn es schneit, fahren wir nicht.", "Wenn es schneit, wir fahren nicht.", "Wenn schneit es, fahren wir nicht."], 0, "Sub-clause first = position 1, so the main clause starts with its verb: fahren wir.");
fill(1, "Obwohl sie müde ___, hilft sie ihrer Nachbarin. (sein)", "ist", "obwohl-clause: ‘sie’ (she) → ist at the end. (die Nachbarin = the neighbour)");
fill(1, "Wir freuen uns, dass du zur Party ___. (kommen)", "kommst", "‘du’ → kommst, at the end of the dass-clause.");
order(2, "wenn ich die Prüfung bestehe", "wenn + subject + object + verb at the very end. (bestehen = to pass)");
order(2, "Ich hoffe, dass das Wetter besser wird.", "dass-clause: the verb ‘wird’ goes to the end.");
fill(2, "Ich kann nicht kommen, weil ich heute arbeiten ___. (müssen)", "muss", "With a modal, the modal verb goes to the very end of the weil-clause.");
mc(2, "Ich nehme die Jacke nicht, ___ sie mir nicht passt.", ["denn", "deshalb", "weil"], 2, "Verb at the end (passt) → it must be weil; denn would keep normal order. (passen = to fit)");
fill(2, "Join with wenn: Du brauchst Hilfe. Du rufst mich an. → Wenn du Hilfe ___, rufst du mich an.", "brauchst", "wenn sends ‘brauchst’ to the end of its clause.");
order(3, "Obwohl es stark regnete, spielten die Kinder draußen.", "Sub-clause first, then the main clause begins with the verb.", ["Die Kinder spielten draußen, obwohl es stark regnete."]);
order(3, "Weil Omar früh aufstehen muss, geht er schlafen.", "Weil-clause in position 1 → ‘geht er’. Inside the weil-clause the modal is last.", ["Omar geht schlafen, weil er früh aufstehen muss."]);
wrong(3, "Ich glaube, dass der Film um acht Uhr beginnen.", "beginnen", "beginnt", "The subject of the dass-clause is ‘der Film’ → beginnt.");
extra(3, "Ich bleibe im Bett, weil dass ich Fieber habe.", "dass", "One conjunction only: weil gives the reason, dass is extra. (das Fieber = the fever)");
fill(3, "Put the wenn-clause first: Wir grillen im Garten, wenn die Sonne scheint. → Wenn die Sonne scheint, ___ im Garten.", "grillen wir", "Main clause after a fronted sub-clause starts with the verb. (grillen = to barbecue)");

T("03"); // Connectors
mc(1, "Das ist nicht mein Schlüssel, ___ deiner.", ["aber", "sondern", "oder"], 1, "After a negation sondern corrects it: not X but Y. (der Schlüssel = the key)");
mc(1, "Wir nehmen ein Taxi, ___ der letzte Bus ist schon weg.", ["weil", "denn", "deshalb"], 1, "Normal word order (der Bus ist) → denn, not weil.");
mc(1, "Ich habe Hunger, ___ der Kühlschrank ist leer.", ["aber", "sondern", "denn"], 0, "Contrast between two main clauses → aber. (leer = empty)");
fill(1, "Zuerst dusche ich. ___ frühstücke ich. (then)", "Dann", "Dann takes position 1 and the verb follows.");
fill(1, "Es ist glatt. ___ fahre ich langsam. (that is why)", ["Deshalb", "Deswegen", "Darum", "Daher"], "Deshalb / deswegen = that is why; verb follows immediately. (glatt = icy, slippery)");
fill(2, "Der Zug war teuer. ___ haben wir ihn genommen. (nevertheless)", "Trotzdem", "Trotzdem = nevertheless, position 1 → verb next.");
mc(2, "Deshalb ___ einen Termin beim Arzt.", ["ich brauche", "brauche ich", "brauche"], 1, "Deshalb is in position 1 → inversion: brauche ich.");
order(2, "Er ist müde, aber er lernt weiter.", "aber is in position 0; both clauses keep normal order.");
order(2, "Es schneit. Trotzdem fährt Pavel mit dem Rad.", "Trotzdem (1) – fährt (2) – Pavel.");
mc(2, "Sofia spart Geld, ___ sie möchte ein Auto kaufen.", ["weil", "deshalb", "denn"], 2, "‘sie möchte’ keeps main-clause order → denn. (sparen = to save)");
order(3, "Ich habe wenig Zeit. Deswegen koche ich selten.", "Deswegen in position 1, verb second, subject after it.");
wrong(3, "Ich fahre nicht nach Köln, aber nach Bonn.", "aber", "sondern", "After nicht … the correction uses sondern.");
extra(3, "Der Film war langweilig, trotzdem aber sind wir geblieben.", "aber", "One connector is enough: trotzdem (position 1) is followed directly by the verb. aber would need its own clause. (langweilig = boring)");
fill(3, "Das Wetter ist schlecht. ___ gehen wir wandern.", ["Trotzdem", "Dennoch"], "Contrast connector in position 1: the weather is bad, we go hiking anyway.");
mc(3, "Which sentence is correct?", ["Der Bus kommt nicht, deswegen ich nehme ein Taxi.", "Der Bus kommt nicht, deswegen nehme ich ein Taxi.", "Der Bus kommt nicht, deswegen nehme ein Taxi ich."], 1, "deswegen counts as position 1 → verb next, then subject.");

T("04"); // Indirect questions
mc(1, "Weißt du, ___ die Apotheke sonntags geöffnet hat?", ["ob", "dass", "wo"], 0, "A yes/no question becomes an ob-clause. (die Apotheke = the pharmacy)");
mc(1, "Ich frage mich, ___ der Zug schon abgefahren ist.", ["dass", "wenn", "ob"], 2, "Has it left? → ob (whether).");
mc(1, "Können Sie mir sagen, ___ der Kurs beginnt?", ["ob", "wann", "dass"], 1, "The question word stays: wann.");
fill(1, "Weißt du, wie viel die Miete ___? (kosten)", "kostet", "Verb at the end of the indirect question. (die Miete = the rent)");
fill(1, "Er fragt, wo du am Wochenende ___. (sein)", "bist", "‘du’ → bist, at the end.");
fill(2, "Funktioniert der Drucker? → Ich weiß nicht, ___ der Drucker funktioniert.", "ob", "Yes/no → ob. (der Drucker = the printer)");
order(2, "Ich weiß nicht, ob die Bank heute schließt.", "ob + subject + … + verb at the end.");
order(2, "Weißt du, wann der Film anfängt?", "wann + subject + verb at the end; the separable verb stays whole: anfängt.");
mc(2, "Sie möchte wissen, ___.", ["warum du nicht geantwortet hast", "warum hast du nicht geantwortet", "ob warum du nicht geantwortet hast"], 0, "Keep the W-word, verb at the end, no ob.");
fill(2, "Hat Tom das Paket bekommen? → Ich möchte wissen, ob Tom das Paket bekommen ___.", "hat", "Perfekt in a sub-clause: the conjugated ‘hat’ goes to the very end.");
order(3, "Ich möchte wissen, wie lange der Kurs dauert.", "W-phrase (wie lange) + subject + verb at the end. (dauern = to last)");
order(3, "Können Sie mir sagen, wie ich zum Rathaus komme?", "Polite indirect question: verb at the end. (das Rathaus = the town hall)");
wrong(3, "Ich frage mich, wenn Aylin morgen mitkommt.", "wenn", "ob", "An embedded yes/no question needs ob; wenn means if/whenever.");
extra(3, "Weißt du, ob wo Omar jetzt arbeitet?", "ob", "Never ob + W-word. ‘wo Omar arbeitet’ is enough.");
fill(3, "Wie heißt die Straße? → Weißt du, wie die Straße ___?", "heißt", "Verb moves to the end.");

T("05"); // Präsens
mc(1, "Sie ___ am Wochenende immer sehr lange.", ["schläft", "schlaft", "schlafe"], 0, "schlafen has a→ä in du/er/sie: sie schläft.");
mc(1, "___ du gern Fisch?", ["Esst", "Isst", "Esse"], 1, "essen: e→i in du/er: du isst.");
mc(1, "Der Bus ___ um 7:15 Uhr ab.", ["fahrt", "fährt", "fahren"], 1, "der Bus = er → fährt; separable: fährt … ab.");
fill(1, "Ihr ___ heute im Garten. (arbeiten)", "arbeitet", "ihr → -et after a stem in -t: arbeitet.");
fill(1, "Wir ___ am Samstag unsere Freunde ein. (einladen)", "laden", "Separable: wir laden … ein.");
fill(2, "Er ___ immer den Bus um acht. (nehmen)", "nimmt", "nehmen: e→i and double m in du/er: er nimmt.");
fill(2, "___ ihr am Sonntag Zeit? (haben)", "Habt", "ihr habt.");
order(2, "Im Juli fliegen wir nach Griechenland.", "Präsens + time word expresses a planned future.", ["Wir fliegen im Juli nach Griechenland."]);
mc(2, "Rewrite in Präsens: Wir werden am Freitag umziehen.", ["Wir sind am Freitag umgezogen.", "Wir ziehen am Freitag um.", "Wir zogen am Freitag um."], 1, "Präsens + time word for a fixed plan; the separable prefix goes to the end.");
fill(2, "Wann ___ der Unterricht an? (anfangen)", "fängt", "anfangen: a→ä in the er-form: fängt … an. (der Unterricht = the lesson)");
order(3, "Nächsten Monat beginnt Hana einen neuen Job.", "Präsens with a time phrase is the normal future; verb in position 2.", ["Hana beginnt nächsten Monat einen neuen Job."]);
wrong(3, "Lena lest jeden Abend die Nachrichten.", "lest", "liest", "lesen: e→ie in du/er/sie: liest. (die Nachrichten = the news)");
wrong(3, "Du findst den Weg bestimmt allein.", "findst", "findest", "Stems in -d add -e-: du findest.");
extra(3, "Sie wird arbeitet seit März in einer Bäckerei.", "wird", "A current state uses plain Präsens: Sie arbeitet seit März … (die Bäckerei = the bakery)");
fill(3, "Siehst du den Fehler? → Ja, ich ___ ihn.", "sehe", "ich sehe (no stem change in the ich-form).");

T("06"); // Perfekt
mc(1, "Wir ___ gestern lange gewandert.", ["sind", "haben", "ist"], 0, "wandern = movement → sein; wir → sind.");
mc(1, "Partizip II of verstehen:", ["geverstanden", "verstanden", "verstehet"], 1, "Inseparable ver- → no ge-: verstanden.");
mc(1, "Ich ___ den ganzen Tag ferngesehen.", ["bin", "habe", "wird"], 1, "fernsehen takes haben.");
fill(1, "Sie ___ letzte Woche nach München geflogen.", "ist", "fliegen (movement A→B) → sein.");
fill(1, "Er hat die Rechnung ___. (bezahlen)", "bezahlt", "Inseparable be- → no ge-: bezahlt. (die Rechnung = the bill)");
fill(2, "Partizip II: aufräumen → ___", "aufgeräumt", "Separable: auf-ge-räumt. (aufräumen = to tidy up)");
fill(2, "Wir ___ lange im Stau gestanden. (haben)", "haben", "stehen → hat gestanden (no movement from A to B). (der Stau = the traffic jam)");
order(2, "Sie hat ein Kleid gekauft.", "haben in position 2, participle at the end.");
mc(2, "Murat ___ um zehn Uhr nach Hause gekommen.", ["hat", "ist", "wird"], 1, "kommen → sein.");
fill(2, "Ich ___ heute sehr früh aufgewacht. (sein)", "bin", "aufwachen = change of state → sein. (aufwachen = to wake up)");
order(3, "Ich habe gestern meine Oma besucht.", "Participle at the end; inseparable be- → besucht.", ["Gestern habe ich meine Oma besucht."]);
order(3, "Wir sind im Sommer nach Italien geflogen.", "sein + geflogen.", ["Im Sommer sind wir nach Italien geflogen."]);
wrong(3, "Omar ist gestern lange telefoniert.", "ist", "hat", "telefonieren takes haben: Er hat … telefoniert.");
wrong(3, "Sie hat mir einen Brief geschreibt.", "geschreibt", "geschrieben", "schreiben is irregular: geschrieben.");
extra(3, "Sie hat heute früh ist aufgestanden.", "hat", "aufstehen takes sein: Sie ist … aufgestanden. Only one helper verb.");

T("07"); // Präteritum
mc(1, "Gestern ___ das Wetter schön.", ["hatte", "war", "wäre"], 1, "sein → war.");
mc(1, "Ihr ___ gestern keine Lust.", ["hattet", "hatten", "wart"], 0, "haben, ihr → hattet.");
mc(1, "Sie ___ als Kind nicht schwimmen.", ["kannte", "konnte", "könnte"], 1, "können → konnte (kannte = knew, könnte = could, unreal).");
fill(1, "haben, wir → Wir ___ viel Glück.", "hatten", "wir hatten. (das Glück = luck)");
fill(1, "wollen, er → Er ___ Arzt werden.", "wollte", "er wollte + infinitive.");
fill(2, "Du ___ gestern früher gehen. (dürfen, Präteritum)", "durftest", "du durftest.");
fill(2, "Wir ___ den Termin verschieben. (müssen, Präteritum)", "mussten", "wir mussten. (verschieben = to postpone)");
order(2, "Sie konnte gestern nicht schlafen.", "Modal in position 2, infinitive at the end.", ["Gestern konnte sie nicht schlafen."]);
mc(2, "Rewrite in Präteritum: Ich bin sehr nervös.", ["Ich wäre sehr nervös.", "Ich bin sehr nervös gewesen.", "Ich war sehr nervös."], 2, "war = real past; wäre = unreal; bin gewesen = Perfekt.");
fill(2, "Früher ___ meine Oma in Polen. (wohnen)", "wohnte", "Regular Präteritum: wohn + te.");
order(3, "Als es dunkel wurde, gingen wir nach Hause.", "als-clause first, then the verb; irregular Präteritum: wurde, gingen.");
wrong(3, "Wir mussten den Termin verschoben.", "verschoben", "verschieben", "After a modal: infinitive, not participle.");
wrong(3, "Er durfte als Kind nicht fernsieht.", "fernsieht", "fernsehen", "Modal + infinitive at the end: fernsehen.");
extra(3, "Wir waren hatten letztes Jahr in Spanien.", "hatten", "sein → waren; only one Präteritum verb is needed.");
fill(3, "Letztes Jahr ___ ich noch kein Wort Deutsch. (können, Präteritum)", "konnte", "ich konnte; ‘kein Wort Deutsch können’ = not to know a word of German.");

T("08"); // Plusquamperfekt
mc(1, "Als wir ankamen, ___ das Konzert schon begonnen.", ["war", "hatte", "hat"], 1, "beginnen takes haben → hatte begonnen.");
mc(1, "Nachdem sie umgezogen ___, suchte sie einen neuen Kindergarten.", ["hatte", "ist", "war"], 2, "umziehen → sein → war umgezogen.");
mc(1, "Bevor er den Brief abschickte, ___ er ihn dreimal gelesen.", ["hatte", "hat", "war"], 0, "Earlier event → hatte gelesen. (abschicken = to send off)");
fill(1, "Ich ___ den Kuchen schon gebacken, bevor die Gäste kamen.", "hatte", "ich hatte gebacken. (backen = to bake)");
fill(1, "Nachdem Omar das Auto repariert ___, fuhr er los.", "hatte", "reparieren → haben → hatte.");
fill(2, "Nachdem wir die Wohnung gestrichen ___, kauften wir neue Lampen.", "hatten", "wir hatten gestrichen. (streichen = to paint)");
fill(2, "Die Kinder ___ schon eingeschlafen, als der Film anfing. (sein)", "waren", "einschlafen → sein → waren.");
order(2, "Wir hatten schon bestellt, bevor Tom kam.", "hatte + participle for the earlier event. (bestellen = to order)");
mc(2, "Which sentence marks the earlier event correctly?", ["Nachdem ich geduscht hatte, zog ich mich an.", "Nachdem ich dusche, hatte ich mich angezogen.", "Nachdem ich geduscht habe, zog ich mich an."], 0, "The earlier action (showering) gets Plusquamperfekt, the later one Präteritum.");
fill(2, "Nachdem sie den Vertrag ___ hatte, bekam sie den Schlüssel. (unterschreiben)", "unterschrieben", "Participle + hatte. (der Vertrag = the contract)");
order(3, "Nachdem er gefrühstückt hatte, ging er joggen.", "nachdem + Plusquamperfekt, main clause in Präteritum.");
order(3, "Ich hatte das Buch vorher schon gelesen.", "hatte + participle; vorher (before) marks the earlier time.");
wrong(3, "Nachdem Pavel aufgestanden hatte, kochte er Kaffee.", "hatte", "war", "aufstehen uses sein: war aufgestanden.");
extra(3, "Als wir ankamen, waren hatten die Gäste schon gegangen.", "hatten", "gehen uses sein: waren … gegangen. One helper only.");
fill(3, "Als Lena nach Hause kam, ___ ihr Mann schon gekocht.", "hatte", "kochen → haben → hatte gekocht; the cooking happened before she came.");

T("09"); // Futur I
mc(1, "Ich ___ dir morgen das Geld zurückgeben.", ["wurde", "werde", "würde"], 1, "werde = will; würde = would, wurde = was.");
mc(1, "Sie ___ im Herbst einen Deutschkurs machen. (definite plan)", ["wird", "würde", "wurde"], 0, "A real plan → wird (würde = would).");
mc(1, "Wir werden das Haus nächstes Jahr ___.", ["renoviert", "renovieren", "renovierte"], 1, "werden + infinitive at the end. (renovieren = to renovate)");
fill(1, "Morgen ___ es bestimmt schneien.", "wird", "es wird … schneien.");
fill(1, "Ich ___ dir eine Nachricht schicken. (werden)", "werde", "ich werde.");
order(2, "Sie wird ein Praktikum machen.", "werden second, infinitive last. (das Praktikum = the internship)");
order(2, "Wir werden im Mai nach Portugal fahren.", "Infinitive at the end.", ["Im Mai werden wir nach Portugal fahren."]);
fill(2, "Ihr ___ in Berlin sicher viel Spaß haben. (werden)", "werdet", "ihr werdet.");
mc(2, "Rewrite in Futur I: Nächste Woche beginne ich den neuen Job.", ["Ich würde nächste Woche den neuen Job beginnen.", "Ich habe nächste Woche den neuen Job begonnen.", "Ich werde nächste Woche den neuen Job beginnen."], 2, "werden + infinitive.");
fill(2, "Du ___ die Fahrprüfung sicher bestehen! (werden)", "wirst", "du wirst. (die Fahrprüfung = the driving test)");
order(3, "Die Preise werden nächstes Jahr wahrscheinlich steigen.", "Prediction with werden; infinitive at the end. (steigen = to rise)", ["Nächstes Jahr werden die Preise wahrscheinlich steigen.", "Wahrscheinlich werden die Preise nächstes Jahr steigen.", "Die Preise werden wahrscheinlich nächstes Jahr steigen."]);
wrong(3, "Wir werden am Samstag umgezogen.", "umgezogen", "umziehen", "Futur needs the infinitive, not the participle.");
wrong(3, "Ich würde dich morgen anrufen, versprochen!", "würde", "werde", "A promise about tomorrow → werde (will); würde is hypothetical. (versprochen = promised)");
extra(3, "Aylin wird bald eine neue Wohnung finden werden.", "werden", "One werden only: wird in position 2 + infinitive finden at the end.");
fill(3, "Translate: He will help you. → Er ___ dir helfen.", "wird", "er wird … helfen.");
});
