import React from 'react'

function Button({children}) {
  return <>
    <button className='bg-primary px-5 py-3 text-white rounded-md flex items-center justify-center gap-x-2'>
    {children}
    </button>
  </>
}

export default Button