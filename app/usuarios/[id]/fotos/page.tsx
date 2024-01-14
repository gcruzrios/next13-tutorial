import React from 'react'

interface Props {
    params: {id:number; fotoId: number}
}
const FotoUsuario = ({params: {id,fotoId}}: Props) => {
  return (
    <ul>
        <li> Id Usuario : {id} </li>
        <li> Foto Id : {fotoId} </li>
    </ul>
  )
}

export default FotoUsuario