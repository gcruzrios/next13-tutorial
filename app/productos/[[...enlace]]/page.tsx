import React from 'react'

interface Props{
    params:{enlace:string[]};
    busquedaParametro: {ordenProducto:string}
}

const PaginaProducto = ({params:{enlace}, busquedaParametro:{ordenProducto}}:Props) => {
  return (
    <div>Pagina Producto {enlace }</div>
  )
}

export default PaginaProducto