import React from "react";
import Carousel from "./Carousel";
import CarouselItem from "./Carousel_Item";
import Review from "./Review";

const Testimonials: React.FC = () => {
  return (
    <Carousel className="text-[#292a7c] dark:text-white py-10">
      <CarouselItem index={0}>
        <Review by="Ali(ex-team member and client )">
          Working with Programmiers on our ecommerce site has been an exceptional experience. They delivered high-quality software, shared our passion for creating valuable solutions, and consistently strived for excellence. I would wholeheartedly recommend Programmiers and their team; it&apos;s a 10/10 collaboration!
        </Review>
      </CarouselItem>
      <CarouselItem index={1}>
        <Review by="Tahir (PearlQuest Interactive)">
        Programmiers to create our managament landing site, and the results were nothing short of exceptional. Programmiers&apos;s attention to detail, creativity, and technical expertise shine through in every aspect of our website. The design is not only visually appealing but also functional and user-friendly, ensuring that visitors have a seamless experience.
        </Review>
      </CarouselItem>
      <CarouselItem index={2}>
        <Review by="Ayesha (Sarah's welness )">
        Programmiers crafted our website, which is the cornerstone of our business. Their dedication to delivering high-quality software, their shared passion for creating valuable solutions, and their relentless pursuit of excellence have left us thoroughly impressed.
        </Review>
      </CarouselItem>
      {/* <CarouselItem index={3}>
        <Review by="Jawed (Khan Traders)">
        Programmiers&apos;s expertise in crafting our inventory management system was exceptional. Their dedication to delivering top-notch software, coupled with a shared passion for creating valuable solutions and a relentless commitment to excellence, made it a 10/10 experience. I highly recommend Programmiers and their team!
        </Review>
      </CarouselItem> */}
    </Carousel>
  );
};

export default Testimonials;
