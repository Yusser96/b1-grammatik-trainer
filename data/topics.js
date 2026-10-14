// Grammar reference for the 27 B1 topics. Source: B1 German Workbook (Part I + Part II lessons),
// extended with intuitions and extra examples. English explanations, German examples.
window.TOPICS = [
{
  id:"01", title:"Main-clause word order", tag:"V2, inversion, TeKaMoLo",
  intuition:"A German statement is built around one anchor: the conjugated verb sits in position 2, no matter what comes first. If you start with 'Heute' or 'Am Wochenende', the subject simply moves behind the verb. Think of position 1 as a spotlight you can give to any element, and the verb as a fixed pillar right after it.",
  rule:[
    "Position 1 can be the subject, a time phrase, a place, an object… Position 2 is always the conjugated verb.",
    "If something other than the subject is in position 1, the subject follows the verb (inversion): Heute arbeite ich.",
    "Order of extra information: Te-Ka-Mo-Lo = time (wann), cause (warum), manner (wie), place (wo/wohin).",
    "Infinitives and participles go to the very end: Ich muss heute länger arbeiten."
  ],
  examples:[
    {de:"Ich lerne heute zu Hause Deutsch.", en:"I am learning German at home today."},
    {de:"Heute lerne ich zu Hause Deutsch.", en:"Today I am learning German at home."},
    {de:"Ich fahre morgen wegen des Termins mit dem Zug nach Berlin.", en:"Time, cause, manner, place."},
    {de:"Nach der Arbeit fahre ich meistens direkt nach Hause.", en:"After work I usually go straight home."}
  ],
  trap:"Do not copy English order after a fronted time phrase: ‘Heute ich arbeite’ ✗ → ‘Heute arbeite ich’ ✓.",
  table:{head:["Position 1","Verb (2)","Middle (TeKaMoLo)","End"],rows:[
    ["Ich","fahre","morgen wegen des Termins mit dem Zug nach Berlin",""],
    ["Morgen","fahre","ich mit dem Zug nach Berlin",""],
    ["Ich","muss","heute länger","arbeiten"]]}
},
{
  id:"02", title:"Subordinate clauses", tag:"weil, dass, obwohl, wenn",
  intuition:"A subordinating conjunction opens a ‘bracket’: everything inside it waits for the verb, which lands at the very end. Native speakers hear ‘weil…’ and expect the verb last. If the subordinate clause comes first, it counts as position 1, so the main clause starts with its verb.",
  rule:[
    "Main clause, + conjunction + subject + … + conjugated verb at the end.",
    "weil = because (reason), dass = that (content), obwohl = although (contrast), wenn = if/whenever (condition).",
    "Subordinate clause first → main clause begins with the verb: Weil ich krank bin, bleibe ich zu Hause.",
    "With modals the modal goes last: …, weil ich morgen arbeiten muss."
  ],
  examples:[
    {de:"Ich bleibe zu Hause, weil ich krank bin.", en:"I stay home because I am ill."},
    {de:"Ich glaube, dass er morgen kommt.", en:"I think that he is coming tomorrow."},
    {de:"Obwohl es windig ist, gehe ich spazieren.", en:"Although it is windy, I go for a walk."},
    {de:"Wenn ich Zeit habe, rufe ich dich an.", en:"If I have time, I’ll call you."}
  ],
  trap:"A complete clause needs its verb: ‘obwohl es windig ist’, not ‘obwohl es windig’."
},
{
  id:"03", title:"Connectors", tag:"und, aber, denn, sondern · deshalb, trotzdem",
  intuition:"There are two families. und/aber/oder/denn/sondern are ‘glue’ in position 0: they connect two normal main clauses and change nothing. deshalb/deswegen/trotzdem/dann are real sentence parts: they take position 1, so the verb follows immediately.",
  rule:[
    "Position 0 (no change in order): und, aber, oder, denn, sondern.",
    "Position 1 (verb follows, subject after verb): deshalb, deswegen, trotzdem, dann, außerdem, danach.",
    "denn = because (main clause), weil = because (verb at end).",
    "sondern after a negation corrects it: nicht Kaffee, sondern Tee."
  ],
  examples:[
    {de:"Ich komme, aber ich bleibe nicht lange.", en:"I’m coming, but I won’t stay long."},
    {de:"Ich bleibe zu Hause, denn ich bin krank.", en:"I stay home, because I am ill."},
    {de:"Es regnet. Trotzdem gehe ich spazieren.", en:"It’s raining. Nevertheless I go for a walk."},
    {de:"Ich bin krank. Deshalb bleibe ich zu Hause.", en:"I am ill. That is why I stay home."}
  ],
  trap:"After deshalb/trotzdem use inversion: ‘Deshalb bleibe ich…’, not ‘Deshalb ich bleibe…’.",
  table:{head:["Word","Position","Verb goes…"],rows:[["und / aber / oder / denn / sondern","0","normal 2nd place"],["deshalb / deswegen / trotzdem / dann","1","right after the connector"],["weil / dass / obwohl / wenn","opens sub-clause","at the end"]]}
},
{
  id:"04", title:"Indirect questions", tag:"ob and W-words",
  intuition:"A question inside another sentence behaves like a subordinate clause: the verb walks to the end. Yes/no questions use ‘ob’ (whether); questions with a W-word keep that word. Polite requests often use this shape: Können Sie mir sagen, wo…?",
  rule:[
    "Direct: Kommt er? → Indirect: Ich weiß nicht, ob er kommt.",
    "Direct: Wann kommt er? → Indirect: Ich weiß nicht, wann er kommt.",
    "Never combine ob with a W-word: ‘ob wann’ ✗.",
    "Common openers: Weißt du, …? / Können Sie mir sagen, …? / Ich möchte wissen, …"
  ],
  examples:[
    {de:"Können Sie mir sagen, wo der Bahnhof ist?", en:"Can you tell me where the station is?"},
    {de:"Ich weiß nicht, ob er heute kommt.", en:"I don’t know whether he is coming today."},
    {de:"Sie fragt, warum du so spät bist.", en:"She asks why you are so late."}
  ],
  trap:"‘Ich weiß nicht, wann kommt er’ ✗ → ‘…, wann er kommt’ ✓ (verb at the end)."
},
{
  id:"05", title:"Präsens", tag:"present, habits, planned future",
  intuition:"German uses the present tense for more than English does: for now, for routines, and for any future that is already fixed by a time word. ‘Morgen fliege ich nach Spanien’ is the normal way to talk about tomorrow.",
  rule:[
    "Regular endings: -e, -st, -t, -en, -t, -en.",
    "Stem changes in du/er: fahren → fährst/fährt, sprechen → sprichst/spricht, lesen → liest, nehmen → nimmst/nimmt.",
    "Stems ending in -t/-d add -e-: arbeitest, arbeitet; findest, findet.",
    "Separable verbs split: anfangen → Wir fangen um acht Uhr an."
  ],
  examples:[
    {de:"Ich arbeite heute zu Hause.", en:"I am working from home today."},
    {de:"Jeden Montag gehe ich schwimmen.", en:"Every Monday I go swimming."},
    {de:"Morgen fahre ich nach Frankfurt.", en:"Tomorrow I am going to Frankfurt."}
  ],
  trap:"Watch stem changes: er fährt, du sprichst, sie schläft, es gibt.",
  table:{head:["","lernen","fahren","sprechen","sein","haben"],rows:[["ich","lerne","fahre","spreche","bin","habe"],["du","lernst","fährst","sprichst","bist","hast"],["er/sie/es","lernt","fährt","spricht","ist","hat"],["wir","lernen","fahren","sprechen","sind","haben"],["ihr","lernt","fahrt","sprecht","seid","habt"],["sie/Sie","lernen","fahren","sprechen","sind","haben"]]}
},
{
  id:"06", title:"Perfekt", tag:"spoken past: habe … gemacht",
  intuition:"When you tell someone what happened yesterday, you use Perfekt: a helper (haben or sein) in position 2 and the participle parked at the end. sein is for verbs of movement from A to B or change of state (gehen, fahren, aufstehen, einschlafen) and for sein/bleiben themselves.",
  rule:[
    "haben/sein (conjugated) + … + Partizip II at the end.",
    "Regular participle: ge- + stem + -t (gemacht, gearbeitet). Irregular: ge- + changed stem + -en (gesehen, gefahren).",
    "Separable: ge- goes inside: angerufen, eingekauft. Inseparable (be-, ver-, er-…) and -ieren verbs have no ge-: besucht, verstanden, studiert.",
    "sein with: gehen, kommen, fahren, fliegen, laufen, aufstehen, einschlafen, umziehen, bleiben, sein, werden, passieren."
  ],
  examples:[
    {de:"Ich habe gestern lange gearbeitet.", en:"I worked for a long time yesterday."},
    {de:"Wir sind nach Berlin gefahren.", en:"We went to Berlin."},
    {de:"Ich habe dich gestern angerufen.", en:"I called you yesterday."},
    {de:"Sie ist schnell eingeschlafen.", en:"She fell asleep quickly."}
  ],
  trap:"The participle of anrufen is angerufen, not angeruft. ‘I had an appointment’ = Ich hatte einen Termin (not ‘habe gemacht’)."
},
{
  id:"07", title:"Präteritum", tag:"war, hatte, konnte, musste …",
  intuition:"Written stories use Präteritum, but even in speech you will constantly need the simple past of sein, haben and the modals: war, hatte, konnte, musste, wollte, durfte, sollte. Learn these as one small set; they appear in every exam.",
  rule:[
    "sein: war, warst, war, waren, wart, waren. haben: hatte, hattest, hatte, hatten, hattet, hatten.",
    "Modals lose the umlaut: können → konnte, müssen → musste, dürfen → durfte; wollen → wollte, sollen → sollte.",
    "After a modal in Präteritum the main verb is an infinitive: Ich musste arbeiten.",
    "Regular verbs: -te endings (lernte, arbeitete). Irregular: changed stem (ging, kam, fuhr, sah)."
  ],
  examples:[
    {de:"Ich war müde.", en:"I was tired."},
    {de:"Ich hatte keine Zeit.", en:"I had no time."},
    {de:"Er konnte nicht kommen.", en:"He could not come."},
    {de:"Ich musste gestern lange arbeiten.", en:"I had to work late yesterday."}
  ],
  trap:"‘Ich musste gearbeitet’ ✗ → ‘Ich musste arbeiten’ ✓ (infinitive after a modal).",
  table:{head:["","sein","haben","können","müssen","wollen"],rows:[["ich / er","war","hatte","konnte","musste","wollte"],["du","warst","hattest","konntest","musstest","wolltest"],["wir / sie","waren","hatten","konnten","mussten","wollten"],["ihr","wart","hattet","konntet","musstet","wolltet"]]}
},
{
  id:"08", title:"Plusquamperfekt", tag:"past before the past",
  intuition:"Two past events, one earlier than the other: the earlier one gets Plusquamperfekt. It is simply Perfekt with the helper in Präteritum: hatte/war + participle. It almost always appears with nachdem, bevor or ‘schon’.",
  rule:[
    "hatte / war + … + Partizip II.",
    "Typical partner: Nachdem …Plusquamperfekt…, …Präteritum/Perfekt…",
    "Same haben/sein choice as in Perfekt: Ich hatte gegessen / Ich war gegangen."
  ],
  examples:[
    {de:"Ich hatte schon gegessen, bevor er kam.", en:"I had already eaten before he came."},
    {de:"Nachdem sie angekommen war, rief sie mich an.", en:"After she had arrived, she called me."},
    {de:"Als ich ankam, hatte der Film schon angefangen.", en:"When I arrived, the film had already started."}
  ],
  trap:"Perfekt = habe gemacht (I did), Plusquamperfekt = hatte gemacht (I had done)."
},
{
  id:"09", title:"Futur I", tag:"werden + infinitive",
  intuition:"Futur I is for explicit plans, promises, predictions and guesses. werden takes position 2, the infinitive goes last. Keep werde (will) strictly apart from würde (would).",
  rule:[
    "werden (conjugated) + … + infinitive at the end.",
    "werde, wirst, wird, werden, werdet, werden.",
    "Often optional: Präsens + time word does the same job (Morgen besuche ich meine Tante).",
    "Assumption: Das Wetter wird wahrscheinlich besser werden."
  ],
  examples:[
    {de:"Ich werde morgen arbeiten.", en:"I will work tomorrow."},
    {de:"Es wird später regnen.", en:"It will rain later."},
    {de:"Ich werde dich später anrufen.", en:"I will call you later."}
  ],
  trap:"Do not confuse werde (will) with würde (would). And no participle: ‘Ich werde nach Hause gegangen’ ✗."
},
{
  id:"10", title:"haben · sein · werden", tag:"hatte/hätte, war/wäre, wird/wurde/würde/worden",
  intuition:"Three verbs unlock almost every B1 structure. Each has three ‘faces’: present, past (Präteritum) and hypothetical (Konjunktiv II). werden has a fourth face, worden, used only in the passive Perfekt. Hear the vowel: a = real past (hatte, war, wurde), ä/ü = unreal (hätte, wäre, würde).",
  rule:[
    "haben: habe (now) · hatte (was) · hätte (would have / if I had).",
    "sein: bin (now) · war (was) · wäre (would be / if I were).",
    "werden: werde/wird (will / is being) · wurde (was being, passive past) · würde (would) · worden (has been …-ed).",
    "Passive Perfekt: Das Auto ist repariert worden."
  ],
  examples:[
    {de:"Ich habe Zeit. / Ich hatte Zeit. / Wenn ich Zeit hätte …", en:"have / had / if I had"},
    {de:"Ich bin müde. / Ich war müde. / Wenn ich nicht müde wäre …", en:"am / was / if I weren’t"},
    {de:"Das Auto wird repariert. / wurde repariert. / ist repariert worden.", en:"is being / was / has been repaired"}
  ],
  trap:"wird = is being/will · wurde = was (passive) · würde = would · worden = passive participle with sein.",
  table:{head:["","now","real past","unreal (Konj. II)"],rows:[["haben","habe / hat","hatte","hätte"],["sein","bin / ist","war","wäre"],["werden","werde / wird","wurde","würde"]]}
},
{
  id:"11", title:"Konjunktiv II", tag:"würde, hätte, wäre, könnte",
  intuition:"Konjunktiv II is the ‘unreal’ mode: wishes, hypotheticals, advice, and polite requests. Most verbs just use würde + infinitive; a handful have their own short form you must know by heart: hätte, wäre, könnte, müsste, sollte, dürfte, wüsste.",
  rule:[
    "würde + infinitive for ordinary verbs: Ich würde gern öfter reisen.",
    "Short forms: hätte, wäre, könnte, müsste, sollte, dürfte, wollte, wüsste, käme, gäbe.",
    "Unreal condition: both parts hypothetical. Wenn ich Zeit hätte, würde ich reisen.",
    "Polite: Könnten Sie mir helfen? Ich hätte gern einen Kaffee. Advice: Du solltest mehr schlafen."
  ],
  examples:[
    {de:"Wenn ich mehr Zeit hätte, würde ich mehr reisen.", en:"If I had more time, I would travel more."},
    {de:"Könnten Sie mir helfen?", en:"Could you help me?"},
    {de:"An deiner Stelle würde ich früher schlafen.", en:"In your place I would sleep earlier."},
    {de:"Wenn ich du wäre, würde ich warten.", en:"If I were you, I would wait."}
  ],
  trap:"The wenn-clause also needs the unreal form: ‘wenn ich mehr Geld hätte’, not ‘hatte’."
},
{
  id:"12", title:"Passive", tag:"wird … gemacht, wurde …, ist … worden",
  intuition:"Passive puts the action in focus and hides the doer. werden is the engine; the participle sits at the end. To change tense, change only werden: wird (present), wurde (past), ist … worden (Perfekt), wird … werden (future).",
  rule:[
    "Präsens: wird + Partizip II. Präteritum: wurde + Partizip II.",
    "Perfekt: ist + Partizip II + worden. Futur: wird + Partizip II + werden.",
    "Man-sentences become passive: Man öffnet die Tür → Die Tür wird geöffnet.",
    "Plural: Die Pakete werden geliefert. With modal: Das Auto muss repariert werden."
  ],
  examples:[
    {de:"Das Auto wird repariert.", en:"The car is being repaired."},
    {de:"Das Auto wurde repariert.", en:"The car was repaired."},
    {de:"Das Auto ist repariert worden.", en:"The car has been repaired."},
    {de:"Das Haus wird nächstes Jahr gebaut werden.", en:"The house will be built next year."}
  ],
  trap:"Passive Perfekt uses worden, not geworden, and never two helpers: ‘wurde gekocht worden’ ✗.",
  table:{head:["Tense","Form","Example"],rows:[["Präsens","wird + P II","Die Tür wird geöffnet."],["Präteritum","wurde + P II","Die Tür wurde geöffnet."],["Perfekt","ist + P II + worden","Die Tür ist geöffnet worden."],["Futur I","wird + P II + werden","Die Tür wird geöffnet werden."]]}
},
{
  id:"13", title:"Cases and articles", tag:"Nominativ, Akkusativ, Dativ, Genitiv",
  intuition:"Cases mark the job of a noun: who acts (Nom), what is directly affected (Akk), to/for whom (Dat), whose (Gen). Only the masculine changes a lot: der → den → dem → des. Feminine, neuter and plural change less, so master the masculine column first.",
  rule:[
    "Nominativ: der / die / das / die. Akkusativ: den / die / das / die.",
    "Dativ: dem / der / dem / den (+ -n on plural noun). Genitiv: des / der / des / der (+ -(e)s on masc./neut. noun).",
    "Dative verbs: helfen, danken, gefallen, gehören, antworten. Dative prepositions: mit, nach, aus, zu, von, bei, seit.",
    "Accusative prepositions: für, um, durch, gegen, ohne. Genitive: wegen, trotz, während."
  ],
  examples:[
    {de:"Der Mann sieht den Hund.", en:"The man sees the dog."},
    {de:"Ich gebe dem Mann das Buch.", en:"I give the man the book."},
    {de:"Ich helfe der Frau.", en:"I help the woman. (helfen + Dativ)"},
    {de:"Das Auto meines Nachbarn ist neu.", en:"My neighbour’s car is new."}
  ],
  trap:"Masculine changes strongly: der → den (Akk) → dem (Dat) → des (Gen).",
  table:{head:["","masc.","fem.","neut.","plural"],rows:[["Nom.","der / ein","die / eine","das / ein","die / —"],["Akk.","den / einen","die / eine","das / ein","die / —"],["Dat.","dem / einem","der / einer","dem / einem","den / — (+n)"],["Gen.","des / eines (+s)","der / einer","des / eines (+s)","der / —"]]}
},
{
  id:"14", title:"Two-way prepositions", tag:"wo? Dativ · wohin? Akkusativ",
  intuition:"an, auf, hinter, in, neben, über, unter, vor, zwischen look at the verb: is something staying somewhere (wo? → Dativ) or moving to a new position (wohin? → Akkusativ)? Pairs of verbs help: liegen/legen, stehen/stellen, hängen/hängen, sitzen/setzen.",
  rule:[
    "Wo? location → Dativ: Das Buch liegt auf dem Tisch.",
    "Wohin? destination / change of position → Akkusativ: Ich lege das Buch auf den Tisch.",
    "Contractions: in dem = im, in das = ins, an dem = am, an das = ans.",
    "It is not ‘movement in general’: Ich laufe im Park (location) vs Ich laufe in den Park (destination)."
  ],
  examples:[
    {de:"Das Bild hängt an der Wand.", en:"The picture hangs on the wall. (wo?)"},
    {de:"Ich hänge das Bild an die Wand.", en:"I hang the picture on the wall. (wohin?)"},
    {de:"Wir sind in der Küche. / Wir gehen in die Küche.", en:"We are in the kitchen. / We go into the kitchen."}
  ],
  trap:"Ask wo? or wohin?, not ‘is there movement?’.",
  table:{head:["Verb pair","wo? (Dativ)","wohin? (Akkusativ)"],rows:[["liegen / legen","Es liegt auf dem Tisch.","Ich lege es auf den Tisch."],["stehen / stellen","Sie steht im Regal.","Ich stelle sie ins Regal."],["sitzen / setzen","Er sitzt auf dem Stuhl.","Er setzt sich auf den Stuhl."]]}
},
{
  id:"15", title:"Verbs with prepositions", tag:"warten auf, sich interessieren für …",
  intuition:"Some verbs come with a fixed preposition and a fixed case, and the combination often cannot be guessed from English. Learn them as one package: ‘warten auf + Akk’, like one word. These are a favourite in the telc Sprachbausteine.",
  rule:[
    "Akkusativ: warten auf, denken an, sich erinnern an, glauben an, sich freuen auf/über, sprechen über, sich interessieren für, bitten um, sich kümmern um, sich bewerben um, sich vorbereiten auf.",
    "Dativ: teilnehmen an, arbeiten an, abhängen von, träumen von, sprechen mit, fragen nach, suchen nach, helfen bei, anfangen mit, aufhören mit, gehören zu.",
    "sich freuen auf = look forward to (future); sich freuen über = be happy about (now/past).",
    "denken an = think of; über etwas nachdenken = think something over."
  ],
  examples:[
    {de:"Ich warte auf den Bus.", en:"I am waiting for the bus."},
    {de:"Ich interessiere mich für Technik.", en:"I am interested in technology."},
    {de:"Ich nehme an dem Kurs teil.", en:"I take part in the course."},
    {de:"Ich träume von einer Reise.", en:"I dream of a trip."}
  ],
  trap:"denken an = think of; über etwas nachdenken = think it over.",
  table:{head:["Verb + prep.","Case","Example"],rows:[["warten auf","Akk","Ich warte auf den Bus."],["sich freuen auf / über","Akk","Ich freue mich auf das Wochenende."],["sich interessieren für","Akk","Ich interessiere mich für Musik."],["bitten um","Akk","Ich bitte um Hilfe."],["teilnehmen an","Dat","Ich nehme an dem Kurs teil."],["fragen nach","Dat","Ich frage nach dem Preis."],["träumen von","Dat","Ich träume von einem Haus."],["sprechen mit","Dat","Ich spreche mit meinem Chef."]]}
},
{
  id:"16", title:"Reflexive verbs", tag:"mich, dich, sich, uns, euch",
  intuition:"A reflexive pronoun points the action back to the subject. Some verbs are always reflexive (sich beeilen, sich erinnern), some only when the object is yourself (waschen). The pronoun agrees with the subject: ich → mich, du → dich, er/sie/es/sie/Sie → sich, wir → uns, ihr → euch.",
  rule:[
    "ich mich · du dich · er/sie/es sich · wir uns · ihr euch · sie/Sie sich.",
    "Always reflexive: sich beeilen, sich erinnern an, sich freuen, sich interessieren für, sich kümmern um, sich bewerben um.",
    "Optional: Ich wasche mich / Ich wasche das Auto. Wir treffen uns (each other).",
    "Dative reflexive when there is another object: Ich wasche mir die Hände."
  ],
  examples:[
    {de:"Ich wasche mich. / Ich wasche das Auto.", en:"I wash myself. / I wash the car."},
    {de:"Ich interessiere mich für das Auto.", en:"I am interested in the car."},
    {de:"Das Auto interessiert mich.", en:"The car interests me. (mich is a normal object here)"},
    {de:"Ihr müsst euch beeilen.", en:"You (pl.) have to hurry."}
  ],
  trap:"‘mich’ is not always reflexive: in ‘Das Auto interessiert mich’ it is just the object."
},
{
  id:"17", title:"Relative clauses", tag:"der, die, das, den, dem, mit dem …",
  intuition:"A relative clause glues extra information onto a noun. The pronoun has two bosses: gender and number come from the noun it refers to, the case comes from its job inside the relative clause. The verb goes to the end, as in every subordinate clause.",
  rule:[
    "Noun, + relative pronoun + … + verb at the end.",
    "Forms are like the definite article, except Dativ plural denen: der/die/das/die · den/die/das/die · dem/der/dem/denen.",
    "Ask what the pronoun does inside its clause: der Mann, der arbeitet (subject) · den ich sehe (object) · dem ich helfe (helfen + Dat).",
    "With a preposition: der Kollege, mit dem ich arbeite · die Stadt, in der ich wohne."
  ],
  examples:[
    {de:"Das ist der Mann, der den Kuchen gegessen hat.", en:"That is the man who ate the cake."},
    {de:"Das ist der Mann, den ich gestern gesehen habe.", en:"…whom I saw yesterday."},
    {de:"Das ist die Frau, der ich geholfen habe.", en:"…whom I helped. (helfen + Dat)"},
    {de:"Die Stadt, in der ich wohne, ist klein.", en:"The city I live in is small."}
  ],
  trap:"Choose the case inside the relative clause: ‘der Mann, den ich sehe’ because I see him (Akk).",
  table:{head:["","masc.","fem.","neut.","plural"],rows:[["Nom.","der","die","das","die"],["Akk.","den","die","das","die"],["Dat.","dem","der","dem","denen"]]}
},
{
  id:"18", title:"Separable and inseparable verbs", tag:"anrufen → rufe … an · besuchen → besucht",
  intuition:"A separable prefix (an-, auf-, ein-, mit-, zurück-, um-…) is stressed and jumps to the end of the main clause; in the participle ge- slips in between (angerufen); with zu it is anzurufen. Inseparable prefixes (be-, emp-, ent-, er-, ge-, miss-, ver-, zer-) are unstressed, never split and take no ge-.",
  rule:[
    "Separable: Ich rufe dich an. · Ich habe dich angerufen. · Ich versuche, dich anzurufen.",
    "In a subordinate clause the verb is whole at the end: …, weil ich dich anrufe.",
    "Inseparable: besuchen → besucht, verstehen → verstanden, erklären → erklärt (no ge-).",
    "-ieren verbs also take no ge-: studiert, telefoniert, repariert."
  ],
  examples:[
    {de:"Ich rufe dich an.", en:"I call you."},
    {de:"Ich habe dich angerufen.", en:"I called you."},
    {de:"Ich versuche, dich anzurufen.", en:"I try to call you."},
    {de:"Ich habe meine Freundin besucht.", en:"I visited my friend."}
  ],
  trap:"Not every prefix splits: besuchen → besucht, not ‘gebesucht’.",
  table:{head:["Prefix type","Examples","Partizip II"],rows:[["separable (stressed)","an-, auf-, ein-, mit-, aus-, zurück-, um-","angerufen, aufgestanden, eingekauft"],["inseparable","be-, emp-, ent-, er-, ge-, miss-, ver-, zer-","besucht, verstanden, erklärt"]]}
},
{
  id:"19", title:"Infinitive with zu", tag:"zu, um … zu, ohne … zu, statt … zu",
  intuition:"When a verb depends on another verb or on an expression, it appears as ‘zu + infinitive’ at the end. um … zu says why (purpose), ohne … zu says ‘without doing’, statt … zu ‘instead of doing’. The hidden subject is the same as in the main clause; if the subjects differ, use damit.",
  rule:[
    "Ich versuche, mehr zu lernen. · Es ist wichtig, pünktlich zu sein. · Ich habe keine Lust, zu kochen.",
    "um … zu (in order to) · ohne … zu (without) · statt … zu (instead of).",
    "Separable verbs sandwich zu: aufzustehen, anzurufen, einzukaufen.",
    "Different subjects → damit: Ich spreche langsam, damit du mich verstehst."
  ],
  examples:[
    {de:"Ich versuche, mehr zu lernen.", en:"I try to learn more."},
    {de:"Ich lerne Deutsch, um in Deutschland zu arbeiten.", en:"I learn German in order to work in Germany."},
    {de:"Er ging, ohne etwas zu sagen.", en:"He left without saying anything."},
    {de:"Statt zu lernen, sieht er fern.", en:"Instead of studying, he watches TV."}
  ],
  trap:"um … zu needs the same subject in both parts. Different subjects → damit."
},
{
  id:"20", title:"Adjective endings", tag:"ein netter Mann, eine nette Frau, ein nettes Kind",
  intuition:"Someone has to show gender and case. If the article does it (der, die, das, den, dem), the adjective relaxes to -e or -en. If an ein-word does not (ein, mein, kein), the adjective takes over: ein netter Mann (-r like der), ein nettes Kind (-s like das). Dative and genitive almost always mean -en.",
  rule:[
    "After der/die/das: Nom. -e (der nette Mann, die nette Frau, das nette Kind), everything else mostly -en; fem./neut. Akk. keep -e.",
    "After ein/kein/mein: Nom. masc. -er, neut. -es, fem. -e; Akk. masc. -en; Dat./Gen. -en.",
    "Plural with article (die/keine/meine): always -en. Plural without article: -e (Nom./Akk.).",
    "Rule of thumb: Dativ → -en, always."
  ],
  examples:[
    {de:"ein netter Mann · eine nette Frau · ein nettes Kind", en:"Nominativ after ein"},
    {de:"Ich sehe einen netten Mann.", en:"Akkusativ masculine → -en"},
    {de:"mit einem netten Kollegen", en:"Dativ → -en"},
    {de:"die große Wohnung · ein gebrauchtes Auto", en:""}
  ],
  trap:"Neuter after ein is -es: ‘ein neues Projekt’, not ‘ein neue Projekt’.",
  table:{head:["","masc.","fem.","neut.","plural"],rows:[["Nom. (ein)","ein netter Mann","eine nette Frau","ein nettes Kind","nette Leute"],["Akk. (ein)","einen netten Mann","eine nette Frau","ein nettes Kind","nette Leute"],["Dat. (ein)","einem netten Mann","einer netten Frau","einem netten Kind","netten Leuten"],["Nom. (der)","der nette Mann","die nette Frau","das nette Kind","die netten Leute"],["Akk. (der)","den netten Mann","die nette Frau","das nette Kind","die netten Leute"]]}
},
{
  id:"21", title:"Comparison", tag:"größer als · so groß wie · am größten",
  intuition:"Comparative = -er, and the comparison word is als (bigger than). Equality uses so … wie (as big as). The superlative is am -sten or der/die/das -ste. Short adjectives with a/o/u usually take an umlaut: größer, älter, jünger, kürzer.",
  rule:[
    "Comparative: -er + als. groß → größer, alt → älter, jung → jünger, klein → kleiner.",
    "Irregular: gut → besser → am besten; viel → mehr → am meisten; hoch → höher → am höchsten; gern → lieber → am liebsten; nah → näher → am nächsten.",
    "Equality: (genau)so + adjective + wie.",
    "Superlative: am schnellsten / der schnellste. After -t/-d/-s/-z: -esten (am ältesten, am heißesten)."
  ],
  examples:[
    {de:"Mein Auto ist größer als dein Auto.", en:"My car is bigger than your car."},
    {de:"Mein Handy ist genauso teuer wie deins.", en:"My phone is just as expensive as yours."},
    {de:"Heute ist es am wärmsten.", en:"Today it is the warmest."},
    {de:"Mein Auto ist größer als das meines Nachbarn.", en:"‘das’ stands for ‘das Auto’."}
  ],
  trap:"‘größer’ needs the umlaut; and it is ‘als’ after a comparative, ‘wie’ after ‘so’.",
  table:{head:["Adjective","Comparative","Superlative"],rows:[["gut","besser","am besten"],["viel","mehr","am meisten"],["hoch","höher","am höchsten"],["gern","lieber","am liebsten"],["groß","größer","am größten"],["teuer","teurer","am teuersten"]]}
},
{
  id:"22", title:"Negation", tag:"nicht vs kein",
  intuition:"kein is the negative article: it replaces ein or an article-less noun (Ich habe kein Auto, Ich trinke keinen Kaffee). nicht negates everything else: verbs, adjectives, names, nouns with a definite article or a possessive. nicht normally goes late in the sentence, but before the element it specifically targets.",
  rule:[
    "kein + noun (ein / no article): Ich habe keinen Termin. · Ich habe keine Zeit.",
    "nicht with: verbs (Ich komme nicht), adjectives (nicht teuer), definite/possessive nouns (nicht das Auto, nicht meine Tasche), names.",
    "Position: nicht at the end for whole-sentence negation; before a specific part to negate only that part: Ich arbeite nicht heute, sondern morgen.",
    "nicht goes before infinitives/participles/prefixes: Ich habe nicht geschlafen. Ich rufe nicht an."
  ],
  examples:[
    {de:"Ich habe kein Auto.", en:"I don’t have a car."},
    {de:"Das Auto ist nicht neu.", en:"The car is not new."},
    {de:"Ich komme heute nicht.", en:"I’m not coming today."},
    {de:"Das ist nicht meine Tasche.", en:"That is not my bag."}
  ],
  trap:"Use kein with an indefinite noun: ‘Ich habe keinen Bruder’, not ‘nicht Bruder’."
},
{
  id:"23", title:"Time clauses", tag:"als, wenn, seit(dem), bevor, nachdem, während, bis",
  intuition:"These conjunctions put events on a timeline; all send the verb to the end. The classic pair: als for one single past situation or period (Als ich ein Kind war), wenn for repeated situations and for present/future conditions (Immer wenn / Wenn ich Zeit habe).",
  rule:[
    "als = one-time past · wenn = repeated, or present/future.",
    "bevor = before · nachdem = after (usually with Plusquamperfekt) · während = while.",
    "seit / seitdem = since (German uses Präsens: Seit ich hier wohne, lerne ich Deutsch) · bis = until.",
    "Verb at the end in every case; main clause may start with the verb if the time clause comes first."
  ],
  examples:[
    {de:"Als ich ein Kind war, aß ich viel Zucker.", en:"When I was a child, I ate a lot of sugar."},
    {de:"Wenn ich Zeit habe, lese ich.", en:"When(ever) I have time, I read."},
    {de:"Seit ich in Deutschland wohne, lerne ich Deutsch.", en:"Since I have lived in Germany, I have been learning German."},
    {de:"Nachdem ich gegessen hatte, ging ich spazieren.", en:"After I had eaten, I went for a walk."}
  ],
  trap:"als ≠ ‘far past’; it means a single or defined past situation. Repeated past → wenn."
},
{
  id:"24", title:"da- and wo- compounds", tag:"darauf, daran, worüber, mit wem",
  intuition:"Instead of repeating ‘auf den Bus’ you say ‘darauf’; to ask about a thing you say ‘worauf’. Rule: da/wo + preposition, with an -r- if the preposition starts with a vowel (daran, worüber). For people, keep the preposition and use a pronoun: mit wem, mit ihm.",
  rule:[
    "Things: da(r)+prep (darauf, davon, damit, darüber, daran) · question: wo(r)+prep (worauf, wovon, womit, worüber, woran).",
    "People: preposition + pronoun (auf ihn, mit ihr) · question: preposition + wen/wem (Auf wen? Mit wem?).",
    "Pointing forward to a dass-clause: Ich freue mich darüber, dass du kommst."
  ],
  examples:[
    {de:"Ich warte auf den Bus. → Ich warte darauf.", en:"I wait for it."},
    {de:"Worauf wartest du?", en:"What are you waiting for?"},
    {de:"Mit wem sprichst du?", en:"Who are you talking to? (person)"},
    {de:"Ich freue mich darüber, dass du kommst.", en:"I am glad that you are coming."}
  ],
  trap:"For people use preposition + pronoun: ‘Mit wem sprichst du?’, not ‘womit’."
},
{
  id:"25", title:"Pronoun order, two objects", tag:"Ich gebe es ihm.",
  intuition:"Verbs like geben, zeigen, schicken, erklären have two objects: a person (Dativ) and a thing (Akkusativ). With two nouns: person first. With a pronoun: the pronoun moves forward. With two pronouns: the thing (es) comes first: Ich gebe es ihm.",
  rule:[
    "Two nouns: Dativ before Akkusativ. Ich gebe dem Kind den Ball.",
    "One pronoun: pronoun first. Ich gebe ihr das Buch. / Ich gebe es meinem Bruder.",
    "Two pronouns: Akkusativ before Dativ. Ich gebe es ihm. Ich zeige sie dir.",
    "Dative pronouns: mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen."
  ],
  examples:[
    {de:"Ich gebe meiner Freundin das Buch.", en:"noun + noun"},
    {de:"Ich gebe ihr das Buch.", en:"pronoun + noun"},
    {de:"Ich gebe es meiner Freundin.", en:"pronoun (thing) first"},
    {de:"Ich gebe es ihr.", en:"two pronouns: es before ihr"}
  ],
  trap:"Two pronouns: ‘es ihm’, not ‘ihm es’.",
  table:{head:["Person","Dativ pronoun","Akkusativ pronoun"],rows:[["ich","mir","mich"],["du","dir","dich"],["er / sie / es","ihm / ihr / ihm","ihn / sie / es"],["wir","uns","uns"],["ihr","euch","euch"],["sie / Sie","ihnen / Ihnen","sie / Sie"]]}
},
{
  id:"26", title:"Imperative", tag:"Komm! Kommt! Kommen Sie!",
  intuition:"Three audiences, three shapes. du: the verb stem, no pronoun (Komm!). ihr: the normal ihr-form without pronoun (Kommt!). Sie: verb + Sie (Kommen Sie!). Strong verbs with e→i keep the change (Nimm! Gib! Lies!), but a→ä verbs do not (Fahr!).",
  rule:[
    "du: stem (Komm! Fahr! Warte!) · e→i verbs: Nimm! Gib! Lies! Sprich! Iss!",
    "ihr: Kommt! Wartet! Nehmt!",
    "Sie: Kommen Sie! Warten Sie! Nehmen Sie!",
    "sein: Sei leise! · Seid leise! · Seien Sie leise!  haben: Hab keine Angst!"
  ],
  examples:[
    {de:"Komm bitte rein!", en:"Come in, please! (du)"},
    {de:"Kommt bitte pünktlich!", en:"Come on time, please! (ihr)"},
    {de:"Warten Sie bitte hier!", en:"Please wait here. (Sie)"},
    {de:"Seien Sie bitte vorsichtig!", en:"Please be careful. (Sie)"}
  ],
  trap:"Some strong verbs change: nehmen → Nimm!, geben → Gib!, lesen → Lies! And no ‘du’ in the du-form.",
  table:{head:["Verb","du","ihr","Sie"],rows:[["kommen","Komm!","Kommt!","Kommen Sie!"],["nehmen","Nimm!","Nehmt!","Nehmen Sie!"],["sein","Sei!","Seid!","Seien Sie!"],["haben","Hab!","Habt!","Haben Sie!"]]}
},
{
  id:"27", title:"N-declension and genitive", tag:"den Studenten, des Kunden, meines Bruders",
  intuition:"A small group of masculine nouns for people and animals adds -(e)n in every case except Nominativ singular: der Student → den/dem/des Studenten. The genitive answers ‘whose?’: masculine and neuter nouns add -(e)s (meines Bruders), feminine and plural only change the article (meiner Schwester).",
  rule:[
    "N-declension nouns: Student, Kunde, Kollege, Mensch, Junge, Herr (Herrn), Nachbar, Name (Namens), Praktikant, Tourist, Polizist, Patient.",
    "Genitive: masc./neut. -s or -es (des Mannes, meines Bruders, des Autos); fem./plural: article only (der Frau, meiner Schwester, der Kinder).",
    "The genitive usually follows the noun it belongs to: das Auto meines Bruders.",
    "Spoken alternative: von + Dativ (das Auto von meinem Bruder)."
  ],
  examples:[
    {de:"Ich spreche mit dem Studenten.", en:"I talk to the student. (Dat)"},
    {de:"Ich sehe den Kollegen.", en:"I see the colleague. (Akk)"},
    {de:"Das ist das Auto meines Bruders.", en:"That is my brother’s car."},
    {de:"Der Name des Kunden ist bekannt.", en:"The customer’s name is known."}
  ],
  trap:"Not every masculine noun is N-declension; learn the common ones as vocabulary.",
  table:{head:["","der Student","der Kunde","der Herr"],rows:[["Nom.","der Student","der Kunde","der Herr"],["Akk.","den Studenten","den Kunden","den Herrn"],["Dat.","dem Studenten","dem Kunden","dem Herrn"],["Gen.","des Studenten","des Kunden","des Herrn"]]}
}
];
