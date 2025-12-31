"use client";

import { useState } from "react";

export const AboutUsSection = (): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="flex flex-col">
            <div className="mb-6">
              <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-4xl tracking-[0] leading-[50.4px] mb-2">
                About ASSLS
              </h2>
              <div className="w-[119px] h-[7px] bg-[#ff5f00] rounded-lg" />
            </div>

            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#3d3d3d] text-2xl tracking-[0.48px] leading-[38.4px] mb-8">
              The ASSLS was formed under the aegis of Mr. Prabhu Dasu in the
              year 2005 with Regd. No 357 / 2005, under society&apos;s
              registration act 35 of 2001 to raise most up-to-date voices, ideas
              and solutions in the development context. The structure upgrades
              the voices of individuals performing transformative work in their
              communities and finding workable solutions to important
              challenges.
            </p>

            <div className="[font-family:'Poppins',Helvetica] font-normal text-2xl tracking-[0.48px] leading-[38.4px]">
              <span className="text-[#3d3d3d] tracking-[0.12px]">
                We believe that solutions come from communities on the
                frontlines of these challenges, and solutions come from art,
                culture, and actions derived from people who are stepping up in
                the communities where they live and work.&nbsp;&nbsp;
              </span>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#ff5f00] tracking-[0.12px] hover:underline focus:outline-none"
              >
                Read more...
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              className="w-full max-w-[649px] h-auto aspect-[649/720] rounded-3xl object-cover"
              alt="Placeholder image"
              src="/figmaAssets/placeholder---image.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
