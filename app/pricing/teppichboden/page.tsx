// app/pricing/teppichboden/page.tsx

"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TeppichbodenPage() {
  const mainPricing = [
    { area: "bis zu 100m²", price: "12,00€/m²" },
    { area: "bis zu 200m²", price: "10,00€/m²" },
    { area: "bis zu 300m²", price: "8,00€/m²" },
    { area: "bis zu 500m²", price: "6,00€/m²" },
    { area: "über 500m²", price: "4,50€/m²" },
  ];

  const impraegnierungPricing = [
    { area: "bis zu 100m²", price: "6,00€/m²" },
    { area: "bis zu 200m²", price: "5,00€/m²" },
    { area: "bis zu 300m²", price: "4,00€/m²" },
    { area: "bis zu 500m²", price: "3,00€/m²" },
    { area: "über 500m²", price: "2,25€/m²" },
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-3 sm:mb-4 px-4">
            Preise & Sonderleistungen
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Wollen Sie ihren Teppichboden einmal auffrischen lassen?
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Kein Problem. Sprechen Sie uns einfach an! Wir sind für Sie da!
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center">
            <div className="text-center p-4">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-3 sm:mb-4">
                🏠
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">
                Teppichbodenreinigung
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="max-w-4xl mx-auto">
          {/* Main Pricing Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 sm:mb-12">
            <div className="bg-[#1e3a8a] text-white px-4 sm:px-6 py-3 sm:py-4">
              <h2 className="text-xl sm:text-2xl font-bold">
                Unsere Preise für die Teppichbodenreinigung
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-[#1e3a8a] text-sm sm:text-base">
                      Fläche
                    </th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-[#1e3a8a] text-sm sm:text-base">
                      Preis
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mainPricing.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-sm sm:text-base">
                        {item.area}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-[#3b82f6] font-bold text-lg sm:text-xl whitespace-nowrap">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 sm:p-6 bg-gray-50 border-t">
              <p className="text-xs sm:text-sm text-gray-600">
                Preise gelten für die Standardreinigung und beinhalten die
                Kosten für die Reinigungsmittel.
              </p>
            </div>
          </div>

          {/* Sonderleistungen Section */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] text-center mb-6 sm:mb-8">
              Sonderleistungen:
            </h2>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {/* Fleckenentfernung */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-[#1e3a8a] mb-3 sm:mb-4">
                  Fleckenentfernung
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4">
                  Individuell je nach zu bearbeitender Fläche.
                </p>
                <div className="text-xl sm:text-2xl font-bold text-[#3b82f6] mb-3">
                  10,00€/m²
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  Die Fleckenarten werden vorab bestimmt und können dann mit
                  unterschiedlichen Mitteln vorbehandelt werden.
                </p>
              </div>

              {/* Intensivreinigung */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-[#1e3a8a] mb-3 sm:mb-4">
                  Intensivreinigung
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4">
                  Zusätzlich zur Preiskategorie
                </p>
                <div className="text-xl sm:text-2xl font-bold text-[#10b981] mb-3">
                  2,50€/m²
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  Je nachdem wie hoch der Verschmutzungsgrad Ihres Teppichbodens
                  ist, intensivieren wir die Reinigung, um ein wirklich gutes
                  Ergebnis für Sie zu erzielen. Hierbei verwenden wir mehr
                  Material und mehr Arbeitszeit, was insgesamt einen höheren
                  Arbeitsaufwand darstellt.
                </p>
              </div>
            </div>
          </div>

          {/* Imprägnierung Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 sm:mb-12">
            <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white px-4 sm:px-6 py-3 sm:py-4">
              <h2 className="text-xl sm:text-2xl font-bold underline">
                Imprägnierung
              </h2>
            </div>
            <div className="p-4 sm:p-6">
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                Wir empfehlen grundsätzlich eine Imprägnierung für Ihren
                Teppichboden. Das schützt die Faser länger vor neuen
                Verunreinigungen und zieht den Staub nicht direkt wieder an.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 sm:px-6 py-3 text-left font-semibold text-[#1e3a8a] text-sm sm:text-base">
                        Fläche
                      </th>
                      <th className="px-4 sm:px-6 py-3 text-left font-semibold text-[#1e3a8a] text-sm sm:text-base">
                        Preis
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {impraegnierungPricing.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="px-4 sm:px-6 py-3 text-sm sm:text-base font-medium">
                          {item.area}
                        </td>
                        <td className="px-4 sm:px-6 py-3 text-[#3b82f6] font-bold text-base sm:text-lg whitespace-nowrap">
                          {item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="bg-blue-50 border-l-4 border-[#3b82f6] p-4 sm:p-6 rounded-r-lg mb-8 sm:mb-12">
            <p className="text-sm sm:text-base text-gray-700">
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
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
