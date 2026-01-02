import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SuccessModal } from "@/components/SuccessModal";

export const FooterSection = (): JSX.Element => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const handleSend = () => {
    if (email) {
      setShowSuccess(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full flex flex-col items-center bg-white pt-[100px] pb-[45px] border-t font-['Poppins',_Helvetica]">
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
      
      <div className="w-full max-w-[1512px] px-[102px] flex justify-between mb-[95px]">
        <div className="max-w-[342px] space-y-[35px]">
          <div className="flex items-center gap-[15px]">
            <img 
              className="w-[69px] h-[76px] object-cover cursor-pointer" 
              alt="Logo" 
              src="/figmaAssets/image-1.png"
              onClick={() => window.location.href = "/"}
            />
            <div className="flex flex-col">
              <span className="font-bold text-[#111111] text-[35px] leading-none">ASSLS</span>
              <span className="font-black text-[#05cd99] text-[10px] uppercase tracking-[0.2em]">A Hope For Better Lives</span>
            </div>
          </div>
          
          <div className="space-y-[15px]">
            <p className="font-bold text-[#4a4a4a] text-lg">Updates right to your Inbox</p>
            <div className="flex gap-2.5">
              <Input 
                className="h-14 bg-[#f8f9fa] border-0 rounded-lg px-[22px] text-base" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                onClick={handleSend}
                className="w-[105px] h-14 bg-[#ff5f00] hover:bg-[#ff5f00]/90 rounded-lg font-bold text-white"
              >
                Send
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-[100px]">
          <div className="space-y-[33px]">
            <h4 className="font-bold text-[#111111] text-lg uppercase tracking-[0.2em]">Details</h4>
            <div className="flex flex-col gap-[22px] font-normal text-[#4a4a4a] text-lg opacity-70">
              <a href="#" className="hover:text-[#ff5f00] transition-colors">Location</a>
              <a href="/contact" className="hover:text-[#ff5f00] transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="space-y-[33px]">
            <h4 className="font-bold text-[#111111] text-lg uppercase tracking-[0.2em]">Links</h4>
            <div className="flex flex-col gap-[22px] font-normal text-[#4a4a4a] text-lg opacity-70">
              <a href="/" className="hover:text-[#ff5f00] transition-colors">Home</a>
              <a href="/about" className="hover:text-[#ff5f00] transition-colors">About</a>
              <a href="/services" className="hover:text-[#ff5f00] transition-colors">Services</a>
              <a href="/blog" className="hover:text-[#ff5f00] transition-colors">Blog</a>
            </div>
          </div>
          
          <div className="space-y-[33px] flex flex-col items-center">
            <h4 className="font-bold text-[#111111] text-lg uppercase tracking-[0.2em]">ASSLS</h4>
            <div className="flex flex-col gap-[22px] font-normal text-[#4a4a4a] text-lg opacity-70">
              <a href="#" className="hover:text-[#ff5f00] transition-colors">Gallery</a>
              <a href="#" className="hover:text-[#ff5f00] transition-colors">Donate</a>
              <a href="#" className="hover:text-[#ff5f00] transition-colors">Community</a>
            </div>
            
            <div className="mt-8 flex flex-col items-center gap-[15px]">
              <div className="p-4 border border-[#e3e3e3] rounded-[32px] shadow-sm bg-white">
                <img src="/figmaAssets/bi-qr-code.svg" alt="QR Code" className="w-[120px] h-[120px]" />
              </div>
              <span className="font-black text-[#e3e3e3] text-[10px] uppercase tracking-[0.4em]">Scan to donate</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1512px] px-[102px] pt-[45px] border-t border-[#e3e3e3] flex justify-between items-center">
        <div className="flex gap-[55px] font-black text-[#4a4a4a] text-sm uppercase tracking-[0.2em] opacity-50">
          <span>© ASSLS 2025</span>
          <a href="#" className="hover:text-gray-600 transition-colors">Privacy policy</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Refund Policy</a>
        </div>
        <div className="flex gap-[33px] items-center">
          <img src="/figmaAssets/logos-youtube-icon.svg" className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" alt="YouTube" />
          <img src="/figmaAssets/logos-instagram-icon.svg" className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" alt="Instagram" />
          <img src="/figmaAssets/logos-facebook-icon.svg" className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" alt="Facebook" />
        </div>
      </div>
    </footer>
  );
};
