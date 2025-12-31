import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Harappan Kumar",
    image: "/figmaAssets/placeholder---image-7.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    textHeight: "h-[106px]",
    gap: "gap-[16.5px]",
  },
  {
    name: "Ester Rani",
    image: "/figmaAssets/placeholder---image-6.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    textHeight: "h-[60px]",
    gap: "gap-[62.5px]",
  },
  {
    name: "Saradha Kumari",
    image: "/figmaAssets/placeholder---image-7.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    textHeight: "h-[60px]",
    gap: "gap-[62.5px]",
  },
  {
    name: "John paul",
    image: "/figmaAssets/placeholder---image-8.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    textHeight: "h-[60px]",
    gap: "gap-[62.5px]",
  },
  {
    name: "Pavan Kumar",
    image: "/figmaAssets/placeholder---image-9.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    textHeight: "h-[60px]",
    gap: "gap-[60.5px]",
  },
  {
    name: "Nirmala. L",
    image: "/figmaAssets/placeholder---image-10.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    textHeight: "h-[60px]",
    gap: "gap-[60.5px]",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 bg-[#ffffff] relative">
      <div className="container mx-auto px-4 max-w-[1512px]">
        <div className="relative">
          <div className="text-center mb-12">
            <h2 className="[-webkit-text-stroke:1px_#ffffff] [font-family:'Poppins',Helvetica] font-bold text-black text-[40px] tracking-[0.80px] leading-[48.0px]">
              Voices of Hope
            </h2>
            <div className="mx-auto mt-3 w-[119px] h-[7px] bg-[#ff5f00] rounded-lg border border-solid border-[#ffffff]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1239px] mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`flex flex-col ${testimonial.gap} bg-[#f9f9f9] rounded-2xl overflow-hidden border border-solid border-[#ffffff] shadow-[0px_4px_8px_2px_#0000001a]`}
              >
                <CardContent className="pt-[22.5px] px-[25px] pb-6 flex flex-col h-full">
                  <div className="flex flex-col items-start gap-6 flex-1">
                    <img
                      className="w-20 h-20 rounded-[999px] object-cover"
                      alt="Placeholder image"
                      src={testimonial.image}
                    />

                    <div className="flex flex-col items-start gap-3">
                      <p
                        className={`w-full ${testimonial.textHeight} [font-family:'Poppins',Helvetica] font-normal text-gray-2 text-sm tracking-[0.28px] leading-[22.4px]`}
                      >
                        {testimonial.text}
                      </p>
                    </div>
                  </div>

                  <div className="[font-family:'Poppins',Helvetica] font-medium text-[#4e4e4e] text-base tracking-[0.32px] leading-[25.6px] whitespace-nowrap">
                    {testimonial.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <img
            className="absolute bottom-0 left-0 w-[265px] h-[313px] object-cover pointer-events-none"
            alt="Citypng COM HD"
            src="/figmaAssets/-citypng-com-hd-orange-hand-drawn-doodle-arrow-to-left-transpare-1.png"
          />

          <img
            className="absolute top-0 right-0 w-[222px] h-[315px] object-cover pointer-events-none"
            alt="Citypng COM HD"
            src="/figmaAssets/-citypng-com-hd-orange-hand-drawn-doodle-arrow-to-left-transpare-1.png"
          />
        </div>
      </div>
    </section>
  );
};
