import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const teamMembers = [
  {
    image: "/figmaAssets/placeholder---image-1.png",
    role: "Founder & Executive Director",
    name: "Mr. Prabhu Dasu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
  {
    image: "/figmaAssets/placeholder---image-4.png",
    role: "Founder & Executive Director",
    name: "Mr. Prabhu Dasu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
  {
    image: "/figmaAssets/placeholder---image-4.png",
    role: "Founder & Executive Director",
    name: "Mr. Prabhu Dasu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
  {
    image: "/figmaAssets/placeholder---image-4.png",
    role: "Founder & Executive Director",
    name: "Mr. Prabhu Dasu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
];

export const TeamSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#ffffff] py-16 px-4">
      <div className="max-w-[1309px] mx-auto flex flex-col gap-12">
        <header className="flex flex-col items-center gap-6">
          <h2 className="[-webkit-text-stroke:1px_#ffffff] [font-family:'Playball',Helvetica] font-normal text-[#ff5f00] text-[64px] text-center tracking-[1.28px] leading-[76.8px] whitespace-nowrap">
            Our Family
          </h2>

          <p className="max-w-[1018px] [font-family:'Poppins',Helvetica] font-normal text-[#a2a2a2] text-2xl text-center tracking-[0] leading-[normal]">
            Behind every initiative is a passionate team driven by values and
            service. Together, we work closely with communities to turn vision
            into action.
          </p>
        </header>

        <ScrollArea className="w-full">
          <div className="flex gap-7 pb-4">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[579px] bg-[#ffffff] rounded-2xl border border-solid border-[#dcdcdc] shadow-[0px_4px_9px_#0000001a]"
              >
                <CardContent className="flex flex-col items-center gap-[11px] p-0">
                  <img
                    className="h-[180px] w-[180px] mt-[51px] rounded-[999px] object-cover"
                    alt="Placeholder image"
                    src={member.image}
                  />

                  <div className="flex flex-col items-center gap-4 w-[495px] pb-8">
                    <div className="flex flex-col items-center gap-4 w-full">
                      <div className="flex flex-col items-center w-full">
                        <p className="[font-family:'Epilogue',Helvetica] font-normal text-gray-2 text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#18171c] text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap">
                      {member.name}
                    </h3>

                    <p className="w-[495px] [font-family:'Poppins',Helvetica] font-normal text-[#3d3d3d] text-xl text-center tracking-[0] leading-[30px]">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};
