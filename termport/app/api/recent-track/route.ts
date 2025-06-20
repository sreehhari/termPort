import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";
export const dynamic = 'force-dynamic'; 


export async function GET(){
    try{
        noStore();
        const res = await fetch("https://spotiserver-yvnu.onrender.com/recent-track");
        if(!res.ok) throw new Error("failed to fetch data");

        const data = await res.json();
        return NextResponse.json(data,{
            headers:{
                'Cache-control':'no-store,no-cache,must-revalidate,proxy-revalidate'
            }
        });
    }catch(error){
        return NextResponse.json({
            error:"failed to fetch the last played track",
        },
    {
       status:500 
    })
    }
}