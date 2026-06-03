import React from 'react'
import '../styles/encabezado.css'

interface EncabezadoProps {
  logoSrc?: string
}

export const Encabezado: React.FC<EncabezadoProps> = ({ logoSrc }) => {
  return (
    <div className="encabezado">
      <div className="encabezado-contenido">
        {logoSrc && <img src={logoSrc} alt="Crystal Logo" className="logo" />}
        <span className="texto-logo">Crystal</span>
      </div>
    </div>
  )
}
