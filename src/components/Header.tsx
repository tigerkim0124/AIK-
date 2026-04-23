import { motion } from 'motion/react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 glass border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-[70px] h-[70px] flex items-center justify-center overflow-hidden rounded-sm">
            <img 
              src="https://lh3.googleusercontent.com/u/0/d/1cdXX4dH2mytWkM9pUae7ebviCLUfb5Ds" 
              alt="AIK 콘텐츠 로고" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-display font-bold text-xl tracking-tight uppercase text-black">
            AIK <span className="text-brand">콘텐츠</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: '회사소개', id: 'about' },
            { label: '서비스', id: 'services' },
            { label: '포트폴리오', id: 'portfolio' },
            { label: '저가형 AI영상상품 예시', id: 'ai-products' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-black/60 hover:text-black transition-colors uppercase tracking-[-0.03em]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-all rounded-sm shadow-sm"
          >
            문의하기
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
