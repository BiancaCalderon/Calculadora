# Calculadora

Este es un proyecto de una calculadora desarrollado con Next.js. `La plantilla utilizada: npx create-next-app@latest calculator`

## Estructura de directorios

```
|-- .next/                    # Directorio de Next.js (generado automáticamente)
|-- __tests__/                # Pruebas unitarias
|   |-- Button.test.js        # Pruebas del componente Button
|   |-- calculator.test.js    # Pruebas de la calculadora
|-- components/               # Componentes de React
|   |-- Button.js             # Componente de botón
|   |-- Button.simple.js      # Componente de botón simple (sin estilos)
|   |-- Display.js            # Componente de pantalla de la calculadora
|-- coverage/                 # Reportes de cobertura de pruebas (generados automáticamente)
|-- pages/                    # Páginas de Next.js
|   |-- index.js              # Página principal de la calculadora
|-- styles/                   # Estilos CSS (módulos CSS)
|   |-- Button.module.css     # Estilos del componente Button
|   |-- Display.module.css    # Estilos del componente Display
|   |-- Home.module.css       # Estilos de la página principal
|-- src/                      # Código fuente de la aplicación
|   |-- app/                  # Configuraciones de la aplicación
|       |-- favicon.ico       # Ícono de la aplicación
|       |-- globals.css       # Estilos globales de la aplicación
|       |-- layout.js         # Diseño principal de la aplicación
|       |-- page-custom.js    # Configuración de páginas personalizadas
|       |-- page.module.css   # Estilos de página (usado en _app.js)
|-- jest.config.js            # Configuración de Jest para pruebas unitarias
|-- jest.setup.js             # Archivo de configuración de Jest
|-- jsconfig.json             # Configuración de JavaScript (opcional)
|-- next.config.js            # Configuración de Next.js
|-- next.config.mjs           # Configuración de Next.js (Módulo ES)
|-- node_modules/             # Dependencias del proyecto (generadas automáticamente)
|-- package.json              # Archivo de configuración de npm
|-- package-lock.json         # Bloqueo de versiones de las dependencias (generado automáticamente)
|-- public/                   # Archivos públicos (accesibles desde la raíz del sitio)
|   |-- ...                   # Otros archivos públicos (como imágenes)
|-- setupTests.js             # Configuración de pruebas
```

## Características

- Desarrollado con Next.js, un framework de React para construir aplicaciones web.
- Componentes modulares reutilizables para los botones y la pantalla de la calculadora.
- Pruebas unitarias para asegurar el correcto funcionamiento de los componentes y la lógica de la calculadora.
- Integración de Jest para ejecutar las pruebas unitarias y generar reportes de cobertura.

## Uso

1. Clona el repositorio: `git clone <git@github.com:BiancaCalderon/Calculadora.git>`
2. Instala las dependencias: `npm install`
3. Ejecuta la aplicación en modo de desarrollo: `npm run dev`
4. Visita `http://localhost:3000` en tu navegador para ver la calculadora en acción.

## Pruebas

Para ejecutar las pruebas unitarias, puedes usar el siguiente comando:

```
npm test
```

Esto ejecutará las pruebas y generará reportes de cobertura en el directorio `coverage/`.

## Contribución

¡Siéntete libre de contribuir con mejoras, correcciones de errores o nuevas características al proyecto! Abre un nuevo issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).
