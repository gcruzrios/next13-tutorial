import { NextRequest, NextResponse } from "next/server";
import  prisma  from '@/prisma/client';

interface Props{
    params: {id:number}
}


export async function GET(request: NextRequest, {params}: {params: {id:string}}){

const producto = await prisma.producto.findUnique({where: {id: parseInt(params.id)}})

if(!producto)
  return NextResponse.json({error: 'Producto No encontrado'}, {status: 404});
return NextResponse.json(producto);


//  si el id es mayor a 100 entonces error
// if(params.id > 10)
//     return NextResponse.json({error: 'Usuario No encontrado'}, {status: 404});
// // si es menor a 10
// return NextResponse.json({id:1, name:"Greivin"})
}

export async function PUT (request: NextRequest, {params}: {params: {id:string}}){
  const body =  await request.json();
  const producto =  await prisma.producto.findUnique({where: {id: parseInt(params.id)}})
  
  if (!producto)
     return NextResponse.json({error: 'el producto no encontrado'}, {status: 400})
  
     const actualizarProducto = await prisma.producto.update({
        where: {id: producto.id},
        data:{
         nombre : body.nombre,
         precio : body.precio 
         }
      })
      return NextResponse.json({message:'Producto actualizado'}, {status:200});
  
  // if (!body.nombre) 
  //     return NextResponse.json({error: 'el nombre de usuario es obligatorio'}, {status: 400})    
  // if (params.id > 10) 
  //     return NextResponse.json({error: 'Usuario No encontrado'}, {status: 404});
  //return NextResponse.json({id:1, name: body.name});
}

export async function DELETE (request: NextRequest,{params}: {params: {id: string}})
{

  const producto =  await prisma.producto.findUnique({where: {id: parseInt(params.id)}})
  if (!producto)   
     return NextResponse.json({error: 'Producto No encontrado'}, {status: 404});
  
  //Funcionalidad de Borrar
  await prisma.producto.delete({where:{id:producto.id}}) 
  return NextResponse.json({message: 'Producto Borrado'}, {status: 200});
 
 
  // if (params.id > 10) 
  //     return NextResponse.json({error: 'Usuario No encontrado'}, {status: 404});
  //     return NextResponse.json({message: 'Usuario Borrado'});
 }