import {spawn} from "child_process";
import { error } from "console";
import path from "path";


export async function GET() {
    return new Promise((resolve)=>{
        const pythonscript = path.join(process.cwd(),"scripts","spotify_create.py");
        const pythonExecutable = path.join(process.cwd(),".venv","bin","python3");
        const childProcess = spawn(pythonExecutable,[pythonscript]);

        let data ="";
        let errorOut="";

        childProcess.stdout.on("data",(chunk)=>{
            data+=chunk.toString();
        });
        
        //error printing
        childProcess.stderr.on("data",(chunk)=>{
            errorOut+=chunk.toString();
            console.error("Python error: ",chunk.toString());
        })

        childProcess.stderr.on("data",(error)=>{
            console.error("python error:",error.toString());

        });

        childProcess.on("close",(code)=>{
            if(code===0){
                try{
                    const jsonData=JSON.parse(data.trim());
                    resolve(new Response(data,{status:200}));

                }catch(error){
                    console.error("JSON PARSE ERROR:",error);
                    resolve(new Response(JSON.stringify({ error: "Invalid JSON from Python script" }), { status: 500 }));
                }
            }else{
                // resolve(new Response(JSON.stringify({
                //     error:"python script failed"
                // }),{status:500}));
                resolve(
                    new Response(JSON.stringify({
                        error:"Python script failed..probably not possible",
                        details:errorOut || "unknown error",
                    }),
                    {status:500}
                )
                )
            }
        });

    });
}
