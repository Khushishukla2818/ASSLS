import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const GallerySection = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const galleryPages = [
    // Page 1
    [
      { src: "/figmaAssets/rectangle-3-1.png", className: "col-span-1 row-span-2 h-[440px]" },
      { src: "/figmaAssets/rectangle-22593.png", className: "col-span-2 row-span-1 h-[210px]" },
      { src: "/figmaAssets/placeholder---image-1.png", className: "col-span-3 row-span-1 h-[210px]" },
      { src: "/figmaAssets/rectangle-5.png", className: "col-span-2 row-span-1 h-[210px]" },
      { src: "/figmaAssets/placeholder---image-4.png", className: "col-span-2 row-span-1 h-[210px]" },
      { src: "/figmaAssets/placeholder---image-6.png", className: "col-span-1 row-span-1 h-[210px]" },
    ],
    // Page 2
    [
      { src: "/figmaAssets/rectangle-1.png", className: "col-span-2 row-span-1 h-[210px]" },
      { src: "/figmaAssets/rectangle-2.png", className: "col-span-2 row-span-2 h-[440px]" },
      { src: "/figmaAssets/rectangle-3.png", className: "col-span-2 row-span-1 h-[210px]" },
      { src: "/figmaAssets/rectangle-4.png", className: "col-span-1 row-span-1 h-[210px]" },
      { src: "/figmaAssets/rectangle-5.png", className: "col-span-1 row-span-1 h-[210px]" },
      { src: "/figmaAssets/rectangle-6.png", className: "col-span-2 row-span-1 h-[210px]" },
    ],
    // Page 3
    [
      { src: "/figmaAssets/rectangle-7.png", className: "col-span-1 row-span-1 h-[210px]" },
      { src: "/figmaAssets/rectangle-8.png", className: "col-span-1 row-span-2 h-[440px]" },
      { src: "/figmaAssets/rectangle-10.png", className: "col-span-1 row-span-1 h-[210px]" },
      { src: "/figmaAssets/rectangle-22578.png", className: "col-span-2 row-span-1 h-[210px]" },
      { src: "/figmaAssets/rectangle-22580.png", className: "col-span-1 row-span-1 h-[210px]" },
      { src: "/figmaAssets/rectangle-22581.png", className: "col-span-1 row-span-1 h-[210px]" },
      { src: "/figmaAssets/rectangle-22582.png", className: "col-span-1 row-span-1 h-[210px]" },
    ]
  ];

  const currentImages = galleryPages[currentPage - 1] || galleryPages[0];

  return (
    <section className="w-full flex justify-center bg-white py-20 font-['Poppins',_Helvetica]">
      <div className="w-full max-w-[1512px] px-[102px]">
        <h2 className="font-['Yellowtail',_cursive] text-[#ff5f00] text-[64px] text-center mb-16">
          Gallery
        </h2>

        <div className="grid grid-cols-6 gap-5 mb-12">
          {currentImages.map((img, idx) => (
            <div 
              key={`${currentPage}-${idx}`} 
              className={`rounded-[15px] overflow-hidden shadow-sm ${img.className} transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}
            >
              <img 
                src={img.src} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-6">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="text-[#ff5f00] disabled:text-gray-300 transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <div className="flex items-center gap-1 font-medium text-2xl">
            <span className="text-[#ff5f00]">{currentPage}</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-300">{totalPages}</span>
          </div>

          <button 
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="text-[#ff5f00] disabled:text-gray-300 transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};
