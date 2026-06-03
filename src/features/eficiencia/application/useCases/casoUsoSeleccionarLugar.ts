import type { Planta, Ubicacion, SeleccionLugar } from '../../domain/types/tiposSeleccion'
import { ReglaSeleccionLugar } from '../../domain/rules/reglaSeleccionLugar'
import type { IAPISeleccionLugar } from '../../infrastructure/api/IAPISeleccionLugar'

export class CasoUsoSeleccionarLugar {
  private api: IAPISeleccionLugar

  constructor(api: IAPISeleccionLugar) {
    this.api = api
  }

  async obtenerPlantas(): Promise<Planta[]> {
    return this.api.obtenerPlantas()
  }

  async obtenerUbicacionesPorPlanta(plantaId: string): Promise<Ubicacion[]> {
    return this.api.obtenerUbicaciones(plantaId)
  }

  validarSeleccion(seleccion: SeleccionLugar): {
    valida: boolean
    mensaje?: string
  } {
    if (ReglaSeleccionLugar.esValida(seleccion)) {
      return { valida: true }
    }

    return {
      valida: false,
      mensaje: ReglaSeleccionLugar.obtenerMensajeError(seleccion) || '',
    }
  }

  async confirmarSeleccion(seleccion: SeleccionLugar): Promise<boolean> {
    const validacion = this.validarSeleccion(seleccion)
    if (!validacion.valida) {
      throw new Error(validacion.mensaje)
    }

    return this.api.confirmarSeleccion(
      seleccion.plantaId!,
      seleccion.ubicacionId!
    )
  }
}
