import React from 'react'

interface Props{
    params: {id:number}
}

const DetalleUsuario = ({params: {id}}: Props) => {
  return (
    <div>DetalleUsuario : {id}</div>
  )
}

export default DetalleUsuario