// app/contact/page.tsx

"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    privacy: false,
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          privacy: false,
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 sm:pb-16 bg-gradient-to-br from-gray-50 to-gray-100 mt-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] mb-6">
              Kontaktieren Sie uns
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Gern können Sie Ihr Anliegen direkt an uns richten. Unser Service
              Team wird so schnell wie möglich Kontakt zu Ihnen aufnehmen.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">
                Kontaktformular
              </h2>
              <p className="text-gray-600 mb-6">
                <em>
                  Gerne können Sie uns auch in englischer Sprache kontaktieren.
                  <br />
                  We would like to get to know you! You are also welcome to
                  contact us in English.
                </em>
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="form-input"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="form-input"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    required
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-1"
                      checked={formData.privacy}
                      onChange={(e) =>
                        setFormData({ ...formData, privacy: e.target.checked })
                      }
                    />
                    <span className="text-sm text-gray-600">
                      Mit dem Klick auf &quot;Anfrage senden&quot; stimmen Sie
                      den{" "}
                      <a
                        href="/datenschutz"
                        className="text-[#1e3a8a] underline"
                      >
                        Datenschutzbestimmungen
                      </a>{" "}
                      zu. *
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn btn-primary w-full"
                >
                  {status === "loading" ? (
                    "Wird gesendet..."
                  ) : (
                    <>
                      <span>Anfrage senden</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center">
                    Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center">
                    Es gab einen Fehler. Bitte versuchen Sie es erneut oder
                    rufen Sie uns an.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e3a8a] mb-2">Telefon</h3>
                    <a
                      href={`tel:${siteConfig.company.phone}`}
                      className="text-gray-700 hover:text-[#1e3a8a] transition-colors"
                    >
                      {siteConfig.company.phone}
                    </a>
                    <br />
                    <a
                      href={`tel:${siteConfig.company.mobile}`}
                      className="text-gray-700 hover:text-[#1e3a8a] transition-colors"
                    >
                      {siteConfig.company.mobile}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e3a8a] mb-2">E-Mail</h3>
                    <a
                      href={`mailto:${siteConfig.company.email}`}
                      className="text-gray-700 hover:text-[#1e3a8a] transition-colors"
                    >
                      {siteConfig.company.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e3a8a] mb-2">Adresse</h3>
                    <address className="not-italic text-gray-700">
                      {siteConfig.company.address.street}
                      <br />
                      {siteConfig.company.address.zip}{" "}
                      {siteConfig.company.address.city}
                    </address>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="font-bold text-[#1e3a8a] mb-4 text-xl">
                  Öffnungszeiten
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex justify-between">
                    <span className="font-semibold">Mo-Fr:</span>
                    <span>09:00 - 18:00 Uhr</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Sa:</span>
                    <span>09:00 - 14:00 Uhr</span>
                  </p>
                </div>
                <p className="mt-4 text-sm text-gray-600 italic text-center">
                  Sprechen Sie uns einfach an. Wir sind gerne für Sie da!
                </p>
              </div>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${siteConfig.company.whatsapp.replace(
                  /\s/g,
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full text-center"
              >
                <span>💬</span>
                <span>WhatsApp Chat starten</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
