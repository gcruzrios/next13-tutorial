import { NextRequest, NextResponse } from "next/server";
import  prisma  from '@/prisma/client';

interface Props{
    params: {id:number}
}


export async function GET(request: NextRequest, {params}: {params: {id:string}}){

const usuario = await prisma.usuario.findUnique({where: {id: parseInt(params.id)}})

if(!usuario)
  return NextResponse.json({error: 'Usuario No encontrado'}, {status: 404});
return NextResponse.json(usuario);


//  si el id es mayor a 100 entonces error
// if(params.id > 10)
//     return NextResponse.json({error: 'Usuario No encontrado'}, {status: 404});
// // si es menor a 10
// return NextResponse.json({id:1, name:"Greivin"})
}