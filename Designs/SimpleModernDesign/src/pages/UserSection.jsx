import * as React from 'react'
import userdata from '../data/user.json'
export default function UserSection() {
  return (
    <div>
    <header>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="text-center sm:text-left">
            <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
              Hey, I'm {userdata.first_name}!
            </h1>

            <p class="mt-1.5 text-sm text-gray-500">
              {userdata.bio}
            </p>
          </div>
        </div>
      </div>
    </header>
    </div>
  )
}
