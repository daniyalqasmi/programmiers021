'use client'
import { stylesWithCssVar } from "@/utils/motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const StreamlinedExperience = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const textX = useTransform(scrollYProgress, [0.1, 0.7], ["100%", "-100%"]);
  const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7]);

  const opacityBorder = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72],
    [1, 1, 0]
  );
  const finalTextOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.5, 0.72, 0.8, 0.9],
    [0, 0, 0, 1, 0]
  );

  const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7]);

  return (
    <motion.section
      style={stylesWithCssVar({
        opacity: opacitySection,
        "--scale": scale,
        "--opacity-border": opacityBorder,
      })}
      ref={containerRef}
      className="mt-[50vh] flex h-[500vh] items-start justify-start"
    >
      <div className="sticky top-1/2 left-1/2 min-h-[40rem] min-w-[40rem]  max-[410px]:min-h-[7rem] max-[410px]:min-w-[7rem] max-[590px]:min-h-[10rem] max-[590px]:min-w-[10rem] max-[750px]:min-h-[17rem] max-[750px]:min-w-[17rem]  max-[1110px]:min-h-[20rem] max-[1110px]:min-w-[20rem]  max-[1410px]:min-h-[30rem] max-[1410px]:min-w-[30rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] max-[1410px]:before:border-[1.5rem] max-[1110px]:before:border-[1rem] max-[590px]:before:border-[0.5rem]  before:border-[2.5rem] before:border-[#000000] dark:before:border-[#ffffff] before:opacity-[var(--opacity-border)]">
        <motion.p
          aria-hidden
          style={{ x: textX, y: "-50%" }}
          className="whitepspace-nowrap min-w-screen absolute top-1/2  max-[540px]:left-[calc(-150vw+25rem)] max-[750px]:text-[6rem] max-[1410px]:left-[calc(-70vw+25rem)] max-[850px]:left-[calc(-100vw+25rem)] left-[calc(-50vw+25rem)] text-[20rem] max-[1110px]:text-[8rem] max-[410px]:text-[3rem] text-[#292a7c] dark:text-white"
        >
          Crafting Digital Excellence&nbsp;
        </motion.p>
        <motion.p
          aria-hidden
          style={{ x: textX, y: "-50%" }}
          className="whitepspace-nowrap min-w-screen absolute top-1/2 max-[540px]:left-[calc(-150vw+25rem)] max-[850px]:left-[calc(-100vw+25rem)] max-[410px]:text-[3rem]   max-[1410px]:left-[calc(-70vw+25rem)]  left-[calc(-50vw+25rem)] max-[750px]:text-[6rem] z-[11] max-[1110px]:text-[8rem] text-[20rem] text-transparent dark:[-webkit-text-stroke:2.5px_var(--color-heading)] 
          max-[1110px]:dark:[-webkit-text-stroke:1px_var(--color-heading)]
          max-[1110px]:[-webkit-text-stroke:1px_black] 
          [-webkit-text-stroke:2.5px_black] 
          "
        >
          Crafting Digital Excellence&nbsp;
        </motion.p>

        <motion.p
          style={{
            opacity: finalTextOpacity,
            scale: finalTextScale,
            y: "-50%",
            x: "-50%",
          }}
          className="absolute left-1/2 top-1/2 text-[8rem] max-[850px]:text-[5rem] max-[400px]:text-[34px] max-[700px]:text-[60px] max-[545px]:text-[45px] max-[1150px]:text-[6rem] leading-tight text-center dark:text-white text-[#292a7c] "
        >
          Crafting Digital
          <br />
          Excellence
        </motion.p>
        <span className="absolute left-[calc(50%*var(--scale)+50%)] top-0 z-10 h-full w-[50vw] origin-left scale-[var(--scale)] bg-white dark:bg-background opacity-[var(--opacity-border)]" />
        <span className="absolute left-[calc(50%*var(--scale)+50%-(2.5rem*var(--scale)))] top-0 z-[12] h-full w-[50vw] origin-left scale-[var(--scale)] border-[#292a7c] dark:border-white opacity-[var(--opacity-border)]" />
      </div>
    </motion.section>
  );
};