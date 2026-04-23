import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdaypreg", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

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
            className="glass p-10 md:p-14 rounded-sm border-black/5 min-h-[400px] flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center space-y-6"
                >
                  <div className="flex justify-center">
                    <CheckCircle2 size={64} className="text-brand" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold text-black">신청이 완료되었습니다</h3>
                    <p className="text-black/60 font-sans">
                      담당자가 확인 후 빠른 시일 내에 <br />
                      기재해주신 연락처로 안내해 드리겠습니다.
                    </p>
                  </div>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-sm font-sans font-medium text-brand hover:underline"
                  >
                    새로운 문의 작성하기
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-8"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40">업체명 (성함)</label>
                      <input 
                        type="text" 
                        name="company_name"
                        required
                        placeholder="예: AIK 글로벌" 
                        className="w-full bg-transparent border-b border-black/10 py-3 focus:border-brand outline-none transition-colors text-sm text-black"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40">연락처</label>
                      <input 
                        type="text" 
                        name="contact_info"
                        required
                        placeholder="이메일 또는 전화번호" 
                        className="w-full bg-transparent border-b border-black/10 py-3 focus:border-brand outline-none transition-colors text-sm text-black"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40">예상 예산</label>
                      <select 
                        name="budget"
                        required
                        className="w-full bg-transparent border-b border-black/10 py-3 appearance-none focus:border-brand outline-none transition-colors cursor-pointer text-sm font-sans text-black"
                      >
                        <option value="" className="bg-white">예산 범위 선택</option>
                        <option value="100-500" className="bg-white">100만원 - 500만원 (SME 플랜)</option>
                        <option value="1000-3000" className="bg-white">1,000만원 - 3,000만원</option>
                        <option value="5000+" className="bg-white">5,000만원 이상</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40">제작 목적</label>
                      <input 
                        type="text" 
                        name="purpose"
                        required
                        placeholder="예: TVCF, SNS 바이럴, 오리지널" 
                        className="w-full bg-transparent border-b border-black/10 py-3 focus:border-brand outline-none transition-colors text-sm text-black"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40">레퍼런스 링크</label>
                    <input 
                      type="url" 
                      name="reference_link"
                      placeholder="제작하고 싶은 스타일의 영상 링크를 보내주세요." 
                      className="w-full bg-transparent border-b border-black/10 py-3 focus:border-brand outline-none transition-colors text-sm text-black"
                    />
                  </div>

                  <div className="pt-6">
                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="w-full py-5 bg-black hover:bg-brand disabled:bg-black/40 text-white font-bold uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-3 shadow-lg shadow-black/10"
                    >
                      {status === 'submitting' ? '전송 중...' : '제작 예약 신청'}
                      <Send size={18} />
                    </button>
                    {status === 'error' && (
                      <p className="mt-4 text-xs text-red-500 text-center font-sans">전송에 실패했습니다. 이메일(aik@aikcontents.com)로 문의 부탁드립니다.</p>
                    )}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
