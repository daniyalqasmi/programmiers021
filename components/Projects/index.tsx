import React from 'react'
import Works from '../Works'
const index: React.FC = () => {
    return (
        <div className='scroll-mt-[100px]' id='projects'>
            <div className='flex flex-col items-center my-8 '>
                <div className='text-[34px] my-[2rem] text-center font-[500] break-words'>Explore Our Portfolio</div>
                <div className='break-words text-center text-[16px]'>At Programmiers, we take pride in delivering cutting-edge web solutions and development services tailored to your unique needs. Our team of experts is committed to bringing your vision to life and ensuring your online presence stands out. Explore our range of services below:</div>
            </div>
            <Works />
        </div>
    )
}

export default index