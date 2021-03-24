# :whale: Docker 101

## Hello World!
Hello World desde docker:
```
$ docker run hello-world
```
## Manejo de Docker

 - ### Listar los contenedores que se estan activos:

    ```
    $ docker ps
    ```

 - ### Listar los contenedores que se estan inactivos:

    ```
    $ docker ps -a
    ```

 - ### Listar las imagenes creadas o descargadas:

    ```
    $ docker images
    ```

## Descargando una imagen
 - Descargaremos una imagen de ubuntu desde [DockerHub](https://hub.docker.com/_/ubuntu).
    ```
    $ docker pull ubuntu
    ```
## Creando un contenedor
- Crearemos un contenedor a partir de una imagen basada en ubuntu.
    ```
    $ docker run -it ubuntu /bin/bash
    ```
    
## Administrar un contenedor

 - ### Iniciar un contenedor ya creado:

    ```
    $ docker start <id-contenedor>
    ```

 - ### Entrar al contenedor:

    ```
    $ docker exec -it <id-contenedor> /bin/bash
    ```

 - ### Detener un contenedor:

    ```
    $ docker stop <id-contenedor>
    ```
 - ### Eliminar un contenedor

    ```
    $ docker rm <id-contenedor>
    ```


## Flags ó Banderas

Son atributos que complementan a los comandos para ejecutar ciertas acciones.

| Flag | Descripción |
| ------ | ------ |
| -it | Entrar en modo interactvio |
| -d | Ejecución como demonio |
| /bin/bash | Se ejecuta el comando bash en el contenedor |
| -p | Define un puerto |
