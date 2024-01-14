
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

   const productos = await prisma?.producto.findMany();
   return NextResponse.json(productos);


}

//{"id":"4", "name":"Valeria Campos"}
// POST crear un nuevo registro
export async function POST (request: NextRequest)
{
const body =  await request.json();
if (!body.nombre)
    return NextResponse.json({error: "el nombre de producto es obligatorio"}, {status: 404})
//    const producto = await prisma.producto.findUnique({
//     where: {nombre: body.nombre}
//    })
//    if (producto)
//    return NextResponse.json({error: 'el correo de usuario está repetido'}, {status: 404})
    
// Prisma create Producto
    const nuevoproducto = await prisma.producto.create({data:{
        nombre : body.nombre,
        precio : body.precio,
        
    }})
    return NextResponse.json(nuevoproducto);
}

