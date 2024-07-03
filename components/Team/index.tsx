import Image from 'next/image'
import React from 'react'

const index = () => {
    return (
        <div id='team' className='flex items-center scroll-mt-[110px] flex-col my-[6rem] gap-8'>
            <div className='text-[34px] my-[1rem] text-center font-[500] break-words' >Meet Our Highly Skilled Team</div>
            <div className='flex items-center justify-center gap-5 w-full flex-wrap'>
                <div className='flex items-center flex-col'>
                    <Image src='/assets/avatar-svgrepo-com.svg' width={300} height={300} alt='Hadi' />
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='text-[18px] font-[500] text-center break-words'>Hadi | Full-Stack Devloper</div>
                        <a href='https://github.com/Hadi-Rauf' target='_blank' className='text-[16px]'>@Hadi</a>
                    </div>
                </div>
                <div className='flex items-center flex-col'>
                    <Image src='/assets/avatar-portrait-svgrepo-com.svg' width={300} height={300} alt='' />
                    <div className='flex flex-col items-center justify-center gap-2'>
                    <div className='text-[18px] font-[500] text-center break-words'>Nabeel | Front-end Developer </div>
                        <a href='https://github.com/Nabeel' target='_blank' className='text-[16px]'>@Nabeel</a>
                    </div>
                </div>
                <div className='flex items-center flex-col'>
                    <Image src='/assets/shoaib.svg' width={300} height={300} alt='Daniyal' />
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='text-[18px] font-[500] text-center break-words '>Daniyal | Front-end Developer </div>
                        <a href='https://github.com/daniyalqasmi' target='_blank' className='text-[16px]'>@Daniyal</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index