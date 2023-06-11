import * as React from 'react'

export default function Tag(props) {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 py-4 lg:px-8">
        <div className="text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {props.label}
            </h1>
        </div>
      </div>
    </div>
  )
}