import estilos from './ubication.module.css'

export const Ubicacion = () => {
  return (
    <div className={estilos.pantallaUbicacion}>
      <h1 className={estilos.titulo}>Eficiencia Crystal</h1>
      <p className={estilos.subtitulo}>Selecciona el lugar en donde vas a trabajar</p>

      <section className={estilos.tarjetaSeleccion}>
        <div className={estilos.grupoCampo}>
          <label htmlFor="planta" className={estilos.etiqueta}>
            Seleccione una Planta
          </label>
          <div className={estilos.contenedorSelectConFlecha}>
            <select id="planta" className={estilos.select} defaultValue="">
              <option value="" disabled>
                -- Planta --
              </option>
              <option value="planta-1">Planta 1</option>
              <option value="planta-2">Planta 2</option>
              <option value="planta-3">Planta 3</option>
            </select>
          </div>
        </div>

        <div className={estilos.grupoCampo}>
          <label htmlFor="ubicacion" className={estilos.etiqueta}>
            Seleccione una Ubicación
          </label>
          <select id="ubicacion" className={estilos.select} defaultValue="">
            <option value="" disabled>
              -- Ubicacion --
            </option>
            <option value="linea-1">Línea 1</option>
            <option value="linea-2">Línea 2</option>
            <option value="linea-3">Línea 3</option>
          </select>
        </div>
      </section>

      <button type="button" className={estilos.botonConfirmar}>
        Confirmar
      </button>

      <footer className={estilos.piePagina}>© 2026 Crystal S.A.S -- Sistema de Eficiencia</footer>
    </div>
  )
}
