import React from 'react';

const index = () => {
    return (
        <>
            <div id='about' className='flex scroll-mt-[100px] gap-4 max-[1000px]:flex-col justify-between my-4'>
                <div className='flex flex-1 flex-col gap-5 justify-between border dark:border-white border-[#292a7c] border-3 rounded-xl max-[425px]:p-4 p-6 '>
                    <div className='text-[28px] max-[425px]:text-[25px] font-[800] break-words'>What We Do?</div>
                    <div className='break-words text-[16px]'>
                        At Programmiers,  we specialize in crafting tailored web services and solutions to enhance businesses&apos; online presence. Our dedicated team of experts leverages cutting-edge technology and industry best practices to ensure your digital success. Whether you&apos;re a startup looking to establish a strong online presence or an established corporation aiming to streamline operations, we have the knowledge and experience to create effective, future-proof solutions.
                    </div>
                </div>  
              
                <div className='flex flex-1 flex-col gap-5 border dark:border-white border-[#292a7c] rounded-xl max-[425px]:p-4 p-6'>
                    <div className='text-[28px] max-[425px]:text-[25px] font-[500] break-words'>Why Choose Us?</div>
                    <div className='break-words text-[16px]'>
                        <ul className="flex flex-col gap-3 pl-2">
                            <li><strong>Client-Centric Approach:</strong> We prioritize your unique needs and goals.</li>
                            <li><strong>Cutting-Edge Technology:</strong> We employ the latest tools to give you a competitive edge.</li>
                            <li><strong>Proven Track Record:</strong> Our portfolio showcases successful projects.</li>
                            <li><strong>Dedicated Support:</strong> We offer ongoing maintenance and support.</li>
                            <li><strong>Innovation:</strong> We&apos;re your innovation partners, keeping you ahead in the digital race.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index;
