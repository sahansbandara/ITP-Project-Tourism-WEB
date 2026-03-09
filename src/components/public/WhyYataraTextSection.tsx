"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CopySlash, Users, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import { motion, useInView as useFramerInView, useAnimation } from "framer-motion";

type Stat = { value: number; suffix?: string; label: string };
type Benefit = { title: string; detail?: string; icon: React.ReactNode };

/* Reduced Motion Hook as a fallback */
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

/* Number Counting Animation Component */
function CountUp({
  value,
  suffix = "+",
  durationMs = 1500, // Smooth execution
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
      { value: 15, suffix: "+", label: "Years of Luxury Expertise" },
      { value: 400, suffix: "+", label: "Boutique Stays Audited" },
      { value: 24, suffix: "/7", label: "Concierge Availability" },
      { value: 100, suffix: "%", label: "Bespoke Customization" },
    ],
    []
  );

  const benefits: Benefit[] = useMemo(
    () => [
      { icon: <Users className="w-5 h-5 text-neutral-500" strokeWidth={1.5} />, title: "A dedicated travel concierge planning your entire trip" },
      { icon: <MapPin className="w-5 h-5 text-neutral-500" strokeWidth={1.5} />, title: "Private logistics with vetted, premium driver-guides" },
      { icon: <ShieldCheck className="w-5 h-5 text-neutral-500" strokeWidth={1.5} />, title: "Secure, seamless booking and elite-level support" },
      { icon: <Sparkles className="w-5 h-5 text-neutral-500" strokeWidth={1.5} />, title: "Curated escapes chosen for exclusivity, not volume" },
      { icon: <CopySlash className="w-5 h-5 text-neutral-500" strokeWidth={1.5} />, title: "Free cancellation up to 24 hours on all transport services" },
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
        staggerChildren: 0.1, // Faster stagger
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="relative bg-white pb-24 md:pb-32 lg:pb-48" ref={sectionRef}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col lg:flex-row justify-between lg:gap-24"
        >

          {/* ── Left: Huge Headline & List ── */}
          <div className="w-full lg:w-[45%] flex flex-col mb-16 lg:mb-0">
            <motion.h2 variants={itemVariants} className="text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] font-semibold text-neutral-900 leading-[1.05] tracking-tight mb-12">
              Why Book with<br />Yatara Ceylon?
            </motion.h2>

            <div className="flex flex-col border-t border-neutral-200">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-6 py-5 border-b border-neutral-200"
                >
                  <div className="shrink-0 flex items-center justify-center">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="text-[15px] text-neutral-700 font-normal">{b.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: Intro Text & Massive Stats Container ── */}
          <div className="w-full lg:w-[50%] flex flex-col pt-4">
            <motion.p variants={itemVariants} className="text-xl md:text-[22px] text-neutral-600 leading-[1.6] font-light mb-12 md:mb-20 max-w-[90%]">
              At Yatara Ceylon, we customize each itinerary to fit your preferences, ensuring a uniquely elite experience.
            </motion.p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-16 lg:gap-y-24">
              {stats.map((s, i) => (
                <motion.div key={i} variants={itemVariants} className="flex flex-col">
                  {/* Huge Walker-Style numbers in deep emerald instead of blue */}
                  <div className="text-[4rem] md:text-[5rem] lg:text-[5.5rem] font-bold leading-none text-[#1A365D] tracking-tighter mb-4">
                    <CountUp
                      value={s.value}
                      suffix={s.suffix ?? "+"}
                      play={isInView}
                      durationMs={1800}
                    />
                  </div>
                  {/* Small tracking caps label */}
                  <p className="text-[11px] md:text-sm tracking-[0.15em] font-medium text-neutral-500 uppercase max-w-[200px]">
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
