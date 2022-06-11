# API Morada App

## Modules
- Usuarios
- Propiedades

## API Reference

### Usuarios

Method | Endpoint | Data        | Auth Required
------ | -------- | ----------- | -------------
`POST` | /user/login   | body: { email, password } | No


### Propiedades

Method | Endpoint | Data        | Auth Required | Comments
------ | -------- | ----------- | ------------- | -----------------
`GET` | /properties | query: type, businessType | No  | Obtener todas las propiedas opcionde filtro
`GET` | /properties/:id | url: id               | No  | Obtener una sola propiedad / detalle
`POST` | /properties | body: { title, ... }     | Si  | Agregar una propiedad
`DELETE` | /properties/:id | url: id            | Si  | Borrar propiedad
`PUT` | /property/:id | body: { title, ... }  | Si  | Actualizar una propiedad
`POST` | /property/:id | body: {comentario}   | Si  |Notificar una propiedad