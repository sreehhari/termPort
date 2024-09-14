"use client"
import { useDebugValue, useEffect, useState } from "react"

const InputCmd = () => {
    const[input,setInput]=useState("");
    const[history,setHistory]=useState([]);
    const handleCommand=(command)=>{
      switch(command){
          case "ls":
              return "projects, resume, contact me";
          case "cat projects.txt":
            return "meow";

          case "neofetch":
              return(
                <div className="flex flex-row  ">

                  <div>
                  <p>
                BatmanOS 1.0 • Kernel: Linux Arch
                <br />
                Uptime: 7 days • Packages: 1234 (pacman)
                <br />
                Shell: zsh • Resolution: 1920x1080
                  </p>
                  </div>

                  <div >

                   ██▓███  ▄▄▄       ▄████▄  
                   ▓██░  ██▒████▄    ▒██▀ ▀█  
                   ▓██░ ██▓▒██  ▀█▄  ▒▓█    ▄ 
                   ▒██▄█▓▒ ░██▄▄▄▄██ ▒▓▓▄ ▄██▒
                   ▓███▒ ░  ▓█   ▓██▒▒ ▓███▀ ░
                   ▒▓▒▒░    ▒▒   ▓▒█░░ ░▒ ▒  ░
                   ▒ ░▒░    ▒   ▒▒ ░  ░  ▒   
                   ░ ░ ░    ░   ▒   ░        
                   ░   ░        ░  ░░ ░ 
                  </div>


                </div>



              )
     
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

    useEffect(()=>{
      const initialFetch = handleCommand('neofetch');
      setHistory([{command:'',result:initialFetch}]);
      setInput("")
    },[]);
  return (
    <>
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
    </>
  )
}

export default InputCmd