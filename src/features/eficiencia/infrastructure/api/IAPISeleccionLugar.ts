import type { Planta, Ubicacion } from '../../domain/types/tiposSeleccion'

export interface IAPISeleccionLugar {
  obtenerPlantas(): Promise<Planta[]>
  obtenerUbicaciones(plantaId: string): Promise<Ubicacion[]>
  confirmarSeleccion(plantaId: string, ubicacionId: string): Promise<boolean>
}
