/*
Resources E030 - E049
---------------------
      DuplicatedResource: 'E030'
      ResourceNotFound: 'E031'

*/

module.exports = {

  DuplicatedResource:{
    code: 'E030',
    name: 'DuplicatedResource',
    message: {
      en: 'Operation was rejected because it attempts to duplicate a system resource.',
      es: 'Se ha rechazado la petición debido a que intenta duplicar un recurso del sistema.'
    }
  },

  ResourceNotFound:{
    code: 'E031',
    name: 'ResourceNotFound',
    message: {
      en: 'The specified resource does not exist.',
      es: 'El recurso especificado no existe.'
    }
  }

}
