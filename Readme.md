# Prueba técnica con Node.
## Inicio del proyecto
### Para iniciar el proyecto a nivel local siga los siguientes pasos:
* Ejecutar el comando de instalación :
```
npm install

```

* Crear un archivo .env con las variables de entorno que te proporciono
a continuación para ésta prueba( Por seguridad voy a quitar mis variables de entorno ):

```
MONGODBURL = tu base de datos
AUTHEMAIL = tu correo autenticado 
AUTHPASS = tu contraseña
```

* para desplegar el proyecto utilice el comando por consola:
```
npm start
```
* si quiere ver el resultado en la base de datos de mongodb, puede utilizar mongo
compass con el siguiente código de acceso:
```
mongodb+srv://gabriel:admin@cluster0.amcrry7.mongodb.net/
```