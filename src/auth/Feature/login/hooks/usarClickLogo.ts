import { useRef, useState } from 'react'

const CLICKS_PARA_UBICACION = 3
const VENTANA_MS = 800

export const usarClickLogo = () => {
  const [irAUbicacion, setIrAUbicacion] = useState(false)
  const contadorClicks = useRef(0)
  const temporizador = useRef<ReturnType<typeof setTimeout> | null>(null)

  const manejarClickLogo = () => {
    contadorClicks.current += 1

    if (temporizador.current) clearTimeout(temporizador.current)

    if (contadorClicks.current >= CLICKS_PARA_UBICACION) {
      contadorClicks.current = 0
      setIrAUbicacion(true)
      return
    }

    temporizador.current = setTimeout(() => {
      contadorClicks.current = 0
    }, VENTANA_MS)
  }

  return { irAUbicacion, manejarClickLogo }
}
