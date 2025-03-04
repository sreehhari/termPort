import { NextResponse } from "next/server";

export async function GET(){
    try{
        const res = await fetch("https://spotiserver-yvnu.onrender.com/recent-track");
        if(!res.ok) throw new Error("failed to fetch data");

        const data = await res.json();
        return NextResponse.json(data);
    }catch(error){
        return NextResponse.json({
            error:"failed to fetch the last played track",
        },
    {
       status:500 
    })
    }
}