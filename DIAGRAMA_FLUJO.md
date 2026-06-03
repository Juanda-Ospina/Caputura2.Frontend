# Flujo de Datos - Pantalla de Selección

## Diagrama del Flujo

```
┌─────────────────────────────────────────────────────────────────┐
│  PRESENTACION (React Components + Hooks)                         │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ PaginaSeleccion.tsx                                        │ │
│  │ ├─ useSeleccionLugar() ← Orquesta todo                    │ │
│  │ ├─ Encabezado.tsx                                         │ │
│  │ ├─ SelectoresLugar.tsx                                    │ │
│  │ └─ PiePagina.tsx                                          │ │
│  └────────────────────────────────────────────────────────────┘ │
└──────────────────────┬──────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│  APPLICATION (Casos de Uso - Lógica de Negocio)                │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ CasoUsoSeleccionarLugar                                    │ │
│  │ ├─ obtenerPlantas()                                       │ │
│  │ ├─ obtenerUbicacionesPorPlanta(plantaId)                │ │
│  │ ├─ validarSeleccion(seleccion)                           │ │
│  │ └─ confirmarSeleccion(seleccion)                         │ │
│  └────────────────────────────────────────────────────────────┘ │
└──────────────────────┬──────────────────────────────────────────┘
                       │
        ┌──────────────┴──────────────┐
        ▼                              ▼
┌─────────────────────────┐  ┌──────────────────────────┐
│ DOMAIN (Reglas Puras)   │  │ INFRASTRUCTURE (API)     │
│ ┌─────────────────────┐ │  │ ┌────────────────────┐  │
│ │ ReglaSeleccionLugar │ │  │ │ APISeleccionLugar  │  │
│ ├─ esValida()        │ │  │ │ MockMock           │  │
│ └─ obtenerMensajeErr()  │  │ ├─ obtenerPlantas() │  │
│                         │  │ ├─ obtenerUbicaciones│  │
│ Tipos:                  │  │ └─ confirmarSeleccion│  │
│ ├─ Planta              │  │                       │  │
│ ├─ Ubicacion          │  │  Backend API /         │
│ └─ SeleccionLugar     │  │  Mock Data             │
└─────────────────────────┘  └────────────────────────┘
```

## Ejemplo de Interacción

### 1. Usuario carga la página
```
PaginaSeleccion monta
  ↓
useSeleccionLugar() se ejecuta
  ↓
CasoUsoSeleccionarLugar.obtenerPlantas()
  ↓
APISeleccionLugarMock.obtenerPlantas()
  ↓
Retorna DATOS_MOCK_PLANTAS
  ↓
setState(plantas)
```

### 2. Usuario selecciona una planta
```
onClick en selector
  ↓
seleccionarPlanta(plantaId)
  ↓
CasoUsoSeleccionarLugar.obtenerUbicacionesPorPlanta(plantaId)
  ↓
APISeleccionLugarMock.obtenerUbicaciones(plantaId)
  ↓
Retorna ubicaciones filtradas
  ↓
setState(ubicaciones)
```

### 3. Usuario selecciona ubicación y presiona confirmar
```
onClick en botón Confirmar
  ↓
confirmar()
  ↓
CasoUsoSeleccionarLugar.confirmarSeleccion(seleccion)
  ↓
ReglaSeleccionLugar.esValida(seleccion)
  ↓
Si es válido:
  APISeleccionLugarMock.confirmarSeleccion()
    ↓
    Retorna true/false
    ↓
    Navegar o mostrar éxito
```

## Separación de Responsabilidades

| Capa | Responsabilidad | Depende de |
|------|-----------------|-----------|
| **Presentation** | Renderizar UI | Application |
| **Application** | Orquestar use cases | Domain + Infrastructure |
| **Domain** | Validar reglas | Nada (puro) |
| **Infrastructure** | Conectar APIs | Nada |

## Ventajas de esta Arquitectura

### Mantenibilidad
- Cada capa tiene un único propósito
- Cambios en una capa no afectan otras
- Código fácil de entender y seguir

### Testabilidad
- Domain: Sin dependencias, test unitarios simples
- Application: Inyectar mocks del API
- Infrastructure: Test de integración
- Presentation: Mock del hook

### Escalabilidad
- Agregar nuevas pantallas es simple
- Reutilizar use cases entre diferentes UIs
- Cambiar de API es trivial

### Ejemplo: Cambiar de Mock a API Real
Solo cambiar una línea en `useSeleccionLugar.ts`:
```typescript
// De:
const api = new APISeleccionLugarMock()

// A:
const api = new APISeleccionLugar()
```

La lógica y UI no cambian.
