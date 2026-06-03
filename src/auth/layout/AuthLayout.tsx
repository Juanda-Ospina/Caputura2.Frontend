import type { ReactNode } from 'react'
import estilos from './AuthLayout.module.css'
import logoCrystal from '../../assets/logo crystal.png'

interface PropiedadesAuthLayout {
  children: ReactNode
}

export const AuthLayout = ({ children }: PropiedadesAuthLayout) => {
  return (
    <main className={estilos.contenedorPrincipal}>
      <header className={estilos.encabezado}>
        <img src={logoCrystal} alt="logo crystal" className={estilos.logo} />
      </header>

      <section className={estilos.contenido}>{children}</section>
    </main>
  )
}
