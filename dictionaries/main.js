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
*/


module.exports = {
  EmptyParameters: {
    code: 'E001',
    name: 'EmptyParameters',
    message: {
      en: 'Expected to receive parameters but none was found.',
      es: 'Se esperaba recibir parámetros pero ninguno ha sido encontrado.'
    }
  },

  RequiredEmptyField: {
    code: 'E002',
    name: 'RequiredEmptyField',
    message: {
      en: 'Should complete the following field(s): $[]',
      es: 'Debe completar el(los) campo(s): $[]'
    }
  },

  ValidationError: {
    code: 'E003',
    name: 'ValidationError',
    message: {
      en: 'field(s) $[] does not meet the validation conditions.',
      es: 'Los campos $[] no cumple(n) con las condiciones de validación.'
    }
  },

  WrongDataType: {
    code: 'E004',
    name: 'WrongDataType',
    message: {
      en: 'Data type not valid for $[] field(s).',
      es: 'Formato(s) para campo(s) $[] no válido(s).'
    }
  },

  DuplicatedField: {
    code: 'E005',
    name: 'DuplicatedField',
    message: {
      en: 'Cannot process operation with duplicated $[] field(s).',
      es: 'No se puede procesar la operación campo(s) $[] duplicado(s).'
    }
  },

  DuplicatedValue: {
    code: 'E006',
    name: 'DuplicatedValue',
    message: {
      en: 'The $[] value(s) already exists, please try again with a different value.',
      es: 'El(los) valor(es) $[] ya existe(n), porfavor intente nuevamente con un valor diferente.'
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
