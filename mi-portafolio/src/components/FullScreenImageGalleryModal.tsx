"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface FullScreenImageGalleryModalProps {
  images: string[];
  currentIndex: number;
}

export default function FullScreenImageGalleryModal({
  images,
  currentIndex,
}: FullScreenImageGalleryModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(currentIndex);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/70 hover:bg-white/90"
          title="Ver en pantalla completa"
        >
          <Maximize2 size={20} className="text-black" />
        </button>
      </DialogTrigger>

      <DialogContent className="p-0 m-0 w-full h-screen bg-white/95 shadow-xl flex flex-col items-center justify-center gap-4">
        {/* Botón cerrar */}
        <div className="absolute top-4 right-4 z-20">
          <DialogClose asChild>
            <button
              className="p-2 rounded-full bg-white/80 hover:bg-white text-black shadow"
              title="Cerrar"
            >
              <X size={20} />
            </button>
          </DialogClose>
        </div>

        {/* Imagen principal */}
        <div className="relative w-full max-w-4xl h-[75vh] flex items-center justify-center">
          <Image
            src={images[current]}
            alt={`Imagen ${current + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />

          {/* Flechas navegación */}
          <button
            className="absolute left-2 p-2 rounded-full bg-white/70 hover:bg-white text-black"
            onClick={prev}
          >
            <ChevronLeft />
          </button>
          <button
            className="absolute right-2 p-2 rounded-full bg-white/70 hover:bg-white text-black"
            onClick={next}
          >
            <ChevronRight />
          </button>
        </div>

        {/* Miniaturas */}
        <div className="w-full max-w-4xl flex gap-2 overflow-x-auto px-4 pb-4 scrollbar-hide">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`relative w-16 h-16 flex-shrink-0 cursor-pointer border-2 rounded ${
                index === current ? "border-blue-500" : "border-transparent"
              }`}
            >
              <Image
                src={img}
                alt={`Miniatura ${index + 1}`}
                fill
                className="object-cover rounded"
              />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
