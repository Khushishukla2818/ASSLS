import { Button } from "@/components/ui/button";

export const VisionStatementSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-[101px]">
      <div className="container mx-auto px-[97px]">
        <div className="flex items-start gap-[15px]">
          <div className="flex-shrink-0">
            <img
              className="w-[526px] h-[359px] rounded-xl object-cover -mt-[29px] -ml-3"
              alt="Rectangle"
              src="/figmaAssets/rectangle-3.png"
            />
          </div>

          <div className="flex-1 flex flex-col pt-[31px]">
            <div className="relative mb-[55px]">
              <h2 className="[font-family:'Poppins',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[normal] mb-[25px]">
                Our Vision
              </h2>
              <div className="w-[119px] h-[7px] bg-[#ff5f00] rounded-lg" />
            </div>

            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#3d3d3d] text-2xl tracking-[0] leading-[normal] mb-[55px] max-w-[776px]">
              Our vision is an elevated agriculture, livelihoods, economy that
              equitably serves all people with a diverse supply chain that is
              free of representation and wage gaps and generates wealth, work,
              and savings for all the communities it serves.
            </p>

            <Button className="w-[172px] h-14 bg-[#ff5f00] hover:bg-[#ff5f00]/90 rounded-xl [font-family:'Poppins',Helvetica] font-medium text-white text-2xl">
              Join us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
