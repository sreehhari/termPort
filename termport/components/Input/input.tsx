"use client"
import { useEffect, useState } from "react"
// import { calculateAge } from "../age";

 const calculateAge=(birthdate)=>{
  const now = new Date();
  const birth = new Date(birthdate);
  let age  = now.getFullYear()-birth.getFullYear();
  const monthDifference= now.getMonth()-birth.getMonth();
  if(monthDifference<0 || monthDifference===0 && now.getDate()<birth.getDate()){
    age--;
  }
  return age;
};
const AgeDisplay=({birthdate})=>{
  const[age,setAge]=useState(calculateAge(birthdate));
   
  useEffect(()=>{
    const interval = setInterval(()=>{
      setAge(calculateAge(birthdate))
    },1000);
    return ()=>clearInterval(interval);
  },[birthdate]);

  return(
    <div>
      <p>{age} years</p>
    </div>
  );
};
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
            return {
              type:"neofetch",
              output:(
                <div className="flex flex-row">


                  <div>
                    <pre>
                      {
                        `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣰⣾⠁⠀⢦⣾⣤⠆⠀⠻⣧⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⣼⠏⠀⠀⠀⠀⣿⡇⠀⠀⠀⠈⢷⣄⠀⠀⠀⠀
⠀⠀⢀⣸⣿⠃⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⢿⣧⡀⠀⠀
⠀⢰⣾⣿⡁⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⢀⣿⣿⠖⠀
⠀⠀⠈⠻⣿⣦⣄⠀⠀⠀⠀⣿⡇⠀⠀⠀⢀⣴⣿⠟⠁⠀⠀
⠀⠀⠀⠀⠈⠻⢿⣷⣄⡀⠀⣿⡇⠀⣠⣾⣿⠟⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣦⣿⣧⣾⣿⠟⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢙⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣴⣿⣿⠟⠁⣻⣿⠈⠙⢿⣿⣦⡀⠀⠀⠀⠀
⠀⠀⠀⢀⣴⣿⡿⠋⠀⠀⠀⣽⣿⠀⠀⠀⠙⢿⣿⣦⣄⠀⠀
⠀⣠⣴⣿⡿⠋⠀⠀⠀⠀⠀⢼⣿⠀⠀⠀⠀⠀⠈⢻⣿⣷⣄
⠈⠙⢿⣿⣦⣄⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⣠⣾⣿⠟⠁
⠀⠀⠀⠙⢿⣿⣷⣄⠀⠀⠀⢸⣿⠀⠀⠀⣠⣾⣿⠟⠁⠀⠀
⠀⠀⠀⠀⠀⠙⢻⣿⣷⡄⠀⢸⣿⠀⠀⣼⣿⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠻⢿⣿⣦⣸⣿⣠⣾⣿⠟⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        
                        `
                      }
                    </pre>
                  </div>
                  <div className="text-lg pt-52 pl-7">
                    <p>
                    Sreehari 
                  <br />
                      <p className="flex flex-row">Age:<AgeDisplay birthdate='2003-09-04'/></p>
                  Shell: seashells • Resolution: i prefer 4k
                    </p>
                  </div>
                </div>
              )
            };
     
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
              <div className="text-green-500">
                {typeof entry.result==='string'?
                (
                  <p>{entry.result}</p>
                )
                :
                (
                  entry.result.output
                )
              
              }
              </div>
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