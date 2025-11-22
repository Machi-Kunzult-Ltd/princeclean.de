// app/pricing/polster/page.tsx

'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PolsterPage() {
  const furniture = [
    {
      name: 'Sessel',
      prices: { S: '29,00€', M: '39,00€', L: '49,00€', XL: '59,00€' },
    },
    {
      name: 'Hocker',
      prices: { S: '19,00€', M: '29,00€', L: '39,00€', XL: '49,00€' },
    },
    {
      name: '2-Sitzer',
      prices: { S: '59,00€', M: '79,00€', L: '99,00€', XL: '119,00€' },
    },
    {
      name: '3-Sitzer',
      prices: { S: '79,00€', M: '99,00€', L: '119,00€', XL: '149,00€' },
    },
    {
      name: 'Ecksofa',
      prices: { S: '199,00€', M: '219,00€', L: '259,00€', XL: '289,00€' },
    },
  ];

  const additionalServices = [
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
          <span className="text-sm sm:text-base">Zurück zur Preisübersicht</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-3 sm:mb-4">
            Preise Polsterreinigung
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Wir reinigen Ihre Polstermöbel professionell & günstig. Sprechen Sie
            uns einfach an! Wir sind für Sie da!
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">*keine Ledergarnituren*</p>
        </div>

        {/* Image Placeholder */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="w-full h-48 sm:h-64 md:h-80 bg-gradient-to-br from-red-100 to-red-50 rounded-2xl flex items-center justify-center">
            <div className="text-center p-4">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🛋️</div>
              <div className="text-lg sm:text-xl font-bold text-gray-700">
                Polsterreinigung Vorher/Nachher
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Table */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 sm:mb-12">
            <div className="bg-[#1e3a8a] text-white px-4 sm:px-6 py-3 sm:py-4">
              <h2 className="text-xl sm:text-2xl font-bold">
                Unsere Preiskategorien für die Polsterreinigung
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-[#1e3a8a] text-sm sm:text-base">
                      Möbelstück
                    </th>
                    <th className="px-2 sm:px-6 py-3 sm:py-4 text-center font-semibold text-[#1e3a8a] text-sm sm:text-base">
                      S
                    </th>
                    <th className="px-2 sm:px-6 py-3 sm:py-4 text-center font-semibold text-[#1e3a8a] text-sm sm:text-base">
                      M
                    </th>
                    <th className="px-2 sm:px-6 py-3 sm:py-4 text-center font-semibold text-[#1e3a8a] text-sm sm:text-base">
                      L
                    </th>
                    <th className="px-2 sm:px-6 py-3 sm:py-4 text-center font-semibold text-[#1e3a8a] text-sm sm:text-base">
                      XL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {furniture.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-sm sm:text-base">{item.name}</td>
                      <td className="px-2 sm:px-6 py-3 sm:py-4 text-center text-[#3b82f6] font-bold text-sm sm:text-base whitespace-nowrap">
                        {item.prices.S}
                      </td>
                      <td className="px-2 sm:px-6 py-3 sm:py-4 text-center text-[#3b82f6] font-bold text-sm sm:text-base whitespace-nowrap">
                        {item.prices.M}
                      </td>
                      <td className="px-2 sm:px-6 py-3 sm:py-4 text-center text-[#3b82f6] font-bold text-sm sm:text-base whitespace-nowrap">
                        {item.prices.L}
                      </td>
                      <td className="px-2 sm:px-6 py-3 sm:py-4 text-center text-[#3b82f6] font-bold text-sm sm:text-base whitespace-nowrap">
                        {item.prices.XL}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-4 sm:mb-6">
              Unsere Zusatzleistungen für die Polsterreinigung
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <h4 className="font-bold text-base sm:text-lg text-[#1e3a8a]">
                      {service.name}
                    </h4>
                    <span className="text-[#3b82f6] font-bold text-base sm:text-lg whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm">{service.description}</p>
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
            <Link href="/contact" className="btn btn-primary text-sm sm:text-base">
              Jetzt Angebot anfragen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}