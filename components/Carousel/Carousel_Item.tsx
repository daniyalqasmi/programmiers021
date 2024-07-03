'use client'
import React, { useContext, useCallback } from "react";
import { CarouselContext } from "./Carousel";

import styles from "@/styles/carousel.module.css";

interface Props {
  index: number;
  children: JSX.Element;
}
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';


const CarouselItem: React.FC<Props> = ({ children, index }) => {
  const { embla: emblaApi, selectedIndex } = useContext(CarouselContext);
  const isActive = selectedIndex === index;
  const handleClick = useCallback(() => {
    if (emblaApi === undefined) return;
    emblaApi.scrollTo(index);
  }, [emblaApi, index]);
  return (
    <div
      className={`${styles.slide} relative ${isActive ? "active" : "max-[550px]:opacity-0 min-[550px]:opacity-[0.4]"}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default CarouselItem;