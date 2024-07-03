'use client'
import React, { useContext, useRef } from 'react';
import s from '../../styles/skills.module.css';
import { ScrollContext } from '../../utils/scroll-observer';
import Image from 'next/image';

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Skills: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  // console.log(elContainer)
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }
  return (
    <div ref={refContainer} className=' dark:text-white text-[#292a7c]'>
      <div className='  flex flex-col justify-center items-center text-[3rem] max-[782px]:text-[1.5rem] max-[500px]:text-[28px] mb-[8rem] mt-[6rem] min-[10000px]:m-8 tracking-wide font-[500]'>
        <div className='leading-[1.15] flex flex-col  gap-[6rem] min-[500px]:items-center break-words min-[500px]:text-center'>
          {/* <div
            className={s.skillText}
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
           Programmiers we&apos;re all about making businesses flourish in the ever-evolving digital world. 
          </div>
          <span
            className={`${s.skillText} inline-block after:content-['_']`}
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            Our dedicated team of experts empathizes with the hurdles that modern businesses encounter and is passionately devoted to crafting inventive solutions that can fuel your success.
          </span>
          <span
            className={`${s.skillText} inline-block`}
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            Our commitment to innovation, expertise, and personalized solutions has consistently driven growth and success for our clients.
          </span> */}
          <section className="container flex flex-wrap gap-[4rem] max-[450px]:gap-[2rem] md:ml-16">
            <div className="container px-5 py-18 mx-auto flex flex-wrap">
              <div className="md:w-2/6 break-words">
                <Image src={"/assets/bn-1.jpg"} alt="logo" width={400} height={600} className=' mr-2 mt-16 rounded-lg' />
              </div>
              <div className=" text-[35px] max-[550px]:text-[28px] max-[386px]:text-[25px] text- font-[600] break-words md:w-3/6 items-center text-center justify-center md:mt-36">
                <div className='text-[35px] max-[550px]:text-[28px] max-[386px]:text-[25px]  font-[800] break-words mb-2'>
                  Programmiers we&apos;re all about making businesses flourish in the ever-evolving digital world.
                </div>
              </div>

            </div>
            <div className="container px-5 py-18 mx-auto flex flex-wrap">
              <div className="md:w-2/6 break-words">
                <Image src={"/assets/bn-2.jpg"} alt="logo" width={400} height={600} className=' mr-2 mt-16 rounded-lg' />
              </div>
              <div className=" text-[35px] max-[550px]:text-[28px] max-[386px]:text-[25px] text- font-[600] break-words md:w-3/6 items-center text-center justify-center md:mt-36 md:ml-2">
                <div className='text-[35px] max-[550px]:text-[28px] max-[386px]:text-[25px]  font-[800] break-words mb-2'>
                  Our team knows modern business challenges and is dedicated to innovating solutions for your success.
                </div>
              </div>

            </div>
            <div className="container py-18 mx-auto flex flex-wrap">
              <div className="md:w-2/6 md:pl-6 break-words">
                <Image src={"/assets/bn-3.jpg"} alt="logo" width={400} height={600} className=' mr-2 mt-16 rounded-lg' />
              </div>
              <div className=" text-[35px] max-[550px]:text-[28px] max-[386px]:text-[25px] text- font-[600] break-words md:w-3/6 items-center text-center justify-center md:mt-32 ">
                <div className='text-[35px] max-[550px]:text-[28px] max-[386px]:text-[25px]  font-[800] break-words mb-2'>
                  Our commitment to innovation, expertise, and personalized solutions has consistently driven growth and success for our clients.
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;