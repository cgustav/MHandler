module.exports = function (lang){
  return {
    EmptyParameters: (function() {
      if (lang === 'en')
        return `Expected to receive parameters but none was found.`
      if (lang === 'es')
        return `Se esperaba recibir parámetros pero ninguno ha sido encontrado.`
    })(),

    RequiredEmptyField: (function() {
      if (lang === 'en')
        return 'Should complete the following field(s): $[]'
      if (lang === 'es')
        return 'Debe completar el(los) campo(s): $[]'
    })(),

    ValidationError: (function() {
      if (lang === 'en')
        return `Data type not valid for $[] field(s).`
      if (lang === 'es')
        return `Los campos $[] no cumple(n) con las condiciones de validación.`
    })(),

    WrongDataType: (function() {
      if (lang === 'en')
        return `Data type not valid for $[] field(s).`
      if (lang === 'es')
        return `Formato(s) para campo(s) $[] no válido(s).`
    })(),



    DuplicatedField: (function() {
      if (lang === 'en')
        return `Cannot process operation with duplicated $[] field(s).`
      if (lang === 'es')
        return `No se puede procesar la operación campo(s) $[] duplicado(s).`
    })(),

    DuplicatedValue: (function() {
      if (lang === 'en')
        return `The $[] value(s) already exists, please try again with a different value.`
      if (lang === 'es')
        return `El(los) valor(es) $[] ya existe(n), porfavor intente nuevamente con un valor diferente.`
    })(),

    // DuplicatedIdentifier: (function() {
    //   if (lan === 'en')
    //     return `The specified $[] value is.`
    //   if (lan === 'es')
    //     return `No es posible realizar esta operación con un identif.`
    // })(),

    // DuplicatedObject: (function() {
    //   if (lan === 'en')
    //     return `Duplicated object.`
    //   if (lan === 'es')
    //     return `Formato(s) para campo(s) $[] no válido(s).`
    // })(),


    InternalServerError: (function() {
      if (lang === 'en')
        return `Internal server error.`
      if (lang === 'es')
        return `Error de servidor.`
    })(),
    UnexpectedError: (function() {
      if (lang === 'en')
        return `Unexpected error.`
      if (lang === 'es')
        return `Error Inesperado.`
    })(),
    UnavailableService: (function() {
      if (lang === 'en')
        return `The method to the specified resource is currently unavailable.`
      if (lang === 'es')
        return `Esta funcionalidad no está disponible por el momento.`
    })(),

  }
}
