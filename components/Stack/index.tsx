import React from 'react';
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
import { BiLogoFlutter } from 'react-icons/bi';
import { SiDart } from 'react-icons/si';
import { LiaFigma } from 'react-icons/lia';
import { TbBrandWebflow } from 'react-icons/tb';
import { BiLogoCss3 } from 'react-icons/bi';
import { AiFillHtml5 } from 'react-icons/ai';
import TechStack from '@/components/TechStack';

const index = () => {
    return (
        <div className='flex overflow-hidden flex-col items-center my-4'>
            <div className='flex flex-col items-center my-8 '>
                <div className='text-[34px] my-[2rem] text-center font-[500] break-words'>Our Evolving Tech Stack, Still Growing!</div>
                <div className='break-words text-center text-[16px]'>At Programmiers, we thrive on innovation, and our tech stack is the beating heart of our digital solutions. It&apos;s not static; it&apos;s alive, constantly evolving, and forever expanding. Here&apos;s a sneak peek into our ever-growing arsenal of technologies:</div>
            </div>
            <div className='flex flex-col gap-8 '>
                <TechStack baseVelocity={-2}>
                    <FaReact />
                    <TbBrandNextjs />
                    <SiTailwindcss />
                    <BiLogoCss3/>
                    <AiFillHtml5/>
                    <DiSass />
                    <BiLogoJavascript />
                    <SiTypescript />
                    <SiNodedotjs />
                    <SiExpress />
                    <SiMongodb />
                    {/* <FaPhp /> */}
                    {/* <FaLaravel /> */}
                    <BsWordpress />
                    {/* <BiLogoFlutter /> */}
                    {/* <SiDart /> */}
                    <LiaFigma />
                    <TbBrandWebflow />
                </TechStack>
                <TechStack baseVelocity={2}>
                    <FaReact />
                    <TbBrandNextjs />
                    <SiTailwindcss />
                    <BiLogoCss3/>
                    <AiFillHtml5/>
                    <DiSass />
                    <BiLogoJavascript />
                    <SiTypescript />
                    <SiNodedotjs />
                    <SiExpress />
                    <SiMongodb />
                    {/* <FaPhp /> */}
                    {/* <FaLaravel /> */}
                    <BsWordpress />
                    {/* <BiLogoFlutter /> */}
                    {/* <SiDart /> */}
                    <LiaFigma />
                    <TbBrandWebflow />
                </TechStack>
            </div>
        </div>
    );
}

export default index;
