import { motion } from 'motion/react';
import { History, Cpu, Film } from 'lucide-react';

const strengths = [
  {
    icon: <History className="text-black" size={32} />,
    title: "11년의 독보적 업력",
    description: "TVCF부터 글로벌 대형 프로젝트까지, 수년간 검증된 전문 연출팀의 노하우를 보유하고 있습니다."
  },
  {
    icon: <Cpu className="text-black" size={32} />,
    title: "독자적 AI 파이프라인",
    description: "제작 기간 단축과 비용 절감을 실현하는 동시에, 표현의 한계를 허무는 AI 기술을 실무에 적용합니다."
  },
  {
    icon: <Film className="text-black" size={32} />,
    title: "시네마틱 퀄리티",
    description: "단순 생성형 영상을 넘어선 고품질 후보정과 감각적인 연출로 영화 같은 영상미를 보장합니다."
  }
];

export default function About() {
  return (
    <section id="about" className="pt-20 pb-12 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-sans font-medium text-brand text-sm uppercase tracking-[-0.02em] block mb-4">01 // Identity</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-8 tracking-[-0.05em] text-black">
              PROFESSIONALISM <br />
              <span className="opacity-20">MEETS</span> INNOVATION
            </h2>
            <div className="h-px w-20 bg-brand mb-8" />
            <p className="text-base text-black/60 leading-relaxed max-w-xl font-sans font-medium tracking-[-0.02em]">
              AIK 콘텐츠는 영상 제작의 본질인 '전문성'과 시대의 흐름인 '혁신'이 만나는 지점에 있습니다. 
              11년간 쌓아온 탄탄한 영상 제작 경험 위에 AI 기술을 더해, 
              지금껏 상상하지 못했던 시각적 경험을 선사합니다.
            </p>
          </motion.div>

          <div className="grid gap-12">
            {strengths.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-sans font-bold mb-2 tracking-[-0.02em] text-[#0c468c]">{item.title}</h3>
                  <p className="text-black/50 leading-relaxed font-medium tracking-[-0.03em]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
