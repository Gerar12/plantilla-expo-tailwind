# Plantilla Expo + Tailwind

Esta plantilla viene configurada con [Expo](https://expo.dev), [Tailwind CSS](https://tailwindcss.com) (vía [NativeWind](https://www.nativewind.dev/)) y [Expo Router](https://docs.expo.dev/router/introduction), para que puedas empezar rápidamente con:

- **Ruteo basado en archivos**
- **Estilos con Tailwind**
- **Instalación fácil de fuentes**
- **Scripts prácticos** (por ejemplo, para resetear el proyecto)

## Cómo usar esta plantilla

1. **Instalar dependencias**
   ```bash
   npm install
   ```
2. **Iniciar el proyecto**

   ```bash
   npx expo start
   ```

   Podrás abrirlo en el emulador de Android, iOS o en la web. También puedes usar [Expo Go](https://expo.dev/client) en tu dispositivo.

3. **Editar la app**
   - Encuentra los archivos principales en la carpeta `app`.
   - Aquí se usa [Expo Router](https://docs.expo.dev/router/introduction) para manejar las rutas en forma de archivos.
   - Puedes crear nuevas pantallas añadiendo archivos en la carpeta `app` (por ejemplo, `app/perfil.tsx`).

## Tailwind y NativeWind

- El archivo de configuración de Tailwind está en `tailwind.config.js`.
- Para usar clases de Tailwind en tus componentes, simplemente añade `className="<tus-clases>"` en lugar de `style={}`.

## Añadir tipografías personalizadas

1. **Colocar tus fuentes** en la carpeta `assets/fonts` (créala si no existe).
2. **Registrar las fuentes** (por ejemplo, en `app/_layout.tsx` o un archivo global):

   ```js
   import { useFonts } from "expo-font";

   export default function Layout() {
     const [loaded] = useFonts({
       MiFuente: require("../assets/fonts/MiFuente.ttf"),
     });

     if (!loaded) return null;

     return <Slot />;
   }
   ```

3. **Usarlas en Tailwind**
   - En `tailwind.config.js`:
     ```js
     theme: {
       extend: {
         fontFamily: {
           miFuente: ["MiFuente", "sans-serif"],
         },
       },
     },
     ```
   - Luego en tus componentes:
     ```jsx
     <Text className="font-miFuente text-base">
       Texto con fuente personalizada
     </Text>
     ```

## Script para reiniciar el proyecto

- Si quieres un proyecto limpio sin el código de ejemplo, ejecuta:
  ```bash
  npm run reset-project
  ```
  Esto moverá los archivos de ejemplo a `app-example` y creará una carpeta `app` vacía para empezar desde cero.

## Más información

- [Documentación de Expo](https://docs.expo.dev/)
- [Guía de Expo Router](https://docs.expo.dev/router/introduction/)
- [NativeWind](https://www.nativewind.dev/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## Comunidad

- [Expo en GitHub](https://github.com/expo/expo)
- [Discord oficial de Expo](https://chat.expo.dev)

¡Disfruta creando tus apps con esta plantilla!
