import Image from 'next/image'
import Link from 'next/link'
import PaginaProducto from './components/PaginaProducto'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route';

export  default async function Home() {

  const session = await getServerSession(authOptions);

  return (
    <div>
      <main>
        <h1>Bienvenido {session && <span>{session.user!.name}</span>} </h1>
        <Link className='btn btn-secondary' href="/usuarios">Link a usuarios</Link>
        <PaginaProducto></PaginaProducto>
      </main>
    </div>
  )
}
