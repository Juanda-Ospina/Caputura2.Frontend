import type { Planta, Ubicacion } from '../../domain/types/tiposSeleccion'
import type { IAPISeleccionLugar } from './IAPISeleccionLugar'

export class APISeleccionLugar implements IAPISeleccionLugar {
  private baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

  async obtenerPlantas(): Promise<Planta[]> {
    try {
      const respuesta = await fetch(`${this.baseURL}/api/plantas`)
      if (!respuesta.ok) {
        throw new Error('Error al obtener plantas')
      }
      return respuesta.json()
    } catch (error) {
      console.error('Error en obtenerPlantas:', error)
      return []
    }
  }

  async obtenerUbicaciones(plantaId: string): Promise<Ubicacion[]> {
    try {
      const respuesta = await fetch(
        `${this.baseURL}/api/ubicaciones?plantaId=${plantaId}`
      )
      if (!respuesta.ok) {
        throw new Error('Error al obtener ubicaciones')
      }
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
    try {
      const respuesta = await fetch(`${this.baseURL}/api/seleccion-lugar`, {
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
