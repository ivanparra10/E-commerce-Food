Cómo configurar y ejecutar este proyecto
Delicias Latinas .
Instalar Node.js (Ignorar si ya está instalado)
1. Visita el sitio oficial de Node.js en https://nodejs.org/en/download/
2. Descarga el instalador de Node.js
3. Ejecuta el instalador.
4. Sigue las indicaciones del instalador.
—Primero ejecuta el Backend, luego el Frontend y el Admin—
❖ Pasos para configurar el Backend del proyecto
1. Abre la carpeta del proyecto en VS Code.
2. Abre el terminal integrado:
o Haz clic derecho en la barra lateral > Selecciona “Abrir en el terminal integrado”
3. Escribe “npm install” y presiona Enter; espera a que la instalación se complete (requiere conexión a Internet).
4. Configura MongoDB
a. Abre a. Después de eso, regístrate en el sitio web.
a. a. Haz clic en la opción "Nuevo proyecto".
b. Después de crear el proyecto, ve a la sección de "Base de datos" y crea una base de datos.
Selecciona M0 y tu región, y luego crea la base de datos.
b. Configura el nombre de usuario y la contraseña, y crea el usuario.
Nota: No uses el símbolo ‘@’ en la contraseña.
c. Ahora haz clic en "Finalizar y cerrar".
c. Añade la IP 0.0.0.0 a la lista blanca y haz clic en "Añadir entrada".
d. Ahora haz clic en "Conectar".
e. Ahora selecciona la opción "Compass".
f. Y copia la cadena de conexión.
g. Y pégala en db.js, reemplaza "password" con la contraseña que configuraste previamente en el paso 4.F y guarda los cambios.
2. Ahora debemos configurar Stripe
● Abre el archivo .env en la carpeta del backend y pega tu clave secreta de Stripe en la variable STRIPE_SECRET_KEY.
ara ejecutar el Backend, usa el comando npm run server en el terminal integrado.
Pasos para ejecutar el Frontend y el Panel de Administración del Proyecto
1. Abre la carpeta del proyecto en VS Code.
2. Abre el terminal integrado en el directorio del proyecto. ○ Haz clic derecho en la barra lateral > Selecciona "Abrir en el terminal integrado".
1. Escribe “npm install” y presiona Enter. Espera a que la instalación se complete (requiere conexión a Internet).
2. Después de la instalación, verás la carpeta ‘node_modules’ en la barra lateral.
3. Luego, escribe “npm run dev” en el terminal.
2. Ahora, tu proyecto se iniciará en tu navegador web predeterminado.
