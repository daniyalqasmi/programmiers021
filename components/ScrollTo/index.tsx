import Link from 'next/link'
import React from 'react'


import { BsArrowUp } from 'react-icons/bs';
const index: React.FC<{ top: boolean }> = (top) => {
    return (

        <Link href={'#top'} className='flex flex-col fixed bottom-5 right-5 gap-2 border z-50  text-center dark:border-white dark:text-white border-[#292a7c] justify-center p-2 rounded-lg break-words  items-center  font-[500]'><BsArrowUp size={22} className='dark:text-white' /></Link>

    )
}

export default index