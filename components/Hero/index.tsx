'use client'
import React, { useEffect, useRef, useState } from 'react';
import HeroSVG from '@/public/UI-UX team-bro.svg';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';

const Index: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"]

  });
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  return (
    <motion.div style={{ opacity }} id='top' ref={targetRef} className='flex items-center   max-[1450px]:mt-[5rem]  gap-8 justify-between min-h-screen max-[1450px]:flex-col '>
      {/* <div className='container flex flex-wrap gap-[4rem] max-[450px]:gap-[2rem] '>
        <div className='flex flex-col  gap-4 '>
          <div className='text-[45px] max-[550px]:text-[28px] max-[386px]:text-[25px]  font-[500] break-words '>
            Elevating Businesses through Innovative Software Solutions and Digital Excellence.
          </div>
          <div className='text-[16px] break-words'>Discover how our innovative software solutions and commitment to digital excellence can revolutionize your business operations. We&apos;re dedicated to elevating businesses by seamlessly integrating cutting-edge technology, optimizing processes, and delivering exceptional customer experiences. Explore the limitless possibilities with our tailored solutions, and let us be your partner in achieving sustainable growth and success.</div>
        </div>

        <div className='flex flex-col  gap-4 md:w-3/5'>
        <Image src={HeroSVG} height={0} width={100} alt='Hero Image'  />
        </div>

        <div className='flex max-[1200px]:flex-col min-[12001px]:items-center gap-8'>
          <Link href={'#about'} className='underline underline-offset-4 flex items-center gap-1 '>Know More About Us <FiArrowUpRight size={17} /></Link>
          <Link href={'#contact'} className='underline underline-offset-4 flex items-center gap-1 '>Contact Us <FiArrowUpRight size={17} /></Link>
        </div>
      </div>  */}
      <section className="container flex flex-wrap gap-[4rem] max-[450px]:gap-[2rem] ">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="md:w-2/5 md:pl-6 break-words">
            <Image src={"/assets/ban.png"} alt="logo" width={400} height={600} className=' mr-2 mt-16 rounded-lg' />
          </div>
          <div className=" text-[45px] max-[550px]:text-[28px] max-[386px]:text-[25px] text- font-[600] break-words md:w-3/5 ">
            <div className='text-[45px] max-[550px]:text-[28px] max-[386px]:text-[25px]  font-[800] break-words mb-2'>
              Elevating Businesses through Innovative Software Solutions and Digital Excellence.
            </div>
            <div className='text-[16px] break-words'>Discover how our innovative software solutions and commitment to digital excellence can revolutionize your business operations. We&apos;re dedicated to elevating businesses by seamlessly integrating cutting-edge technology, optimizing processes, and delivering exceptional customer experiences. Explore the limitless possibilities with our tailored solutions, and let us be your partner in achieving sustainable growth and success.</div>             
          </div>

        </div>
      </section>

      <Image src={"/assets/banner.jpg"} height={1000} width={1000} alt='Hero Image' />

    </motion.div>
  );
}

export default Index;