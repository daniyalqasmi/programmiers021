import React from 'react'
import Testimonials from '../Carousel/Testimonials'

const index: React.FC = () => {
    return (
        <div id='testimonials' className='flex items-center gap-8 scroll-mt-[100px]  flex-col my-[6rem]'>
            <div className='text-[34px] my-[1rem] text-center font-[500] break-words' >Hear What Our Clients Have to Say!</div>
            <Testimonials />
        </div>
    )
}

export default index