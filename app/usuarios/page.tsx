import React, { Suspense } from 'react'

import TablaUsuarios from './tablaUsuarios'
import Link from 'next/link'


const PaginaUsuarios = async () => {


// const res = await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-store'});
// const res = await fetch('https://jsonplaceholder.typicode.com/users',{next:{revalidate:20}});
//const res = await fetch('https://jsonplaceholder.typicode.com/users');
//const res = await fetch('http://minimal.test/api/usuarios',{cache:'no-store'});
//const usuarios: Usuario[] = await res.json();

  return (
    <>
    <h1>Usuarios</h1>
    {/* <h2>{new Date().toLocaleTimeString()}</h2> */}
    <Link href="/usuarios/nuevo" className='btn btn-secondary float-right'>Nuevo Usuario</Link>
    
      <TablaUsuarios/>
   
   
    </>
  )
}

export default PaginaUsuarios