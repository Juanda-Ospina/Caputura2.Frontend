import type { Planta, Ubicacion } from '../../domain/types/tiposSeleccion'
import type { IAPISeleccionLugar } from './IAPISeleccionLugar'
import {
  DATOS_MOCK_PLANTAS,
  DATOS_MOCK_UBICACIONES,
} from '../mocks/datosMock'

export class APISeleccionLugarMock implements IAPISeleccionLugar {
  private usarMock = import.meta.env.VITE_USE_MOCK === 'true'

  async obtenerPlantas(): Promise<Planta[]> {
    if (this.usarMock) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(DATOS_MOCK_PLANTAS), 500)
      })
    }

    try {
      const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
      const respuesta = await fetch(`${baseURL}/api/plantas`)
      if (!respuesta.ok) throw new Error('Error al obtener plantas')
      return respuesta.json()
    } catch (error) {
      console.error('Error en obtenerPlantas:', error)
      return []
    }
  }

  async obtenerUbicaciones(plantaId: string): Promise<Ubicacion[]> {
    if (this.usarMock) {
      return new Promise((resolve) => {
        setTimeout(
          () => resolve(DATOS_MOCK_UBICACIONES[plantaId] || []),
          500
        )
      })
    }

    try {
      const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
      const respuesta = await fetch(
        `${baseURL}/api/ubicaciones?plantaId=${plantaId}`
      )
      if (!respuesta.ok) throw new Error('Error al obtener ubicaciones')
      return respuesta.json()
    } catch (error) {
      console.error('Error en obtenerUbicaciones:', error)
      return []
    }
  }

  async confirmarSeleccion(
    plantaId: string,
    ubicacionId: string
  ): Promise<boolean> {
    if (this.usarMock) {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Selección confirmada: Planta ${plantaId}, Ubicación ${ubicacionId}`)
          resolve(true)
        }, 1000)
      })
    }

    try {
      const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
      const respuesta = await fetch(`${baseURL}/api/seleccion-lugar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plantaId, ubicacionId }),
      })
      return respuesta.ok
    } catch (error) {
      console.error('Error en confirmarSeleccion:', error)
      return false
    }
  }
}
