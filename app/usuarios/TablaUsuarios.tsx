import React from 'react'
interface Usuario {

    id:number;
    name:string;
    nombreUsuario:string;
    email:string;
    role:string;
}
const TablaUsuarios = async () => {

  const res = await fetch('http://minimal.test/api/usuarios',{cache:'no-store'});
  
  const usuarios: Usuario[] = await res.json();
  return (
    <div>
        <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Role</th>
            </tr>
        </thead>
        <tbody>
        {usuarios.map(usuario=>
            
        <tr key ={usuario.id }>
            <td>{usuario.id}</td>
            <td>{usuario.nombreUsuario}</td>
            <td>{usuario.email}</td>
            <td>{usuario.role}</td>
        </tr> )
        
    }
            
        </tbody>
    </table>
    </div>
  )
}

export default TablaUsuarios