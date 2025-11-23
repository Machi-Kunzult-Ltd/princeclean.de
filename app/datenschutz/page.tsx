import { siteConfig } from "@/config/site";

export default function DatenschutzPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 mt-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] mb-6">
              Datenschutz
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Datenschutzbestimmungen
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-12 space-y-6 text-gray-700">
              {/* Company Information */}
              <div className="pb-6 border-b border-gray-200">
                <p className="text-sm">
                  <strong>PrinceClean Teppichreinigung</strong>
                  <br />
                  Inhaber: Abel Modibo
                  <br />
                  {siteConfig.company.address.street},{" "}
                  {siteConfig.company.address.zip}{" "}
                  {siteConfig.company.address.city}
                </p>
                <p className="text-sm mt-3">
                  Telefon: {siteConfig.company.mobile}
                  <br />
                  E-Mail: {siteConfig.company.email}
                  <br />
                  Homepage: {siteConfig.url}
                </p>
              </div>

              {/* Privacy Policy Title */}
              <div>
                <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">
                  Datenschutzbestimmungen
                </h2>
              </div>

              {/* General Data Usage */}
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                  Allgemeine Datenverwendung
                </h3>
                <p className="leading-relaxed">
                  Die anfallenden Daten werden lediglich für statistische Zwecke
                  verwendet. Eine Weitergabe an Dritte oder eine Verknüpfung mit
                  persönlichen Daten findet nicht statt.
                </p>
              </div>

              {/* Contact Form Data */}
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                  Kontaktaufnahme über die Homepage
                </h3>
                <p className="leading-relaxed mb-4">
                  Es besteht die Möglichkeit über die Homepage Kontakt zu uns
                  aufzunehmen. Bei einer Anfrage über das Kontaktformular werden
                  die darin gemachten Angaben lediglich zur Kontaktaufnahme zu
                  Ihnen verwendet. Eine Speicherung der Angaben im
                  Kontaktformular auf eigenen oder externen Servern erfolgt
                  nicht. Nach Bearbeitung der Anfrage werden die erhobenen Daten
                  unverzüglich gelöscht, soweit keine gesetzlichen
                  Aufbewahrungsfristen bestehen oder eine Einwilligung
                  Ihrerseits besteht. Eine Weitergabe an Dritte erfolgt nicht.
                </p>
                <p className="leading-relaxed mb-3">
                  Zur Kontaktaufnahme werden folgende Daten von Ihnen erhoben
                  und gespeichert:
                </p>
              </div>

              {/* Data Collection List */}
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                  Allgemeine Daten von Interessenten zur Dienstleistung:
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Vollständiger Name</li>
                  <li>Firmenname</li>
                  <li>E-Mail-Adresse</li>
                  <li>Vollständige Rufnummer, Faxnummer</li>
                  <li>Die Zustimmung zur Datenschutzklausel</li>
                </ul>
              </div>

              {/* Right of Withdrawal */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                  Widerrufsrecht
                </h3>
                <p className="leading-relaxed">
                  Bei Verträgen, die beim Kunden und nicht in den
                  Geschäftsräumen der PrinceClean Teppichreinigung abgeschlossen
                  werden, gilt das 14-tägige Widerrufsrecht.
                </p>
              </div>

              {/* GDPR Rights */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                  Ihre Rechte
                </h3>
                <p className="leading-relaxed mb-3">Sie haben das Recht:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Auskunft über Ihre bei uns gespeicherten Daten zu erhalten
                  </li>
                  <li>
                    Die Berichtigung unrichtiger personenbezogener Daten zu
                    verlangen
                  </li>
                  <li>
                    Die Löschung Ihrer bei uns gespeicherten Daten zu verlangen
                  </li>
                  <li>Die Einschränkung der Datenverarbeitung zu verlangen</li>
                  <li>Der Datenverarbeitung zu widersprechen</li>
                  <li>Auf Datenübertragbarkeit</li>
                </ul>
              </div>

              {/* Data Security */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                  Datensicherheit
                </h3>
                <p className="leading-relaxed">
                  Wir verwenden innerhalb des Website-Besuchs das verbreitete
                  SSL-Verfahren (Secure Socket Layer) in Verbindung mit der
                  jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser
                  unterstützt wird. Ob eine einzelne Seite unseres
                  Internetauftrittes verschlüsselt übertragen wird, erkennen Sie
                  an der geschlossenen Darstellung des Schüssel- beziehungsweise
                  Schloss-Symbols in der unteren Statusleiste Ihres Browsers.
                </p>
              </div>

              {/* Cookies */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                  Cookies
                </h3>
                <p className="leading-relaxed">
                  Unsere Website verwendet Cookies. Das sind kleine Textdateien,
                  die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies
                  helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver
                  und sicherer zu machen. Sie können Ihren Browser so
                  einstellen, dass Sie über das Setzen von Cookies informiert
                  werden und einzeln über deren Annahme entscheiden oder die
                  Annahme von Cookies für bestimmte Fälle oder generell
                  ausschließen.
                </p>
              </div>

              {/* Contact Information */}
              <div className="pt-6 border-t border-gray-200 bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                  Fragen zum Datenschutz?
                </h3>
                <p className="leading-relaxed">
                  Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer
                  personenbezogenen Daten, bei Auskünften, Berichtigung,
                  Sperrung oder Löschung von Daten wenden Sie sich bitte an:
                </p>
                <p className="mt-3 font-semibold">
                  <a
                    href={`mailto:${siteConfig.company.email}`}
                    className="text-[#3b82f6] hover:underline"
                  >
                    {siteConfig.company.email}
                  </a>
                </p>
              </div>

              {/* Last Updated */}
              <div className="text-sm text-gray-500 text-center pt-6 border-t border-gray-200">
                <p>Stand: November 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
