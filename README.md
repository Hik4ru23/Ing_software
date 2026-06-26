# Prototipo Web: Sistema de Aduanas Integrado

Este es el prototipo interactivo para el Sistema de Control Fronterizo (Aduanas), desarrollado con React y Vite. Incluye un diseño moderno en Dark Mode, efectos de glassmorfismo y simulación de flujos completos (Inicio de Sesión, Dashboard, Registro, Búsqueda y Exportación).

## 🚀 Requisitos Previos

Para poder descargar y ejecutar este proyecto en tu computadora, necesitas tener instalado:

1. [Git](https://git-scm.com/downloads) (Para clonar el repositorio)
2. [Node.js](https://nodejs.org/es/) (Para poder ejecutar el entorno de desarrollo y descargar las dependencias)

## 📥 Cómo descargar e instalar el proyecto

Abre tu terminal (Símbolo del sistema, PowerShell o Git Bash) y sigue estos pasos:

**1. Clonar el repositorio:**
Descarga el código desde GitHub usando el siguiente comando (asegúrate de cambiar la URL por la de tu repositorio):
```bash
git clone https://github.com/Hik4ru23/prototipo-aduanas.git
```

**2. Entrar a la carpeta del proyecto:**
```bash
cd prototipo-aduanas
```
*(Nota: Si la carpeta en tu repositorio se llama diferente, reemplaza `prototipo-aduanas` por el nombre de tu carpeta).*

**3. Instalar las dependencias:**
El proyecto utiliza librerías externas (como `react-router-dom` para la navegación y `lucide-react` para los íconos). Para instalarlas, ejecuta:
```bash
npm install
```

## 💻 Cómo ejecutar el prototipo localmente

Una vez instaladas las dependencias, levanta el servidor de desarrollo con el siguiente comando:

```bash
npm run dev
```

La terminal te mostrará un mensaje similar a este:
```text
  VITE v5.0.0  ready in 350 ms

  ➜  Local:   http://localhost:5173/
```

Simplemente haz "Ctrl + Clic" en el enlace (`http://localhost:5173/`) o cópialo y pégalo en tu navegador para empezar a usar la aplicación.

## 📸 Uso para el Manual del Sistema

Este prototipo está diseñado específicamente para capturar los flujos de usuario solicitados:
- **Login y Recuperación:** Flujos iniciales disponibles en `/login` y `/forgot-password`.
- **Nuevo Registro:** Formulario interactivo que cambia según si seleccionas "Vehículo" o "Permiso Menor".
- **Reportes:** Simulación de exportación de reportes mediante un modal emergente. 

¡Explora el sistema, toma las capturas necesarias y pégalas en tu manual!
