import { NextRequest, NextResponse } from "next/server";

interface Props{
    params: {id:number}
}


export function GET(request: NextRequest, {params}: {params: {id:number}}){

//  si el id es mayor a 100 entonces error

if(params.id > 10)
    return NextResponse.json({error: 'Usuario No encontrado'}, {status: 404});
// si es menor a 10
return NextResponse.json({id:1, name:"Greivin"})
}