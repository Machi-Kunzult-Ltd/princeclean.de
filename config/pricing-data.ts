// Teppichreinigung Pricing Data
export const teppichPricing = {
    title: 'Preise Teppichreinigung',
    subtitle: 'Wir reinigen Ihre Teppiche bereits ab 7€/m² ganz ohne versteckte Nebenkosten!',
    categories: [
      {
        name: 'Standard-Reinigung',
        price: '7€/m²',
        description: 'Einfache, maschinengewebte Kunstfaser-Teppiche: Kinderspielteppiche, leichte Flachgewebe',
      },
      {
        name: 'Gewebte Teppiche',
        price: '10€/m²',
        description: 'Gewebte, flauschige Kunstfaser-Teppiche: Kurzflorteppiche, Hochflorteppiche, Flokatis, Schmutzfangmatten',
      },
      {
        name: 'Geknüpfte Teppiche',
        price: '15€/m²',
        description: 'Geknüpfte, dicht gewebte Kunst- und Naturfaser-Teppiche: schwere Hochflorteppiche, Kunstfaserteppiche mit doppelter Rückwand, Wollteppiche flach, Schlingenteppiche, Orient/Perser',
      },
      {
        name: 'Schwere Naturfaser',
        price: '20€/m²',
        description: 'Schwere Naturfaser-Teppiche: Berber, Nepal, Langflor Wollteppiche',
      },
      {
        name: 'Hochwertige Teppiche',
        price: '25€/m²',
        description: 'Sehr schwere oder hochwertige Naturfaser-Teppiche: Kaschmir/Seidenteppiche, Wollteppiche mit sehr hoher Knüpfdichte',
      },
    ],
  };
  
  // Teppichbodenreinigung Pricing Data
  export const teppichbodenPricing = {
    title: 'Preise Teppichbodenreinigung',
    subtitle: 'Wollen Sie ihren Teppichboden einmal auffrischen lassen? Kein Problem. Sprechen Sie uns einfach an!',
    categories: [
      { area: 'bis zu 100m²', price: '12,00€/m²' },
      { area: 'bis zu 200m²', price: '10,00€/m²' },
      { area: 'bis zu 300m²', price: '8,00€/m²' },
      { area: 'bis zu 500m²', price: '6,00€/m²' },
      { area: 'über 500m²', price: '4,50€/m²' },
    ],
    extras: [
      {
        name: 'Fleckenentfernung',
        price: '10,00€/m²',
        description: 'Die Fleckenarten werden vorab bestimmt und können dann mit unterschiedlichen Mitteln vorbehandelt werden.',
      },
      {
        name: 'Intensivreinigung',
        price: '2,50€/m²',
        description: 'Zusätzlich zur Preiskategorie. Je nachdem wie hoch der Verschmutzungsgrad Ihres Teppichbodens ist, intensivieren wir die Reinigung.',
      },
    ],
    impregnation: {
      title: 'Imprägnierung',
      description: 'Wir empfehlen grundsätzlich eine Imprägnierung für Ihren Teppichboden. Das schützt die Faser länger vor neuen Verunreinigungen.',
      prices: [
        { area: 'bis zu 100m²', price: '6,00€/m²' },
        { area: 'bis zu 200m²', price: '5,00€/m²' },
        { area: 'bis zu 300m²', price: '4,00€/m²' },
        { area: 'bis zu 500m²', price: '3,00€/m²' },
        { area: 'über 500m²', price: '2,25€/m²' },
      ],
    },
  };
  
  // Polsterreinigung Pricing Data
  export const polsterPricing = {
    title: 'Preise Polsterreinigung',
    subtitle: 'Wir reinigen Ihre Polstermöbel professionell & günstig. Sprechen Sie uns einfach an!',
    note: '*keine Ledergarnituren*',
    furniture: [
      {
        type: 'Sessel',
        sizes: [
          { size: 'S', price: '29,00€' },
          { size: 'M', price: '39,00€' },
          { size: 'L', price: '49,00€' },
          { size: 'XL', price: '59,00€' },
        ],
      },
      {
        type: 'Hocker',
        sizes: [
          { size: 'S', price: '19,00€' },
          { size: 'M', price: '29,00€' },
          { size: 'L', price: '39,00€' },
          { size: 'XL', price: '49,00€' },
        ],
      },
      {
        type: '2-Sitzer',
        sizes: [
          { size: 'S', price: '59,00€' },
          { size: 'M', price: '79,00€' },
          { size: 'L', price: '99,00€' },
          { size: 'XL', price: '119,00€' },
        ],
      },
      {
        type: '3-Sitzer',
        sizes: [
          { size: 'S', price: '79,00€' },
          { size: 'M', price: '99,00€' },
          { size: 'L', price: '119,00€' },
          { size: 'XL', price: '149,00€' },
        ],
      },
      {
        type: 'Ecksofa',
        sizes: [
          { size: 'S', price: '199,00€' },
          { size: 'M', price: '219,00€' },
          { size: 'L', price: '259,00€' },
          { size: 'XL', price: '289,00€' },
        ],
      },
    ],
    extras: [
      {
        name: 'Geruchsneutralisierung',
        price: '5,00€/Sitz',
        description: 'zur Neutralisierung von Gerüchen von z.B. Haustieren',
      },
      {
        name: 'Imprägnierung',
        price: '5,00€/Sitz',
        description: 'für einen langanhaltenden Schutz vor neuen Verschmutzungen',
      },
      {
        name: 'Fleckenvorbehandlung',
        price: '10,00€/Sitz',
        description: 'intensive Vorbehandlung von Flecken',
      },
    ],
  };
  
  // Textilreinigung Pricing Data
  export const textilPricing = {
    title: 'Preise Textilreinigung',
    subtitle: 'Professionelle und günstige Textilpflege für Privat- und Geschäftskunden',
    categories: {
      oberbekleidung: {
        title: 'Oberbekleidung',
        items: [
          { name: 'Anzug (2-teilig)', price: '15,00€' },
          { name: 'Blazer (normal)', price: '9,00€' },
          { name: 'Blazer/Gehrock (lang)', price: '14,50€' },
          { name: 'Bluse (einfach)', price: '3,00€' },
          { name: 'Bluse (aufwendig)', price: '5,50€' },
          { name: 'Bluse (Seide)', price: '6,00€' },
          { name: 'Hemd (normal)', price: '3,00€' },
          { name: 'Hose (normal)', price: '6,00€' },
          { name: 'Jeans (normal)', price: '6,00€' },
          { name: 'Kleid (einfach)', price: 'ab 9,00€' },
          { name: 'Kleid (mit Volant)', price: 'ab 15,50€' },
          { name: 'Kleid (mit Pailletten)', price: 'ab 30,00€' },
          { name: 'Pullover (normal)', price: '5,00€' },
          { name: 'Pullover (Kaschmir)', price: '7,50€' },
          { name: 'Pullunder (normal)', price: '5,00€' },
          { name: 'Rock (einfach)', price: 'ab 3,50€' },
          { name: 'Rock (Plissee)', price: 'ab 9,00€' },
          { name: 'Sakko', price: '9,00€' },
          { name: 'Weste (normal)', price: '5,50€' },
        ],
      },
      festtag: {
        title: 'Festtag',
        items: [
          { name: 'Abendkleid', price: 'ab 30,00€' },
          { name: 'Brautkleid', price: 'ab 135,00€' },
          { name: 'Afrikanischer Anzug 2-tlg.', price: '9,50€' },
          { name: 'Afrikanischer Anzug 3-tlg.', price: '19,00€' },
          { name: 'Afrikanische Agbada', price: '9,50€' },
        ],
      },
      betten: {
        title: 'Betten',
        items: [
          { name: 'Bettwäsche (Bettbezug)', price: '3,00€' },
          { name: 'Bettwäsche (Bettlaken)', price: '3,00€' },
          { name: 'Bettwäsche (Kissenbezug)', price: '2,20€' },
          { name: 'Bettwäsche (10-teilig)', price: '25,00€' },
          { name: 'Daunenkissen', price: '18,00€' },
          { name: 'Daunenfederbett', price: '35,00€' },
          { name: 'Decke/Bettdecke (Synthetik)', price: '18,00€' },
          { name: 'Decke (einfach)', price: '4,50€' },
          { name: 'Decke M (flauschig)', price: '6,50€' },
          { name: 'Decke XL (flauschig)', price: '11,50€' },
          { name: 'Kissen (Synthetik)', price: '5,00€' },
          { name: 'Tagesdecke (1er Bett)', price: '20,00€' },
          { name: 'Tagesdecke (Doppelbett)', price: '25,00€' },
          { name: 'Tagesdecke (XXL)', price: '35,00€' },
        ],
      },
      jacken: {
        title: 'Jacken',
        items: [
          { name: 'Daunenjacke', price: '25,00€' },
          { name: 'Daunenmantel', price: '29,00€' },
          { name: 'Jacke (einfach)', price: '13,00€' },
          { name: 'Pop. Mantel', price: '20,00€' },
          { name: 'Trenchcoat', price: '20,00€' },
          { name: 'Winterjacke (normal)', price: '20,00€' },
          { name: 'Wintermantel', price: '25,00€' },
          { name: 'Wollmantel (normal)', price: '20,00€' },
          { name: 'Wollmantel (lang)', price: '25,00€' },
        ],
      },
      extras: {
        title: 'Extras',
        items: [
          { name: 'Krawatte', price: '4,50€' },
          { name: 'Schaffell', price: 'ab 25,00€' },
          { name: 'Schal/Tuch', price: '4,00€' },
          { name: 'Tischdecke (normal)', price: '4,50€' },
          { name: 'Gardinen pro m²', price: '4,50€' },
          { name: 'Ü-Gardinen pro kg', price: '12,00€' },
          { name: 'Kilowäsche (ungebügelt, gelegt)', price: '4,50€' },
          { name: 'Express-Zuschlag pro Stück', price: '1,00€' },
          { name: 'Imprägnierung (Outdoor-Bekleidung)', price: '5,00€' },
          { name: 'Rucksack', price: '15,00€' },
          { name: 'Textil-Extras', price: '3,00€' },
        ],
      },
      buegeln: {
        title: 'nur Bügeln',
        items: [
          { name: 'Bluse', price: '2,50€' },
          { name: 'Gardinen Stck.', price: '3,50€' },
          { name: 'Hemd', price: '2,50€' },
          { name: 'Hose', price: '3,00€' },
          { name: 'Jacke/Mantel', price: '4,50€' },
          { name: 'Kleider', price: 'ab 4,50€' },
          { name: 'Polo Shirt', price: '2,00€' },
          { name: 'Rock', price: 'ab 2,50€' },
          { name: 'T-Shirt', price: '1,50€' },
        ],
      },
    },
    note: 'Wir übernehmen keine Haftung für Knöpfe, Schnallen, Reißverschlüsse und sonstige Applikationen, desgleichen für Schäden, hervorgerufen durch verborgene Mängel, die trotz sachgemäßer Reinigung auftreten.',
  };
  
  // Weitere Dienstleistungen Pricing Data
  export const weiterePricing = {
    title: 'Zusätzliche Dienstleistungen und Preise',
    subtitle: 'Hier finden Sie unsere zusätzlichen Services mit den entsprechenden Preisen auf einen Blick.',
    intro: 'Erschwingliche professionelle Reinigungsdienste in Berlin - Bei PrinceClean Teppichreinigung Berlin machen wir es Ihnen einfach, genau zu wissen, wofür Sie bezahlen. Ob Fensterreinigung, Hausreinigung oder Vorhangservice – unsere transparenten Preise und unser Expertenteam sorgen für eine reibungslose Buchungserfahrung und makellose Ergebnisse.',
    services: [
      {
        icon: '🧼',
        name: 'Fensterreinigung',
        price: '4,50 €/m²',
        priceUnit: 'inkl. Rahmen',
        description: 'Genießen Sie kristallklare Ausblicke mit unserem Fensterreinigungsservice in Berlin. Wir reinigen sowohl das Glas als auch die Fensterrahmen – perfekt für Häuser, Büros und Unternehmen, die einen streifenfreien Glanz suchen.',
      },
      {
        icon: '🏠',
        name: 'Hausreinigung',
        price: '32 €/Stunde',
        priceUnit: '',
        description: 'Unsere Hausreinigungsdienste in Berlin sind ideal für vielbeschäftigte Haushalte. Buchen Sie flexible Reinigungen auf Stundenbasis von einem vertrauenswürdigen Team. Wir kümmern uns um alles – von der regelmäßigen Haushaltsreinigung bis hin zur Tiefenreinigung und der Reinigung vor dem Umzug.',
      },
      {
        icon: '🪟',
        name: 'Vorhangservice',
        price: '58 € / 29 €',
        priceUnit: 'Abnahme & Wiedereinhängen / nur Wiedereinhängen',
        description: 'Nehmen Sie den Stress aus der Vorhangpflege. Unser Vorhangservice in Berlin umfasst die professionelle Abnahme und das Wiedereinhängen Ihrer Vorhänge. Wählen Sie den vollständigen Service oder nur das Wiedereinhängen, je nach Bedarf.',
      },
    ],
  };