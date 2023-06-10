import * as React from 'react'

export default function School(props) {
  return (
    <div
    className="relative block rounded-sm border-t-4 border-pink-600 p-4 shadow-xl sm:p-6 lg:p-8"
    >
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path
        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
    </svg>

    <h3 className="mt-3 text-lg font-bold sm:text-xl">
        {props.name}
    </h3>
    
    <p className="mt-4 text-sm text-gray-300">
        {props.college}&nbsp;-&nbsp;{props.major}
    </p>
    </div>
  )
}