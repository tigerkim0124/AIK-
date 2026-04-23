import { motion } from 'motion/react';
import { Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-8 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center overflow-hidden rounded-sm">
                <img 
                  src="https://lh3.googleusercontent.com/u/0/d/1GiD-VxAICx2-Uav_IBm0pZzI5cmWzLuD" 
                  alt="AIK 콘텐츠 로고" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-bold text-lg tracking-tight uppercase text-black">
                AIK <span className="text-brand">콘텐츠</span>
              </span>
            </div>
            <p className="text-black/50 text-[16.5px] font-medium tracking-[-0.05em] max-w-lg">
              AIK 콘텐츠에게 최고의 브랜드는 바로 여러분입니다.
            </p>
          </div>

          <div className="flex gap-8">
            <a 
              href="https://www.youtube.com/@aikcontents" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/30 hover:text-black transition-colors flex items-center gap-2"
              aria-label="Youtube"
            >
              <Youtube size={20} />
              <span className="text-[10px] font-mono uppercase tracking-widest">Youtube</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-end items-center gap-6">
          
          <p className="text-[10px] font-mono uppercase tracking-widest text-black/20">
            © {currentYear} AIK 콘텐츠. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
