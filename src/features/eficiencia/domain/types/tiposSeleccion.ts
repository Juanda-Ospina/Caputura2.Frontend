export interface Planta {
  id: string
  nombre: string
}

export interface Ubicacion {
  id: string
  nombre: string
  plantaId: string
}

export interface SeleccionLugar {
  plantaId: string | null
  ubicacionId: string | null
}
