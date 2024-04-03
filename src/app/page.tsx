'use server'

import { cookies } from 'next/headers'


export default async function HomePage() {
  async function setCookie() {
    'use server'

    cookies().set('my-cookie', 'SameSite=Strict', { sameSite: 'strict' })
  }

  const cookie = cookies().get('my-cookie')?.value ?? 'Not Set'

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <span className="text-[hsl(280,100%,70%)]">Cookie</span>: {cookie}
        </h1>
        <form action={setCookie}>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="submit">
            Set Cookie
          </button>
        </form>
      </div>
    </main>
  ); 
}
