"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WeiterePage() {
  const services = [
    {
      icon: "🧼",
      title: "Fensterreinigung",
      price: "4,50€/m²",
      subtitle: "inkl. Rahmen",
      description:
        "Genießen Sie kristallklare Ausblicke mit unserem Fensterreinigungsservice in Berlin. Wir reinigen sowohl das Glas als auch die Fensterrahmen – perfekt für Häuser, Büros und Unternehmen, die einen streifenfreien Glanz suchen.",
    },
    {
      icon: "🏠",
      title: "Hausreinigung",
      price: "32€/Stunde",
      subtitle: "",
      description:
        "Unsere Hausreinigungsdienste in Berlin sind ideal für vielbeschäftigte Haushalte. Buchen Sie flexible Reinigungen auf Stundenbasis von einem vertrauenswürdigen Team. Wir kümmern uns um alles – von der regelmäßigen Haushaltsreinigung bis hin zur Tiefenreinigung und der Reinigung vor dem Umzug.",
    },
    {
      icon: "🪟",
      title: "Vorhangservice",
      price: "58€ / 29€",
      subtitle: "Abnahme & Wiedereinhängen / nur Wiedereinhängen",
      description:
        "Nehmen Sie den Stress aus der Vorhangpflege. Unser Vorhangservice in Berlin umfasst die professionelle Abnahme und das Wiedereinhängen Ihrer Vorhänge. Wählen Sie den vollständigen Service oder nur das Wiedereinhängen, je nach Bedarf.",
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

        {/* Image Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="w-full h-64 sm:h-96 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-2xl overflow-hidden shadow-lg">
            <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2UwZjJmZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNjQiIGZpbGw9IiMzYjgyZjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7wn5qfPC90ZXh0Pjwvc3ZnPg==')] bg-cover bg-center flex items-center justify-center">
              <div className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-xl">
                <div className="text-7xl mb-2">🪟</div>
                <div className="text-xl font-bold text-[#1e3a8a]">
                  Fenster- & Hausreinigung
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mb-6">
            💰 Preise für zusätzliche Reinigungsdienstleistungen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Erschwingliche professionelle Reinigungsdienste in Berlin</strong>
          </p>
          <p className="text-gray-600 leading-relaxed">
            Bei PrinceClean Teppichreinigung Berlin machen wir es Ihnen einfach,
            genau zu wissen, wofür Sie bezahlen. Ob Fensterreinigung,
            Hausreinigung oder Vorhangservice – unsere transparenten Preise und
            unser Expertenteam sorgen für eine reibungslose Buchungserfahrung
            und makellose Ergebnisse.
          </p>
        </div>

        {/* Services */}
        <div className="max-w-5xl mx-auto space-y-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0 mt-1">{service.icon}</div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
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

        {/* CTA Button */}
        <div className="text-center mb-16">
          <Link
            href="/contact"
            className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </div>
  );
}