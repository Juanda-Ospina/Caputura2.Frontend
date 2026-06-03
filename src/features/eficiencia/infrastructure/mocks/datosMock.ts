import type { Planta, Ubicacion } from '../../domain/types/tiposSeleccion'

export const DATOS_MOCK_PLANTAS: Planta[] = [
  { id: '1', nombre: 'Planta Principal' },
  { id: '2', nombre: 'Planta Secundaria' },
  { id: '3', nombre: 'Planta Logística' },
]

export const DATOS_MOCK_UBICACIONES: Record<string, Ubicacion[]> = {
  '1': [
    { id: 'u1', nombre: 'Oficina A', plantaId: '1' },
    { id: 'u2', nombre: 'Oficina B', plantaId: '1' },
    { id: 'u3', nombre: 'Almacén 1', plantaId: '1' },
  ],
  '2': [
    { id: 'u4', nombre: 'Oficina C', plantaId: '2' },
    { id: 'u5', nombre: 'Taller', plantaId: '2' },
  ],
  '3': [
    { id: 'u6', nombre: 'Centro de Distribución', plantaId: '3' },
    { id: 'u7', nombre: 'Control de Calidad', plantaId: '3' },
  ],
}
