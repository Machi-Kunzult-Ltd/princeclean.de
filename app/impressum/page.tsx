// app/impressum/page.tsx

import { siteConfig } from "@/config/site";

export default function ImpressumPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] mb-6">
              Impressum
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Angaben gemäß § 5 TMG
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 space-y-8">
              {/* Company Information */}
              <div>
                <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">
                  Firmeninformationen
                </h2>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold text-lg">
                    PrinceClean Teppichreinigung
                  </p>
                  <p>Inhaber: Abel Modibo</p>
                  <p>{siteConfig.company.address.street}</p>
                  <p>
                    {siteConfig.company.address.zip}{" "}
                    {siteConfig.company.address.city}
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">
                  Kontakt
                </h2>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-semibold">Telefon:</span>{" "}
                    <a
                      href={`tel:${siteConfig.company.phone}`}
                      className="text-[#3b82f6] hover:underline"
                    >
                      {siteConfig.company.phone}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Mobil:</span>{" "}
                    <a
                      href={`tel:${siteConfig.company.mobile}`}
                      className="text-[#3b82f6] hover:underline"
                    >
                      {siteConfig.company.mobile}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">E-Mail:</span>{" "}
                    <a
                      href={`mailto:${siteConfig.company.email}`}
                      className="text-[#3b82f6] hover:underline"
                    >
                      {siteConfig.company.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Homepage:</span>{" "}
                    <a
                      href={siteConfig.url}
                      className="text-[#3b82f6] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {siteConfig.url}
                    </a>
                  </p>
                </div>
              </div>

              {/* Tax Information */}
              <div>
                <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">
                  Steuerangaben
                </h2>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-semibold">Steuernummer:</span>{" "}
                    19/612/01272
                  </p>
                  <p>
                    <span className="font-semibold">Umsatzsteuer-ID:</span>{" "}
                    DE351058798
                  </p>
                </div>
              </div>

              {/* Editorial Responsibility */}
              <div>
                <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">
                  Redaktionell Verantwortlicher
                </h2>
                <div className="space-y-2 text-gray-700">
                  <p>Abel Modibo</p>
                  <p>Postfach 20 05 23</p>
                  <p>13515 Berlin</p>
                </div>
              </div>

              {/* EU Dispute Resolution */}
              <div>
                <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">
                  EU-Streitschlichtung
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur
                    Online-Streitbeilegung (OS) bereit:
                  </p>
                  <p>
                    <a
                      href="https://ec.europa.eu/consumers/odr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3b82f6] hover:underline break-all"
                    >
                      https://ec.europa.eu/consumers/odr
                    </a>
                  </p>
                </div>
              </div>

              {/* Consumer Dispute Resolution */}
              <div>
                <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">
                  Verbraucherstreitbeilegung / Universalschlichtungsstelle
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Zur Teilnahme an einem Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle sind wir nicht verpflichtet
                    und grundsätzlich nicht bereit.
                  </p>
                  <p>
                    Weitere Informationen unter:{" "}
                    <a
                      href="https://www.abmahnung.de/os-plattform/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3b82f6] hover:underline"
                    >
                      www.abmahnung.de/os-plattform/
                    </a>
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">
                  Haftungsausschluss
                </h2>

                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Haftung für Inhalte
                    </h3>
                    <p className="text-sm">
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für
                      eigene Inhalte auf diesen Seiten nach den allgemeinen
                      Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                      Diensteanbieter jedoch nicht verpflichtet, übermittelte
                      oder gespeicherte fremde Informationen zu überwachen oder
                      nach Umständen zu forschen, die auf eine rechtswidrige
                      Tätigkeit hinweisen.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Haftung für Links
                    </h3>
                    <p className="text-sm">
                      Unser Angebot enthält Links zu externen Websites Dritter,
                      auf deren Inhalte wir keinen Einfluss haben. Deshalb
                      können wir für diese fremden Inhalte auch keine Gewähr
                      übernehmen. Für die Inhalte der verlinkten Seiten ist
                      stets der jeweilige Anbieter oder Betreiber der Seiten
                      verantwortlich.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Urheberrecht</h3>
                    <p className="text-sm">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke
                      auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                      Die Vervielfältigung, Bearbeitung, Verbreitung und jede
                      Art der Verwertung außerhalb der Grenzen des
                      Urheberrechtes bedürfen der schriftlichen Zustimmung des
                      jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
