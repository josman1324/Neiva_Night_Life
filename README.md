# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
Probando fork!!!

---

## Cambios aplicados por el equipo (visuales y navegación)

- Barra de pestañas inferior personalizada: fondo negro, iconos blancos, mayor altura y padding para safe-area.
- Pantallas de 'Lugares': lista con tarjetas estilizadas y badges, pantalla de detalle mejorada (hero image, overlay, acciones).
- Datos centralizados en `app/data/lugares.ts` para evitar duplicación.
- Haptics en tabs: mejor detección de iOS y retroalimentación háptica.

## Cómo probar localmente

1. Instala dependencias (si no lo has hecho):

```powershell
npm install
```

2. Inicia Expo:

```powershell
npx expo start
```

3. Abrir en simuladores:

- iOS Simulator: `i` desde la ventana de Expo (macOS necesario)
- Android Emulator: `a` desde la ventana de Expo
- Expo Go (móvil): escanear QR

4. Navegación rápida dentro de la app:

- Inicio: pantalla `app/index.tsx` (botón "Explorar Lugares")
- Listado: `app/(tabs)/lugares/index.tsx` (pestaña "Lugares")
- Detalle: `app/lugares/[id].tsx` (se abre desde la tarjeta en la lista; ahora está fuera del layout de tabs para ocupar toda la pantalla)

## Recomendaciones

- Si quieres mapa interactivo o fuentes personalizadas, dime y lo integro (algunas funciones necesitan instalar dependencias adicionales).
