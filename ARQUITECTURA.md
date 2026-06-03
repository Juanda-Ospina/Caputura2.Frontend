# Estructura de Arquitectura Limpia - Feature Eficiencia

## Orden de Dependencias (De abajo hacia arriba)

```
domain/ (Sin dependencias externas)
  ↑
infrastructure/ (Depende de domain)
  ↑
application/ (Depende de domain e infrastructure)
  ↑
presentation/ (Depende de application y domain)
```

## Estructura de Carpetas

```
features/eficiencia/
│
├── domain/                          # Lógica pura, sin React, sin HTTP
│   ├── models/
│   ├── types/
│   │   └── tiposSeleccion.ts       # Interfaces de dominio
│   └── rules/
│       └── reglaSeleccionLugar.ts  # Reglas de negocio
│
├── application/                     # Casos de uso - orquestar la lógica
│   └── useCases/
│       └── casoUsoSeleccionarLugar.ts  # Lógica de aplicación
│
├── infrastructure/                  # API, storage, servicios externos
│   └── api/
│       └── apiSeleccionLugar.ts    # Consumo de APIs
│
└── presentation/                    # UI (React)
    ├── components/
    │   ├── Encabezado.tsx
    │   ├── SelectoresLugar.tsx
    │   └── PiePagina.tsx
    ├── hooks/
    │   └── useSeleccionLugar.ts    # Orquesta datos y use cases
    ├── pages/
    │   └── PaginaSeleccion.tsx     # Page principal
    ├── styles/
    │   ├── encabezado.css
    │   ├── selectoresLugar.css
    │   ├── piePagina.css
    │   └── paginaSeleccion.css
    └── index.ts                     # Exportaciones públicas
```

## Flujo de Datos

1. **Component** → Click en botón
2. **Hook** (useSeleccionLugar) → Valida y orquesta
3. **UseCase** (casoUsoSeleccionarLugar) → Aplica reglas de dominio
4. **Domain Rules** → Valida las reglas de negocio
5. **API** (apiSeleccionLugar) → Realiza llamadas HTTP
6. **Response** → Vuelve al component con los datos

## Separación de Responsabilidades

- **domain/**: ¿Qué es válido según el negocio?
- **application/**: ¿Cómo ejecutar la lógica?
- **infrastructure/**: ¿Cómo obtener datos?
- **presentation/**: ¿Cómo mostrar al usuario?

## Ventajas

✅ Fácil de testear (cada layer es independiente)
✅ Cambios en API no afectan la lógica
✅ Cambios en UI no afectan la lógica
✅ Código reutilizable entre diferentes UIs (mobile, web, etc.)
✅ Fácil de mantener y escalar
