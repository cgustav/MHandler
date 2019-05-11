/*

ERROR MESSAGES INDEX

  //TODO:
  //*Include stackTrace option
  //*Include time option ext
  //*Include hash option


  //Requests E000 - E010

  //Validation E010 - E030
    EmptyParameters: 'E011',
    RequiredEmptyField: 'E012',
    ValidationError: 'E013',
    WrongDataType: 'E014',
    DuplicatedField: 'E015',
    DuplicatedValue: 'E016',
    ExceedSize: 'E017',

  //Resources E030 - E050

    DuplicatedResource: 'E021'
    ResourceNotFound: 'E022'
    -
    DuplicatedDocument: 'E023'
    DocumentNotFound: 'E024'
    -
    DuplicatedObject: 'E025'
    ObjectNotFound: 'E026'

  //Authentication & Authorization E050 - E070
    UserAlreadyExist 'E50'
    BadCredentials 'E51'
    DisabledAccount 'E52'
    UserNotFound 'E53'

    TokenExpired 'E54'
    InvalidToken 'E55'
    Unauthorized 'E56'
    Forbidden 'E57'
    Banned 'E58'

  //Server E080 - E100
    InternalServerError: 'E080'
    UnexpectedError: 'E081'
    UnavailableService: 'E082'
    UnderMaintenance: 'E083'
    FatalError: 'E084'
*/


module.exports = {
  EmptyParameters: {
    code: 'E001',
    name: 'EmptyParameters',
    message: {
      en: 'Was expected to receive parameters but none has been found.',
      es: 'Se esperaba recibir parámetros pero ninguno ha sido encontrado.'
    }
  },

  RequiredEmptyField: {
    code: 'E002',
    name: 'RequiredEmptyField',
    message: {
      en: 'The following parameters should be completed: $[]',
      es: 'Deberían ser completados los siguientes parámetros: $[]'
    }
  },

  ValidationError: {
    code: 'E003',
    name: 'ValidationError',
    message: {
      en: 'The following parameters ($[]) does not meet the validation conditions.',
      es: 'Los siguientes parámetros ($[]) no cumplen con las condiciones de validación.'
    }
  },

  WrongDataType: {
    code: 'E004',
    name: 'WrongDataType',
    message: {
      en: 'Data type is not valid for ($[]) parameters.',
      es: 'El tipo de dato para los parámetros ($[]) no es válido.'
    }
  },

  DuplicatedField: {
    code: 'E005',
    name: 'DuplicatedField',
    message: {
      en: 'Cannot process operation if fields $[] are duplicated.',
      es: 'No se puede procesar la operación si los campos $[] están duplicados.'
    }
  },

  DuplicatedValue: {
    code: 'E006',
    name: 'DuplicatedValue',
    message: {
      en: `The '$[]' value(s) already exists, please try again with a different value.`,
      es: `El (los) valor(es) '$[]' ya existe, por favor intente otra vez con un valor diferente.`
    }
  },

  InternalServerError: {
    code: 'E007',
    name: 'InternalServerError',
    message: {
      en: 'Internal server error.',
      es: 'Error de servidor.'
    }
  },

  UnexpectedError: {
    code: 'E008',
    name: 'UnexpectedError',
    message: {
      en: 'Unexpected error.',
      es: 'Error Inesperado.'
    }
  },

  UnavailableService: {
    code: 'E009',
    name: 'UnavailableService',
    message: {
      es: 'The method to the specified resource is currently unavailable.',
      en: 'Esta funcionalidad no está disponible por el momento.'
    }
  }
}
