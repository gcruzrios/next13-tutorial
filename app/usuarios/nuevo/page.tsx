'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const PaginaNuevoUsuario = () => {
    const router = useRouter();
  return (
    <div>
        <h1>Nuevo Usuario</h1>


        <button className='btn btn-secondary float-right' onClick={()=> router.push('/usuarios')}>Crear Nuevo Usuario</button>
    </div>
   
  )
}

export default PaginaNuevoUsuario