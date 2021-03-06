# Miller handler v0.3.1

Generador de mensajes para API REST - Módulo para automatizar y estandarizar los mensajes de error en servicios basados en API REST.

### Implementación

Se debe especificar el lenguaje por defecto mostrado en los mensajes de error directmante en la instanciación de la clase.

```javascript
//Import
const mhandler = require('mhandler')

//Instanciación, con lenguaje en inglés por defecto
const Mhandler =  new mhandler()

//Instanciación con el español como idioma por defecto
const Mhandler =  new mhandler('es')
```

**Nota:** Actualmente, los únicos lenguajes soportados para la traducción de mensajes de error son el español ('es') y el inglés ('en').

### Uso básico

```javascript
try{
//...
}catch (e){
 //...
 return res.send(500, Mhandler.InternalError())
}

/* retornará
  {
   status: 'error',
   code: 'E08',
   name: 'UnavailableService',
   message: 'El método al recurso especificado está actualmente no disponible.'
  }
*/
```

Por ejemplo, si deseas mostrar cuales campos (parámetros) se encuentran vacíos en una determinada petición.

```javascript
try{
  //...
}catch (e){
  //...
  return res.send(500, Mhandler.EmptyFields('firstName', 'lastName'))
}

/* retornará
  {
   status: 'error',
   code: 'E01',
   name: 'RequiredEmptyField',
   message: 'Debería completar los siguientes campos: firstName, lastName.'
  }
*/
```

### Opciones de personalización

Puedes modificar, habilitar e inhabilitar cada una de las propiedades del objeto del mensaje, como en los siguientes ejemplos:

#### Caso 1: Activando el timestamp en los mensajes
```javascript
const mhandler = require('mhandler')

//On class instantiation
const Mhandler =  new mhandler('en',{timestamp: true})

/* will return
  {
   status: 'error',
   name: 'InternalError',
   message: 'Something went wrong.',
   timestamp: 2019-05-19T07:55:46.643Z
  }
*/
```

#### Caso 2: Omitir propiedades del mensaje

```javascript
const mhandler = require('mhandler')

//En la instaciación de clase:
const Mhandler =  new mhandler('en',{code: false})

/* retornará
  {
   status: 'error',
   name: 'InternalError',
   message: 'Algo salió mal.'
  }
*/

//O Configurando las propiedades en cualquier lugar del código.
const Mhandler =  new mhandler('en')

Mhandler.setMod({name:false, message: false})

/* retornará
  {
   status: 'error',
   code: 'E006'
  }
*/
```

#### Caso 3: Modificar propiedades del mensaje

**Nota:** Las modificaciones al objeto de mensaje funcionarán bien solamente junto a la plantilla de objeto de mensaje por defecto.

```javascript
const Mhandler =  new mhandler('en',{
    code: 'errorCode',
    message: 'detail'
  })

/* retornará
  {
   status: 'error',
   errorCode: 'E005',
   name: 'InternalError',
   detail: 'Algo ha salido mal.'
  }
*/

//Or
const Mhandler = new mhandler()

Mhandler.setMod({name:false, status: 'type'})

/* retornará
  {
   type: 'error',
   code: 'E056',
   message: 'Algún error'
  }
*/
```

### Caso 4: Errores personalizados

```javascript
const Mhandler =  new mhandler('en')

MHandler.Custom('a085512', 'RandomError', 'Dang!')

/* retornará
  {
   status: 'error',
   code: 'a085512',
   name: 'RandomError',
   message: 'Dang'
  }
*/
```

### Errores Disponibles

#### Errores de Validación

* [EmptyParameters()](dictionary_es.md#emptyparameters)
* [EmptyFields(...args)](dictionary_es.md#emptyfields)
* [ValidationError(...args)](dictionary_es.md#validationerror)
* [WrongDataType(...args)](dictionary_es.md#wrongdatatype)
* [DuplicatedField(...args)](dictionary_es.md#duplicatedfield)
* [DuplicatedValue(...args)](dictionary_es.md#duplicatedvalue)

#### Errores de Recurso

* [DuplicatedResource()](dictionary_es.md#duplicatedresource)
* [ResourceNotFound()](dictionary_es.md#resourcenotfound)

#### Errores de Autenticación y Autorización

* [UserAlreadyExist()](dictionary_es.md#useralreadyexist)
* [BadCredentials()](dictionary_es.md#badcredentials)
* [DisabledAccount()](dictionary_es.md#disabledaccount)
* [TokenRequired()](dictionary_es.md#tokenrequired)
* [TokenExpired()](dictionary_es.md#tokenexpired)
* [InvalidToken()](dictionary_es.md#invalidtoken)
* [SessionExpired()](dictionary_es.md#sessionexpired)
* [SessionError()](dictionary_es.md#sessionerror)
* [Unauthorized()](dictionary_es.md#unauthorized)
* [Forbidden()](dictionary_es.md#forbidden)

#### Errores de Servidor

* [InternalError()](dictionary_es.md#internalerror)
* [UnexpectedError()](dictionary_es.md#unexpectederror)
* [UnavailableService()](dictionary_es.md#unavailableservice)
* [UnderMaintenance()](dictionary_es.md#undermaintenance)
* [FatalError()](dictionary_es.md#fatalerror)

### Otro

[Repositorio oficial de npm](https://www.npmjs.com/package/miller-handler)
