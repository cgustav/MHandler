# Error Docs

Documentación de errores filtrados por categoría.

## Validation errors

* * *

### EmptyParameters

```javascript
{
    code: 'E010',
    name: 'EmptyParameters',
    message: 'Se esperaba recibir parámetros pero ninguno ha sido encontrado.'
}
```

### EmptyFields

```javascript
{
    code: 'E011',
    name: 'RequiredEmptyField',
    message:'Deberían ser completados los siguientes parámetros: (...)',
}
```

### ValidationError

```javascript
{
    code: 'E012',
    name: 'ValidationError',
    message: 'Los siguientes parámetros (...) no cumplen con las condiciones de validación.',
}
```

### WrongDataType

```javascript
{
    code: 'E013',
    name: 'WrongDataType',
    message: 'El tipo de dato para los parámetros (...) no es válido',
}
```

### DuplicatedField

```javascript
{
    code: 'E014',
    name: 'DuplicatedField',
    message: 'No se puede procesar la operación si los campos (...) están duplicados.',
}
```

### DuplicatedValue

```javascript
{
    code: 'E015',
    name: 'DuplicatedValue',
    message: 'El (los) valor(es) (...) ya existe, por favor intente otra vez con un valor diferente.',
}
```


## Resource errors

* * *

### DuplicatedResource

```javascript
{
    code: 'E030',
    name: 'DuplicatedResource',
    message: 'Operation was rejected because it attempts to duplicate a system resource.',
}
```

### ResourceNotFound

```javascript
{
    code: 'E031',
    name: 'ResourceNotFound',
    message: 'The specified resource does not exist.',
}
```


## Authentication & Authorization Errors

* * *

### UserAlreadyExist

```javascript
{
    code: 'E050',
    name: 'UserAlreadyExist',
    message: 'El username especificado ya existe.',
}
```


### BadCredentials

```javascript
{
    code: 'E051',
    name: 'BadCredentials',
    message: 'Error de autenticación, las credenciales especificadas son incorrectas.',
}
```


### DisabledAccount

```javascript
{
    code: 'E052',
    name: 'DisabledAccount',
    message: 'Error de autenticación, esta cuenta está actualmente deshabilitada.',
}
```


### TokenRequired

```javascript
{
    code: 'E053',
    name: 'TokenRequired',
    message: 'No se puede realizar la operación solicitada porque se necesita un token de autorización.',
}
```


### TokenExpired

```javascript
{
    code: 'E054',
    name: 'TokenExpired',
    message: 'Error de autorización, el token especificado está expirado.',
}
```


### InvalidToken

```javascript
{
    code: 'E055',
    name: 'InvalidToken',
    message: 'Para realizar esta operación debe enviar un token de acceso válido.',
}
```


### SessionExpired

```javascript
{
    code: 'E056',
    name: 'SessionExpired',
    message: 'La sesión actual ha caducado. Intente autenticando sus credenciales nuevamente.',
}
```


### SessionError

```javascript
{
    code: 'E057',
    name: 'SessionExpired',
    message: 'Ha ocurrido un error de sesión. Intente autenticando sus credenciales nuevamente.',
}
```


### Unauthorized

```javascript
{
    code: 'E058',
    name: 'Unauthorized',
    message: 'Sus privilegios de sistema no le permiten realizar la operación solicitada.',
}
```


### Forbidden

```javascript
{
    code: 'E059',
    name: 'Forbidden',
    message: 'El acceso al recurso solicitado está prohibido.',
}
```


## Server Errors

* * *

### InternalServerError

```javascript
{
    code: 'E080',
    name: 'InternalServerError',
    message: 'Error de servidor.',
}
```


### UnexpectedError

```javascript
{
    code: 'E081',
    name: 'UnexpectedError',
    message: 'Ha ocurrido un error inesperado.',
}
```


### UnavailableService

```javascript
{
    code: 'E082',
    name: 'UnavailableService',
    message: 'Esta funcionalidad no está disponible por el momento.',
}
```


### UnderMaintenance

```javascript
{
    code: 'E083',
    name: 'UnavailableService',
    message: 'No se puede procesar solicitudes mientras los servicios esten en mantenimiento.',
}
```


### FatalError

```javascript
{
    code: 'E084',
    name: 'FatalError',
    message: 'Ha ocurrido un error fatal mientras se procesaba su solicitud.',
}
```
