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
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-[1200px] h-[auto] min-h-[800px] rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        
        {/* Left Side: Large Featured Image */}
        <div className="w-full md:w-[45%] h-[400px] md:h-auto relative overflow-hidden bg-gray-100">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 p-8 md:p-16 relative flex flex-col justify-start">
          <button 
            onClick={onClose}
            className="absolute top-10 right-10 text-gray-400 hover:text-gray-600 transition-colors z-10"
          >
            <X className="w-10 h-10" />
          </button>

          <div className="space-y-10">
            <div className="space-y-3">
              <h2 className="text-[48px] font-bold text-[#111111] leading-[1.1] font-['Poppins']">
                {post.title}
              </h2>
              {post.subtitle && (
                <p className="text-[42px] font-bold text-[#111111] leading-[1.1] opacity-90 font-['Poppins']">
                  {post.subtitle}
                </p>
              )}
            </div>

            <p className="text-[#4a4a4a] text-xl leading-[1.6] opacity-70 font-['Poppins']">
              {post.description1}
            </p>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-6 py-6">
              {post.thumbnails.slice(0, 3).map((thumb, idx) => (
                <div key={idx} className="aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm border border-gray-100">
                  <img src={thumb} alt="Thumbnail" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <p className="text-[#4a4a4a] text-xl leading-[1.6] opacity-70 font-['Poppins']">
              {post.description2}
            </p>

            {/* Share & Navigation Footer */}
            <div className="flex items-center justify-between pt-12 mt-auto border-t border-gray-100">
              <div className="flex items-center gap-6">
                <span className="font-bold text-gray-900 text-lg font-['Poppins']">Share with</span>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                    <Facebook className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                    <Twitter className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <Button 
                  onClick={onPrev}
                  variant="outline" 
                  className="w-14 h-14 rounded-full p-0 border-gray-200 text-[#ff5f00] hover:bg-orange-50 no-default-hover-elevate"
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>
                <Button 
                  onClick={onNext}
                  className="w-14 h-14 rounded-full p-0 bg-[#ff5f00] hover:bg-[#ff5f00]/90 text-white shadow-xl shadow-orange-100 no-default-hover-elevate"
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
