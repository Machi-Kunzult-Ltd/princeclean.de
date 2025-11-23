// app/(main)/_components/footer.tsx

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 relative">
                <Image
                  src="/images/assets/logos/princeclean.png"
                  alt="PrinceClean Logo"
                  fill
                  className="object-contain filter brightness-0 invert group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div>
                <div className="font-bold text-lg group-hover:opacity-90 transition-opacity">
                  PrinceClean
                </div>
                <div className="text-xs opacity-80">Teppichreinigung</div>
              </div>
            </Link>
            <p className="text-sm opacity-90 leading-relaxed">
              Professionelle Teppich-, Polster- und Textilreinigung in Berlin
              seit über 10 Jahren.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.company.phone}
              </a>
              <a
                href={`mailto:${siteConfig.company.email}`}
                className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.company.email}
              </a>
              <div className="flex items-start gap-2 opacity-90">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>{siteConfig.company.address.street}</div>
                  <div>
                    {siteConfig.company.address.zip}{" "}
                    {siteConfig.company.address.city}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4">Öffnungszeiten</h3>
            <div className="space-y-2 text-sm opacity-90">
              <div>{siteConfig.company.hours.weekday}</div>
              <div>{siteConfig.company.hours.saturday}</div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links</h3>
            <div className="space-y-2 text-sm">
              <Link
                href="/impressum"
                className="block opacity-90 hover:opacity-100 transition-opacity"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="block opacity-90 hover:opacity-100 transition-opacity"
              >
                Datenschutz
              </Link>
              <div className="flex gap-3 pt-2">
                <a
                  href={siteConfig.company.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.company.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@princecleanteppiche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm opacity-80">
          <p>
            © {new Date().getFullYear()} {siteConfig.company.name}. Alle Rechte
            vorbehalten.
          </p>
          <p className="mt-1">{siteConfig.company.owner}</p>
        </div>
      </div>
    </footer>
  );
}
