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
      <div className="bg-white w-full max-w-[1200px] h-[auto] min-h-[800px] rounded-3xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        
        {/* Left Side: Large Featured Image */}
        <div className="w-full md:w-[45%] h-[400px] md:h-auto relative overflow-hidden bg-gray-100">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 p-8 md:p-16 relative flex flex-col justify-between">
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-[42px] font-bold text-[#111111] leading-tight font-['Poppins']">
                {post.title}
              </h2>
              {post.subtitle && (
                <p className="text-[32px] font-bold text-[#111111] leading-tight opacity-90">
                  {post.subtitle}
                </p>
              )}
            </div>

            <p className="text-[#4a4a4a] text-lg leading-relaxed opacity-70">
              {post.description1}
            </p>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4 py-4">
              {post.thumbnails.slice(0, 3).map((thumb, idx) => (
                <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm border border-gray-100">
                  <img src={thumb} alt="Thumbnail" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <p className="text-[#4a4a4a] text-lg leading-relaxed opacity-70">
              {post.description2}
            </p>

            {/* Share & Navigation Footer */}
            <div className="flex items-center justify-between pt-8 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <span className="font-bold text-gray-900">Share with</span>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                    <Facebook className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                    <Twitter className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={onPrev}
                  variant="outline" 
                  className="w-12 h-12 rounded-full p-0 border-gray-200 text-[#ff5f00] hover:bg-orange-50"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button 
                  onClick={onNext}
                  className="w-12 h-12 rounded-full p-0 bg-[#ff5f00] hover:bg-[#ff5f00]/90 text-white shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
