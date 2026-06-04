import type { ReactNode } from 'react'
import estilos from './AuthLayout.module.css'
import logoCrystal from '../../assets/logo crystal.png'

interface PropiedadesAuthLayout {
  children: ReactNode
  alClickLogo?: () => void
}

export const AuthLayout = ({ children, alClickLogo }: PropiedadesAuthLayout) => {
  return (
    <main className={estilos.contenedorPrincipal}>
      <header className={estilos.encabezado}>
        <img
          src={logoCrystal}
          alt="logo crystal"
          className={estilos.logo}
          onClick={alClickLogo}
          style={{ cursor: alClickLogo ? 'pointer' : 'default' }}
        />
      </header>

      <section className={estilos.contenido}>{children}</section>
    </main>
  )
}
