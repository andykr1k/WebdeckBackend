import * as React from 'react'
import { 
  Experience 
} from '../components'
import data from '../data/experience.json'
export default function ExperienceSection() {
  return (
    <div className=''>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 sm:space-x-2 space-y-2 sm:space-y-0'>
      {data.map((exp) => (
        <Experience name={exp.company} start={exp.start} end={exp.end} bio={exp.bio} role={exp.role} />
      ))}
    </div>
    </div> 
  )
}
