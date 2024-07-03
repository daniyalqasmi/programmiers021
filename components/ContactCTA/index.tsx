import Link from 'next/link'
import React from 'react'

const index: React.FC = () => {
    return (
        <div className="flex flex-col gap-[1.5rem] justify-between border dark:border-white border-[#292a7c] rounded-xl max-[425px]:p-4   p-6 flex-1 text-center items-center">
            <div className="text-[28px] font-[500] ">
                Can&apos;t Find Your Desired Service? Let&apos;s Talk!
            </div>
            <div className='flex flex-col gap-4 items-center text-center '>
                <div className="text-[16px] word-break">
                    At Programmiers, we&apos;re committed to providing you with a seamless experience. We understand that sometimes you may not find the exact service you&apos;re looking for on our website, but fret not! Your satisfaction is our priority, and we&apos;re here to help.
                    <br />
                    If you have a specific service or inquiry in mind that you couldn&apos;t locate, we invite you to get in touch with us directly. Our dedicated team of experts is ready to assist you in finding the perfect solution tailored to your needs.
                </div>
                <Link href={'#contact'} className='p-2 w-[120px] text-center border hover:border-gray-500  dark:hover:border-gray-500 duration-300 transition ease-in-out rounded-xl border-[#292a7c]  dark:border-white'>Contact Us!</Link>
            </div>
        </div>
    )
}

export default index