// app/pricing/teppich/page.tsx

"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TeppichPage() {
  const standardCleaning = [
    {
      price: "10€/m²",
      title: "einfache, maschinengewebte Kunstfaser-Teppiche:",
      items: [
        "Kinderspielteppiche",
        "leichte Flachgewebe",
        "gewebte, flauschige Kunstfaser-Teppiche",
        "Kurzflorteppiche",
        "Hochflorteppiche (leicht)",
        "Flokatis",
        "Schmutzfangmatten",
      ],
    },
    {
      price: "15€/m²",
      title: "geknüpfte, dicht gewebte Kunst- und Naturfaser-Teppiche:",
      items: [
        "Hochflorteppiche (schwer)",
        "Kunstfaserteppiche mit doppelter Rückwand",
        "Wollteppiche flach",
        "Schlingenteppiche",
        "Orient/Perser",
      ],
    },
    {
      price: "20€/m²",
      title: "Naturfaser-Teppiche:",
      items: ["Berber, Nepal", "dickere Wollteppiche"],
    },
    {
      price: "25€/m²",
      title: "sehr schwere oder hochwertige Naturfaser-Teppiche:",
      items: [
        "Kaschmir/Seidenteppiche",
        "Wollteppiche mit hoher Knüpfdichte",
        "Viskoseteppiche",
      ],
    },
  ];

  const additionalServices = [
    {
      name: "Geruchsneutralisierung",
      price: "10,00€/m²",
      note: "zzgl. zur Preiskategorie",
      description: "zur Neutralisierung von Gerüchen von z.B. Haustieren",
    },
    {
      name: "Imprägnierung",
      price: "5,00€/m²",
      note: "",
      description: "für einen langanhaltenden Schutz vor neuen Verschmutzungen",
    },
    {
      name: "Rückfettung",
      price: "5,00€/m²",
      note: "",
      description: "Für ein langanhaltenden Schutz der Naturfaser",
    },
    {
      name: "Eulanisierung",
      price: "9,00€/m²",
      note: "",
      description:
        "für einen Schutz vor oder auch zur Bekämpfung von Mottenbefall",
    },
    {
      name: "Fleckenvorbehandlung",
      price: "10,00€/m²",
      note: "",
      description: "intensive Vorbehandlung von Flecken",
    },
    {
      name: "Intensivreinigung",
      price: "5,00€/m²",
      note: "zzgl. zur Preiskategorie",
      description: "sehr stark verschmutzte Teppiche",
    },
    {
      name: "Zelte und Planen",
      price: "7,00€/m²",
      note: "",
      description: "handgewaschen",
    },
    {
      name: "Teppichrand ketteln",
      price: "10,00€/lfm",
      note: "",
      description: "",
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
            Preise Teppichreinigung
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Wir reinigen Ihre Teppiche bereits{" "}
            <span className="font-bold text-[#3b82f6]">ab 10,- €/m²</span> ganz
            ohne versteckte Nebenkosten! Sprechen Sie uns einfach an! Wir sind
            für Sie da!
          </p>
        </div>

        {/* Image Placeholders */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8 sm:mb-12">
          <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center">
            <div className="text-center p-4">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🧼</div>
              <div className="text-lg sm:text-xl font-bold text-gray-700">
                PrinceClean in Action
              </div>
            </div>
          </div>
          <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center">
            <div className="text-center p-4">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">✨</div>
              <div className="text-lg sm:text-xl font-bold text-gray-700">
                Vorher/Nachher
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 sm:mb-12">
            <div className="bg-[#1e3a8a] text-white px-4 sm:px-6 py-3 sm:py-4">
              <h2 className="text-xl sm:text-2xl font-bold">
                Unsere Preiskategorien für die Teppichreinigung
              </h2>
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-[#1e3a8a] mb-4 sm:mb-6">
                Standard-Reinigung:
              </h3>

              <div className="space-y-6 sm:space-y-8">
                {standardCleaning.map((category, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-[#3b82f6] pl-4 sm:pl-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                      <span className="text-2xl sm:text-3xl font-bold text-[#3b82f6]">
                        {category.price}
                      </span>
                      <span className="text-sm sm:text-base text-gray-700 font-medium">
                        {category.title}
                      </span>
                    </div>
                    <ul className="space-y-1 sm:space-y-2 ml-4">
                      {category.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-sm sm:text-base text-gray-600 flex items-start"
                        >
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                <p className="text-xs sm:text-sm text-gray-700 font-medium">
                  Bitte beachten Sie, dass die Preise für Übergrößen oder sehr
                  schwere Teppiche abweichen können.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-4 sm:mb-6">
              Unsere Zusatzleistungen für die Teppichreinigung
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <div className="flex-1">
                      <h4 className="font-bold text-base sm:text-lg text-[#1e3a8a]">
                        {service.name}
                      </h4>
                      {service.description && (
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">
                          ({service.description})
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-[#3b82f6] font-bold text-base sm:text-lg whitespace-nowrap block">
                        {service.price}
                      </span>
                      {service.note && (
                        <span className="text-xs text-gray-500 block mt-1">
                          {service.note}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="bg-blue-50 border-l-4 border-[#3b82f6] p-4 sm:p-6 rounded-r-lg mb-8 sm:mb-12">
            <p className="text-gray-700 text-sm sm:text-base">
              Sofern Sie noch weitere Wünsche oder Fragen haben, sprechen Sie
              uns einfach an. <strong>Wir sind für Sie da!</strong>
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="btn btn-primary text-sm sm:text-base"
            >
              Jetzt Angebot anfragen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
