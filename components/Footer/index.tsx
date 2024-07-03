import React from 'react'

const index = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <div className='py-4 text-center'>
      Copyright © {currentYear} Programmiers. All rights reserved.
    </div>
  );
}

export default index