import type { SeleccionLugar } from '../types/tiposSeleccion'

export class ReglaSeleccionLugar {
  static esValida(seleccion: SeleccionLugar): boolean {
    return seleccion.plantaId !== null && seleccion.ubicacionId !== null
  }

  static obtenerMensajeError(seleccion: SeleccionLugar): string | null {
    if (!seleccion.plantaId) {
      return 'Debe seleccionar una planta'
    }
    if (!seleccion.ubicacionId) {
      return 'Debe seleccionar una ubicación'
    }
    return null
  }
}
