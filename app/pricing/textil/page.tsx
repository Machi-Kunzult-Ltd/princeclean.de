// app/pricing/textil/page.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function TextilPage() {
  const categories = {
    oberbekleidung: [
      { item: "Anzug (2-teilig)", price: "15,00€" },
      { item: "Blazer (normal)", price: "9,00€" },
      { item: "Blazer/Gehrock (lang)", price: "14,50€" },
      { item: "Bluse (einfach)", price: "3,00€" },
      { item: "Bluse (aufwendig)", price: "5,50€" },
      { item: "Bluse (Seide)", price: "6,00€" },
      { item: "Hemd (normal)", price: "3,00€" },
      { item: "Hose (normal)", price: "6,00€" },
      { item: "Jeans (normal)", price: "6,00€" },
      { item: "Kleid (einfach)", price: "ab 9,00€" },
      { item: "Kleid (mit Volant)", price: "ab 15,50€" },
      { item: "Kleid (mit Pailletten)", price: "ab 30,00€" },
      { item: "Pullover (normal)", price: "5,00€" },
      { item: "Pullover (Kaschmir)", price: "7,50€" },
      { item: "Pullunder (normal)", price: "5,00€" },
      { item: "Rock (einfach)", price: "ab 3,50€" },
      { item: "Rock (Plissee)", price: "ab 9,00€" },
      { item: "Sakko", price: "9,00€" },
      { item: "Weste (normal)", price: "5,50€" },
    ],
    festtag: [
      { item: "Abendkleid", price: "ab 30,00€" },
      { item: "Brautkleid", price: "ab 135,00€" },
      { item: "Afrikanischer Anzug 2-tlg.", price: "9,50€" },
      { item: "Afrikanischer Anzug 3-tlg.", price: "19,00€" },
      { item: "Afrikanische Agbada", price: "9,50€" },
    ],
    betten: [
      { item: "Bettwäsche (Bettbezug)", price: "3,00€" },
      { item: "Bettwäsche (Bettlaken)", price: "3,00€" },
      { item: "Bettwäsche (Kissenbezug)", price: "2,20€" },
      { item: "Bettwäsche (10-teilig)", price: "25,00€" },
      { item: "Daunenkissen", price: "18,00€" },
      { item: "Daunenfederbett", price: "35,00€" },
      { item: "Decke/Bettdecke (Synthetik)", price: "18,00€" },
      { item: "Decke (einfach)", price: "4,50€" },
      { item: "Decke M (flauschig)", price: "6,50€" },
      { item: "Decke XL (flauschig)", price: "11,50€" },
      { item: "Kissen (Synthetik)", price: "5,00€" },
      { item: "Tagesdecke (1er Bett)", price: "20,00€" },
      { item: "Tagesdecke (Doppelbett)", price: "25,00€" },
      { item: "Tagesdecke (XXL)", price: "35,00€" },
    ],
    jacken: [
      { item: "Daunenjacke", price: "25,00€" },
      { item: "Daunenmantel", price: "29,00€" },
      { item: "Jacke (einfach)", price: "13,00€" },
      { item: "Pop. Mantel", price: "20,00€" },
      { item: "Trenchcoat", price: "20,00€" },
      { item: "Winterjacke (normal)", price: "20,00€" },
      { item: "Wintermantel", price: "25,00€" },
      { item: "Wollmantel (normal)", price: "20,00€" },
      { item: "Wollmantel (lang)", price: "25,00€" },
    ],
    extras: [
      { item: "Krawatte", price: "4,50€" },
      { item: "Schaafsfell", price: "ab 25,00€" },
      { item: "Schal/Tuch", price: "4,00€" },
      { item: "Tischdecke (normal)", price: "4,50€" },
      { item: "Gardinen pro m²", price: "4,50€" },
      { item: "Ü-Gardinen pro kg", price: "12,00€" },
      { item: "Kilowäsche (ungebügelt, gelegt)", price: "4,50€" },
      { item: "Express-Zuschlag pro Stück", price: "1,00€" },
      { item: "Imprägnierung (Outdoor-Bekleidung)", price: "5,00€" },
      { item: "Rucksack", price: "15,00€" },
      { item: "Textil-Extras", price: "3,00€" },
    ],
    buegeln: [
      { item: "Bluse", price: "2,50€" },
      { item: "Gardinen Stck.", price: "3,50€" },
      { item: "Hemd", price: "2,50€" },
      { item: "Hose", price: "3,00€" },
      { item: "Jacke/Mantel", price: "4,50€" },
      { item: "Kleider", price: "ab 4,50€" },
      { item: "Polo Shirt", price: "2,00€" },
      { item: "Rock", price: "ab 2,50€" },
      { item: "T-Shirt", price: "1,50€" },
    ],
  };

  const renderCategory = (
    title: string,
    items: { item: string; price: string }[]
  ) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6 sm:mb-8">
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white px-4 sm:px-6 py-3 sm:py-4">
        <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
      </div>
      <div className="p-4 sm:p-6">
        <div className="grid gap-2 sm:gap-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-sm sm:text-base text-gray-700 flex-1">
                {item.item}
              </span>
              <span className="text-sm sm:text-base text-[#3b82f6] font-bold whitespace-nowrap ml-4">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

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
            Professionelle und günstige Textilpflege für Privat- und
            Geschäftskunden
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Suchen Sie nach einer zuverlässigen Textilreinigung in Berlin mit
            klaren Preisen? Bei uns finden Sie einen transparenten Überblick
            über die Kosten für Kleiderreinigung, Hemdenservice, Gardinenpflege,
            Bettwäschewaschen, Jackenreinigung und vieles mehr. Vertrauen Sie
            auf unsere langjährige Erfahrung und höchste Qualität in der
            Reinigung.
          </p>
        </div>

        {/* Image */}
        <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
          <div className="relative w-full h-48 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/services/dry_cleaning.png"
              alt="Textilreinigung"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mb-6 sm:mb-8 text-center underline">
            Unsere Preise für die Textilreinigung
          </h2>

          {renderCategory("Oberbekleidung:", categories.oberbekleidung)}
          {renderCategory("Festtag:", categories.festtag)}
          {renderCategory("Betten:", categories.betten)}
          {renderCategory("Jacken:", categories.jacken)}
          {renderCategory("Extras:", categories.extras)}
          {renderCategory("nur Bügeln:", categories.buegeln)}

          {/* Disclaimer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 sm:p-6 rounded-r-lg mb-6 sm:mb-8">
            <p className="text-xs sm:text-sm text-gray-700">
              Wir übernehmen keine Haftung für Knöpfe, Schnallen,
              Reißverschlüsse und sonstige Applikationen, desgleichen für
              Schäden, hervorgerufen durch verborgene Mängel, die trotz
              sachgemäßer Reinigung auftreten.
            </p>
          </div>

          {/* Note */}
          <div className="bg-blue-50 border-l-4 border-[#3b82f6] p-4 sm:p-6 rounded-r-lg mb-8 sm:mb-12">
            <p className="text-sm sm:text-base text-gray-700">
              <strong>Alle weiteren Textilien auf Anfrage.</strong>
              <br />
              <br />
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