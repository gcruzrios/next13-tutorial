import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>

        <h1>Error 404, Página no existe</h1>

        <Link href="/">volver a Inicio</Link>
    </div>
  )
}

export default NotFound