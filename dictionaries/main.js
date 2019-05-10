/*

ERROR MESSAGES INDEX

  EmptyParameters: 'E001',
  RequiredEmptyField: 'E002',
  ValidationError: 'E003',
  WrongDataType: 'E004',
  DuplicatedField: 'E005',
  DuplicatedValue: 'E006',
  InternalServerError: 'E007',
  UnexpectedError: 'E008',
  UnavailableService: 'E009'

  //Proposal
  DuplicatedObject
  ObjectNotFound
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
