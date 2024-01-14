import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex bg-gray-800 text-white'>

        <Link href="/" className="mr-4">Página de Inicio</Link>
        <Link href="/usuarios" className="mr-4">Usuarios</Link>
    </div>
  )
}

export default NavBar