const mh = require('./index.js')

const MHandler = new mh('es', {
  status: false,
  code: false
})

//console.log(MHandler.getDictionary())
//console.log(MHandler.getErrorMessage('InternalServerError'))
//console.log(MHandler.EmptyFields('InternalServerError'))
console.log(MHandler.Custom('xd', null, '1234512312312'))
//console.log(MHandler('nombre', 'apellidos'))

// let test = {
//   args:
// }
