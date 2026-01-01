import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-[500px] rounded-2xl shadow-2xl relative overflow-hidden animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center pt-16 pb-12 px-10 text-center">
          <div className="w-24 h-24 rounded-full border-2 border-[#ff5f00] flex items-center justify-center mb-8">
            <Check className="w-12 h-12 text-[#ff5f00]" strokeWidth={3} />
          </div>

          <h2 className="text-[40px] font-bold text-[#111111] mb-4 [font-family:'Poppins',Helvetica]">
            Success
          </h2>
          
          <p className="text-[#4a4a4a] text-xl opacity-60 mb-12 [font-family:'Poppins',Helvetica]">
            Your Request successfully Submitted
          </p>

          <div className="w-full flex justify-end">
            <Button 
              onClick={onClose}
              className="bg-[#ff5f00] hover:bg-[#ff5f00]/90 text-white font-bold px-8 py-6 rounded-xl text-lg min-w-[100px]"
            >
              OK
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
