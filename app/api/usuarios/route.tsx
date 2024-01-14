
/*
GET Obtener
POST Crear
PUT Actualizar
DELETE Borrar


CRUD _ Create, Read, Update, Delete
*/

import React from 'react'

import { NextRequest, NextResponse } from 'next/server';

import  prisma  from '@/prisma/client';
//import { Prisma } from '@prisma/client';


//Peticion GET 
export async function GET (request: NextRequest)
{
    // return NextResponse.json([
    //     {id:1, name:'Greivin'},
    //     {id:2, name:'José Render'},
    //     {id:3, name:'María'},
    // ], {status:200});

   const usuarios = await prisma?.usuario.findMany();
   return NextResponse.json(usuarios);


}


//{"id":"4", "name":"Valeria Campos"}
// POST crear un nuevo registro
export async function POST (request: NextRequest)
{
const body =  await request.json();
if (!body.nombre)
    return NextResponse.json({error: "el nombre de usuario es obligatorio"}, {status: 404})
   const usuario = await prisma.usuario.findUnique({
    where: {email: body.email}
   })
   if (usuario)
   return NextResponse.json({error: 'el correo de usuario está repetido'}, {status: 404})
    // Prisma create Usuario
    const nuevousuario = await prisma.usuario.create({data:{
        nombre : body.nombre,
        email : body.email,
        seguidores : body.seguidores,
        estaActivo : body.estaActivo
    }})
    return NextResponse.json(nuevousuario);
}
//{"id":"4", "name":"Humberto Campos"}
//PUT  Para actualizar

export async function PUT (request: NextRequest, {params}: {params: {id:string}}){
    const body =  await request.json();
    const usuario =  await prisma.usuario.findUnique({where: {id: parseInt(params.id)}})
    
    if (!usuario)
       return NextResponse.json({error: 'el usuario no encontrado'}, {status: 400})
    
       const actualizarUsuario = await prisma.usuario.update({
          where: {id: usuario.id},
          data:{
           nombre : body.nombre,
           email : body.email 
           }
        })
        return NextResponse.json(actualizarUsuario, {status:200});
    
    // if (!body.nombre) 
    //     return NextResponse.json({error: 'el nombre de usuario es obligatorio'}, {status: 400})    
    // if (params.id > 10) 
    //     return NextResponse.json({error: 'Usuario No encontrado'}, {status: 404});
    //return NextResponse.json({id:1, name: body.name});
}


export async function DELETE (request: NextRequest,{params}: {params: {id: string}})
{

    const usuario =  await prisma.usuario.findUnique({where: {id: parseInt(params.id)}})
    if (!usuario)   
       return NextResponse.json({error: 'Usuario No encontrado'}, {status: 404});
    
    //Funcionalidad de Borrar
    await prisma.usuario.delete({where:{id:usuario.id}}) 
    return NextResponse.json({message: 'Usuario Borrado'}, {status: 200});
   
   
    // if (params.id > 10) 
    //     return NextResponse.json({error: 'Usuario No encontrado'}, {status: 404});
    //     return NextResponse.json({message: 'Usuario Borrado'});
   }