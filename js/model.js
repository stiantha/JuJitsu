let model = {
  //? INPUTS
  user: {
    id: 1,
    loggedIn: true,
  },

  users:[
    {
      id: 1,
      name: "marie",
      email: "marie@getacademy.no",
      password: "terje123",
      beltGrade: 0,
      admin: true
    },
  ],

  userPage: {
    pageId: 4,
    currentBelt: '',
    exercisesFinished: [],
  },

  sort: {
    field: null,
    direction: null,
  },

  //* DATA
  belts: [
    { id: 0, name: 'Hvitt belte' },
    { id: 1, name: 'Gult belte' },
    { id: 2, name: 'Oransje belte' },
    { id: 3, name: 'Grønt belte' },
    { id: 4, name: 'Blått belte' },
    { id: 5, name: 'Brunt belte' },
    { id: 6, name: 'Svart belte' },
  ],
  categories: [
    { id: 1, name: 'Grunnteknikker' },
    { id: 2, name: 'Teknikktrening' },
    { id: 3, name: 'Selvforsvarstrening' },
    { id: 4, name: 'Skadeforebyggende øvelser' },
    { id: 5, name: 'Styrke øvelser' },
    { id: 6, name: 'Mitt Program' },
  ],
  selectedSubtype: null,
  selectedTraining: null,
  subtypes: [
    { id: 0, categoryId: 1, beltId: 1, name: "Guard / Benstillinger", nameJapanese: "Kamae / Ashi-Tachi",   },
    { id: 1, categoryId: 1, beltId: 1, name: "Forflytninger", nameJapanese: "Tai-sabaki",    },
    { id: 2, categoryId: 1, beltId: 1, name: "Fallteknikk", nameJapanese: "Ukemi-waza",    },
    { id: 3, categoryId: 1, beltId: 1, name: "Kast / Fellinger", nameJapanese: "Nage waza",    },
    { id: 4, categoryId: 1, beltId: 1, name: "Slag", nameJapanese: "Tsuki waza",    },
    { id: 5, categoryId: 1, beltId: 1, name: "Spark", nameJapanese: "Keri waza",    },
    { id: 6, categoryId: 1, beltId: 1, name: "Mønster", nameJapanese: "Kata",    },
    { id: 7, categoryId: 1, beltId: 1, name: "Blokkeringer", nameJapanese: "Uke waza",    },
    { id: 8, categoryId: 2, beltId: 1, name: 'Forfra',    },
    { id: 9, categoryId: 2, beltId: 1, name: 'Siden',    },
    { id: 10, categoryId: 2, beltId: 1, name: 'Bakfra',    },
    { id: 11, categoryId: 2, beltId: 1, name: 'Bakketeknikker',    },

    { id: 12, categoryId: 3, beltId: 1, name: "Forsvar under press",    },

    { id: 13, categoryId: 4, name: "Overkropp" },
    { id: 14, categoryId: 4, name: "Bein" },
    { id: 15, categoryId: 4, name: "Kjerne" },
    { id: 16, categoryId: 5, name: "Overkropp" },
    { id: 17, categoryId: 5, name: "Bein" },
    { id: 18, categoryId: 5, name: "Kjerne" },
    { id: 19, categoryId: 6, name: "Øvelser" },
  ],
  exercises: [
    // Katagori 1 har 8 subtyper med totalt 27 øvelser: id 1 til 27
    // medialink: "https://www.youtube.com/embed/+video ID",
    // 0 / 1 Guardstillinger / Benstillinger (Kamae / Ashi-Tachi)
    {
      id: 0,
      subtypesId: 0,
      CategoryId: 1,
      name: 'Forsvarsguard, åpne hender',
      nameJapanese: 'Shuto',
      withPartner: '',
      description: 
      "<br>Posisjon: Lær å ta en god posisjon i guarden, med beina godt plantet i bakken og armene beskyttende for hodet og halsen. Lær å bruke beina til å kontrollere motstanderen.<br><br>Bevegelser: Lær å blokkere og avverge angrep fra motstanderen. Lær å bruke bevegelser for å komme deg ut av guarden.<br><br>Teknikker:<br><br>Armbar: En armbar er en teknikk der du bøyer motstanderens arm bak ryggen.<br><br>Ezekiel choke: En Ezekiel choke er en teknikk der du plasserer armen din rundt motstanderens hals og kveler ham.<br><br>Guillotine choke: En guillotine choke er en teknikk der du plasserer armen din rundt motstanderens hals og kveler ham.",
      medialink: "https://www.youtube.com/embed/ItWZnTdwemg",
      
    },
    {
      id: 1,
      subtypesId: 0,
      CategoryId: 1,
      name: 'Angrepsguard, lukkede hender',
      nameJapanese: 'Seiken',
      withPartner: '',
      description: 'medialenke er kanskje feil, men er med for å illustrere funksjonen med film',
      //Denne peker til en øvelse som ikke finnnes i TJK gult pensum
      medialink: "https://www.youtube.com/embed/ItWZnTdwemg",
       
    },
    {
      id: 2,
      subtypesId: 0,
      CategoryId: 1,
      name: 'Grunnleggende stilling',
      nameJapanese: 'Zenkutsu-dachi',
      withPartner: '',
      description: '',
       
    },
    // 1 / 1 Forflytninger (Tai-sabaki)
    {
      id: 3,
      subtypesId: 1,
      CategoryId: 1,
      name: 'Sideforflytning',
      nameJapanese: 'Yoko-ashi',
      withPartner: '',
      description: '',
       
    },
    {
      id: 4,
      subtypesId: 1,
      CategoryId: 1,
      name: 'Kroppsvending',
      nameJapanese: 'Sha-tenkan',
      withPartner: '',
      description: '',
       
    },
    {
      id: 5,
      subtypesId: 1,
      CategoryId: 1,
      name: '90 grader dreining',
      nameJapanese: 'Han-tenkan',
      withPartner: '',
      description: '',
       
    },
    {
      id: 6,
      subtypesId: 1,
      CategoryId: 1,
      name: '180 grader dreining',
      nameJapanese: 'Zen-tenkan',
      withPartner: '',
      description: '',
       
    },
    // 2 / 1 Fallteknikk (Ukemi-waza)
    {
      id: 7,
      subtypesId: 2,
      CategoryId: 1,
      name: 'Sideveis fall',
      nameJapanese: 'Yoko ukemi',
      withPartner: false,
      description: '',
      medialink: "https://youtube.com/embed/K64QVhaTY4g",
       
    },
    {
      id: 8,
      subtypesId: 2,
      CategoryId: 1,
      name: 'Forover fall',
      nameJapanese: 'Mae ukemi',
      withPartner: false,
      description: ''
    },
    {
      id: 9,
      subtypesId: 2,
      CategoryId: 1,
      name: 'Bakover fall',
      nameJapanese: 'Ushiro ukemi',
      withPartner: false,
      description: 'https://youtube.com/embed/zo77Oka-Fdc',
       
    },
    {
      id: 10,
      subtypesId: 2,
      CategoryId: 1,
      name: 'Forover volt',
      nameJapanese: 'Kaiten mae ukemi',
      withPartner: false,
      description: '',
      medialink: "https://www.youtube.com/embed/0glU6Qu06kU",
       
    },
    {
      id: 11,
      subtypesId: 2,
      CategoryId: 1,
      name: 'Bakover volt',
      nameJapanese: 'Kaiten ushiro ukemi',
      withPartner: false,
      description: '',
      medialink: "https://www.youtube.com/embed/yPmA8yhNSVY",
       
    },
    // 3 / 1 Kast / Fellinger (Nage waza)
    {
      id: 12,
      subtypesId: 3,
      CategoryId: 1,
      name: 'Stor ytre benfelling',
      nameJapanese: 'O soto o toshi',
      withPartner: true,
      description: '',
      medialink: "https://youtube.com/embed/D0EUy-iAFIY",
       
    },
    {
      id: 13,
      subtypesId: 3,
      CategoryId: 1,
      name: 'Stort hoftekast',
      nameJapanese: 'O goshi',
      withPartner: true,
      description: '',
      medialink: "https://www.youtube.com/embed/yzqnvf9z6cw",
       
    },
    // 4 / 1 Slag (Tsuki waza)
    {
      id: 14,
      subtypesId: 4,
      CategoryId: 1,
      name: 'Rett slag med fremste hånd',
      nameJapanese: 'Tobikomi zuki',
      withPartner: '',
      description: '',
       
    },
    {
      id: 15,
      subtypesId: 4,
      CategoryId: 1,
      name: 'Rett slag med bakerste hånd',
      nameJapanese: 'Gyaku zuki',
      withPartner: '',
      description: '',
      medialink: "https://www.youtube.com/embed/CyRUjLXX0f0",
       
    },
    {
      id: 16,
      subtypesId: 4,
      CategoryId: 1,
      name: 'Slagkombinasjon med rette slag',
      nameJapanese: 'Tobikomi zuki / Gyaku zuki',
      withPartner: '',
      description: '',
       
    },
    // 5 / 1 Spark (Keri waza)
    {
      id: 17,
      subtypesId: 5,
      CategoryId: 1,
      name: 'Grunnleggende rett spark med bakerste ben',
      nameJapanese: 'Gyaku mae geri',
      withPartner: '',
      description: '',
      medialink: "https://www.youtube.com/embed/88ipOGgk2IY",
       
    },
    {
      id: 18,
      subtypesId: 5,
      CategoryId: 1,
      name: 'Grunnleggende rett spark med fremste ben',
      nameJapanese: 'Tsurikomi mae geri',
      withPartner: '',
      description: '',
       
    },
    // 6 / 1 Mønster (Kata)
    {
      id: 19,
      subtypesId: 6,
      CategoryId: 1,
      name: 'Go kyu kata - Guard, fem retninger',
      nameJapanese: 'Zenkutsu-dachi / Shuto',
      withPartner: '',
      description: '',
       
    },
    // 7 / 1 Blokkeringer (Uke waza)
    {
      id: 20,
      subtypesId: 7,
      CategoryId: 1,
      name: 'Lav blokk, innenfra og ut',
      nameJapanese: 'Gedan barai',
      withPartner: '',
      description: '',
      medialink: "https://www.youtube.com/embed/W386vQbE46M"
    },
    {
      id: 21,
      subtypesId: 7,
      CategoryId: 1,
      name: 'Mellom blokk, innenfra og ut',
      nameJapanese: 'Uchi-uke',
      withPartner: '',
      description: '',
       
    },
    {
      id: 22,
      subtypesId: 7,
      CategoryId: 1,
      name: 'Høy blokk, nedenfra og opp',
      nameJapanese: 'Age-uke',
      withPartner: '',
      description: '',
       
    },
    {
      id: 23,
      subtypesId: 7,
      CategoryId: 1,
      name: 'Mellom blokk, utenfra og inn',
      nameJapanese: 'Soto-uke',
      withPartner: '',
      description: '',
       
    },
    {
      id: 24,
      subtypesId: 7,
      CategoryId: 1,
      name: 'Lav blokk, unenfra og inn',
      nameJapanese: 'Sukui-uke',
      withPartner: '',
      description: '',
      medialink: "https://www.youtube.com/embed/b9ZLHJ84Qww",
       
    },
    {
      id: 25,
      subtypesId: 7,
      CategoryId: 1,
      name: 'Lav kryssblokk, ovenfra og ned',
      nameJapanese: 'Gedan juji-uke',
      withPartner: '',
      description: '',
       
    },
    {
      id: 26,
      subtypesId: 7,
      CategoryId: 1,
      name: 'Høy kryssblokk, nedenfra and opp',
      nameJapanese: 'Jodan juji-uke',
      withPartner: '',
      description: '',
      medialink: "https://www.youtube.com/embed/lvKByezP7nE",
       
    },


    // 
    // Kategori 2 har 4 subtyper med totalt 22 øvelser: id 28 til 49
    // 4 subtyper 
    {
      id: 27,
      subtypesId: 8,
      CategoryId: 2,
      name: 'Forsvar mot hårtak',
      numberTJK: '511a',
      withPartner: true,
      description: '511a Forsvar mot hårtak Høyre hånd holder motstanders høyre hånd. Venstre hånd på motstanders høyre albue. Gå først fram og så til siden. slik at motstander står bøyd framover. NB: Forsvarer står ikke med bøyd rygg!  Frigjøring her og gå deretter et steg fram og i fra.',
      medialink: 'images/Exercises/511a.png',
       
    },
    {
      id: 28,
      subtypesId: 8,
      CategoryId: 2,
      name: 'Forsvar mot klestak',
      numberTJK: '511b',
      withPartner: true,
      description: '511b Forsvar mot klestak Venstre hånd på albue. Høyre hånd mot kroppen. Samtidig balansebrytning ut mot siden. Hoftene svinges bort fra Motstander (beskyttelse). Felling med Stor ytre benfelling.',
      medialink: 'images/Exercises/511b.png',
       
    },
    {
      id: 29,
      subtypesId: 8,
      CategoryId: 2,
      name: 'Forsvar mot håndleddstak nedenfra',
      numberTJK: '511d',
      withPartner: true,
      description: '511d Forsvar mot handleddstak nedenfra Strekk ut armene og vri hendene utover mens du går ifra. Siden til. Husk å være avslappet i handledd.',
      medialink: 'images/Exercises/511d.png',
       
    },
    {
      id: 30,
      subtypesId: 8,
      CategoryId: 2,
      name: 'Forsvar mot håndleddstak ovenfra',
      numberTJK: '511e',
      withPartner: true,
      description: '511e Forsvar mot håndleddstak ovenfra Høyre hånd over motstanders høyre håndledd, frigjør venstre hånd v.h.a. minste motstands vei • vektstangprinsippet. Venstre hånd holder igjen motstanders venstre hånd og frigjør høyre hånd v.h.a. minste motstands vei.',
      medialink: 'images/Exercises/511e.png',
       
    },
    {
      id: 31,
      subtypesId: 8,
      CategoryId: 2,
      name: 'Forsvar mot strupetak',
      numberTJK: '512a',
      withPartner: true,
      description: '512a Forsvar mot strupetak Begge hender mot motstanders håndledd og press i sammen mens høyre bein på tå frem (beskyttelse) for så å skyve egen kropp i fra.',
      medialink: 'images/Exercises/512a.png',
       
    },
    {
      id: 32,
      subtypesId: 8,
      CategoryId: 2,
      name: 'Forsvar mot strupetak mot vegg',
      numberTJK: '512b',
      withPartner: true,
      description: '512b Forsvar mot strupetak mot vegg Høyre hånd går over motstanders venstre hånd og under Motstanders høyre hånd. Kroppsvending samtidig som en vipper med begge armer. Avstand.',
      medialink: 'images/Exercises/512b.png',
       
    },
    {
      id: 33,
      subtypesId: 8,
      CategoryId: 2,
      name: 'Forsvar mot omfavning over armene (stor ytre benfelling)',
      numberTJK: '513a',
      withPartner: true,
      description: '513a Hendene på hoftene, skyv i fra 45 grader til siden. Balansebrytning. Gå inn med stor ytre benfelling.',
      medialink: 'images/Exercises/513a.png',
       
    },
    {
      id: 34,
      subtypesId: 8,
      CategoryId: 2,
      name: 'Forsvar mot omfavning over armene (stort hoftekast)',
      numberTJK: '513A',
      withPartner: true,
      description: '513 A Hendene på hoftene, skyv ifra 90 grader bakover. Balansebrytning. Inn og fell med stort hoftekast.',
      medialink: 'images/Exercises/513bigA.png',
       
    },
    {
      id: 35,
      subtypesId: 8,
      CategoryId: 2,
      name: 'Forsvar mot rett slag, kroppsvending',
      numberTJK: '514a',
      withPartner: true,
      description: '514 a Rett slag, kroppsvending',
      medialink: 'images/Exercises/514a.png',
       
    },
    {
      id: 36,
      subtypesId: 8,
      CategoryId: 2,
      name: 'Forsvar mot rett salg, sideforflytning',
      numberTJK: '514A',
      withPartner: true,
      description: '514 A Rett slag, sideforflytning',
      medialink: 'images/Exercises/514bigA.png',
       
    },
    {
      id: 37,
      subtypesId: 8,
      CategoryId: 2,
      name: 'Forsvar mot rett spark, kroppsvending',
      numberTJK: '515a',
      withPartner: true,
      description: '515 a Rett spark, kroppsvending. Kun forflytninger med god avstand. Knyttneve ved spark-blokk.',
      medialink: 'images/Exercises/515a.png',
       
    },
    {
      id: 38,
      subtypesId: 8,
      CategoryId: 2,
      name: 'Forsvar mot rett spark, sideforflytning',
      numberTJK: '515A',
      withPartner: true,
      description: '515 A Rett spark, sideforflyttning. Kun forflytninger med god avstand. Knyttneve ved spark-blokk.',
      medialink: 'images/Exercises/515bigA.png',
       
    },
    {
      id: 39,
      subtypesId: 9,
      CategoryId: 2,
      name: 'Forsvar mot strupetak',
      numberTJK: '522a',
      withPartner: true,
      description: '522a Høyre hånd på skrått over bryst/skuldrer. Venstre hånd frigjør luftveiene. Glid i fra.',
      medialink: 'images/Exercises/522a.png',
       
    },
    {
      id: 40,
      subtypesId: 10,
      CategoryId: 2,
      name: 'Forsvar mot hårtak',
      numberTJK: '531a',
      withPartner: true,
      description: '531a Begge hender på Motstanders hånd, samtidig gå frem med venstre fot, bøy ned og rundt skarpt og raskt bend i Motstanders håndledd. og gå ifra.',
      medialink: 'images/Exercises/531a.png',
       
    },
    {
      id: 41,
      subtypesId: 10,
      CategoryId: 2,
      name: 'Forsvar mot håndleddstak',
      numberTJK: '531e',
      withPartner: true,
      description: '531e Gå fram til siden. Frigjør høyre hånd og gå videre mens en frigjør venstre hånd.',
      medialink: 'images/Exercises/531e.png',
       
    },
    {
      id: 42,
      subtypesId: 10,
      CategoryId: 2,
      name: 'Forsvar mot strupetak',
      numberTJK: '532a',
      withPartner: true,
      description: '532a Høyre hånd høyt opp samtidig en slags kroppsvending fram (45°) til siden.',
      medialink: 'images/Exercises/532a.png',
       
    },
    {
      id: 43,
      subtypesId: 10,
      CategoryId: 2,
      name: 'Forsvar mot strangulering med armen',
      numberTJK: '532c',
      withPartner: true,
      description: '532c Få luft med begge hender. Albuene inn til kroppen (ikke synke ned!) Ta med motstanders albue/skulder 180° ut til siden i tre halvsirkler, avstand.',
      medialink: 'images/Exercises/532c.png',
       
    },
    {
      id: 44,
      subtypesId: 10,
      CategoryId: 2,
      name: 'Forsvar mot omfavning over armene',
      numberTJK: '533a',
      withPartner: true,
      description: '533a Synke ned og samtidig låse med begge hender. Så smyge bakover og samtidig holde Motstanders høyre arm. Avstand.',
      medialink: 'images/Exercises/533a.png',
       
    },
    {
      id: 45,
      subtypesId: 11,
      CategoryId: 2,
      name: 'Forsvar mot håndleddstak, sittende skrevs over',
      numberTJK: '541f',
      withPartner: true,
      description: '541f Hoftestøt samtidig som armene frigjør seg ved en sirkelbevegelse. Begge hendene på hoftene for å ta imot, ansiktet til siden. 1) Skyv Motstander direkte til siden med begge under, eller 2) Skyv kneet ned med en hånd og dytt til siden med den andre hånden, samtidig med hoftestøt.',
      medialink: 'images/Exercises/541f.png',
       
    },
    {
      id: 46,
      subtypesId: 11,
      CategoryId: 2,
      name: 'Forsvar mot strupetak, på kne ved siden av',
      numberTJK: '542e',
      withPartner: true,
      description: '542e Venstre hånd pa motstanders høyre hånd. Høyre hånd i motsatt armhule, samtidig skyver knærne til motstanderen oppover og ned til siden (45°), stå opp og avstand.',
      medialink: 'images/Exercises/542e.png',
       
    },
    {
      id: 47,
      subtypesId: 11,
      CategoryId: 2,
      name: 'Forsvar mot strupetak, sittende skrevs over',
      numberTJK: '542f',
      withPartner: true,
      description: '542f Høyre hånd under Motstanders hender. Venstre hånd pa albue. Hoftestøt og skyv. Venstre hånd på hofte og høyre hånd på håndledd og et nytt hoftestøt mens en skyver og trekker',
      medialink: 'images/Exercises/542f.png',
       
    },
    {
      id: 48,
      subtypesId: 11,
      CategoryId: 2,
      name: 'Forsvar mot strupetak, sittende mellom bena',
      numberTJK: '542g',
      withPartner: true,
      description: '542g  Venstre hånd på Motstanders høyre hånd. Høyre hand i motsatt armhule. samtidig hoftene til side og enten: 1) Sakse med beina eller 2) Venstre fot på Motstanders høyre kne og strekk ut mens høyre fot skyver over',
      medialink: 'images/Exercises/542g.png',
       
    },

    // Kategori 3 har 1 subtyper med totalt 1 øvelse med id 50
    {
      id: 49,
      subtypesId: 12,
      name: "Sirkeltrening",
      WithPartner: true,
      description: ": Forsvar mot uavtalte kontaktgrep fra gult pensum."
    },


    // Kategori 4 "Skadeforebyggende,( eller basisøvelser, generelle øvelser...) -> SubtypeID 4 indikerer "nivå 1"
    // Hentet fra to pdf på skadefri.no -> judo + Taekwondo. 
    // 
    {
      id: 50,
      subtypeID: 14,
      categoryID: 4,
      name: 'Knebøy',
      // ved inspisering av koden på skadefri.no fant jeg følgende: 
      //A)  https://vimeo.com/222059954 (denne går til Vimeo)
      // B) https://player.vimeo.com/video/222059954 (viser )
      // <iframe src="https://player.vimeo.com/video/222059954" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> //
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/222059954",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Innarbeide god knebøyteknikk',
      instructions: [
        'Ha hoftebreddes avstand mellom føttene',
        'Start bevegelsen fra hofta',
        'Ha kne over tå',
        'Tenk at du skal sette deg på en stol',
        'Hold ryggen rett',
      ],
       
    },
    {
      id: 51,
      subtypeID: 14,
      categoryID: 4,
      name: 'Utfall forover',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/222060022",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre stabiliteten i bena',
      instructions: [
        'Gjør utfall forover',
        'Ha kne over tå',
        'Hold en oppreist stilling gjennom hele øvelsen',
      ],
       
    },
    {
      id: 52,
      subtypesId: 14,
      categoryID: 4,
      name: 'Utfall bakover',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/222060048",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre stabiliteten i bena',
      instructions: [
        'Gjør utfall bakover',
        'Ha kne over tå',
        'Hold en oppreist stilling gjennom hele øvelsen',
      ],
       
    },
    {
      id: 53,
      subtypeID: 14,
      categoryID: 4,
      name: 'Utfall sideveis',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/222060139",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre forflytninger og stabiliteten i bena',
      instructions: [
        'Gjør dype sidesteg til hver side',
        'Ha kne over tå',
      ],
       
    },
    {
      id: 54,
      subtypeID: 14,
      categoryID: 4,
      name: 'Stående roing',
      withPartner: true,
      withRubberband: true,
      medialink: "https://player.vimeo.com/video/222059829",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre styrken i skulderen og øvre del av ryggen',
      instructions: [
        'Dra strikken bakover',
        'Ha lave skuldre',
        'Albuene inntil kroppen',
        'Klem skulderbladene sammen',
      ],
       
    },
    {
      id: 55,
      subtypeID: 14,
      categoryID: 4,
      name: 'Y oppover',
      withPartner: true,
      withRubberband: true,
      medialink: "https://player.vimeo.com/video/222059816",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre styrken i skulderen og øvre del av ryggen',
      instructions: [
        'Hev armene i Y-mønster',
        'Hold armene strake',
        'Hold overkroppen rett og skulderbuen lav',
        'Press skulderbladene sammen og ned i sluttstilling',
      ],
       
    },
    {
      id: 56,
      subtypeID: 14,
      categoryID: 4,
      name: 'Utadrotasjon skulder',
      withPartner: true,
      withRubberband: true,
      medialink: "https://player.vimeo.com/video/222059832",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre kraft og kontroll i rotatorcuffen',
      instructions: [
        'Albue og skulder i 90 grader',
        'Beveg armene rolig nedover og oppover',
        'Utfordre deg med ulike typer baller og vekter',
      ],
       
    },
    {
      id: 57,
      subtypesId: 14,
      categoryID: 4,
      name: 'Nordic Hamstrings',
      withPartner: true,
      withRubberband: true,
      medialink: "https://player.vimeo.com/video/210810547",
      //siste jeg sjekket
      repetitions: '3 x 3-5 repetisjoner',
      purpose: 'Styrke baksiden av lårene',
      instructions: [
        'Stå på knærne på en matte eller pute',
        'Hold kroppen rett',
        'Senk deg fremover, brems bevegelsen med baksiden av lårene',
        'Bruk armene for å skyve deg tilbake til utgangsstillingen',
      ],
       
    },
    {
      // Tawkwondo nivå 1
      id: 58,
      subtypeID: 14,
      categoryID: 4,
      name: 'Stående rotasjon',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/",
      repetitions: '2 x 8 repetisjoner, hold ca 3-4 sekunder',
      purpose: 'Bedre mobiliteten på baksiden av lårene og i overkroppen',
      instructions: [
        'Ha en rett linje gjennom hele kroppen, gjør deg så lang som mulig',
        'Hold motsatt arm på foten',
        'Roter hele overkroppen så langt du kommer',
        'Ha så strake knær som mulig',
      ],
       
    },
    {
      id: 59,
      subtypeID: 14,
      categoryID: 4,
      name: 'Nedtrekk',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre styrken i skulderen og øvre del av ryggen',
      instructions: [
        'Hold strikken med en skulderbreddes avstand',
        'Tommelen skal peke oppover',
        'Stabiliser i magen og ryggen',
        'Strekk strikken og klem skulderbladene sammen',
      ],
       
    },
    {
      id: 60,
      subtypeID: 14,
      categoryID: 4,
      name: 'Y oppover',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre styrken i skulderen og øvre del av ryggen',
      instructions: [
        'Hev armene i Y-mønster',
        'Hold armene strake',
        'Hold overkroppen rett og skulderbuen lav',
        'Press skulderbladene sammen og ned i sluttstilling',
      ],
       
    },
    {
      id: 61,
      subtypeID: 14,
      categoryID: 4,
      name: 'Pil og bue',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre styrken i skulderen og øvre del av ryggen',
      instructions: [
        'Trekk strikken ved å skyve skulderen bakover og roter kroppen',
        'Start bevegelsen med albuen, hold den motsatte armen strak frem',
      ],
       
    },
    {
      id: 62,
      subtypeID: 14,
      categoryID: 4,
      name: 'Knebøy',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Innarbeide god knebøyteknikk',
      instructions: [
        'Ha hoftebreddes avstand mellom føttene',
        'Start bevegelsen fra hofta',
        'Ha kne over tå',
        'Tenk at du skal sette deg på en stol',
        'Hold ryggen rett',
      ],
       
    },
    {
      id: 63,
      subtypeID: 14,
      categoryID: 4,
      name: 'Dyp sumo-knebøy',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/",
      repetitions: '2 x 8 repetisjoner',
      purpose: 'Bedre mobilitet i hofter',
      instructions: [
        'Gjør dyp knebøy med hoftene rotert utover',
        'Skyv knærne ut og brystet frem',
        'Hold ryggen rett mens du strekker ut knærne så godt som mulig',
      ],
       
    },
    {
      //Judo nivå 2
      // Y 66 + Utad 65 + Nordic 70 finnes på nivå 1 
      id: 64,
      subtypesId: 15,
      categoryID: 4,
      name: 'Utadrotasjon skulder',
      withPartner: true,
      withRubberband: true,
      medialink: "https://player.vimeo.com/video/222059832",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre kraft og kontroll i rotatorcuffen',
      instructions: [
        'Albue og skulder i 90 grader',
        'Beveg armene rolig nedover og oppover',
        'Utfordre deg med ulike typer baller og vekter',
      ],
       
    },
    {
      id: 65,
      subtypeID: 15,
      categoryID: 4,
      name: 'Y oppover',
      withPartner: true,
      withRubberband: true,
      medialink: "https://player.vimeo.com/video/222059816",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre styrken i skulderen og øvre del av ryggen',
      instructions: [
        'Hev armene i Y-mønster',
        'Hold armene strake',
        'Hold overkroppen rett og skulderbuen lav',
        'Press skulderbladene sammen og ned i sluttstilling',
      ],
       
    },
    {
      id: 66,
      subtypesId: 15,
      categoryID: 4,
      name: 'Stående roing',
      withPartner: true,
      withRubberband: true,
      medialink: "https://player.vimeo.com/video/222059829",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre styrken i skulderen og øvre del av ryggen',
      instructions: [
        'Dra strikken bakover',
        'Ha lave skuldre',
        'Albuene inntil kroppen',
        'Klem skulderbladene sammen',
      ],
       
    },
    {
      id: 67,
      subtypeID: 15,
      categoryID: 4,
      name: 'Tobens innhopp',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/222060099",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre aktivering av hamstringsmuskulatur',
      instructions: [
        'Sats fra begge ben og hopp fremover',
        'Landing i knebøyposisjon',
        'Hold kne over tå',
      ],
       
    },
    {
      id: 68,
      subtypeID: 15,
      categoryID: 4,
      name: 'Push up +',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/222059941",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre styrken og kontrollen i skulderen',
      instructions: [
        'Gjør push up',
        'Hold albuer strake',
        'Hev øvre del av overkroppen mot taket',
      ],
       
    },
    {
      id: 69,
      subtypeID: 15,
      categoryID: 4,
      name: 'Nordic Hamstrings',
      withPartner: true,
      withRubberband: true,
      medialink: "https://player.vimeo.com/video/173355238",
      repetitions: '3 x 6-8 repetisjoner',
      purpose: 'Styrke baksiden av lårene',
      instructions: [
        'Stå på knærne på en matte eller pute',
        'Hold kroppen rett',
        'Senk deg fremover, brems bevegelsen med baksiden av lårene',
        'Bruk armene for å skyve deg tilbake til utgangsstillingen',
      ],
       
    },
    {
      id: 70,
      subtypeID: 15,
      categoryID: 4,
      name: 'Nedtrekk',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre styrken i skulderen og øvre del av ryggen',
      instructions: [
        'Hold strikken med en skulderbreddes avstand',
        'Tommelen skal peke oppover',
        'Stabiliser i magen og ryggen',
        'Strekk strikken og klem skulderbladene sammen',
      ],
       
    },
    {
      id: 71,
      subtypeID: 15,
      categoryID: 4,
      name: 'Y oppover',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre styrken i skulderen og øvre del av ryggen',
      instructions: [
        'Hev armene i Y-mønster',
        'Hold armene strake',
        'Hold overkroppen rett og skulderbuen lav',
        'Press skulderbladene sammen og ned i sluttstilling',
      ],
       
    },
    {
      id: 72,
      subtypesId: 15,
      categoryID: 4,
      name: 'Pil og bue',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre styrken i skulderen og øvre del av ryggen',
      instructions: [
        'Trekk strikken ved å skyve skulderen bakover og roter kroppen',
        'Start bevegelsen med albuen, hold den motsatte armen strak frem',
      ],
       
    },
    {
      id: 73,
      subtypeID: 15,
      categoryID: 4,
      name: 'Knebøy',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Innarbeide god knebøyteknikk',
      instructions: [
        'Ha hoftebreddes avstand mellom føttene',
        'Start bevegelsen fra hofta',
        'Ha kne over tå',
        'Tenk at du skal sette deg på en stol',
        'Hold ryggen rett',
      ],
       
    },
    {
      id: 74,
      subtypeID: 15,
      categoryID: 4,
      name: 'Dyp sumo-knebøy',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/",
      repetitions: '2 x 8 repetisjoner',
      purpose: 'Bedre mobilitet i hofter',
      instructions: [
        'Gjør dyp knebøy med hoftene rotert utover',
        'Skyv knærne ut og brystet frem',
        'Hold ryggen rett mens du strekker ut knærne så godt som mulig',
      ],
       
    },
    {
      id: 75,
      subtypeID: 15,
      categoryID: 4,
      name: 'Utfall i forskjellige retninger',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre forflytninger og stabiliteten i bena',
      instructions: [
        'Gjør utfall ut i ulike posisjoner',
        'Ha kne over tå på det fremre benet',
        'Gjøres evt. med dytt fra partner',
      ],
       
    },
    {
      id: 76,
      subtypeID: 15,
      categoryID: 4,
      name: 'Stuperen',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/",
      repetitions: '3 x 5 repetisjoner på hvert ben',
      purpose: 'Bedre ryggstabiliteten og styrken i baksiden av lårene',
      instructions: [
        'Finn balansen på ett ben, med kneet lett bøyd',
        'Overkroppen bøyes frem samtidig som benet holdes i lett bøy',
        'Hold ryggen på linje med det utstrakte kneet',
        'Strekk armene frem i den samme linjen',
        'Bruk vekt eller en medisinball for å øke utfordringen',
      ],
       
    },
    {
      // Judo nivå 3
      id: 77,
      subtypeID: 16,
      categoryID: 4,
      name: 'Knebøy +',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/222059991",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre stabiliteten i bena',
      instructions: [
        'Stå på bosu',
        'Ha hoftebreddes avstand mellom føttene',
        'Start bevegelsen fra hofta',
        'Ha kne over tå',
        'Tenk at du skal sette deg på en stol med rett rygg',
      ],
       
    },
    {
      // kopi på nivå 1 og 2 og 3
      id: 78,
      subtypeID: 16,
      categoryID: 4,
      name: 'Y oppover',
      withPartner: true,
      withRubberband: true,
      medialink: "https://player.vimeo.com/video/222059816",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre styrken i skulderen og øvre del av ryggen',
      instructions: [
        'Hev armene i Y-mønster',
        'Hold armene strake',
        'Press skulderbladene sammen og ned i sluttstilling',
      ],
       
    },
    {
      //kopi nivå 2
      id: 79,
      subtypeID: 16,
      categoryID: 4,
      name: 'Push up +',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/222059941",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre styrken og kontrollen i skulderen',
      instructions: [
        'Gjør push up',
        'Hold albuer strake',
        'Hev øvre del av overkroppen mot taket',
      ],
       
    },
    {
      //kopi nivå 2
      id: 80,
      subtypeID: 16,
      categoryID: 4,
      name: 'Tobens innhopp',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/222060099",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre aktivering av hamstringsmuskulatur',
      instructions: [
        'Sats fra begge ben og hopp fremover',
        'Landing i knebøyposisjon',
        'Hold kne over tå',
      ],
       
    },
    {
      id: 81,
      subtypeID: 16,
      categoryID: 4,
      name: 'Firkanthopp',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/222060109",
      repetitions: '3 x 30 sekunder',
      purpose: 'Bedre eksplosiviteten i retningsendringer',
      instructions: [
        'Hopp i ulike retninger; frem, tilbake, diagonalt',
        'Land mykt på forfoten med kne over tå',
        'Vær nøyaktig og prøv å lande på et bestemt punkt',
      ],
       
    },
    {
      // kopi nivå 1 og 2 og 3
      id: 82,
      subtypeID: 16,
      categoryID: 4,
      name: 'Nordic Hamstrings',
      withPartner: true,
      withRubberband: true,
      medialink: "https://player.vimeo.com/video/173355238",
      repetitions: '3 x 8-12 repetisjoner',
      purpose: 'Styrke baksiden av lårene',
      instructions: [
        'Stå på knærne på en matte eller pute',
        'Hold kroppen rett',
        'Senk deg fremover, brems bevegelsen med baksiden av lårene',
        'Bruk armene for å skyve deg tilbake til utgangsstillingen',
      ],
       
    },
    {
      id: 83,
      subtypeID: 16,
      categoryID: 4,
      name: 'Planke med rotasjon',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/",
      repetitions: 'Så mange du klarer med god kontroll',
      purpose: 'Bedre stabiliteten i skulder, skrå mage og rygg',
      instructions: [
        'Hvil kroppen på underarm',
        'Hold kropp og det øverste benet rett',
        'Roter overkroppen',
        'Så mange du klarer med god kontroll',
      ],
       
    },
    {
      id: 84,
      subtypeID: 16,
      categoryID: 4,
      name: 'Utfall med rotasjon',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre mobiliteten i ryggsøylen og skulderen',
      instructions: [
        'Stå i utfallsposisjon',
        'Plasser armen på innsiden av det fremste benet',
      ],
       
    },
    {
      id: 85,
      subtypesId: 16,
      categoryID: 4,
      name: 'Ettbens knebøy',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/",
      repetitions: 'Så mange du klarer med god kontroll',
      purpose: 'Styrke muskulatur og stabiliteten i bena',
      instructions: [
        'Gjør knebøy på ett ben',
        'Ha kne over tå',
        'Unngå at hoften sklir ut til siden',
      ],
       
    },
    {
      id: 86,
      subtypesId: 16,
      categoryID: 4,
      name: 'Sidehopp',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre styrken og kontrollen i hoftene og knær',
      instructions: [
        'Bruk strikk når du klarer øvelsen uten motstand',
        'Land mykt på tærne',
        'Ha kne over tå',
      ],
       
    },
    {
      id: 87,
      subtypeID: 16,
      categoryID: 4,
      name: 'Vendinger',
      withPartner: false,
      withRubberband: false,
      medialink: "https://player.vimeo.com/video/",
      repetitions: '3 x 8-16 repetisjoner',
      purpose: 'Bedre stabiliteten i landinger',
      instructions: [
        'Hopp 45 grader til siden, frem, tilbake',
        'Hold kne over tå i landinger',
        'Bruk strikk som motstand',
      ],
       
    },
  ],
  // Trolig fjerner vi hele model.media, og legger media (video > img) under hver exercise
  media: [
    // 12 øvelser under katagori 2, subtype 1 FORFRA med id fra 1 til 12, med ExerciseID 28 til 39
    {
      id: 1, exerciseId: 28,
      caption: '511a', type: 'img',
      src: "images/Exercises/511a.png"
    },

    // + 11 øvelser til 

    //1 øvelse under katagori 2, subtype 2 SIDEN med id 13
    {
      id: 13, exerciseId: 40,
      caption: '522a', type: 'img',
      src: "images/Exercises/522a.png"
    },
    // 5 øvelser under katagori 2, subtype 3 BAKFRA med id fra 14 til 18 og ExerciseID fra 41 til 45
    {
      id: 14, exerciseId: 41,
      caption: '531a', type: 'img',
      src: "images/Exercises/531a.png"
    },
    // 4 øvelser under katagori 2, subtype 4 BAKKETEKNIKKER med id fra 1 til 12
    {
      id: 19, exerciseId: 46,
      caption: '541f', type: 'img',
      src: "images/Exercises/541f.png"
    },
  ],
};

