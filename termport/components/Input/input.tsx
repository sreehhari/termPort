"use client"
import { useState } from "react"

const InputCmd = () => {
    const[input,setInput]=useState("")
  return (
    <div className="flex flex-row gap-4 pt-3 pl-2">
        <div>
        <p>ryu@latest~</p>
        </div>
        <input className="  w-full bg-transparent outline-none text-white" type="text" />


    </div>
  )
}

export default InputCmd