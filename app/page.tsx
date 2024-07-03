"use client";
import React from 'react'
import Hero from '../components/Hero'
import ScrollToTop from '../components/ScrollTo'
import { StreamlinedExperience } from '@/components/Experince'
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import StepsForWorking from '@/components/StepsForWorking';
import Team from '@/components/Team';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Services from '@/components/Services'
import Stack from '@/components/Stack'
import ContactCTA from '@/components/ContactCTA'
import Faq from '@/components/Faq';
import { Fade } from "react-awesome-reveal";
const page: React.FC = () => {
  return (
    <>
      <Fade duration={2000}>
        <Hero />
      </Fade>
      <Fade duration={2000}>
        <ScrollToTop top={true} />
      </Fade>
      <Fade duration={2000}>
        <Skills />
      </Fade>
      <Fade duration={2000}>
        <Faq />
        {/* <About /> */}
        <Team />
      </Fade >
      {/* <div className="relative z-10 w-full overflow-x-clip">
        <StreamlinedExperience />
      </div> */}
      <Fade duration={2000}>
        <Services />
      </Fade>
      <Fade duration={2000}>
        <ContactCTA />
      </Fade>
      <Fade duration={2000}>
        {/* <Projects /> */}
        <Stack />
      </Fade>
      <Fade duration={2000}>
        <Testimonials />
      </Fade>
      <Fade duration={2000}>
        <Contact />
      </Fade>
    </>
  )
}

export default page