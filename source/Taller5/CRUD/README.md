# CRUD con STACK MEAN

CRUD es el acŕonimo en inglés de Create - Read - Update - Delete
Esta es una aplicación CRUD basada en javascript por lo que se utiliza el stack MEAN para tener desarrollo con tecnologías basadas en JavaScript.

# Arquitectura

![arquitectura](/images/arquitectura.svg)

## Frontend

[UI](https://es.wikipedia.org/wiki/Dise%C3%B1o_de_interfaz_de_usuario) desarrollada en el framework [Angular](https://angular.io/)

- Abrir el servidor en la pestaña de un navegador:
```
$ ng serve -o
```

- Crear de un componente: 
```
$ ng g c components/<name>
```

- Crear de un servicio: 
```
$ ng g s services/<name>
```

- Instalación de bootwatch: 
```
$ npm i bootswatch
```
Posicionarse en el archivo angular.json y agragar a los styles:
```
"bootswatch/dist/<theme_name>/bootstrap.min.css"
```

Generar codigo para ambiente de producción:
```
$ ng build --prod
```

## Backend

### Servidor

Se usa el entorno de ejecución Node.js, con la ayuda del modulo [Express](https://expressjs.com/es/) el cual nos permite generar el servidor de una manera más ágil.

Se posiciona en la carpeta **CRUD-MEAN/server**

Instala los node_modules:
```Shell
$ npm i
```

Para correr el servidor en modo desarrollo:
```Shell
$ npm run dev
```

### Endpoints

|Metodo|Ruta|Descripcion|
|-|-|-|
|GET|/api/students| Array con datos de los estudiantes registrados|
|POST| /api/students| Inserta datos de un estudiante|
|GET|/api/students/:id| Datos de solo un estudiante segun su id|
|PUT|/api/students/:id| Actualiza los datos de el estudiantes con ese id|
|DELETE| /api/students/:id| Elimina el registro del estudiante con id|
<br>

### Base de datos

Usará [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) que es una base de datos No-SQL.

# Docker

## Servidor
1. Construir imagen. Posicionese en **CRUD-MEAN/server**
```
$ docker build -t servidor .
```
Explcación:
    - servidor es el nombre de la imagen que se está construyendo 

2. Creación y ejecución del contendor. 
```
$ docker run -it -d -p 3000:3000 --name=servidor1 servidor
```
Explicación: 
    - servidor1 es el nombre que tendrá el contenedor
    - servidor es el nombre de la imagen que se había generado anteriormente 

3. Ingrese desde el navegador a: 
```
http://localhost:3000/api/students
````

## Frontend

1. Se crea y configura el archivo **ngnix.conf** para que la pagina esté disponible en http://localhost:80

2. Construir imagen. Posicionese en **CRUD-MEAN/frontend**
```
$ docker build -t frontend .
```
Explcación:
    - frontend es el nombre de la imagen que se está construyendo 

3. Creación y ejecución del contendor. 
```
$ docker run -it -d -p 80:80 --name=frontend1 frontend
```
Explicación: 
- frontend1 es el nombre que tendrá el contenedor
- frontend es el nombre de la imagen que se había generado anteriormente 