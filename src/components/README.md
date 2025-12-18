# Carpeta de Componentes

Esta carpeta contiene todos los componentes reutilizables de la aplicación.

## Estructura recomendada:

```
src/
├── app/              # Páginas y layouts (App Router)
└── components/       # Componentes reutilizables
    ├── ui/           # Componentes de UI básicos (buttons, inputs, etc.)
    ├── forms/        # Componentes de formularios
    ├── layout/       # Componentes de layout (header, footer, sidebar)
    └── shared/       # Componentes compartidos entre módulos
```

## Ejemplo de uso con imports absolutos:

```typescript
// En lugar de: import Button from '../../components/ui/Button'
// Usa: import Button from '@/components/ui/Button'

import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
```

## Convenciones de nomenclatura:

- **PascalCase** para nombres de componentes: `Button.tsx`, `UserCard.tsx`
- **camelCase** para archivos de utilidades: `formatDate.ts`, `validateEmail.ts`
- **kebab-case** para carpetas: `user-profile/`, `shopping-cart/`
