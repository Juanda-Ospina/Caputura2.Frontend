import { useState, useEffect, useMemo } from 'react'
import type { Planta, Ubicacion, SeleccionLugar } from '../../domain/types/tiposSeleccion'
import { CasoUsoSeleccionarLugar } from '../../application/useCases/casoUsoSeleccionarLugar'
import { APISeleccionLugarMock } from '../../infrastructure/api/apiSeleccionLugarMock'

export function useSeleccionLugar() {
  const [plantas, setPlantas] = useState<Planta[]>([])
  const [ubicaciones, setUbicaciones] = useState<Ubicacion[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [seleccion, setSeleccion] = useState<SeleccionLugar>({
    plantaId: null,
    ubicacionId: null,
  })

  const casoUso = useMemo(() => {
    const api = new APISeleccionLugarMock()
    return new CasoUsoSeleccionarLugar(api)
  }, [])

  useEffect(() => {
    cargarPlantas()
  }, [])

  async function cargarPlantas() {
    try {
      setCargando(true)
      setError(null)
      const plantasObtenidas = await casoUso.obtenerPlantas()
      setPlantas(plantasObtenidas)
    } catch (err) {
      setError('Error al cargar las plantas')
      console.error(err)
    } finally {
      setCargando(false)
    }
  }

  async function seleccionarPlanta(plantaId: string) {
    try {
      setSeleccion((prev) => ({
        ...prev,
        plantaId,
        ubicacionId: null,
      }))

      const ubicacionesObtenidas = await casoUso.obtenerUbicacionesPorPlanta(
        plantaId
      )
      setUbicaciones(ubicacionesObtenidas)
    } catch (err) {
      setError('Error al cargar ubicaciones')
      console.error(err)
    }
  }

  function seleccionarUbicacion(ubicacionId: string) {
    setSeleccion((prev) => ({
      ...prev,
      ubicacionId,
    }))
  }

  async function confirmar(): Promise<boolean> {
    try {
      setError(null)
      const resultado = await casoUso.confirmarSeleccion(seleccion)
      return resultado
    } catch (err) {
      const mensaje = err instanceof Error ? err.message : 'Error desconocido'
      setError(mensaje)
      return false
    }
  }

  return {
    plantas,
    ubicaciones,
    cargando,
    error,
    seleccion,
    seleccionarPlanta,
    seleccionarUbicacion,
    confirmar,
  }
}
