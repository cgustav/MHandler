
/*
    Validation E010 - E030

          EmptyParameters: 'E011',
          RequiredEmptyField: 'E012',
          ValidationError: 'E013',
          WrongDataType: 'E014',
          DuplicatedField: 'E015',
          DuplicatedValue: 'E016',
          ExceedSize: 'E017',
*/

module.exports = {
  EmptyParameters: {
    code: 'E011',
    name: 'EmptyParameters',
    message: {
      en: 'Was expected to receive parameters but none has been found.',
      es: 'Se esperaba recibir parámetros pero ninguno ha sido encontrado.'
    }
  },

  RequiredEmptyField: {
    code: 'E012',
    name: 'RequiredEmptyField',
    message: {
      en: 'The following parameters should be completed: $[]',
      es: 'Deberían ser completados los siguientes parámetros: $[]'
    }
  },

  ValidationError: {
    code: 'E013',
    name: 'ValidationError',
    message: {
      en: 'The following parameters ($[]) does not meet the validation conditions.',
      es: 'Los siguientes parámetros ($[]) no cumplen con las condiciones de validación.'
    }
  },

  WrongDataType: {
    code: 'E014',
    name: 'WrongDataType',
    message: {
      en: 'Data type is not valid for ($[]) parameters.',
      es: 'El tipo de dato para los parámetros ($[]) no es válido.'
    }
  },

  DuplicatedField: {
    code: 'E015',
    name: 'DuplicatedField',
    message: {
      en: 'Cannot process operation if fields $[] are duplicated.',
      es: 'No se puede procesar la operación si los campos $[] están duplicados.'
    }
  },

  DuplicatedValue: {
    code: 'E016',+
    name: 'DuplicatedValue',
    message: {
      en: `The '$[]' value(s) already exists, please try again with a different value.`,
      es: `El (los) valor(es) '$[]' ya existe, por favor intente otra vez con un valor diferente.`
    }
  },
}
