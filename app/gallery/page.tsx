// app/gallery/page.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

// Placeholder gallery images - replace with your actual images
const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/carpet-before.jpg',
    alt: 'Weißer Teppich vorher',
    category: 'before-after'
  },
  {
    id: 2,
    src: '/images/gallery/carpet-after.jpg',
    alt: 'Weißer Teppich nachher',
    category: 'before-after'
  },
  {
    id: 3,
    src: '/images/gallery/carpet-comparison.jpg',
    alt: 'Weißer Teppich vorher nachher',
    category: 'before-after'
  },
  {
    id: 4,
    src: '/images/gallery/green-carpet-before.jpg',
    alt: 'Teppich grün vorher',
    category: 'before-after'
  },
  {
    id: 5,
    src: '/images/gallery/green-carpet-after.jpg',
    alt: 'Teppich grün nachher',
    category: 'before-after'
  },
  {
    id: 6,
    src: '/images/gallery/cleaning-process.jpg',
    alt: 'Teppichreinigung in Aktion',
    category: 'process'
  },
  {
    id: 7,
    src: '/images/gallery/drying.jpg',
    alt: 'Trocknung',
    category: 'process'
  },
  {
    id: 8,
    src: '/images/gallery/finished.jpg',
    alt: 'Fertig zur Auslieferung',
    category: 'finished'
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Galerie
            </h1>
            <p className="text-lg sm:text-xl text-white/90">
              Überzeugen Sie sich von unserer Arbeit - Der Vorher-Nachher-Vergleich
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1e3a8a]/10 to-[#3b82f6]/10 rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-[#1e3a8a] text-center mb-6">
                PrinceClean in Aktion
              </h2>
              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video bg-gray-800">
                <video
                  controls
                  preload="metadata"
                  className="w-full h-full"
                  poster="/images/video-thumbnail.jpg"
                >
                  <source src="/videos/princeclean-video.mp4" type="video/mp4" />
                  Ihr Browser unterstützt das Video-Tag nicht.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#1e3a8a] text-white px-8 py-4 rounded-2xl shadow-lg mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold">GALERIE</h2>
            </div>
          </div>

          {/* Process Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Carpet Washing */}
            <div className="text-center">
              <div className="bg-[#1e3a8a] text-white px-6 py-4 rounded-2xl shadow-lg mb-6">
                <h3 className="text-xl font-bold">Teppichwäsche</h3>
              </div>
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-96">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-6xl mb-4">🧽</div>
                    <p className="text-gray-600">Professionelle Teppichwäsche</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Drying */}
            <div className="text-center">
              <div className="bg-[#1e3a8a] text-white px-6 py-4 rounded-2xl shadow-lg mb-6">
                <h3 className="text-xl font-bold">Trocknung</h3>
              </div>
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-96">
                <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-6xl mb-4">🌬️</div>
                    <p className="text-gray-600">Schonende Trocknung</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ready for Delivery */}
            <div className="text-center">
              <div className="bg-[#1e3a8a] text-white px-6 py-4 rounded-2xl shadow-lg mb-6">
                <h3 className="text-xl font-bold">Fertig zur Auslieferung</h3>
              </div>
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-96">
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-6xl mb-4">✨</div>
                    <p className="text-gray-600">Perfekt sauber</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Before/After Comparison Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              Der Vorher-Nachher-Vergleich
            </h2>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-[4/3] bg-gray-200"
                onClick={() => openLightbox(image.id)}
              >
                {/* Placeholder - Replace with actual images */}
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p className="text-sm text-gray-600">{image.alt}</p>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ansehen
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a]">
              Sprechen Sie uns einfach an. Wir sind für Sie da!
            </h3>
            <Link href="/contact" className="btn btn-primary inline-flex">
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white rounded-xl overflow-hidden">
              {/* Placeholder image in lightbox */}
              <div className="w-full aspect-video bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🖼️</div>
                  <p className="text-xl text-gray-600">{selectedImageData.alt}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}