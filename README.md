# Miller handler v0.3.1

REST API Error Messages Generator - Module to automate and standardize error messages on rest API based services.

### Implementation

You need to specify default language for error messages directly in the class instantiation like this:

```javascript
//Import
const mhandler = require('mhandler')

//Instatiation
const Mhandler =  new mhandler() 

//Or change default langage to Spanish
const Mhandler =  new mhandler('es')

```

Currently the available langages are English ('en') and Spanish ('es')


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

Or if you want to expose related empty fields in some controller.

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

Enable or disable default message structure vía object literals, like the following:

#### Case 1: Omit keys
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

//Or setting props wherever you want
const Mhandler =  new mhandler('en')

Mhandler.setMod({name:false, message: false})

/* will return
  {
   status: 'error',
   code: 'E056'
  }
*/

```

#### Case 2: Modifying keys

Just remember, the below modifiers examples only will works fine with default object template:

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