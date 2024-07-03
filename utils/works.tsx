import React from "react";
import Link from "next/link";

// export const WorkContainer: React.FC = ({ children }) => {
//   <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
//     {children}
//   </div>;
//   console.log(children);
// };

export const WorkBackground: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen sticky top-0">
    <div className="bg-[#292a7c] h-[30vh] lg:h-auto"></div>
    <div className="bg-white h-[70vh] lg:min-h-screen"></div>
  </div>
);

export const WorkLeft: React.FC<{
  progress: number;
  children: React.ReactNode;
}> = ({ children, progress }) => {
  let translateY = Math.max(50, 20 - progress * 3 * 50);
  // if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
  return (
    <div
      className="flex flex-col dark:text-white text-[#292a7c] items-center justify-center text-3xl my-4  "
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="leading-10">{children}</div>
    </div>
  );
};

export const WorkRight: React.FC<{
  progress: number;
  children: React.ReactNode;
}> = ({ children, progress }) => {
  let translateY = Math.max(-90, -(progress - 0.9) * 200);
  return (
    <div
    className="flex items-center justify-center "
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="">
        {children}
      </div>
    </div>
  );
};

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export const WorkLink: React.FC<LinkProps> = ({ href, children }) => (
  <Link 
      href={href}
      target="_blank"
      rel="noreferrer"
      className="underline underline-offset-8 decoration-1"
    >
      {children}
  
  </Link>
);