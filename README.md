# Backen API - Dispersión de Fondos

Aquí encuentra el backend de la kata propuesta para Desarrollador Junior de la dispersión de fondos a clientes. Se trata de una API REST desarrollada con Node.js, Express y MySQL, encargada de proveer datos estructurados al frontend.

# Variables de Entorno 
DB_HOST, PORT, DB_USER=root, DB_PASSWORD, DB_NAME.

# Endpoints Definidos 
GET api/dispersion_funds -> Obtiene todas las transacciones
GET api/dispersion_funds/dispersedClient -> Devuelve la lista del total de transacciones por cliente 
GET api/dispersion_funds/maximunAmount -> Devuelve el cliente con el mayor monto dispersado. 
GET api/dispersion_funds/dayCustomer -> Retorna suma transacciones por fecha. 
GET api/dispersion_funds/averageTransactionCustomer -> Retorna el promedio transaccional por cliente 
GET api/dispersion_funds/top -> Obtiene el top (3) de clientes de acuerdo a la dispersion de fondos. 

# Buenas Practicas 
Arquitectura MVC separando funcionalidades y teniendo en cuenta la responsabilidad unica. 
Uso de dotenv para proteger credenciales 
async/await para operaciones asincrónicas
Tests unitarios con Jest y Supertest

# Pruebas 
Se realizan casos de prueba para comprobar el funcionamiento de los endpoints [npm test]. 
Se realizan pruebas también con la url desde postman. 

# Despliegue 
Repositorio desplegado en railway haciendo uso de variables de entorno para una configuración más segura. 
Sincronizacion con repositorio con la rama 'main'. 

# Base de Datos 
Se realiza en MySQL desplegada en railway. 

## Estructura: 
Customers --> Información de los clientes, se realiza con el objetivo de mantener la escalabilidad y evitar errores ortográficos en la base con respecto a un mismo cliente. 
Transactions --> Información de las transacciones y monstos dispersados. Existe una relación de uno a muchos ya que una transaccion responde a un único cliente pero un cliente puede tener una o varias. 

