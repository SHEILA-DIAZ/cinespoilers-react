# 🎬 CineSpoilerS

Aplicación web desarrollada con **React + TypeScript + Vite** para explorar películas utilizando la API de **The Movie Database (TMDB)**, implementando estado global con **Zustand**, una simulación de pasarela de pago y pruebas con **Vitest**.

---

# 🚀 Tecnologías Utilizadas

- React
- TypeScript
- Vite
- React Router DOM
- Axios
- Zustand
- TMDB API
- Vitest
- Testing Library

---

# 📸 Evidencias de Sheila Diaz

## Evidencia 01: Clonación del Repositorio

Se realizó la clonación del repositorio base desde GitHub para comenzar el desarrollo del proyecto.

![Evidencia 01](./Evidencias/01-ClonacionRepositorio.png)

---

## Evidencia 02: Levantamiento del Proyecto

Se instalaron las dependencias y se ejecutó correctamente el proyecto utilizando Vite.

![Evidencia 02](./Evidencias/02-LevantarProyecto.png)

---

## Evidencia 03: Consumo de Datos desde TMDB

Se configuró la conexión con la API de TMDB para obtener la información de las películas.

![Evidencia 03](./Evidencias/03-ConsumirDataTMDB.png)

---

## Evidencia 04: Implementación de Estado Global con Zustand

Se implementó Zustand para administrar el estado global de las películas obtenidas desde TMDB.

![Evidencia 04](./Evidencias/04-ImplementacionEstadoGlobalZustand.png)

---

## Evidencia 05: Desarrollo de la Página de Detalle

Se implementó la página de detalle de cada película utilizando rutas dinámicas.

![Evidencia 05](./Evidencias/05-DesarrollarPaginas.png)

---

## Evidencia 06: Simulación de Pasarela de Pago

Se desarrolló una simulación de compra permitiendo visualizar el estado antes y después del pago.

### Antes del pago

![Evidencia 06A](./Evidencias/06-PasarelaPagoSimulacion-Antes.png)

### Después del pago

![Evidencia 06B](./Evidencias/06-PasarelaPagoSimulacion-Despues.png)

---

## Evidencia 07: Instalación de Vitest

Se instalaron las librerías necesarias para realizar pruebas unitarias.

![Evidencia 07](./Evidencias/07-InstalacionTests.png)

---

## Evidencia 08: Ejecución de las Pruebas

Se ejecutaron correctamente las pruebas utilizando Vitest.

![Evidencia 08](./Evidencias/08-EjecucionTests.png)

---
# Evidencias de Naomi Sanchez

## Evidencia 01 - Clonar repositorio

Descripción:

Se clonó correctamente el repositorio proporcionado por el docente y posteriormente se configuró el repositorio remoto para trabajar sobre el repositorio del equipo.

### Capturas

![alt text](image.png)
![alt text](image-1.png)

---

## Evidencia 02 - Levantar proyecto

Descripción:

Se instalaron todas las dependencias mediante npm y se ejecutó correctamente el proyecto utilizando Vite.

### Capturas

![alt text](image-2.png)
![alt text](image-3.png)

---

## Evidencia 03 - Consumo de la API TMDB

Descripción:

Se reemplazó la información estática por datos obtenidos desde la API de TMDB utilizando Axios y variables de entorno.

### Capturas

![alt text](image-5.png)
![alt text](image-4.png)

- Configuración del servicio HTTP
- Movies Service
- Página mostrando películas obtenidas desde TMDB

---

## Evidencia 04 - Estado global con Zustand

Descripción:

Se implementó Zustand para centralizar el estado global de las películas, búsqueda, filtros por género y estado de carga.

### Capturas

![alt text](image-6.png)
![alt text](image-7.png)

- movies-store.ts
- Aplicación funcionando

---

## Evidencia 05 - Desarrollo de Pages

Descripción:

Se desarrollaron las páginas necesarias para el funcionamiento de la aplicación.

### Pages implementadas

- Home
- Movies
- Movie Detail

### Capturas

![alt text](image-8.png)
![alt text](image-9.png)
---

## Evidencia 06 - Pasarela de Pago (Simulación)

Descripción:

Se implementó una simulación de compra de entradas mediante un formulario de pago que confirma la compra de forma visual.

### Capturas

![alt text](image-10.png)
![alt text](image-11.png)
![alt text](image-13.png)

- Formulario
- Confirmación del pago

---

## Evidencia 07 - Tests

Descripción:

Se configuró Vitest y Testing Library para validar el funcionamiento de la simulación de pago.

### Capturas

![alt text](image-12.png)

- checkout-page.test.tsx
- Resultado exitoso de los tests

---

# Ejecución del proyecto

## Instalar dependencias

```bash
npm install