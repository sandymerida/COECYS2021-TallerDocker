# :whale: Docker: Volumenes y Puertos

## Crear un contenedor Detached
Un contenedor dectached o separado es aquel que se ejecutara en segundo plano. Este tipo de conetendor es utilizado cuando no necesitamos interactuar con el contenedor sin embargo queremos que el servicio este activo.
Para levantar un contedor en segundo plano utilizaremos la bandera -d:
```
$ docker run -d <nombre-imagen>
```
## Crear contenedor con Nginx

 -  Descargar la imagen:

    ```
    $ docker pull nginx:<tag>
    ```

 -  Creamos el contenedor:

    ```
    $ docker run --name=miserver -d nginx 
    ```

 -  Verificar si esta ejecutandose el contenedor:

    ```
    $ docker ps
    ```

 -  Ingresar al contenedor:

    ```
    $ docker exec -it miserver /bin/bash
    ```

## Obtener informacion de un contenedor
 - Para obtener informacion de nuestro contenedor en curso ejecutamos el siguiente comando:
    ```
    $ docker inspect <id/nombre-contenedor>
    ```
 - Para aplicar un filtro de busqueda:
    ```
    $ docker inspect <id/nombre-contenedor> | grep <filtro>
    ```
## Configurar puerto y volumenes
- Hay ocaciones que necesitamos el uso de alamacenamiento fuera de nuestro contenedor ya sea para acceder a determinada informacion ó para poder alamacenar fuera del contenedor, de tal manera que si el contenedor dejara de funcionar nuestra informacion no seria perjudicada.
    
    
    ```
    $ docker run -v <path-host>:<path-container> -d nginx
    ```
- Para poder exponer un puerto del contenedor hacia un puerto de la maquina host lo hacemos de la siguiente manera.
    
    
    ```
    $ docker run -p <port-host>:<port-container> -d nginx
    ```
    
