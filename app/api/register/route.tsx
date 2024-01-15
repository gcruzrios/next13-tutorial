import  prisma  from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";
import bcrypt from 'bcrypt'
const schema = z.object({
    email: z.string().email(),
    password: z.string().min(5)
})

export async function POST (request: NextRequest){

     const body = await  request.json();

const validation = schema.safeParse(body);
if(!validation.success)
  return NextResponse.json (validation.error.errors, {status:404})

  const user = await prisma.user.findUnique({
    where:{email:body.email}
  })

  if(user)
  return NextResponse.json(
    {error:"El usuario ya existe"},{status: 400});

  const hashedPassword = await bcrypt.hash(body.password, 10) ;
  
  const nuevoUsuario = await prisma.user.create({
    data:{
        name: body.name,
        email: body.email,
        hashedPassword

    }
  });
  return NextResponse.json({email: nuevoUsuario.email})



}