'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function WeiterePage() {
  const services = [
    {
      icon: '🧼',
      title: 'Fensterreinigung',
      price: '4,50€/m²',
      subtitle: 'inkl. Rahmen',
      description:
        'Genießen Sie kristallklare Ausblicke mit unserem Fensterreinigungsservice in Berlin. Wir reinigen sowohl das Glas als auch die Fensterrahmen – perfekt für Häuser, Büros und Unternehmen, die einen streifenfreien Glanz suchen.',
    },
    {
      icon: '🏠',
      title: 'Hausreinigung',
      price: '32€/Stunde',
      subtitle: '',
      description:
        'Unsere Hausreinigungsdienste in Berlin sind ideal für vielbeschäftigte Haushalte. Buchen Sie flexible Reinigungen auf Stundenbasis von einem vertrauenswürdigen Team. Wir kümmern uns um alles – von der regelmäßigen Haushaltsreinigung bis hin zur Tiefenreinigung und der Reinigung vor dem Umzug.',
    },
    {
      icon: '🪟',
      title: 'Vorhangservice',
      price: '58€ / 29€',
      subtitle: 'Abnahme & Aufhängen / nur Aufhängen',
      description:
        'Nehmen Sie den Stress aus der Vorhangpflege. Unser Vorhangservice in Berlin umfasst die professionelle Abnahme und das Wiederaufhängen Ihrer Vorhänge. Wählen Sie den vollständigen Service oder nur das Wiederaufhängen, je nach Bedarf.',
    },
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="container-custom">
        {/* Back Button */}
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 text-[#1e3a8a] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Preisübersicht
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a8a] mb-4">
            Zusätzliche Dienstleistungen und Preise
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hier finden Sie unsere zusätzlichen Services mit den entsprechenden
            Preisen auf einen Blick.
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🪟</div>
              <div className="text-xl font-bold text-gray-700">
                Fenster- & Hausreinigung
              </div>
            </div>
          </div>
        </div>

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mb-4">
            💰 Preise für zusätzliche Reinigungsdienstleistungen
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Erschwingliche professionelle Reinigungsdienste in Berlin – Bei
            PrinceClean Teppichreinigung Berlin machen wir es Ihnen einfach,
            genau zu wissen, wofür Sie bezahlen. Ob Fensterreinigung,
            Hausreinigung oder Vorhangservice – unsere transparenten Preise und
            unser Expertenteam sorgen für eine reibungslose Buchungserfahrung
            und makellose Ergebnisse.
          </p>
        </div>

        {/* Services */}
        <div className="max-w-5xl mx-auto space-y-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0">{service.icon}</div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#1e3a8a] mb-1">
                          {service.title}
                        </h3>
                        {service.subtitle && (
                          <p className="text-sm text-gray-500">
                            {service.subtitle}
                          </p>
                        )}
                      </div>
                      <div className="text-3xl font-bold text-[#3b82f6] whitespace-nowrap">
                        {service.price}
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Items */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">
              Weitere Services
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex justify-between items-center bg-white p-4 rounded-lg">
                <span className="font-medium">Kilowäsche (ungebügelt)</span>
                <span className="text-[#3b82f6] font-bold text-lg">
                  4,50€/kg
                </span>
              </div>
              <div className="flex justify-between items-center bg-white p-4 rounded-lg">
                <span className="font-medium">Imprägnierung (Outdoor)</span>
                <span className="text-[#3b82f6] font-bold text-lg">5,00€</span>
              </div>
              <div className="flex justify-between items-center bg-white p-4 rounded-lg">
                <span className="font-medium">Rucksack</span>
                <span className="text-[#3b82f6] font-bold text-lg">15,00€</span>
              </div>
              <div className="flex justify-between items-center bg-white p-4 rounded-lg">
                <span className="font-medium">Textil-Extras</span>
                <span className="text-[#3b82f6] font-bold text-lg">3,00€</span>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-[#3b82f6] p-6 rounded-r-lg mb-12">
            <p className="text-gray-700">
              Sofern Sie noch weitere Wünsche oder Fragen haben, sprechen Sie
              uns einfach an. <strong>Wir sind für Sie da!</strong>
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/contact" className="btn btn-primary">
              Jetzt Angebot anfragen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}