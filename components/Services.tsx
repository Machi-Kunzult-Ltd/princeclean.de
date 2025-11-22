// app/services/page.tsx

"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "teppichboden",
      title: "🏠 Teppichbodenreinigung",
      description:
        "Geben Sie Ihren Teppichböden neue Frische und verlängern Sie ihre Lebensdauer! Unsere Teppichbodenreinigung entfernt Verschmutzungen tief aus den Fasern und bringt Ihre Böden zum Strahlen.",
      features: [
        "Tiefenreinigung aller Teppichbodenarten",
        "Moderne Reinigungstechnologie",
        "Kurze Trocknungszeiten",
        "Umweltfreundliche Reinigungsmittel",
      ],
      priceStart: "ab 4,50€/m²",
      priceLink: "/pricing/teppichboden",
      image: "🏠",
    },
    {
      id: "teppich",
      title: "🧽 Teppichreinigung",
      description:
        "Geben Sie Ihren Teppichen neue Frische und verlängern Sie ihre Lebensdauer! Unsere Teppichreinigung entfernt Verschmutzungen tief aus den Fasern und bringt Ihre Teppiche zum Strahlen.",
      features: [
        "Alle Teppicharten (Perserteppiche, Berberteppiche, etc.)",
        "Professionelle Fleckenentfernung",
        "Schonende Reinigungsverfahren",
        "Abholung und Lieferung möglich",
      ],
      priceStart: "ab 7,00€/m²",
      priceLink: "/pricing/teppich",
      image: "🧽",
    },
    {
      id: "polster",
      title: "🛋️ Polsterreinigung",
      description:
        "Unsere Polsterreinigung erfolgt bei Ihnen vor Ort oder in unserem Geschäft. Wir reinigen Ihre Sofas, Sessel und Stühle professionell und schonend.",
      features: [
        "Vor-Ort-Service oder Abholung",
        "Alle Polsterarten",
        "Geruchsneutralisierung",
        "Imprägnierung auf Wunsch",
      ],
      priceStart: "ab 29,00€",
      priceLink: "/pricing/polster",
      image: "🛋️",
    },
    {
      id: "textil",
      title: "👔 Textilreinigung",
      description:
        "Wir kümmern uns um die Wäscherei Ihrer Kleidung und Wohntextilien, von Anzügen bis hin zu großen Textilien wie Zelten. Bei uns ist von A bis Z alles möglich!",
      features: [
        "Kleidung und Anzüge",
        "Gardinen und Vorhänge",
        "Bettwäsche und Decken",
        "Express-Service verfügbar",
      ],
      priceStart: "ab 3,00€",
      priceLink: "/pricing/textil",
      image: "👔",
    },
    {
      id: "fenster",
      title: "🪟 Fensterreinigung",
      description:
        "Mit unserem Fensterreinigungsservice behalten Sie den perfekten Durchblick! Unsere erfahrenen Reinigungskräfte sorgen für streifenfreie Fenster in Ihrem Zuhause oder Büro.",
      features: [
        "Streifenfreie Reinigung",
        "Rahmen inklusive",
        "Innen und außen",
        "Auch für Bürogebäude",
      ],
      priceStart: "ab 4,50€/m²",
      priceLink: "/pricing/weitere",
      image: "🪟",
    },
    {
      id: "reinigung",
      title: "🧹 Reinigungsservice",
      description:
        "Ob regelmäßige Unterhaltsreinigung für Ihre Immobilie oder eine gründliche Grundreinigung – als erfahrene Reinigungsfirma sind wir stets für Sie da.",
      features: [
        "Unterhaltsreinigung",
        "Grundreinigung",
        "Büroreinigung",
        "Umzugsreinigung",
      ],
      priceStart: "ab 32,00€/Std",
      priceLink: "/pricing/weitere",
      image: "🧹",
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32">
      {/* Hero Section */}
      <section className="hero-gradient py-16 sm:py-20 lg:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] mb-6">
            Unsere Serviceleistungen
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Von der Teppichreinigung bis zur Polsterpflege - wir sorgen dafür,
            dass Ihr Zuhause wieder strahlt.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Service Header */}
                <div
                  className={`h-48 flex items-center justify-center text-7xl ${
                    index % 3 === 0
                      ? "bg-gradient-to-br from-blue-100 to-blue-50"
                      : index % 3 === 1
                      ? "bg-gradient-to-br from-green-100 to-green-50"
                      : "bg-gradient-to-br from-red-100 to-red-50"
                  }`}
                >
                  {service.image}
                </div>

                {/* Service Content */}
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Preis ab</div>
                      <div className="text-2xl font-bold text-[#3b82f6]">
                        {service.priceStart}
                      </div>
                    </div>
                    <Link
                      href={service.priceLink}
                      className="btn btn-primary text-sm"
                    >
                      <span>Preise ansehen</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-6">
              Was macht uns zu den Besten?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: "🎯",
                  title: "Erfolg ist unser Ziel",
                  desc: "Höchste Qualitätsstandards",
                },
                {
                  icon: "✅",
                  title: "Ehrlichkeit & Zuverlässigkeit",
                  desc: "Transparente Preise",
                },
                {
                  icon: "🔧",
                  title: "Individuelle Lösungen",
                  desc: "Auf Sie zugeschnitten",
                },
                {
                  icon: "🌱",
                  title: "Nachhaltigkeit",
                  desc: "Umweltfreundliche Mittel",
                },
                {
                  icon: "❤️",
                  title: "Mit Herz bei der Sache",
                  desc: "Leidenschaft für Sauberkeit",
                },
                {
                  icon: "😊",
                  title: "Ihre Zufriedenheit",
                  desc: "100% Garantie",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#1e3a8a] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Bereit für perfekte Sauberkeit?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Beratung und ein
            unverbindliches Angebot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-white">
              <span>📞</span>
              <span>Jetzt Kontakt aufnehmen</span>
            </Link>
            <Link href="/pricing" className="btn btn-outline">
              Alle Preise ansehen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
