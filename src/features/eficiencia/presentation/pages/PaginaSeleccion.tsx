import React, { useState } from 'react'
import { useSeleccionLugar } from '../hooks/useSeleccionLugar'
import { Encabezado } from '../components/Encabezado'
import { SelectoresLugar } from '../components/SelectoresLugar'
import { PiePagina } from '../components/PiePagina'
import '../styles/paginaSeleccion.css'

export const PaginaSeleccion: React.FC = () => {
  const {
    plantas,
    ubicaciones,
    cargando,
    error,
    seleccion,
    seleccionarPlanta,
    seleccionarUbicacion,
    confirmar,
  } = useSeleccionLugar()

  const [confirmando, setConfirmando] = useState(false)

  const manejarConfirmar = async () => {
    setConfirmando(true)
    const resultado = await confirmar()
    setConfirmando(false)

    if (resultado) {
      // Navegar a siguiente pantalla o mostrar mensaje de éxito
      console.log('Selección confirmada')
    }
  }

  if (cargando) {
    return <div className="pagina-cargando">Cargando...</div>
  }

  return (
    <div className="pagina-seleccion">
      <Encabezado />

      <main className="contenido-principal">
        <div className="seccion-titulo">
          <h1>Eficiencia Crystal</h1>
          <p>Selecciona el lugar en donde vas a trabajar</p>
        </div>

        {error && <div className="mensaje-error">{error}</div>}

        <SelectoresLugar
          plantas={plantas}
          ubicaciones={ubicaciones}
          plantaSeleccionada={seleccion.plantaId}
          ubicacionSeleccionada={seleccion.ubicacionId}
          onPlantaChange={seleccionarPlanta}
          onUbicacionChange={seleccionarUbicacion}
        />

        <button
          className="boton-confirmar"
          onClick={manejarConfirmar}
          disabled={
            !seleccion.plantaId || !seleccion.ubicacionId || confirmando
          }
        >
          {confirmando ? 'Confirmando...' : 'Confirmar'}
        </button>
      </main>

      <PiePagina />
    </div>
  )
}
