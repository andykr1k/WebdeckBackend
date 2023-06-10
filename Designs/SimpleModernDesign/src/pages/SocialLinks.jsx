import * as React from 'react'
import {Social} from '../components'
import data from '../data/socials.json'
export default function SocialLinks() {
  return (
    <div className=''>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 sm:space-x-2 space-y-2 sm:space-y-0'>
      {data.map((media) => (
        <Social key={media.name} link={media.link} name={media.name} />
      ))}
    </div>
    </div> 
  )
}
