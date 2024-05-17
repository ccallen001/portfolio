'use client';

import { Spotlight } from '@/components/ui/Spotlight';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import ShimmerButton from '@/components/ui/ShimmerButton';

function Hero() {
  return (
    <div className="pt-36 pb-20">
      <Spotlight
        className="-top-40 -left-10 md:top-20 md:-left-32 h-screen"
        fill="white"
      />
      <Spotlight className="top-10 left-full w-[50vw] h-[80vh]" fill="purple" />
      <Spotlight className="top-28 left-80 w-[50vw] h-[80vh]" fill="blue" />

      {/* grid */}
      <div className="absolute top-0 left-0 w-full h-screen bg-white dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative z-10 flex justify-center my-20">
        <div className="flex flex-col justify-center items-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100">
            Senior Software Engineer
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Chase Allen Developer Portfolio"
          />

          <p className="mb-4 text-center text-sm md:text-lg lg:text-2xl md:tracking-wider">
            👋 Hi, I&apos;m Chase!
          </p>

          <a href="/about">
            <ShimmerButton onClick={() => {}}>See My Work</ShimmerButton>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
