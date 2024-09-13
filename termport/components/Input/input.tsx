"use client"
import { useState } from "react"

const InputCmd = () => {
    const[input,setInput]=useState("");
    const[history,setHistory]=useState([]);
    const handleCommand=(command)=>{
      switch(command){
          case "ls":
              return "projects, resume, contact me";
          case "cat projects.txt":
            return "meow";
          default:
            return `invalid command ${command} use 'help' to view available commands `;
      };


    };

    const handleSubmit=(e)=>{
      e.preventDefault();
      const result =handleCommand(input);
      setHistory([...history,{command:input,result}]);
      setInput("");

    };
  return (
    <div className="flex flex-col gap-4 pt-3 pl-2">
        <div>
          {history.map((entry,index)=>(
            <div key={index} className="flex flex-row gap-4 pt-3 pl-2">
              <p>ryu@latest</p>
              <div className="flex flex-col">
              <p className="text-white">{entry.command}</p>
              <p className="text-green-500">{entry.result}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <input className="  w-full bg-transparent outline-none text-white" type="text" /> */}
      <form onSubmit={handleSubmit} className="w-full bg-transparent outline-none text-white" >
        <div>
          <p>ryu@latest</p>
        </div>
        <input type="text"
         className="w-full bg-transparent outline-none text-white"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        autoFocus
        />
      </form>

    </div>
  )
}

export default InputCmd