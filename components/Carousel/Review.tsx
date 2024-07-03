import React from "react";

interface Props {
  by: string;
  children: React.ReactNode;
}

const Review: React.FC<Props> = ({ children, by }) => {
  return (
    <div className="flex flex-col justify-center text-center min-[550px]:px-5 md:px-10 lg:px-20 border-[#f7a210] border-4 pt-10 pb-10 ml-4 rounded-xl ">
      <div className="text-[19px] font-extrabold">
        &ldquo;{children}&rdquo;
      </div>
      <div className="mt-6">&mdash; {by}</div>
    </div>
  );
};

export default Review;