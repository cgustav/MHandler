# Miller handler v0.3.1

REST API Error Messages Generator - Module to automate and standardize error messages on rest API based services.

### Implementation

You should specify the default language displayed en error messages directly on the class instantiation.

```javascript
//Import
const mhandler = require('mhandler')

//Instatiation
const Mhandler =  new mhandler()

//Changing default language to Spanish
const Mhandler =  new mhandler('es')

```


**Note:** Currently the only languages ​​available for error messages translation are English ('en') and Spanish ('es').


### Basic usage
```javascript

try{
//...
}catch (e){
 //...
 return res.send(500, Mhandler.InternalError())
}

/* will return
  {
   status: 'error',
   code: 'E08',
   name: 'UnavailableService',
   message: 'The method to the specified resource is currently unavailable.'
  }
*/

```

For example, if you want to display which fields are empty inside a certain incoming request.

```javascript

try{
  //...
}catch (e){
  //...
  return res.send(500, Mhandler.EmptyFields('firstName', 'lastName'))
}

/* will return
  {
   status: 'error',
   code: 'E01',
   name: 'RequiredEmptyField',
   message: 'Should complete the following field(s): firstName, lastName.'
  }
*/

```


### Customization Options

You can modify, enable and disable every key of the object message, just like the following examples:

#### Case 1: Omit object message properties
```javascript
const mhandler = require('mhandler')

//On class instantiation
const Mhandler =  new mhandler('en',{code: false})

/* will return
  {
   status: 'error',
   name: 'InternalError',
   message: 'Something went wrong.'
  }
*/

//Or setting the object properties wherever you want
const Mhandler =  new mhandler('en')

Mhandler.setMod({name:false, message: false})

/* will return
  {
   status: 'error',
   code: 'E006'
  }
*/

```

#### Case 2: Modify object message properties

**Note:** the object message modifiers only works fine alongside the default object message template:

```javascript
const Mhandler =  new mhandler('en',{
    code: 'errorCode',
    message: 'detail'
  })

/* will return
  {
   status: 'error',
   errorCode: 'E005',
   name: 'InternalError',
   detail: 'Something went wrong.'
  }
*/

//Or
const Mhandler = new mhandler()

Mhandler.setMod({name:false, status: 'type'})

/* will return
  {
   type: 'error',
   code: 'E056',
   message: 'Some error'
  }
*/

```


### Case 3: Custom Errors

```javascript
const Mhandler =  new mhandler('en')

MHandler.Custom('a085512', 'RandomError', 'Dang!')

/* will return
  {
   status: 'error',
   code: 'a085512',
   name: 'RandomError',
   message: 'Dang'
  }
*/

```


### Available Errors


```javascript

//Supports arguments
EmptyFields(...)
ValidationError(...)
WrongDataType(...)
DuplicatedField(...)
DuplicatedValue(...)

//default messages
EmptyParameters()
InternalError()
UnexpectedError()
UnavailableService()
```

### Other

[Official npm package](https://www.npmjs.com/package/miller-handler)
