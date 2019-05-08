const mh = require('./index.js')

const MHandler = new mh('es', {
  status: false,
  code: false
})

//console.log(MHandler.getDictionary())
//console.log(MHandler.getErrorMessage('InternalServerError'))
//console.log(MHandler.EmptyFields('InternalServerError'))
console.log(MHandler.EmptyParameters('xd', 'null', 'lol'))
//console.log(MHandler('nombre', 'apellidos'))

// let test = {
//   args:
// }
