"use client";

import Link from "next/link";
import Image from "next/image";
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
    <div className="pt-32 sm:pt-36 md:pt-40 lg:pt-44 xl:pt-48 pb-12 sm:pb-16">
      <div className="container-custom">
        {/* Back Button */}
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 text-[#1e3a8a] hover:underline mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm sm:text-base">
            Zurück zur Preisübersicht
          </span>
        </Link>

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-3 sm:mb-4">
            Zusätzliche Dienstleistungen und Preise
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Hier finden Sie unsere zusätzlichen Services mit den entsprechenden
            Preisen auf einen Blick.
          </p>
        </div>

        {/* Image Section */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/services/window_cleaning.png"
              alt="Fenster- & Hausreinigung"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mb-4 sm:mb-6">
            💰 Preise für zusätzliche Reinigungsdienstleistungen
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 px-4">
            <strong>Erschwingliche professionelle Reinigungsdienste in Berlin</strong>
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-4">
            Bei PrinceClean Teppichreinigung Berlin machen wir es Ihnen einfach,
            genau zu wissen, wofür Sie bezahlen. Ob Fensterreinigung,
            Hausreinigung oder Vorhangservice – unsere transparenten Preise und
            unser Expertenteam sorgen für eine reibungslose Buchungserfahrung
            und makellose Ergebnisse.
          </p>
        </div>

        {/* Services */}
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="text-4xl sm:text-5xl flex-shrink-0">{service.icon}</div>
                  <div className="flex-grow w-full">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-1">
                          {service.title}
                        </h3>
                        {service.subtitle && (
                          <p className="text-xs sm:text-sm text-gray-500">
                            {service.subtitle}
                          </p>
                        )}
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-[#3b82f6] whitespace-nowrap">
                        {service.price}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12 sm:mb-16">
          <Link
            href="/contact"
            className="btn btn-primary text-sm sm:text-base"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </div>
  );
}