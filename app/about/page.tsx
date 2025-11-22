import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a8a] mb-6">
            Über uns
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professionelle Teppich- und Reinigungsdienste in Berlin seit vielen Jahren
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🧼</div>
                  <div className="text-2xl font-bold text-[#1e3a8a]">PrinceClean</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
                Willkommen bei PrinceClean
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                PrinceClean Teppichreinigung & Reinigungsservice ist Ihr
                vertrauenswürdiger Partner für professionelle Reinigungsdienste
                in Berlin. Unter der Leitung von Inhaber Abel Modibo bieten wir
                erstklassige Teppich-, Polster- und Hausreinigungsdienste.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Mit jahrelanger Erfahrung und modernster Reinigungstechnologie
                garantieren wir makellose Ergebnisse und höchste
                Kundenzufriedenheit.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6 text-center">
              Unsere Mission
            </h2>
            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto text-lg">
              Wir bei PrinceClean sind bestrebt, die höchsten Standards in der
              Reinigungsbranche zu setzen. Unser Ziel ist es, jedem Kunden in
              Berlin einen außergewöhnlichen Service zu bieten, der nicht nur
              Räume reinigt, sondern auch Komfort und Wohlbefinden schafft.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 text-center">
              Warum PrinceClean wählen?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "✨",
                  title: "Professionelle Expertise",
                  description: "Jahrelange Erfahrung in der Reinigungsbranche mit geschultem Fachpersonal",
                },
                {
                  icon: "🏆",
                  title: "Höchste Qualität",
                  description: "Modernste Reinigungstechnologie und umweltfreundliche Produkte",
                },
                {
                  icon: "💯",
                  title: "Kundenzufriedenheit",
                  description: "Transparente Preise und maßgeschneiderte Lösungen für jeden Bedarf",
                },
                {
                  icon: "⚡",
                  title: "Schneller Service",
                  description: "Flexible Terminvereinbarung und pünktliche Ausführung",
                },
                {
                  icon: "🌿",
                  title: "Umweltbewusst",
                  description: "Einsatz ökologischer Reinigungsmittel zum Schutz Ihrer Gesundheit",
                },
                {
                  icon: "📍",
                  title: "Lokal in Berlin",
                  description: "Wir kennen die Bedürfnisse unserer Berliner Kunden genau",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Services Overview */}
          <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-2xl p-8 text-white mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Unsere Dienstleistungen
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">🧹 Teppichreinigung</h3>
                <p className="text-blue-100">
                  Professionelle Tiefenreinigung für alle Teppicharten
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🛋️ Polsterreinigung</h3>
                <p className="text-blue-100">
                  Schonende Reinigung von Sofas, Sesseln und mehr
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🪟 Fensterreinigung</h3>
                <p className="text-blue-100">
                  Streifenfreie Sauberkeit für kristallklare Ausblicke
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🏠 Hausreinigung</h3>
                <p className="text-blue-100">
                  Umfassende Reinigungsservices für Ihr Zuhause
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">
              Kontaktieren Sie uns
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren?
              Wir sind gerne für Sie da!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Kontakt aufnehmen
              </Link>
              <Link
                href="/pricing"
                className="inline-block bg-white hover:bg-gray-50 text-[#1e3a8a] font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl border-2 border-[#3b82f6]"
              >
                Preise ansehen
              </Link>
            </div>
          </div>

          {/* Business Details */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 text-center">
              Geschäftszeiten
            </h3>
            <div className="max-w-md mx-auto space-y-2 text-center">
              <p className="text-gray-700">
                <span className="font-semibold">Mo-Fr:</span> 09:00 - 18:00 Uhr
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Sa:</span> 09:00 - 14:00 Uhr
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">So:</span> Geschlossen
              </p>
            </div>
            <div className="mt-6 text-center text-gray-600">
              <p className="mb-2">
                <span className="font-semibold">Adresse:</span> Haselhorster Damm 42, 13599 Berlin
              </p>
              <p className="mb-2">
                <span className="font-semibold">Telefon:</span> +49 30 224 59 738
              </p>
              <p>
                <span className="font-semibold">E-Mail:</span> kontakt@princeclean.de
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}