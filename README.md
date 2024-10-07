**WonderStore**
================

This is a university project for the Web Design course at UFG.

**Sobre el proyecto**
--------------------

WonderStore es una tienda en linea desarrollada por estudiantes de la universidad Francisco Gavidia durante el segundo ciclo del 2024 bajo la asignatura de Diseño Web.

La aplicación usa Vanilla JS, pero se decidió por montar un servidor para visualizar las URL de forma más moderna y entregar los archivos mediante Node

**Getting Started**
-------------------

### Prerequisites

* Node.js (minimum version: 20.14.0) - [Download and install from here](https://nodejs.org/en)

### Clone and Run

1. Clone the repository.
2. **Do not delete the `package.json` file.**
3. Run the following commands:
This will install the dependencies and start the server.
**Copy and Paste:**
Instalará las dependencias
```
npm i
```
Correrá la aplicación
```
npm run dev
``` 
### Access the App

Mirar la consola de la aplicación ahí verán un enlace como el siguiente:
Visit `http://127.0.0.1:3000/` to access the WonderStore app.

### Close the App

Para cerrar la aplicación en la consola donde se inicio se debe presionar ```ctr+c``` dos veces


**Note**: 
La ultima versión habilita livereload por ende los cambios deberían de verse tras 1s después de haber guardado cambios; en caso de no verse se debe de recargar manualmente el navegador "Ctr + F5"
### Variables de CSS

**Listado de las variables de CSS para poder ser usadas en cualquier archivos CSS dentro de la app**

--bg-color: #F2F5F7;\
--primary-color: #0E0F10;\
--secondary-color: #FADE3C;\
--bg-skeleton-color: #D9D9D9;\
--primary-border-color: #878787;\
--secondary-borer-color: #000000;\
--text-color: #000000;\
--text-color-revert: #F2F5F7;\
--text-accent-color: #868686;\

### Importante

Cuando se este desarrollando una vista por favor incluir el script de js `general` ya que ese carga los estilos y componentes principales además añadir el `type="module"`.x