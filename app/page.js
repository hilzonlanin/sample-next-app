'use client'
import { useState } from 'react'
export default function Home() {
  const [count,setCount]=useState(0)
  return (
    <>
    <div className='flex flex-col items-center h-screen justify-center gap-2'>

    <h1 className="text-4xl">Counter</h1>
    <h2>Count: {count}</h2>
    <button className='bg-blue-400 text-white rounded p-2' onClick={()=>setCount((prevCount=>prevCount+1))}>Add Count</button>
    <img src="/next.svg" alt="logo" className="h-5 m-2"/>
    </div>
    </>
  )
}
