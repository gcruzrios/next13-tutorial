import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode

}

const LayoutAdmin = ({children}: Props) => {
  return (
    <div className='flex '> 
    <aside className='bg-gray-600 text-white p-5'>Lateral Administración</aside>
    <div>
        {children}

    </div>
    </div>
  )
}

export default LayoutAdmin