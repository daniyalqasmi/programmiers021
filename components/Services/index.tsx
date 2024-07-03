import React from 'react';
import ServiceCard from '../ServiceCard';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si';
import { DiSass } from 'react-icons/di';
import { BiLogoJavascript } from 'react-icons/bi';
import { SiTypescript } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { FaPhp } from 'react-icons/fa';
import { FaLaravel } from 'react-icons/fa';
import { BsWordpress } from 'react-icons/bs';
import { BiLogoCss3 } from 'react-icons/bi';
import { AiFillHtml5, AiOutlineSolution } from 'react-icons/ai';
import { BiLogoFlutter } from 'react-icons/bi';
import { SiDart } from 'react-icons/si';
import { LiaFigma } from 'react-icons/lia';
import { TbBrandWebflow } from 'react-icons/tb';

const index = () => {
  const Full_Stack = [
    <TbBrandNextjs key="nextjs" />,
    <FaReact key="react" />,
    <FaLaravel key="laravel" />,
    <SiNodedotjs key="nodejs" />,
    <SiExpress key="express" />,
    <SiMongodb key="mongodb" />,
    <SiTypescript key="typescript" />,
    <SiTailwindcss key="tailwindcss" />,
    <DiSass key="sass" />
  ];

  const Front_End = [
    <TbBrandNextjs key="nextjs" />,
    <FaReact key="react" />,
    <SiTypescript key="typescript" />,
    <BiLogoJavascript key="javascript" />,
    <SiTailwindcss key="tailwindcss" />,
    <DiSass key="sass" />
  ];

  const Back_End = [
    
    <SiNodedotjs key="nodejs" />,
    <SiExpress key="express" />,
    <SiMongodb key="mongodb" />,
    
    <SiTypescript key="typescript" />,
    <BiLogoJavascript key="javascript" />
  ];

  const WebFlow = [
    <TbBrandWebflow key="webflow" />,
    <BiLogoCss3 key="css3" />,
    <AiFillHtml5 key="html5" />
  ];

  const WordPress = [
    <BsWordpress key="wordpress" />,
    <FaPhp key="php" />,
    <BiLogoCss3 key="css3" />,
    <AiFillHtml5 key="html5" />
  ];

  const Custom_Solutions = [
    <AiOutlineSolution key="custom" />
  ];

  return (
    <div id='services' className='flex items-center scroll-mt-[80px]  flex-col my-[6rem] gap-8'>
      <div className='flex flex-col items-center my-8 '>
        <div className='text-[34px] my-[2rem] text-center font-[500] break-words'>Discover Our Service Spectrum</div>
        <div className='break-words text-center text-[16px]'>At Programmiers, we take pride in delivering cutting-edge web solutions and development services tailored to your unique needs. Our team of experts is committed to bringing your vision to life and ensuring your online presence stands out. Explore our range of services below:</div>
      </div>
      <div className='flex scroll-mt-[100px] flex-wrap gap-4   my-4'>
        <ServiceCard
          icons={Full_Stack}
          title='Full-Stack Web Development'
          description="Elevate your online presence with our full-stack web development services. Our creative web designs are crafted to leave a lasting impact, whether you&apos;re launching a new website or giving your current one a fresh update."
        />
        <ServiceCard
          icons={Front_End}
          title='Front-End Development'
          description="At Programmiers, we specialize in front-end development that transforms your online image. Our creative web designs are engineered to make a powerful impression, whether you&apos;re starting from scratch or revitalizing an existing website."
        />
        <ServiceCard
          icons={Back_End}
          title='Back-End Development'
          description="Our back-end development expertise is your key to enhancing your online presence. Through creative web design, we create websites that leave a strong impression, whether you&apos;re embarking on a new project or rejuvenating an existing site."
        />
        <ServiceCard
          icons={WebFlow}
          title='Webflow Development'
          description="Harness the potential of your online presence with our Webflow development services. Our creative web designs are designed to make a significant impact, whether you&apos;re launching a new website or refreshing your current one."
        />
        <ServiceCard
          icons={WordPress}
          title='Wordpress Development'
          description="Empower your online identity with our WordPress development solutions. Our creative web designs are tailored to make a lasting impact, whether you&apos;re starting anew or revamping your current website."
        />
        <ServiceCard
          icons={Custom_Solutions}
          title='Custom Solutions'
          description="We understand that every business is unique. If your requirements extend beyond our standard services, our team is ready to collaborate and create bespoke solutions tailored to your specific needs. Let&apos;s work together to build something truly exceptional."
        />
      </div>
    </div>
  );
}

export default index;
