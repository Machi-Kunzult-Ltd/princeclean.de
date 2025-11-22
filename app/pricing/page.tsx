// app/pricing/page.tsx

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

const pricingCategories = [
  {
    title: 'Teppichreinigung',
    icon: '🧽',
    description: 'Professionelle Reinigung für alle Teppicharten',
    priceStart: 'ab 7€/m²',
    link: '/pricing/teppich',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Teppichbodenreinigung',
    icon: '🏠',
    description: 'Gründliche Reinigung für Ihre Teppichböden',
    priceStart: 'ab 4,50€/m²',
    link: '/pricing/teppichboden',
    gradient: 'from-green-500 to-green-600',
  },
  {
    title: 'Polsterreinigung',
    icon: '🛋️',
    description: 'Schonende Reinigung für Polstermöbel',
    priceStart: 'ab 29€',
    link: '/pricing/polster',
    gradient: 'from-red-500 to-red-600',
  },
  {
    title: 'Textilreinigung',
    icon: '👔',
    description: 'Professionelle Reinigung für Kleidung und Textilien',
    priceStart: 'ab 3€',
    link: '/pricing/textil',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Weitere Dienstleistungen',
    icon: '✨',
    description: 'Fenster-, Haus- und Vorhangreinigung',
    priceStart: 'ab 4,50€/m²',
    link: '/pricing/weitere',
    gradient: 'from-orange-500 to-orange-600',
  },
];

export default function PricingOverviewPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] mb-6">
              Unsere Preise
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Transparente und faire Preise für alle unsere Dienstleistungen. Wählen Sie die gewünschte Kategorie aus.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Categories */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingCategories.map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Icon Header */}
                <div className={`bg-gradient-to-br ${category.gradient} p-8 text-center`}>
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 min-h-[48px]">
                    {category.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-[#3b82f6]">
                      {category.priceStart}
                    </span>
                    <div className="flex items-center gap-2 text-[#1e3a8a] font-semibold group-hover:gap-3 transition-all">
                      <span>Details</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Individuelle Preise gewünscht?
            </h2>
            <p className="text-lg opacity-90">
              Kontaktieren Sie uns für ein maßgeschneidertes Angebot, das perfekt zu Ihren Bedürfnissen passt.
            </p>
            <Link href="/contact" className="btn btn-white inline-flex">
              <span>Jetzt Anfrage stellen</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}