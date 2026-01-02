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
    <footer className="w-full bg-[#F8F9FA] pt-[120px] pb-16 font-['Poppins',_Helvetica]">
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
      
      <div className="max-w-[1512px] mx-auto px-[102px]">
        <div className="flex flex-wrap justify-between items-start gap-16 mb-24">
          {/* Logo and Newsletter */}
          <div className="max-w-[420px] space-y-12">
            <div className="flex items-center gap-6">
              <img 
                className="w-[90px] h-[90px] object-contain cursor-pointer" 
                alt="ASSLS Logo" 
                src="/figmaAssets/image-1.png"
                onClick={() => window.location.href = "/"}
              />
              <div className="flex flex-col">
                <span className="font-bold text-[#111111] text-[48px] leading-[1] tracking-tight">ASSLS</span>
                <span className="text-[#05cd99] text-[13px] font-black uppercase tracking-[0.25em] mt-1">A Hope For Better Lives</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="font-bold text-[#111111] text-[22px] tracking-tight">Updates right to your Inbox</p>
              <div className="flex gap-4">
                <Input 
                  className="h-[70px] bg-white border-2 border-gray-100 rounded-2xl px-8 text-xl focus:border-[#ff5f00] transition-colors" 
                  placeholder="Email Address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button 
                  onClick={handleSend}
                  className="h-[70px] px-12 bg-[#ff5f00] hover:bg-[#ff5f00]/90 rounded-2xl font-bold text-white text-xl shadow-lg shadow-orange-100 transition-all no-default-hover-elevate"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="flex gap-[120px]">
            <div className="space-y-10">
              <h4 className="font-bold text-[#111111] text-[18px] uppercase tracking-[0.2em]">Details</h4>
              <ul className="space-y-6 text-[#111111]/60 font-bold text-[20px]">
                <li><a href="#" className="hover:text-[#ff5f00] transition-colors">Location</a></li>
                <li><a href="/contact" className="hover:text-[#ff5f00] transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="space-y-10">
              <h4 className="font-bold text-[#111111] text-[18px] uppercase tracking-[0.2em]">Links</h4>
              <ul className="space-y-6 text-[#111111]/60 font-bold text-[20px]">
                <li><a href="/" className="hover:text-[#ff5f00] transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-[#ff5f00] transition-colors">About</a></li>
                <li><a href="/services" className="hover:text-[#ff5f00] transition-colors">Services</a></li>
                <li><a href="/blog" className="hover:text-[#ff5f00] transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div className="space-y-10">
              <h4 className="font-bold text-[#111111] text-[18px] uppercase tracking-[0.2em]">ASSLS</h4>
              <ul className="space-y-6 text-[#111111]/60 font-bold text-[20px]">
                <li><a href="#" className="hover:text-[#ff5f00] transition-colors">Gallery</a></li>
                <li><a href="#" className="hover:text-[#ff5f00] transition-colors">Donate</a></li>
                <li><a href="#" className="hover:text-[#ff5f00] transition-colors">Community</a></li>
              </ul>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="flex flex-col items-center gap-6">
            <div className="p-8 bg-white border-2 border-gray-50 rounded-[48px] shadow-xl">
              <img src="/figmaAssets/bi-qr-code.svg" alt="QR Code" className="w-[140px] h-[140px]" />
            </div>
            <span className="text-[12px] font-black text-[#111111]/20 uppercase tracking-[0.4em]">Scan to donate</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-gray-200 flex justify-between items-center">
          <div className="flex gap-[60px] text-[14px] font-black text-[#111111]/30 uppercase tracking-[0.2em]">
            <span>© ASSLS 2025</span>
            <a href="#" className="hover:text-[#ff5f00] transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-[#ff5f00] transition-colors">Refund Policy</a>
          </div>
          <div className="flex gap-10 items-center">
            <img src="/figmaAssets/logos-youtube-icon.svg" className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform" alt="YouTube" />
            <img src="/figmaAssets/logos-instagram-icon.svg" className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform" alt="Instagram" />
            <img src="/figmaAssets/logos-facebook-icon.svg" className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform" alt="Facebook" />
          </div>
        </div>
      </div>
    </footer>
  );
};
