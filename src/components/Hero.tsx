import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-white">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <iframe
          src="https://my.spline.design/springstatesloadingscreen-cwu6eaM5uEZ8p31YFHIKHH8F/"
          frameBorder="0"
          width="140%"
          height="140%"
          className="opacity-40 pointer-events-none mix-blend-multiply flex-shrink-0 translate-y-[15%]"
          title="Spline 3D Background"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6"
        >
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-[-0.05em] text-black">
            LIMITLESS <br />
            <span className="text-gradient">IMAGINATION</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-black/50 font-sans font-medium leading-relaxed tracking-[-0.02em]">
            AIK 콘텐츠는 독보적인 AI 기술과 시네마틱 연출력을 결합하여<br className="hidden md:block" />
            전통적인 영상 제작의 한계를 넘어선 새로운 가치를 창출합니다.
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#portfolio"
              className="w-full sm:w-auto px-10 py-5 bg-black hover:bg-brand text-white font-bold uppercase tracking-widest transition-all rounded-sm shadow-lg shadow-black/10"
            >
              포트폴리오 보기
            </a>
            <a 
              href="#contact"
              className="w-full sm:w-auto px-10 py-5 glass text-black font-bold uppercase tracking-widest hover:bg-black/5 transition-all rounded-sm"
            >
              제작 문의하기
            </a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
