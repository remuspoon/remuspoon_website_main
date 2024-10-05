import React from 'react'
import Link from 'next/link'

const Button = ({buttonText, link}: {buttonText: string, link: string}) => {
  return (
    <div>
        <Link href={link}>
          <div  className='text-base font-cabin bg-gray text-light px-7 py-3 rounded-full hover:bg-main hover:text-gray text-center transition-all duration-200 hover:scale-110'>
            {buttonText}
          </div>
        </Link>
    </div>
  )
}

export default Button