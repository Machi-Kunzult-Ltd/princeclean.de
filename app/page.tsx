// app/page.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 sm:pt-36 md:pt-40 lg:pt-44 xl:pt-48 pb-12 sm:pb-16 lg:pb-20 hero-gradient overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a8a] leading-tight">
                  {siteConfig.hero.title.split(" ").map((word, i) => (
                    <span key={i}>
                      {word === "professionell" ? (
                        <span className="text-gradient-blue">{word}</span>
                      ) : (
                        word
                      )}{" "}
                    </span>
                  ))}
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                  {siteConfig.hero.subtitle}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-xl mx-auto lg:mx-0">
                  {siteConfig.hero.description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="btn btn-primary text-sm sm:text-base"
                >
                  <span>{siteConfig.hero.primaryButton}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="/services"
                  className="btn btn-secondary text-sm sm:text-base"
                >
                  {siteConfig.hero.secondaryButton}
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start pt-4">
                {["10+ Jahre", "Vollversichert", "Umweltfreundlich"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/services/carpet_cleaning.png"
                  alt="Professionelle Teppichreinigung"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
                {/* Decorative Badge */}
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                  Ab 7€/m²
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#1e3a8a] py-8 sm:py-12 lg:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {siteConfig.stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number text-3xl sm:text-4xl lg:text-5xl">
                  {stat.number}
                </div>
                <div className="stat-text text-xs sm:text-sm lg:text-base">
                  {stat.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="section-title">Unsere Dienstleistungen</h2>
            <p className="section-subtitle mt-3 sm:mt-4">
              Von der Teppichreinigung bis zur Polsterpflege - wir sorgen dafür,
              dass Ihr Zuhause wieder strahlt.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {siteConfig.services.map((service) => (
              <div key={service.id} className="service-card overflow-hidden">
                {/* Service Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl -m-6 mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Service Content */}
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description mb-4 text-sm sm:text-base">
                  {service.shortDescription}
                </p>

                {/* Price */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-lg sm:text-xl font-bold text-[#3b82f6]">
                      {service.priceStart}
                    </span>
                    <Link
                      href="/services"
                      className="text-xs sm:text-sm text-[#1e3a8a] font-semibold hover:underline"
                    >
                      Mehr erfahren →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href="/services"
              className="btn btn-primary text-sm sm:text-base"
            >
              Alle Services ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="section-title">So einfach geht&apos;s</h2>
            <p className="section-subtitle mt-3 sm:mt-4">
              In nur 4 Schritten zu sauberen Teppichen
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {siteConfig.process.map((step) => (
              <div key={step.number} className="process-step">
                {/* Step Number Badge */}
                <div
                  className={`step-number ${
                    step.number === 1
                      ? "bg-gradient-blue"
                      : step.number === 2
                      ? "bg-gradient-green"
                      : step.number === 3
                      ? "bg-gradient-red"
                      : "bg-gradient-orange"
                  }`}
                >
                  {step.number}
                </div>

                {/* Step Icon */}
                <div className="text-4xl sm:text-5xl mb-4 mt-6">
                  {step.icon}
                </div>

                {/* Step Content */}
                <h3 className="text-lg sm:text-xl font-bold text-[#1e3a8a] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Text & Benefits */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-6 sm:mb-8">
                Warum PrinceClean?
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {siteConfig.benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="benefit-card">
                    <div
                      className={`benefit-icon ${
                        index === 0
                          ? "bg-gradient-blue"
                          : index === 1
                          ? "bg-gradient-green"
                          : "bg-gradient-red"
                      }`}
                    >
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-[#1e3a8a] mb-1 sm:mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Team/Cleaning Image */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-3xl shadow-xl overflow-hidden">
                <Image
                  src="/images/services/Cleaning.png"
                  alt="Professionelles Reinigungsteam"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Bereit für saubere Teppiche?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
              Kontaktieren Sie uns noch heute für eine kostenlose Beratung und
              ein unverbindliches Angebot.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="btn btn-white text-sm sm:text-base"
              >
                <span>📞</span>
                <span>Jetzt anrufen</span>
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline text-sm sm:text-base"
              >
                Kontaktformular
              </Link>
              <a
                href={`https://wa.me/${siteConfig.company.whatsapp.replace(
                  /\s/g,
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-sm sm:text-base"
              >
                <span>💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}