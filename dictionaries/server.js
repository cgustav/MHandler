/*
    Server E080 - E100

          InternalServerError: 'E080'
          UnexpectedError: 'E081'
          UnavailableService: 'E082'
          UnderMaintenance: 'E083'
          FatalError: 'E084'
*/

module.exports = {

  InternalServerError: {
    code: 'E080',
    name: 'InternalServerError',
    message: {
      en: 'Internal server error.',
      es: 'Error de servidor.'
    }
  },

  UnexpectedError: {
    code: 'E081',
    name: 'UnexpectedError',
    message: {
      en: 'Unexpected error.',
      es: 'Error Inesperado.'
    }
  },

  UnavailableService: {
    code: 'E082',
    name: 'UnavailableService',
    message: {
      en: 'The method to the specified resource is currently unavailable.',
      es: 'Esta funcionalidad no está disponible por el momento.'
    }
  },

  UnderMaintenance: {
    code: 'E083',
    name: 'UnderMaintenance',
    message: {
      en: 'Cannot process requests while services are under maintenance.',
      es: 'No se puede procesar solicitudes mientras los servicios esten en mantenimiento.'
    }
  },

  FatalError: {
    code: 'E084',
    name: 'FatalError',
    message: {
      en: 'A fatal error occurred while processing your request.',
      es: 'Ha ocurrido un error fatal mientras se procesaba su solicitud.'
    }
  },

}
