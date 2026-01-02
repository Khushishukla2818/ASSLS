import { X, Facebook, Twitter, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    title: string;
    subtitle?: string;
    description1: string;
    description2: string;
    image: string;
    thumbnails: string[];
  } | null;
  onPrev?: () => void;
  onNext?: () => void;
}

export const BlogDetailModal = ({ isOpen, onClose, post, onPrev, onNext }: BlogDetailModalProps) => {
  if (!isOpen || !post) return null;

  return (
    <div 
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-10 overflow-hidden"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-[1200px] max-h-[90vh] rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Left Side: Large Featured Image */}
        <div className="w-full md:w-[45%] h-[300px] md:h-auto relative overflow-hidden bg-gray-100">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 p-6 md:p-12 lg:p-16 relative flex flex-col overflow-y-auto bg-white">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 md:top-10 md:right-10 text-gray-400 hover:text-gray-600 transition-colors z-20 bg-white/80 rounded-full p-1"
          >
            <X className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          <div className="space-y-6 md:space-y-10">
            <div className="space-y-2 md:space-y-3">
              <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#111111] leading-[1.1] font-['Poppins']">
                {post.title}
              </h2>
              {post.subtitle && (
                <p className="text-[28px] md:text-[34px] lg:text-[42px] font-bold text-[#111111] leading-[1.1] opacity-90 font-['Poppins']">
                  {post.subtitle}
                </p>
              )}
            </div>

            <p className="text-[#4a4a4a] text-base md:text-lg lg:text-xl leading-[1.6] opacity-70 font-['Poppins']">
              {post.description1}
            </p>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3 md:gap-6 py-4 md:py-6">
              {post.thumbnails.slice(0, 3).map((thumb, idx) => (
                <div key={idx} className="aspect-[4/3] rounded-xl md:rounded-[24px] overflow-hidden shadow-sm border border-gray-100">
                  <img src={thumb} alt="Thumbnail" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <p className="text-[#4a4a4a] text-base md:text-lg lg:text-xl leading-[1.6] opacity-70 font-['Poppins']">
              {post.description2}
            </p>

            {/* Share & Navigation Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-8 mt-auto border-t border-gray-100 gap-6">
              <div className="flex items-center gap-4 md:gap-6">
                <span className="font-bold text-gray-900 text-base md:text-lg font-['Poppins']">Share with</span>
                <div className="flex gap-3 md:gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                    <Facebook className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                    <Twitter className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 md:gap-6">
                <Button 
                  onClick={onPrev}
                  variant="outline" 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full p-0 border-gray-200 text-[#ff5f00] hover:bg-orange-50 no-default-hover-elevate"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </Button>
                <Button 
                  onClick={onNext}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full p-0 bg-[#ff5f00] hover:bg-[#ff5f00]/90 text-white shadow-xl shadow-orange-100 no-default-hover-elevate"
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
