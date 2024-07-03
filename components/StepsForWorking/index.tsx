"use client";
import React, { useState } from "react";
import StepsData from "./steps";
import { Steps } from "@/types/steps";
import { BiDownArrowAlt } from "react-icons/bi";

import { BiUpArrowAlt } from "react-icons/bi";
const Index = () => {
  const [showDescriptions, setShowDescriptions] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleDescription = (stepId: number) => {
    setShowDescriptions((prevState) => ({
      ...prevState,
      [stepId]: !prevState[stepId],
    }));
  };

  return (
    <div className="flex gap-4 max-[1000px]:gap-[3.5rem] max-[1000px]:flex-col my-[6rem]">
      <div className="flex flex-col gap-[1.5rem] justify-between border dark:border-white border-[#292a7c] rounded-xl max-[425px]:p-4   p-6 flex-1">
        <div className="text-[28px] font-[500]">
          The Programmiers Solution Journey in 5 Comprehensive Steps!
        </div>
        <div className="text-[16px] word-break">
          Embark on a seamless and structured journey with Programmiers as we
          guide your business to conquer web, software, and IT challenges. Our
          meticulously crafted five-step process is your compass to precision
          and unwavering care, ensuring that every aspect of your needs is not
          just met, but masterfully attended to.
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-[1.5rem] border dark:border-white border-[#292a7c] rounded-xl  max-[425px]:p-4  p-6 max-[1000px]:gap-[2.5rem] ">
        {StepsData &&
          StepsData.map((steps: Steps) => (
            <div className="group" key={steps.id}>
              <div
                className={`border-b border-spacing-3 flex items-center justify-between font-[500] text-[20px] transition duration-300 ease-in-out  cursor-pointer dark:border-white border-[#292a7c] ${
                  showDescriptions[steps.id] ? "" : ""
                } `}
                onClick={() => toggleDescription(steps.id)}
              >
                {steps.title}
                {showDescriptions[steps.id] ? (
                  <span>
                    <BiUpArrowAlt className="text-[22px]" />
                  </span>
                ) : (
                  <span>
                    <BiDownArrowAlt className="text-[22px]" />
                  </span>
                )}
              </div>
              {showDescriptions[steps.id] && (
                <div
                  className={` pt-4 transition duration-300 ease-in-out word-break text-[16px] ${
                    showDescriptions[steps.id] ? "" : ""
                  } `}
                >
                  {steps.desc}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Index;
