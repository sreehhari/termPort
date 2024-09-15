"use client"
import { useEffect, useState } from "react"
// import { calculateAge } from "../age";

interface AgeDisplayProps{
  birthdate:string;
}

 const calculateAge=(birthdate:string)=>{
  const now = new Date();
  const birth = new Date(birthdate);
  let age  = now.getFullYear()-birth.getFullYear();
  const monthDifference= now.getMonth()-birth.getMonth();
  if(monthDifference<0 || monthDifference===0 && now.getDate()<birth.getDate()){
    age--;
  }
  return age;
};
const AgeDisplay=({birthdate}:AgeDisplayProps)=>{
  const[age,setAge]=useState<number>(calculateAge(birthdate));
   
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
interface HistoryEntry{
  command:string;
  result:string | JSX.Element | {output:JSX.Element};
}
type CommandResult =
  | string
  | { type: string; output: JSX.Element };

const InputCmd = () => {
    const[input,setInput]=useState<string>("");
    const[history,setHistory]=useState<HistoryEntry[]>([]);
    const handleCommand=(command:string):CommandResult=>{
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
                      <pre>
                  Full-Stack Web dev | FOSS Enthusiast | Professional Distro-Hopper 
                  <br />
                  
                  I also ride Motorcycles
                  </pre>

                    </p>
                  </div>
                </div>
              )
            };

            case "help":
              return `ohh you're lost bro ? 
                fear not I'll guide u.. 
                press control + w on your keyboard to get home`;

            case "man":
              return{
                type:'man',
                output:(
                  <>
                  <pre>
                    <p>
                       true men refer the man pages.. 
                       here&apos;s the help you need 
                       <br />
                       <br />
                       <h2>Basic linux commands</h2>
                       <ul>
                        <li>
                          ls -- this lists all files and directories in the current working directory
                        </li>
                        <li>
                          cd -- this stands for change working directory.. it&apos;s similar to double clicking a folder in windows
                          usage: cd 
                        </li>
                       </ul>
                    </p>
                  </pre>
                  
                  </>
                )
              }
            
              
     
          default:
            return `invalid command ${command} use 'help' to view available commands `;
      };


    };



    const handleSubmit=(e:React.FormEvent<HTMLFormElement>):void=>{
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
            <div key={index} className="flex flex-row gap-2 pt-3 pl-2">
              <pre>
              <p>ryu@latest</p>
              </pre>
              <div className="flex flex-col">
              <p className="text-white">{entry.command}</p>
              <div className="text-green-500">
                {typeof entry.result==='string'?
                (
                  <p>{entry.result}</p>
                )
                :
                (
                  (entry.result as {output:JSX.Element}).output
                )
              
              }
              </div>
              </div>
            </div>
          ))}
        </div>
        {/* <input className="  w-full bg-transparent outline-none text-white" type="text" /> */}
      <form onSubmit={handleSubmit} className="w-full bg-transparent outline-none text-white flex flex-row" >
        <div>
          <pre>
          <p className="p-2">ryu@latest</p>
          </pre>
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