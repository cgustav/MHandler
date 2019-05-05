# MHandler
REST API Error Messages Generator - Module to automate and standardize error messages on rest API based services.

### Implementation

You need to specify default language for error messages directly in the class instantiation like this:

```javascript
//Import
cons mh = require('mhandler')

//Instatiation
Mhandler =  new mh('en') 

```

Currently the available langages are English ('en') and Spanish ('es')


### Basic usage
```javascript

try{
//...
}catch (e){
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


### Options

Enable or disable default message structure vía object literals, like the following:

```javascript
cons mh = require('mhandler')

//On class instantiation
Mhandler =  new mh('en',{code: false})

/* will return
  {
   status: 'error',
   name: 'InternalError',
   message: 'Something went wrong.'
  }
*/

//Or setting props wherever you want
Mhandler =  new mh('en') 

Mhandler.setMod({name:false, message: false})

/* will return
  {
   status: 'error',
   code: 'E056'
  }
*/


```
