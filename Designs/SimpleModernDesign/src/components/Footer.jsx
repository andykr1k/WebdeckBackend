import * as React from 'react'
import { 
    SiReact, 
    SiTailwindcss 
} from "react-icons/si"

export default function Footer() {
  return (
    <div className='p-5'>
      <h3 className='flex items-center justify-center align-middle'>Made with &nbsp; <SiReact/> &nbsp; and &nbsp; <SiTailwindcss/>&nbsp; by &nbsp;
      <a className='text-blue-600 hover:text-blue-800' href='https://github.com/andykr1k'>
      Andrew Krikorian 
      </a>      
      </h3>
    </div>
  )
}