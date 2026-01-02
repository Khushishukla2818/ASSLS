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
    <footer className="w-full bg-[#F8F9FA] pt-24 pb-12 font-['Poppins',_Helvetica]">
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
      
      <div className="max-w-[1512px] mx-auto px-[102px]">
        <div className="flex flex-wrap justify-between gap-16 mb-24">
          {/* Logo and Newsletter */}
          <div className="max-w-[400px] space-y-10">
            <div className="flex items-center gap-5">
              <img 
                className="w-20 h-20 object-contain cursor-pointer" 
                alt="ASSLS Logo" 
                src="/figmaAssets/image-1.png"
                onClick={() => window.location.href = "/"}
              />
              <div className="flex flex-col">
                <span className="font-bold text-[#111111] text-[40px] leading-none tracking-tight">ASSLS</span>
                <span className="text-[#05cd99] text-xs font-black uppercase tracking-[0.2em] mt-1">A Hope For Better Lives</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="font-bold text-gray-700 text-xl">Updates right to your Inbox</p>
              <div className="flex gap-3">
                <Input 
                  className="h-16 bg-white border-2 border-gray-100 rounded-2xl px-6 text-lg focus:border-[#ff5f00] transition-colors" 
                  placeholder="Email Address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button 
                  onClick={handleSend}
                  className="h-16 px-10 bg-[#ff5f00] hover:bg-[#ff5f00]/90 rounded-2xl font-bold text-white text-lg shadow-lg shadow-orange-200"
                >
                  Send
                </Button>
              </div>
            </div>
            
            <div className="pt-4">
              <div className="flex gap-10 text-sm font-black text-gray-400 uppercase tracking-widest">
                <span>© ASSLS 2025</span>
                <a href="#" className="hover:text-[#ff5f00] transition-colors">Privacy policy</a>
                <a href="#" className="hover:text-[#ff5f00] transition-colors">Refund Policy</a>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="flex flex-col items-center gap-6 py-4">
            <div className="p-6 bg-white border-2 border-gray-50 rounded-[40px] shadow-xl">
              <img src="/figmaAssets/bi-qr-code.svg" alt="QR Code" className="w-32 h-32" />
            </div>
            <span className="text-sm font-black text-gray-300 uppercase tracking-[0.4em]">Scan to donate</span>
          </div>

          {/* Links Grid */}
          <div className="flex gap-20">
            <div className="space-y-10">
              <h4 className="font-bold text-gray-900 text-xl uppercase tracking-widest">Details</h4>
              <ul className="space-y-6 text-gray-500 font-bold text-lg">
                <li><a href="#" className="hover:text-[#ff5f00] transition-colors">Location</a></li>
                <li><a href="/contact" className="hover:text-[#ff5f00] transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="space-y-10">
              <h4 className="font-bold text-gray-900 text-xl uppercase tracking-widest">Links</h4>
              <ul className="space-y-6 text-gray-500 font-bold text-lg">
                <li><a href="/" className="hover:text-[#ff5f00] transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-[#ff5f00] transition-colors">About</a></li>
                <li><a href="/services" className="hover:text-[#ff5f00] transition-colors">Services</a></li>
                <li><a href="/blog" className="hover:text-[#ff5f00] transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div className="space-y-10">
              <h4 className="font-bold text-gray-900 text-xl uppercase tracking-widest">ASSLS</h4>
              <ul className="space-y-6 text-gray-500 font-bold text-lg">
                <li><a href="#" className="hover:text-[#ff5f00] transition-colors">Gallery</a></li>
                <li><a href="#" className="hover:text-[#ff5f00] transition-colors">Donate</a></li>
                <li><a href="#" className="hover:text-[#ff5f00] transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Socials */}
        <div className="flex justify-end pt-12 border-t border-gray-200">
          <div className="flex gap-8">
            <img src="/figmaAssets/logos-youtube-icon.svg" className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform" alt="YouTube" />
            <img src="/figmaAssets/logos-instagram-icon.svg" className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform" alt="Instagram" />
            <img src="/figmaAssets/logos-facebook-icon.svg" className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform" alt="Facebook" />
          </div>
        </div>
      </div>
    </footer>
  );
};
