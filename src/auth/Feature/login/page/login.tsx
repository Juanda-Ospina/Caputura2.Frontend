import estilos from './login.module.css'

export const Login = () => {
  return (
    <div className={estilos.pantallaLogin}>
      <h1 className={estilos.titulo}>
        Iniciar <span className={estilos.tituloAcento}>sesión</span>
      </h1>
      <p className={estilos.subtitulo}>mesa manual 25 (#78)</p>

      <section className={estilos.tarjeta}>
        <div className={estilos.grupoCampo}>
          <label htmlFor="documento" className={estilos.etiqueta}>
            Documento
          </label>
          <input
            id="documento"
            type="text"
            placeholder="Número de documento"
            className={estilos.input}
          />
        </div>

        <div className={estilos.grupoCampo}>
          <label htmlFor="turno" className={estilos.etiqueta}>
            Turno
          </label>
          <div className={estilos.contenedorSelect}>
            <select id="turno" className={estilos.select} defaultValue="">
              <option value="" disabled>
                -- Selecciona tu turno --
              </option>
              <option value="manana">Mañana</option>
              <option value="tarde">Tarde</option>
              <option value="noche">Noche</option>
            </select>
            <span className={estilos.flecha} aria-hidden="true">&#8964;</span>
          </div>
        </div>

        <button type="button" className={estilos.botonIngresar}>
          Ingresar
        </button>

        <a href="#" className={estilos.enlaceTutorial}>
          Ver tutorial de inicio de sesión
        </a>
      </section>

      <footer className={estilos.piePagina}>© 2026 Crystal SAS</footer>
    </div>
  )
}
