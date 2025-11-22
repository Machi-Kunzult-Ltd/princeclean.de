// app/components/Header.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pricesOpen, setPricesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-2">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-2 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              <a href={`tel:${siteConfig.company.phone}`} className="hover:underline whitespace-nowrap">
                📞 {siteConfig.company.phone}
              </a>
              <a href={`mailto:${siteConfig.company.email}`} className="hover:underline hidden md:inline whitespace-nowrap">
                ✉️ {siteConfig.company.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden md:inline whitespace-nowrap">⏰ {siteConfig.company.hours.weekday}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 relative">
              <Image
                src="/images/assets/logos/princeclean.png"
                alt="PrinceClean Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-[#1e3a8a] text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
                PrinceClean Teppichreinigung
              </div>
              <div className="text-xs sm:text-sm text-gray-600">& Reinigungsservice</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {siteConfig.navigation.map((item) =>
              item.name === 'Preise' ? (
                <div key={item.name} className="relative group">
                  <button className="flex items-center gap-1 text-[#1e3a8a] font-semibold hover:text-[#3b82f6] transition-colors text-sm xl:text-base">
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {siteConfig.pricingNavigation.map((priceItem) => (
                      <Link
                        key={priceItem.href}
                        href={priceItem.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#3b82f6] first:rounded-t-xl last:rounded-b-xl transition-colors"
                      >
                        {priceItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#1e3a8a] font-semibold hover:text-[#3b82f6] transition-colors text-sm xl:text-base whitespace-nowrap"
                >
                  {item.name}
                </Link>
              )
            )}
            <Link href="/contact" className="btn btn-primary text-xs xl:text-sm whitespace-nowrap">
              Jetzt Termin vereinbaren
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1e3a8a] flex-shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-2">
              {siteConfig.navigation.map((item) =>
                item.name === 'Preise' ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setPricesOpen(!pricesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-[#1e3a8a] font-semibold hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          pricesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {pricesOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {siteConfig.pricingNavigation.map((priceItem) => (
                          <Link
                            key={priceItem.href}
                            href={priceItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            {priceItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-[#1e3a8a] font-semibold hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary mt-4 text-center"
              >
                Jetzt Termin vereinbaren
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}