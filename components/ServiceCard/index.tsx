import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';

interface ServiceCardProps {
  image?: StaticImageData;
  title: string;
  description: string;
  icons?: ReactNode[]; // Change the property name to 'icons' and allow an array of React nodes
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description, icons }) => {
  return (
    <div className='flex flex-col gap-12 flex-1 border max-[650px]:min-w-[250px] min-w-[500px]  dark:border-white border-[#292a7c] rounded-xl p-6'>
      {icons && icons.length > 0 && (
        <div className='flex items-center flex-wrap gap-[20px]'>
          {icons.map((icon, index) => (
            <div key={index} className='text-[40px] break-words'>
              {icon}
            </div>
          ))}
        </div>
      )}
      <div className='flex flex-col gap-4'>
      <div className='text-[28px] font-[500] break-words'>{title}</div>
      <div className='break-words text-[16px]'>{description}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
