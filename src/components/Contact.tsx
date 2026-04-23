import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-sans font-medium text-brand text-sm uppercase tracking-[-0.02em] block mb-4">04 // Contact</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-none mb-8 text-black">
              LET'S CREATE <br />
              YOUR <span className="text-gradient">STORY</span>
            </h2>
            
            <div>
              <p className="text-black/40 font-sans font-medium text-xs uppercase tracking-[-0.02em] mb-4">문의</p>
              <p className="text-2xl font-display font-medium tracking-[-0.03em] text-black">aik@aikcontents.com</p>
              <p className="mt-4 text-sm text-black/60 font-sans">
                AIK 콘텐츠는 이메일, 온라인 문의 이후 전화상담이 진행됩니다.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 md:p-14 rounded-sm border-black/5"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40">업체명 (성함)</label>
                  <input 
                    type="text" 
                    placeholder="예: AIK 글로벌" 
                    className="w-full bg-transparent border-b border-black/10 py-3 focus:border-brand outline-none transition-colors text-sm text-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40">연락처</label>
                  <input 
                    type="text" 
                    placeholder="이메일 또는 전화번호" 
                    className="w-full bg-transparent border-b border-black/10 py-3 focus:border-brand outline-none transition-colors text-sm text-black"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40">예상 예산</label>
                  <select className="w-full bg-transparent border-b border-black/10 py-3 appearance-none focus:border-brand outline-none transition-colors cursor-pointer text-sm font-sans text-black">
                    <option className="bg-white">예산 범위 선택</option>
                    <option className="bg-white">100만원 - 500만원 (SME 플랜)</option>
                    <option className="bg-white">1,000만원 - 3,000만원</option>
                    <option className="bg-white">5,000만원 이상</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40">제작 목적</label>
                  <input 
                    type="text" 
                    placeholder="예: TVCF, SNS 바이럴, 오리지널" 
                    className="w-full bg-transparent border-b border-black/10 py-3 focus:border-brand outline-none transition-colors text-sm text-black"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40">레퍼런스 링크</label>
                <input 
                  type="url" 
                  placeholder="제작하고 싶은 스타일의 영상 링크를 보내주세요." 
                  className="w-full bg-transparent border-b border-black/10 py-3 focus:border-brand outline-none transition-colors text-sm text-black"
                />
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  className="w-full py-5 bg-black hover:bg-brand text-white font-bold uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-3 shadow-lg shadow-black/10"
                >
                  제작 예약 신청
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
