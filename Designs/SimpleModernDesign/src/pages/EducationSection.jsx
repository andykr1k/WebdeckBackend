import * as React from 'react'
import { 
  School 
} from '../components'
import data from '../data/education.json'
export default function EducationSection() {
  return (
    <div className=''>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 sm:space-x-2 space-y-2 sm:space-y-0'>
      {data.map((school) => (
        <School key={school.start} name={school.school} major={school.major} college={school.college} />
      ))}
    </div>
    </div> 
  )
}
