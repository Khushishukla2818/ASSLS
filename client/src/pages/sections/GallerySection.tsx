import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    src: "/figmaAssets/rectangle-4.png",
    alt: "Gallery image 1",
    className: "col-start-1 row-start-1",
  },
  {
    src: "/figmaAssets/rectangle-6.png",
    alt: "Gallery image 2",
    className: "col-start-2 row-start-1",
  },
  {
    src: "/figmaAssets/rectangle-8.png",
    alt: "Gallery image 3",
    className: "col-start-3 row-start-1",
    hasOverlay: true,
  },
  {
    src: "/figmaAssets/rectangle-5.png",
    alt: "Gallery image 4",
    className: "col-start-1 row-start-2",
  },
  {
    src: "/figmaAssets/rectangle-7.png",
    alt: "Gallery image 5",
    className: "col-start-2 row-start-2",
  },
  {
    src: "/figmaAssets/rectangle-10.png",
    alt: "Gallery image 6",
    className: "col-start-3 row-start-2",
  },
];

export const GallerySection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center bg-[#ffffff] py-20 relative">
      <div className="w-full max-w-[1512px] px-4 relative">
        <h2 className="[-webkit-text-stroke:1px_#ffffff] [font-family:'Playball',Helvetica] font-normal text-[#ff5f00] text-[64px] text-center tracking-[1.28px] leading-[76.8px] mb-8">
          Gallery
        </h2>

        <p className="max-w-[1160px] mx-auto [font-family:'Poppins',Helvetica] font-normal text-[#a2a2a2] text-2xl text-center tracking-[0] leading-[normal] mb-16">
          A Glimpse into Our Daily Service. Transforming lives through
          sustainable agriculture, healthcare camps, and dedicated elder care
          initiatives.
        </p>

        <div className="relative max-w-[1160px] mx-auto">
          <div className="grid grid-cols-3 gap-6 mb-0">
            {galleryImages.map((image, index) => (
              <div key={index} className={`relative ${image.className}`}>
                <img
                  className="w-full h-[207px] rounded-lg object-cover"
                  alt={image.alt}
                  src={image.src}
                />
                {image.hasOverlay && (
                  <div className="absolute inset-0 bg-[#00000080] rounded-lg shadow-[0px_4px_8px_#00000040]" />
                )}
              </div>
            ))}
          </div>

          <Button className="absolute -right-4 top-1/2 -translate-y-1/2 bg-[#ff9b60] hover:bg-[#ff8a4d] rounded-[16px_0px_0px_16px] w-[51px] h-[218px] p-0 flex items-center justify-center">
            <span className="rotate-[-88.75deg] [font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
              view All
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
