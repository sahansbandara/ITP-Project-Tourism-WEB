"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView as useFramerInView, useAnimation } from "framer-motion";
import { CheckCircle2, Leaf } from "lucide-react";

type Stat = { value: number; suffix?: string; label: string };
type Benefit = { title: string; detail?: string };

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

function CountUp({
  value,
  suffix = "+",
  durationMs = 1200,
  start = 0,
  play,
}: {
  value: number;
  suffix?: string;
  durationMs?: number;
  start?: number;
  play: boolean;
}) {
  const reduced = usePrefersReducedMotion();
  const [current, setCurrent] = useState(start);

  useEffect(() => {
    if (!play) return;
    if (reduced) {
      setCurrent(value);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setCurrent(Math.round(start + (value - start) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [play, reduced, value, durationMs, start]);

  return (
    <span className="tabular-nums">
      {current}
      {suffix}
    </span>
  );
}

export default function WhyYataraTextSection() {
  const stats: Stat[] = useMemo(
    () => [
      { value: 24, suffix: "/7", label: "Concierge support" },
      { value: 100, suffix: "+", label: "Curated experiences" },
      { value: 1, suffix: "", label: "Point of contact" },
      { value: 0, suffix: "", label: "Hidden fees" },
    ],
    []
  );

  const benefits: Benefit[] = useMemo(
    () => [
      { title: "Concierge-led planning", detail: "One specialist books and manages your entire journey." },
      { title: "Private logistics", detail: "Seamless transfers with vetted driver-guides." },
      { title: "Curated escapes", detail: "Luxury properties chosen for experience, not volume." },
      { title: "Pace-first routes", detail: "Itineraries built around comfort—no rushed checklists." },
    ],
    []
  );

  /* Framer Motion Integration for Viewport Triggering */
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useFramerInView(sectionRef, { once: true, margin: "-10%" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } // Smooth elegant ease
    }
  };

  return (
    <section className="relative bg-deep-emerald overflow-hidden py-16 md:py-24 text-white" ref={sectionRef}>

      {/* ── Background Liquid Glass / Greenery Abstraction ── */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[70vw] h-[70vw] rounded-full blur-[120px] bg-emerald-500/30 mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] rounded-full blur-[100px] bg-antique-gold/20 mix-blend-screen" />
      </div>

      {/* Grid Overlay for Texture */}
      <div className="absolute inset-0 bg-[url('/images/textures/grid-white.svg')] opacity-[0.03] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >

          {/* ── Left: Intro Text & Animated Benefits ── */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                <Leaf className="w-3 h-3 text-antique-gold" />
                Why Yatara
              </span>
              <h2 className="text-[2.5rem] md:text-[3.25rem] font-serif leading-[1.1] mb-6">
                A private journey, <br />
                <span className="text-antique-gold italic">executed quietly well.</span>
              </h2>
              <p className="text-sm md:text-base text-white/70 leading-[1.7] font-light max-w-sm">
                We customize each itinerary to fit your exact preferences, ensuring a flawless and unique luxury journey across Sri Lanka.
              </p>
            </motion.div>

            <div className="flex flex-col space-y-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-antique-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-semibold mb-1 group-hover:text-antique-gold transition-colors">{b.title}</h4>
                    {b.detail && (
                      <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">{b.detail}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-10">
              <a
                href="/inquire"
                className="rounded-full bg-antique-gold px-8 py-3.5 text-xs font-bold tracking-[0.15em] text-neutral-900 hover:bg-white hover:text-deep-emerald transition-all duration-300 inline-block shadow-[0_0_20px_rgba(207,181,89,0.3)]"
              >
                START PLANNING
              </a>
            </motion.div>
          </div>

          {/* ── Right: Liquid Glass Stat Grid ── */}
          <div className="lg:col-span-7 lg:pl-10 relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="relative overflow-hidden flex flex-col justify-center items-center text-center p-8 lg:p-12 min-h-[180px] lg:min-h-[220px] rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl group"
                >
                  {/* Subtle inner hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-antique-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Smooth Animated Numbers */}
                  <div className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-serif leading-none tracking-tight mb-3 text-white drop-shadow-md">
                    <CountUp
                      value={s.value}
                      suffix={s.suffix ?? "+"}
                      play={isInView}
                      durationMs={1600} // Smooth, elite counting
                    />
                  </div>

                  <p className="text-[10px] md:text-xs tracking-[0.2em] font-medium text-white/50 uppercase">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
