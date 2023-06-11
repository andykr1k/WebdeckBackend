import * as React from 'react'

export default function Social(props) {
  return (
    <a
    href={props.link}
    className="relative block rounded-sm border-t-4 border-pink-600 p-4 shadow-xl sm:p-6 lg:p-8"
    >
    <div className="flex items-center justify-center">
        <h3 className="text-xl font-bold sm:text-2xl">{props.name}</h3>
    </div>
    </a>
  )
}