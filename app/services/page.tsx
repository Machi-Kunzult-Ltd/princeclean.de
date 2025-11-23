// app/services/page.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

const servicesDetail = [
  {
    id: 'teppichboden',
    title: 'Teppichbodenreinigung',
    image: '/images/services/carpet_cleaning.png',
    description:
      'Geben Sie Ihren Teppichböden neue Frische und verlängern Sie ihre Lebensdauer! Unsere Teppichbodenreinigung entfernt Verschmutzungen tief aus den Fasern und bringt Ihre Böden zum Strahlen. Der Unterschied wird sofort sichtbar sein!',
    features: [
      'Tiefenreinigung für alle Teppichbodenarten',
      'Moderne Reinigungstechnologie',
      'Schnelle Trocknungszeiten',
      'Umweltfreundliche Reinigungsmittel',
    ],
    priceStart: 'ab 4,50€/m²',
    link: '/pricing/teppichboden',
  },
  {
    id: 'teppich',
    title: 'Teppichreinigung',
    image: '/images/services/carpet_cleaning.png',
    description:
      'Geben Sie Ihren Teppichen neue Frische und verlängern Sie ihre Lebensdauer! Unsere Teppichreinigung entfernt Verschmutzungen tief aus den Fasern und bringt Ihre Teppiche zum Strahlen. Der Unterschied wird sofort sichtbar sein!',
    features: [
      'Professionelle Reinigung aller Teppicharten',
      'Schonende Behandlung',
      'Farbauffrischung',
      'Geruchsneutralisierung',
    ],
    priceStart: 'ab 7€/m²',
    link: '/pricing/teppich',
  },
  {
    id: 'polster',
    title: 'Polsterreinigung',
    image: '/images/services/upholstery_cleaning.png',
    description:
      'Unsere Polsterreinigung erfolgt bei Ihnen vor Ort oder in unserem Geschäft – ganz nach Ihrem Wunsch. Wir reinigen Ihre Sofas, Sessel und Stühle professionell und schonend, um Ihre Polstermöbel frisch und sauber zu halten.',
    features: [
      'Vor-Ort oder im Geschäft',
      'Schonende Polsterpflege',
      'Fleckenentfernung',
      'Geruchsbeseitigung',
    ],
    priceStart: 'ab 29€',
    link: '/pricing/polster',
  },
  {
    id: 'textil',
    title: 'Textilreinigung',
    image: '/images/services/dry_cleaning.png',
    description:
      'Wir kümmern uns um die Wäscherei Ihrer Kleidung und Wohntextilien, von Anzügen bis hin zu großen Textilien wie Zelten. Bringen Sie uns Ihre Textilien und erleben Sie eine professionelle Reinigung, die alle Erwartungen erfüllt.',
    features: [
      'Kleidungsreinigung',
      'Bettenwäsche',
      'Vorhänge & Gardinen',
      'Spezialreinigung',
    ],
    priceStart: 'ab 3€',
    link: '/pricing/textil',
  },
  {
    id: 'fenster',
    title: 'Fensterreinigung',
    image: '/images/services/window_cleaning.png',
    description:
      'Mit unserem Fensterreinigungsservice behalten Sie den perfekten Durchblick! Unsere erfahrenen Reinigungskräfte sorgen für streifenfreie Fenster in Ihrem Zuhause oder Büro. Wir kümmern uns sogar darum, Ihre Gardinen abzunehmen, zu reinigen und wieder aufzuhängen.',
    features: [
      'Streifenfreie Reinigung',
      'Innen und Außen',
      'Rahmenreinigung inklusive',
      'Gardinenservice',
    ],
    priceStart: 'ab 4,50€/m²',
    link: '/pricing/weitere',
  },
  {
    id: 'reinigung',
    title: 'Reinigungsservice',
    image: '/images/services/Cleaning.png',
    description:
      'Ob regelmäßige Unterhaltsreinigung für Ihre Immobilie oder eine gründliche Grundreinigung – als erfahrene cleaning company sind wir stets für Sie da. Unser Team erstellt gerne ein unverbindliches Angebot für eine Reinigung, die genau auf Ihre Bedürfnisse zugeschnitten ist.',
    features: [
      'Unterhaltsreinigung',
      'Grundreinigung',
      'Büroreinigung',
      'Hausreinigung',
    ],
    priceStart: 'ab 32€/h',
    link: '/pricing/weitere',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 sm:pb-16 bg-gradient-to-br from-gray-50 to-gray-100 mt-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] mb-6">
              Unsere Serviceleistungen
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Von der Teppichreinigung bis zur Polsterpflege - wir sorgen dafür,
              dass Ihr Zuhause wieder strahlt.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {servicesDetail.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Service Image */}
                <div className="h-64 sm:h-72 md:h-80 relative overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 rounded-t-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Service Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="text-green-500">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <span className="text-2xl font-bold text-[#3b82f6]">
                      {service.priceStart}
                    </span>
                    <Link href={service.link} className="btn btn-primary text-sm">
                      Preise ansehen
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Bereit für professionelle Reinigung?
            </h2>
            <p className="text-lg opacity-90">
              Kontaktieren Sie uns noch heute für eine kostenlose Beratung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact" className="btn btn-white">
                Kontakt aufnehmen
              </Link>
              <Link href="/pricing" className="btn btn-outline">
                Alle Preise ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}