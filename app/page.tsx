import Image from 'next/image'
import Link from 'next/link'
import PaginaProducto from './components/PaginaProducto'

export default function Home() {
  return (
    <div>
      <main>
        <h1>Bienvenidos Curso Next JS </h1>
        <Link className='btn btn-secondary' href="/usuarios">Link a usuarios</Link>
        <PaginaProducto></PaginaProducto>
      </main>
    </div>
  )
}
