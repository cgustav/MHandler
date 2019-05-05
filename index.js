class MHandler {

  constructor(lang, mods) {
    this._lang = lang.toLowerCase()
    this._mods = mods
    this._template = {
      status: 'error',
      code: '',
      name: '',
      message: ''
    }
  }

  /*=============================================
  =               GETTER & SETTERS              =
  =============================================*/

  getLanguage() {
    return this._lang
  }

  getMods() {
    return this._mods
  }

  getTemplate() {
    return this._template
  }

  setLanguage(lang) {
    this._lang = lang
  }

  setMods(mods) {
    this._mods = mods
  }

  setTemplate(template) {
    this._template = template
  }

  /*=============================================
  =                 DICTIONARIES                =
  =============================================*/
  getMessageDictionary() {
    const lan = this.getLanguage()

    return {
      RequiredEmptyField: (function() {
        if (lan === 'en')
          return 'Should complete the following field(s): $[]'
        if (lan === 'es')
          return 'Se debe enviar el(los) campo(s): $[]'
      })(),
      ValidationError: (function() {
        if (lan === 'en')
          return `Data type not valid for $[] field(s).`
        if (lan === 'es')
          return `Los campos $[] no cumple(n) con las condiciones de validación.`
      })(),
      WrongDataType: (function() {
        if (lan === 'en')
          return `Data type not valid for $[] field(s).`
        if (lan === 'es')
          return `Formato(s) para campo(s) $[] no válido(s).`
      })(),
      // DuplicatedIdentifier: function() {},
      // DuplicatedObject: function() {
      //
      // },
      //Server Err
      InternalServerError: (function() {
        if (lan === 'en')
          return `Internal server error.`
        if (lan === 'es')
          return `Error de servidor.`
      })(),
      UnexpectedError: (function() {
        if (lan === 'en')
          return `Unexpected error.`
        if (lan === 'es')
          return `Error Inesperado.`
      })(),
      UnavailableService: (function() {
        if (lan === 'en')
          return `The method to the specified resource is currently unavailable.`
        if (lan === 'es')
          return `Esta funcionalidad no está disponible por el momento.`
      })(),
    }
  }

  getErrorCodeDictionary() {
    return {
      RequiredEmptyField: 'E01',
      ValidationError: 'E02',
      WrongDataType: 'E03',
      DuplicatedIdentifier: 'E04',
      DuplicatedObject: 'E05',
      InternalServerError: 'E06',
      UnexpectedError: 'E07',
      UnavailableService: 'E08'
    }

  }

  /*=============================================
  =              DICTIONARY GETTERS             =
  =============================================*/

  getErrorMessage(errorName) {
    let errorDictionay = this.getMessageDictionary()
    return errorDictionay[errorName]
  }

  getErrorCode(errorName) {
    let errorDictionay = this.getErrorCodeDictionary()
    return errorDictionay[errorName]
  }

  /*=============================================
  =                   FACTORY                   =
  =============================================*/

  handlerFactory(errorName, message) {
    //TODO agregar opciones para mods
    const template = this.getTemplate()
    /*
    {error:false, code:false }
    */
    if (this._mods) {
      for (var key in this._mods) {
        if (!this._mods[key])
          delete template[key]
      }
    }

    for (const key in template) {
      if (key === 'code')
        template.code = this.getErrorCode(errorName)
      if (key === 'name')
        template.name = errorName
      if (key === 'message' && !message)
        template.message = this.getErrorMessage(errorName)
      else if (key === 'message' && message)
        template.message = message
    }
    return template
  }


  /*=============================================
  =              FUNCTION TEMPLATES             =
  =============================================*/

  EmptyFields(...args) {
    const _n = 'RequiredEmptyField'
    let message = this.getErrorMessage(_n).split('$[]')

    for (let i = 0; i < args.length; i++) {
      if (i === args.length - 1)
        args[i] = args[i] + ' '
      else
        args[i] = args[i] + ', '

      message[1] = message[1].concat(args[i])
    }
    message = message.join('') + '.'

    // return {
    //   status: 'error',
    //   code: this.getErrorCode(_n),
    //   name: _n,
    //   message
    // }
    return this.handlerFactory(_n, message)
  }

  //
  ValidationError(...args) {
    const _n = 'ValidationError'
    let message = this.getErrorMessage(_n).split('$[]')

    for (let i = 0; i < args.length; i++) {
      if (i != args.length - 1)
        args[i] = args[i] + ', '

      message[0] = message[0].concat(args[i])
    }
    message = message.join('')

    // return {
    //   status: 'error',
    //   code: this.getErrorCode(_n),
    //   name: _n,
    //   message
    // }
    return this.handlerFactory(_n, message)
  }

  WrongDataType(...args) {
    const _n = 'WrongDataType'
    let message = this.getErrorMessage(_n).split('$[]')

    for (let i = 0; i < args.length; i++) {
      if (i != args.length - 1)
        args[i] = args[i] + ', '

      message[0] = message[0].concat(args[i])
    }
    message = message.join('')

    // return {
    //   status: 'error',
    //   code: this.getErrorCode(_n),
    //   name: _n,
    //   message
    // }
    return this.handlerFactory(_n, message)
  }

  InternalError() {
    const _n = 'InternalServerError'
    // return {
    //   status: 'error',
    //   code: this.getErrorCode(_n),
    //   name: _n,
    //   message: this.getErrorMessage(_n)
    // }
    return this.handlerFactory(_n)
  }

  UnexpectedError() {
    const _n = 'UnexpectedError'
    // return {
    //   status: 'error',
    //   code: this.getErrorCode(_n),
    //   name: _n,
    //   message: this.getErrorMessage(_n)
    // }
    return this.handlerFactory(_n)
  }

  UnavailableService() {
    const _n = 'UnavailableService'
    // return {
    //   status: 'error',
    //   code: this.getErrorCode(_n),
    //   name: _n,
    //   message: this.getErrorMessage(_n)
    // }
    return this.handlerFactory(_n)
  }

  /*=============================================
  =              CUSTOM MESSAGES                =
  =============================================*/

  custom(code, name, message) {
    const template = this.getTemplate
    if (!code)
      delete template[code]
    else
      template.code = code

    if (!name)
      delete template[name]
    else
      template.name = name

    if (!message)
      delete template[message]
    else
      template.message = message

    return template
  }
}

module.exports = MHandler
