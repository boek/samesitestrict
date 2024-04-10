'use server'

import { cookies } from 'next/headers'


export default async function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      Check the headers sent when navigating from this new window, or navigate first and then see what you get.
      <ul className='flex gap-4'>
       <li><a className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" href="https://httpbin.org/headers">httpbin headers</a></li>
       <li><a className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" href="https://www.mozilla.org/">Mozilla.org</a></li>
      </ul>
      </div>
    </main>
  ); 
}
