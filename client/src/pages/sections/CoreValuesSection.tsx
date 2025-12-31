import { Card, CardContent } from "@/components/ui/card";

const coreValuesData = [
  {
    number: "01",
    title: "Service",
    description:
      "To serve is the choosiest of choices, We believe different views and experiences are advantages",
  },
  {
    number: "02",
    title: "Equity",
    description:
      "we strive to ensure everyone has a seat and voice at the table built by all.",
  },
  {
    number: "03",
    title: "Transformative",
    description:
      "We are smart, adaptable, learn from our mistakes, and are willing to be the first to try new things.",
  },
  {
    number: "04",
    title: "Integrity",
    description: "We uphold the values of ASSLS in every action and decision.",
  },
  {
    number: "05",
    title: "Excellence",
    description:
      "We believe in what we are doing, thus we value hard work and persistence to offer our best.",
  },
  {
    number: "06",
    title: "Respect",
    description:
      "We work with exceptional people who do exceptional things. We're committed to building a caring, and supportive environment.",
  },
];

export const CoreValuesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#ffffff] py-16">
      <div className="container mx-auto px-4 max-w-[1512px]">
        <header className="text-center mb-12">
          <h2 className="[-webkit-text-stroke:1px_#ffffff] [font-family:'Playball',Helvetica] font-normal text-[#ff5f00] text-[64px] tracking-[1.28px] leading-[76.8px] mb-8">
            Core Values
          </h2>
        </header>

        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16 max-w-[1294px] mx-auto">
          <div className="flex-1 max-w-[400px]">
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#0e0e0e] text-[37.7px] leading-[48px]">
              Principles That Shape Our Impact
            </h3>
          </div>

          <div className="flex-1 max-w-[464px]">
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#a2a2a2] text-xl leading-[normal]">
              Our values are the foundation of our mission and the compass for
              our work. They reflect our commitment to equity, dignity, and
              service for all communities we serve.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1294px] mx-auto">
          {coreValuesData.map((value, index) => (
            <Card key={index} className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0 flex flex-col gap-6">
                <div className="[font-family:'Poppins',Helvetica] font-normal text-[#1e1e1e] text-[21px] leading-[28.8px]">
                  {value.number}
                </div>
                <div className="[font-family:'Poppins',Helvetica] font-normal text-base leading-[26px]">
                  <span className="font-bold text-[#1e1e1e]">
                    {value.title}
                    <br />
                  </span>
                  <span className="text-[#3d3d3d]">{value.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
