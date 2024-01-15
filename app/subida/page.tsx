'use client'
import React, { useState } from 'react'
import { CldImage, CldUploadWidget } from 'next-cloudinary';

interface Cloudinaryresult{
    public_id:string
}


const SubidaArchivo = () => {

  const [publicId, setPublicId] = useState('');
  
  return (
   
    <>
    {publicId && <CldImage alt='Imagen subida a Cloudinary' width={300} height={180} src={publicId}/>}
    <CldUploadWidget uploadPreset="dwourfmq" 
    options={{
        sources:['local'],
        multiple:false,
        maxFiles:3,
        styles: {
            palette: {
                window: "#FFFFFF",
                windowBorder: "#90A0B3",
                tabIcon: "#0078FF",
                menuIcons: "#5A616A",
                textDark: "#000000",
                textLight: "#FFFFFF",
                link: "#0078FF",
                action: "#FF620C",
                inactiveTabIcon: "#0E2F5A",
                error: "#F44235",
                inProgress: "#0078FF",
                complete: "#20B832",
                sourceBg: "#E4EBF1"
            },
            fonts: {
                default: {
                    active: true
                }
            }
    }}}
    
    onUpload={(result, widget) =>{
        console.log(result);
        if(result.event !== 'success') return;
        const info = result.info as Cloudinaryresult;
        setPublicId(info.public_id)
    }}>
    {({ open }) => {
      return (
        <button className='btn btn-primary' onClick={() => open()}>
          Subir Imagen
        </button>
      );
    }}
  </CldUploadWidget>
  </>
  )
}

export default SubidaArchivo