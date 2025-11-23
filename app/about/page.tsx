import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-32 sm:pt-36 md:pt-40 lg:pt-44 xl:pt-48 pb-12 sm:pb-16">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-4 sm:mb-6 px-4">
            Über uns
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Professionelle Teppich- und Reinigungsdienste in Berlin seit vielen Jahren
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/services/Cleaning.png"
                alt="PrinceClean Reinigungsservice"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="px-4 md:px-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mb-3 sm:mb-4">
                Willkommen bei PrinceClean
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                PrinceClean Teppichreinigung & Reinigungsservice ist Ihr
                vertrauenswürdiger Partner für professionelle Reinigungsdienste
                in Berlin. Unter der Leitung von Inhaber Abel Modibo bieten wir
                erstklassige Teppich-, Polster- und Hausreinigungsdienste.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Mit jahrelanger Erfahrung und modernster Reinigungstechnologie
                garantieren wir makellose Ergebnisse und höchste
                Kundenzufriedenheit.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mb-6 sm:mb-8 text-center">
              Unser Team
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {/* Abel */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-64 sm:h-80">
                  <Image
                    src="/images/team/abel.png"
                    alt="Abel Modibo - Business Manager"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-2">
                    Abel Modibo
                  </h3>
                  <p className="text-sm sm:text-base text-[#3b82f6] font-semibold mb-3">
                    Business Manager
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    Inhaber und Geschäftsführer mit langjähriger Erfahrung in der Reinigungsbranche.
                  </p>
                </div>
              </div>

              {/* Sandra */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-64 sm:h-80">
                  <Image
                    src="/images/team/sandra.png"
                    alt="Sandra - Finance, Controlling & Administration"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-2">
                    Sandra
                  </h3>
                  <p className="text-sm sm:text-base text-[#3b82f6] font-semibold mb-3">
                    Finance, Controlling & Administration
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    Verantwortlich für Finanzen, Controlling und administrative Aufgaben.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mb-4 sm:mb-6 text-center">
              Unsere Mission
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto px-4">
              Wir bei PrinceClean sind bestrebt, die höchsten Standards in der
              Reinigungsbranche zu setzen. Unser Ziel ist es, jedem Kunden in
              Berlin einen außergewöhnlichen Service zu bieten, der nicht nur
              Räume reinigt, sondern auch Komfort und Wohlbefinden schafft.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mb-6 sm:mb-8 text-center">
              Warum PrinceClean wählen?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                  className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1e3a8a] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Services Overview */}
          <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-2xl p-6 sm:p-8 text-white mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
              Unsere Dienstleistungen
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">🧹 Teppichreinigung</h3>
                <p className="text-sm sm:text-base text-blue-100">
                  Professionelle Tiefenreinigung für alle Teppicharten
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">🛋️ Polsterreinigung</h3>
                <p className="text-sm sm:text-base text-blue-100">
                  Schonende Reinigung von Sofas, Sesseln und mehr
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">🪟 Fensterreinigung</h3>
                <p className="text-sm sm:text-base text-blue-100">
                  Streifenfreie Sauberkeit für kristallklare Ausblicke
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">🏠 Hausreinigung</h3>
                <p className="text-sm sm:text-base text-blue-100">
                  Umfassende Reinigungsservices für Ihr Zuhause
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mb-4 sm:mb-6">
              Kontaktieren Sie uns
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren?
              Wir sind gerne für Sie da!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                href="/contact"
                className="btn btn-primary text-sm sm:text-base"
              >
                Kontakt aufnehmen
              </Link>
              <Link
                href="/pricing"
                className="btn btn-secondary text-sm sm:text-base"
              >
                Preise ansehen
              </Link>
            </div>
          </div>

          {/* Business Details */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-4 sm:mb-6 text-center">
              Geschäftszeiten
            </h3>
            <div className="max-w-md mx-auto space-y-2 text-center mb-6">
              <p className="text-sm sm:text-base text-gray-700">
                <span className="font-semibold">Mo-Fr:</span> 09:00 - 18:00 Uhr
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                <span className="font-semibold">Sa:</span> 09:00 - 14:00 Uhr
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                <span className="font-semibold">So:</span> Geschlossen
              </p>
            </div>
            <div className="text-center text-gray-600 space-y-2">
              <p className="text-sm sm:text-base">
                <span className="font-semibold">Adresse:</span> Haselhorster Damm 42, 13599 Berlin
              </p>
              <p className="text-sm sm:text-base">
                <span className="font-semibold">Telefon:</span> +49 30 224 59 738
              </p>
              <p className="text-sm sm:text-base">
                <span className="font-semibold">E-Mail:</span> kontakt@princeclean.de
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}