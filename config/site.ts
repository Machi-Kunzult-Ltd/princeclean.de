// app/config/site.ts


export const siteConfig = {
  name: 'PrinceClean Teppichreinigung & Reinigungsservice',
  description:
    'Professionelle Teppich-, Polster- und Textilreinigung in Berlin. Über 10 Jahre Erfahrung. Umweltfreundlich und zuverlässig.',
  url: 'https://princeclean.de',
  
  company: {
    name: 'PrinceClean Teppichreinigung',
    owner: 'Inhaber Abel Modibo',
    phone: '+49 30 224 59 738',
    mobile: '+49 176 2484 7563',
    whatsapp: '+49 176 2484 7563',
    email: 'kontakt@princeclean.de',
    address: {
      street: 'Haselhorster Damm 42',
      city: 'Berlin',
      zip: '13599',
      country: 'Germany',
    },
    hours: {
      weekday: 'Mo-Fr: 09:00 - 18:00 Uhr',
      saturday: 'Sa: 09:00 - 14:00 Uhr',
    },
    social: {
      facebook: 'https://facebook.com/PrinceClean-Teppichreinigung-102871252356929/',
      instagram: 'https://Instagram.com/princeclean_teppichreinigung/',
    },
    tax: {
      number: '19/612/01272',
      vat: 'DE351058798',
    },
  },

  hero: {
    title: 'Ihre Teppiche professionell gereinigt',
    subtitle:
      'Vertrauen Sie auf über 10 Jahre Erfahrung in der Teppichreinigung. Wir bringen Ihre Teppiche und Polster zum Strahlen.',
    description:
      'Möchten Sie Ihre Teppiche oder Teppichböden professionell reinigen lassen? Bei PrinceClean sind Sie genau richtig!',
    primaryButton: 'Kostenlos anfragen',
    secondaryButton: 'Unsere Services',
  },

  stats: [
    { number: '10+', text: 'Jahre Erfahrung' },
    { number: '1000+', text: 'Zufriedene Kunden' },
    { number: '24h', text: 'Schnelle Antwort' },
    { number: '100%', text: 'Zufriedenheitsgarantie' },
  ],

  services: [
    {
      id: 'teppichboden',
      title: 'Teppichbodenreinigung',
      icon: '🏠',
      image: '/images/services/carpet_cleaning.png',
      shortDescription:
        'Professionelle Reinigung für alle Arten von Teppichböden mit modernster Technologie.',
      priceStart: 'ab 4,50€/m²',
      link: '/pricing/teppichboden',
    },
    {
      id: 'polster',
      title: 'Polsterreinigung',
      icon: '🛋️',
      image: '/images/services/upholstery_cleaning.png',
      shortDescription:
        'Schonende Reinigung für Sofas, Sessel und andere Polstermöbel.',
      priceStart: 'ab 29,00€',
      link: '/pricing/polster',
    },
    {
      id: 'fenster',
      title: 'Fensterreinigung',
      icon: '🪟',
      image: '/images/services/window_cleaning.png',
      shortDescription:
        'Streifenfreie Reinigung für kristallklare Fenster in Ihrem Zuhause.',
      priceStart: 'ab 4,50€/m²',
      link: '/pricing/weitere',
    },
  ],

  process: [
    {
      number: 1,
      icon: '📞',
      title: 'Kontakt aufnehmen',
      description:
        'Rufen Sie uns an oder nutzen Sie unser Kontaktformular für eine kostenlose Beratung.',
    },
    {
      number: 2,
      icon: '📅',
      title: 'Termin vereinbaren',
      description:
        'Wir finden einen passenden Termin, der in Ihren Zeitplan passt.',
    },
    {
      number: 3,
      icon: '🧽',
      title: 'Professionelle Reinigung',
      description:
        'Unser Team reinigt Ihre Teppiche mit modernster Technologie und umweltfreundlichen Mitteln.',
    },
    {
      number: 4,
      icon: '✨',
      title: 'Perfekte Ergebnisse',
      description:
        'Freuen Sie sich über saubere, frische Teppiche und 100% Zufriedenheitsgarantie.',
    },
  ],

  benefits: [
    {
      icon: '🏆',
      title: 'Über 10 Jahre Erfahrung',
      description: 'Bewährte Expertise in der professionellen Teppichreinigung',
    },
    {
      icon: '🌱',
      title: 'Umweltfreundlich',
      description: 'Nur biologisch abbaubare Reinigungsmittel',
    },
    {
      icon: '⚡',
      title: 'Schnelle Trocknung',
      description: 'Moderne Technologie für kurze Trocknungszeiten',
    },
  ],

  navigation: [
    // { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Preise', href: '/pricing' },
    { name: 'Galerie', href: '/gallery' },
    { name: 'Über uns', href: '/about' },
    { name: 'Kontakt', href: '/contact' },
  ],

  pricingNavigation: [
    { name: 'Teppichreinigung', href: '/pricing/teppich' },
    { name: 'Teppichbodenreinigung', href: '/pricing/teppichboden' },
    { name: 'Polsterreinigung', href: '/pricing/polster' },
    { name: 'Textilreinigung', href: '/pricing/textil' },
    { name: 'Weitere Dienstleistungen', href: '/pricing/weitere' },
  ],
};