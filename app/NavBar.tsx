'use client'
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import React, { useState } from 'react'

const NavBar = () => {

  const {status, data:session } = useSession(); 


  return (
    <div className='flex bg-gray-800 text-white'>

        <Link href="/" className="mr-4">Página de Inicio</Link>
        <Link href="/usuarios" className="mr-4">Usuarios</Link>
        {status === 'loading' && 'Cargando...'}
        {status === 'authenticated' && <div>{session.user!.name}
        <Link href='/api/auth/signout' className='mr-3'> Cerrar Sesion</Link>
        </div>}
        {status === 'unauthenticated' && <Link href="/api/auth/signin" className="mr-4">Login Usuario</Link>
          }
    </div>
  )
}

export default NavBar