const mh = require('./index.js')

const MHandler = new mh('en', {
  status: false
})

console.log(MHandler.EmptyFields('nombre', 'apellidos'))

// let test = {
//   args:
// }
