import { Card, CardContent } from "@/components/ui/card";

const responsibilityCards = [
  {
    image: "/figmaAssets/rectangle-22580.png",
    title: "Agriculture & Farmer Welfare",
  },
  {
    image: "/figmaAssets/rectangle-22581.png",
    title: "Women Empowerment",
  },
  {
    image: "/figmaAssets/rectangle-22584.png",
    title: "Children Care",
  },
  {
    image: "/figmaAssets/rectangle-22588.png",
    title: "Healthcare & Medical Support",
    hasOverlay: true,
    overlayImage: "/figmaAssets/rectangle-22578.png",
  },
  {
    image: "/figmaAssets/rectangle-22585.png",
    title: "Nutrition & Food Security",
  },
  {
    image: "/figmaAssets/rectangle-22586.png",
    title: "HIV/AIDS Prevention",
  },
  {
    image: "/figmaAssets/rectangle-22582.png",
    title: "Skill Development",
  },
  {
    image: "/figmaAssets/rectangle-22587.png",
    title: "Environmental Protection",
  },
];

export const ResponsibilitiesSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-[#ffffff]">
      <div className="container mx-auto px-6 max-w-[1512px]">
        <h2 className="text-center mb-12 [-webkit-text-stroke:1px_#ffffff] [font-family:'Playball',Helvetica] font-normal text-[#ff5f00] text-[64px] tracking-[1.28px] leading-[76.8px]">
          Our Responsibilities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {responsibilityCards.map((card, index) => (
            <Card
              key={index}
              className="border-0 shadow-none bg-transparent overflow-visible"
            >
              <CardContent className="p-0 flex flex-col gap-0">
                <div className="relative flex justify-center bg-[#ff8c78] rounded-[23.41px] overflow-hidden aspect-[306/284]">
                  <img
                    className="w-full h-full rounded-xl object-cover"
                    alt={card.title}
                    src={card.image}
                  />
                  {card.hasOverlay && card.overlayImage && (
                    <img
                      className="absolute top-0 left-0 w-full h-full"
                      alt=""
                      src={card.overlayImage}
                    />
                  )}
                </div>

                <div className="flex items-center justify-center bg-[#3c3c3c] rounded-[23.41px] px-4 py-5 mt-0">
                  <p className="[font-family:'Poppins',Helvetica] font-semibold text-[#ffffff] text-lg tracking-[0] text-center leading-7">
                    {card.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
