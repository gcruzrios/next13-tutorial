
/*
GET Obtener
POST Crear
PUT Actualizar
DELETE Borrar


CRUD _ Create, Read, Update, Delete
*/

import React from 'react'

import { NextRequest, NextResponse } from 'next/server';



//Peticion GET 
export function GET (request: NextRequest)
{
    return NextResponse.json([
        {id:1, name:'Greivin'},
        {id:2, name:'José Render'},
        {id:3, name:'María'},
    ], {status:200});
}


//{"id":"4", "name":"Valeria Campos"}
// POST crear un nuevo registro
export async function POST (request: NextRequest)
{
const body =  await request.json();

if (!body.name)
    return NextResponse.json({error: "el nombre de usuario es obligatorio"}, {status: 404})
    return NextResponse.json({id:4, name:body.name}, {status:201});
}
//{"id":"4", "name":"Humberto Campos"}
//PUT  Para actualizar

export async function PUT (request: NextRequest, {params}: {params: {id:number}}){
    const body =  await request.json();
    
    if (!body.name) 
        return NextResponse.json({error: 'el nombre de usuario es obligatorio'}, {status: 400})
    if (params.id > 10) 
        return NextResponse.json({error: 'Usuario No encontrado'}, {status: 404});
    
    return NextResponse.json({id:1, name: body.name});
}

//export async function PUT (request: NextRequest, {params}: {params: {id: number}}){

//}

export function DELETE (request: NextRequest,{params}: {params: {id: number}})
{
if (params.id > 10) 
    return NextResponse.json({error: 'Usuario No encontrado'}, {status: 404});
    return NextResponse.json({message: 'Usuario Borrado'});
}