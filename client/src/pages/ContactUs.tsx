import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SuccessModal } from "@/components/SuccessModal";
import { NavigationSection } from "@/pages/sections/NavigationSection";
import { FooterSection } from "@/pages/sections/FooterSection";

export const ContactUs = (): JSX.Element => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "", message: "" });

  const handleSubmit = () => {
    if (formData.name && formData.mobile && formData.email && formData.message) {
      setShowSuccess(true);
      setFormData({ name: "", mobile: "", email: "", message: "" });
    }
  };

  return (
    <div className="bg-[#ffffff] overflow-hidden w-full relative font-['Poppins',_Helvetica]">
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
      {/* Top Info Bar */}
      <div className="w-full flex justify-center bg-white border-b border-[#e9ecef]">
        <div className="w-full max-w-[1512px] h-[45px] flex items-center justify-between px-[102px]">
          <div className="flex gap-[15px] items-center">
             <div className="flex items-center gap-2">
              <img src="/figmaAssets/phone-icon.svg" alt="Phone" className="w-4 h-4" />
              <span className="text-[#ff5f00] text-sm font-medium tracking-[0] leading-[normal]">(+91) 995-945-2342</span>
            </div>
            <div className="w-[1px] h-3 bg-gray-300 mx-2" />
            <div className="flex items-center gap-2">
              <img src="/figmaAssets/email-icon.svg" alt="Email" className="w-4 h-4" />
              <span className="text-[#ff5f00] text-sm font-medium tracking-[0] leading-[normal]">ceo@assls.in</span>
            </div>
          </div>
          <div className="flex gap-[15px] items-center">
            <img src="/figmaAssets/logos-youtube-icon.svg" alt="YouTube" className="w-6 h-6" />
            <img src="/figmaAssets/logos-instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
            <img src="/figmaAssets/logos-facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
          </div>
        </div>
      </div>

      <NavigationSection />

      {/* Hero Section */}
      <section className="w-full max-w-[1512px] mx-auto px-[102px] pt-[80px] pb-[100px]">
        <div className="text-center mb-[80px]">
          <h1 className="font-['Yellowtail',_cursive] font-normal text-[#ff5f00] text-[64px] tracking-[0] leading-[normal] mb-4">
            Get In Touch With Us
          </h1>
          <p className="max-w-[830px] mx-auto font-normal text-[#4a4a4a] text-lg tracking-[0] leading-[27px] opacity-70">
            For More Information About Our Services, Please Feel Free To Drop Us An Email.
            Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="w-full flex gap-[84px]">
          {/* Left: Photos */}
          <div className="flex-1 relative flex flex-col gap-6">
             <div className="flex gap-6 items-start">
                <div className="w-[240px] aspect-[4/5] rounded-[15px] overflow-hidden shadow-md">
                   <img src="/figmaAssets/rectangle-5.png" alt="Detail 1" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-6 pt-12">
                   <div className="w-[180px] aspect-square rounded-[15px] overflow-hidden shadow-md">
                      <img src="/figmaAssets/rectangle-3-1.png" alt="Detail 2" className="w-full h-full object-cover" />
                   </div>
                   <div className="w-[180px] aspect-square rounded-[15px] overflow-hidden shadow-md">
                      <img src="/figmaAssets/rectangle-22593.png" alt="Detail 3" className="w-full h-full object-cover" />
                   </div>
                </div>
             </div>
             <div className="w-[240px] aspect-[4/3] rounded-[15px] overflow-hidden shadow-md -mt-12">
                 <img src="/figmaAssets/placeholder---image-1.png" alt="Detail 4" className="w-full h-full object-cover" />
             </div>
          </div>

          {/* Right: Form */}
          <div className="flex-1 space-y-[33px] text-left">
            <div className="space-y-[15px]">
              <label className="font-medium text-[#111111] text-lg tracking-[0] leading-[normal]">Name</label>
              <Input 
                className="h-[65px] bg-white border border-[#e3e3e3] rounded-xl px-[25px] text-base" 
                placeholder="Enter Your Name" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-[15px]">
              <label className="font-medium text-[#111111] text-lg tracking-[0] leading-[normal]">Mobile</label>
              <Input 
                className="h-[65px] bg-white border border-[#e3e3e3] rounded-xl px-[25px] text-base" 
                placeholder="Enter Mobile Number" 
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              />
            </div>
            <div className="space-y-[15px]">
              <label className="font-medium text-[#111111] text-lg tracking-[0] leading-[normal]">Email</label>
              <Input 
                className="h-[65px] bg-white border border-[#e3e3e3] rounded-xl px-[25px] text-base" 
                placeholder="Enter E - Mail ID" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="space-y-[15px] relative">
              <label className="font-medium text-[#111111] text-lg tracking-[0] leading-[normal]">Message</label>
              <Textarea 
                className="min-h-[148px] bg-white border border-[#e3e3e3] rounded-xl px-[25px] py-[20px] text-base resize-none" 
                placeholder="Enter Text" 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              
              {/* WhatsApp - Absolute positioned to the right of the form */}
              <div className="absolute right-[-140px] bottom-[30px] flex items-center gap-2 group cursor-pointer z-20">
                <img src="/figmaAssets/logos-whatsapp-icon.svg" alt="WhatsApp" className="w-[50px] h-[50px]" />
                <div className="bg-white px-3 py-1 rounded shadow-md border border-gray-100">
                   <span className="text-[#ff5f00] text-[10px] font-bold whitespace-nowrap">Chat with us</span>
                </div>
              </div>
            </div>
            <Button 
              onClick={handleSubmit}
              className="w-full h-[65px] bg-[#ff5f00] hover:bg-[#ff5f00]/90 rounded-xl font-bold text-white text-base"
            >
              Submit
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
