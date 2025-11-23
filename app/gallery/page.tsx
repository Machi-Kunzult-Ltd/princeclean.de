// app/gallery/page.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

// Gallery images with actual file references
const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/beforeandafter.png",
    alt: "Vorher-Nachher Vergleich",
    category: "before-after",
  },
  {
    id: 2,
    src: "/images/gallery/beforeandafter5.png",
    alt: "Vorher-Nachher Vergleich 5",
    category: "before-after",
  },
  {
    id: 3,
    src: "/images/gallery/beforeandafter7.png",
    alt: "Vorher-Nachher Vergleich 7",
    category: "before-after",
  },
  {
    id: 4,
    src: "/images/gallery/carper_cleaning2.png",
    alt: "Teppichreinigung 2",
    category: "process",
  },
  {
    id: 5,
    src: "/images/gallery/gallery1.png",
    alt: "Galerie Bild 1",
    category: "process",
  },
  {
    id: 6,
    src: "/images/gallery/gallery2.png",
    alt: "Galerie Bild 2",
    category: "process",
  },
  {
    id: 7,
    src: "/images/gallery/gallery3.png",
    alt: "Galerie Bild 3",
    category: "process",
  },
  {
    id: 8,
    src: "/images/gallery/gallery4.png",
    alt: "Galerie Bild 4",
    category: "process",
  },
  {
    id: 9,
    src: "/images/gallery/gallery5.png",
    alt: "Galerie Bild 5",
    category: "process",
  },
  {
    id: 10,
    src: "/images/gallery/gallery6.png",
    alt: "Galerie Bild 6",
    category: "finished",
  },
  {
    id: 11,
    src: "/images/gallery/gallery8.png",
    alt: "Galerie Bild 8",
    category: "finished",
  },
  {
    id: 12,
    src: "/images/gallery/gallery9.png",
    alt: "Galerie Bild 9",
    category: "finished",
  },
  {
    id: 13,
    src: "/images/gallery/gallery10.png",
    alt: "Galerie Bild 10",
    category: "finished",
  },
  {
    id: 14,
    src: "/images/gallery/gallery11.png",
    alt: "Galerie Bild 11",
    category: "finished",
  },
  {
    id: 15,
    src: "/images/gallery/gallery12.png",
    alt: "Galerie Bild 12",
    category: "finished",
  },
  {
    id: 16,
    src: "/images/gallery/gallery13.png",
    alt: "Galerie Bild 13",
    category: "finished",
  },
  {
    id: 17,
    src: "/images/gallery/gallery7.png",
    alt: "Galerie Bild 7",
    category: "process",
  },
  {
    id: 18,
    src: "/images/gallery/gallery14.png",
    alt: "Galerie Bild 7",
    category: "process",
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

  const selectedImageData = galleryImages.find(
    (img) => img.id === selectedImage
  );

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] mt-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Galerie
            </h1>
            <p className="text-lg sm:text-xl text-white/90">
              Überzeugen Sie sich von unserer Arbeit - Der
              Vorher-Nachher-Vergleich
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
                  <source
                    src="/videos/princeclean-video.mp4"
                    type="video/mp4"
                  />
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

          {/* Before/After Comparison Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              Der Vorher-Nachher-Vergleich
            </h2>
            <p className="text-gray-600 text-lg">
              Sehen Sie selbst die beeindruckenden Ergebnisse unserer
              professionellen Reinigung
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-[4/3] bg-gray-200"
                onClick={() => openLightbox(image.id)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  unoptimized
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Vergrößern
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6 mt-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a]">
              Sprechen Sie uns einfach an. Wir sind für Sie da!
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Überzeugt von unserer Qualität? Kontaktieren Sie uns für ein
              kostenloses Angebot.
            </p>
            <Link href="/contact" className="btn btn-primary inline-flex">
              Jetzt Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative max-w-6xl w-full h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={selectedImageData.src}
                alt={selectedImageData.alt}
                fill
                sizes="90vw"
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4 text-center">
              <p className="text-lg">{selectedImageData.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
