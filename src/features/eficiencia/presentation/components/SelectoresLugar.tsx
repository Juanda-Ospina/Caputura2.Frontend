import React from 'react'
import type { Planta, Ubicacion } from '../../domain/types/tiposSeleccion'
import '../styles/selectoresLugar.css'

interface SelectoresLugarProps {
  plantas: Planta[]
  ubicaciones: Ubicacion[]
  plantaSeleccionada: string | null
  ubicacionSeleccionada: string | null
  onPlantaChange: (plantaId: string) => void
  onUbicacionChange: (ubicacionId: string) => void
}

export const SelectoresLugar: React.FC<SelectoresLugarProps> = ({
  plantas,
  ubicaciones,
  plantaSeleccionada,
  ubicacionSeleccionada,
  onPlantaChange,
  onUbicacionChange,
}) => {
  return (
    <div className="contenedor-selectores">
      <div className="seccion-selector">
        <label>Seleccione una Planta</label>
        <select
          value={plantaSeleccionada || ''}
          onChange={(e) => onPlantaChange(e.target.value)}
          className="selector-input"
        >
          <option value="">-- Planta --</option>
          {plantas.map((planta) => (
            <option key={planta.id} value={planta.id}>
              {planta.nombre}
            </option>
          ))}
        </select>
      </div>

      <div className="seccion-selector">
        <label>Seleccione una Ubicación</label>
        <select
          value={ubicacionSeleccionada || ''}
          onChange={(e) => onUbicacionChange(e.target.value)}
          disabled={!plantaSeleccionada}
          className="selector-input"
        >
          <option value="">-- Ubicacion --</option>
          {ubicaciones.map((ubicacion) => (
            <option key={ubicacion.id} value={ubicacion.id}>
              {ubicacion.nombre}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
