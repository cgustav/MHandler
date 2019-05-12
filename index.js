class MHandler {

  constructor(lang, mods) {
    this._lang = (function(lang) {
      if (!lang)
        return 'en'
      else
        return lang.toLowerCase()
    })(lang)
    this._mods = mods
    this._dictionary = require('./dictionaries/index')
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

  getDictionary() {
    return this._dictionary
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

  setDictionary(dictionary) {
    this._dictionary = dictionary
  }


  /*=============================================
  =              DICTIONARY GETTERS             =
  =============================================*/

  getErrorMessage(errorName) {
    const container = this._dictionary[errorName]
    const lang = this.getLanguage()
    let template = this.getTemplate()

    for (const key in container) {
      if (key === 'message')
        return container[key][lang]
    }
  }

  getErrorCode(errorName) {
    return this._dictionary[errorName]['code']
  }


  /*=============================================
  =                  FACTORY                    =
  =============================================*/

  handlerFactory(errorName, message) {
    const container = this._dictionary[errorName]
    const lang = this._lang
    const mods = this._mods
    let template = this._template

    for (const key in template) {
      if (key === 'message' && !message)
        template[key] = container[key][lang]
      else if (key === 'message' && message)
        template[key] = message
      else if (container[key] != undefined)
        template[key] = container[key]
    }

    /*Mods*/

    if (mods) {
      for (let key in mods) {
        if (!mods[key]) {
          delete template[key]
        } else {
          template[mods[key]] = template[key]
          delete template[key]
        }
      }
    }

    return template
  }


  messageFactory(container) {
    let {
      args,
      errorName
    } = container

    if (!args && !errorName)
      return null

    let message
    if (errorName)
      message = this.getErrorMessage(errorName).split('$[]')

    for (let i = 0; i < args.length; i++) {
      if (i != args.length - 1)
        args[i] = args[i] + ', '

      message[0] = message[0].concat(args[i])
    }

    return message.join('')

  }

  //Under development
  // functionFactory(...args) {
  //   for (var i = 0; i < args.length; i++) {
  //     let fn
  //     let msg = args[i]['message'][this._lang].split('$[]')
  //     let name = args[i]['name']
  //
  //     if (msg.length < 2) {
  //       console.log('es una sola cadena de texto.')
  //       fn = function() {
  //         return this.handlerFactory(name)
  //       }
  //     } else {
  //       fn = function(...args) {
  //         let message = this.messageFactory({
  //           args,
  //           errorName: name
  //         })
  //         return this.handlerFactory(name, message)
  //       }
  //     }
  //
  //     MHandler.prototype[args[i]['name']] = fn
  //   }
  // }

  /*=============================================
  =              FUNCTION TEMPLATES             =
  =============================================*/

  /*
    Validation - OK
    ----------
  */

  EmptyFields(...args) {
    const _n = 'RequiredEmptyField'
    let message = this.getErrorMessage(_n).split('$[]')

    console.log(message)
    for (let i = 0; i < args.length; i++) {
      if (i === args.length - 1)
        args[i] = args[i] + ' '
      else
        args[i] = args[i] + ', '

      message[1] = message[1].concat(args[i])
    }
    message = message.join('') + '.'

    return this.handlerFactory(_n, message)
  }


  ValidationError(...args) {
    const _n = 'ValidationError'

    let message = this.messageFactory({
      args,
      errorName: _n
    })

    return this.handlerFactory(_n, message)
  }

  WrongDataType(...args) {
    const _n = 'WrongDataType'
    let message = this.messageFactory({
      args,
      errorName: _n
    })

    return this.handlerFactory(_n, message)
  }

  DuplicatedField(...args) {
    const _n = 'DuplicatedField'
    let message = this.messageFactory({
      args,
      errorName: _n
    })

    return this.handlerFactory(_n, message)
  }

  DuplicatedValue(...args) {
    const _n = 'DuplicatedValue'
    let message = this.messageFactory({
      args,
      errorName: _n
    })

    return this.handlerFactory(_n, message)
  }

  EmptyParameters() {
    const _n = 'EmptyParameters'
    return this.handlerFactory(_n)
  }

  /*
    Resources - OK
    ---------
  */

  DuplicatedResource() {
    return this.handlerFactory('DuplicatedResource')
  }

  ResourceNotFound() {
    return this.handlerFactory('ResourceNotFound')
  }

  /*
    Authentication & Authorization - OK
    ------------------------------
  */

  UserAlreadyExist() {
    return this.handlerFactory('UserAlreadyExist')
  }

  BadCredentials() {
    return this.handlerFactory('BadCredentials')
  }

  DisabledAccount() {
    return this.handlerFactory('DisabledAccount')
  }

  TokenRequired() {
    return this.handlerFactory('TokenRequired')
  }

  TokenExpired() {
    return this.handlerFactory('TokenExpired')
  }

  InvalidToken() {
    return this.handlerFactory('InvalidToken')
  }

  SessionExpired() {
    return this.handlerFactory('SessionExpired')
  }

  SessionError() {
    return this.handlerFactory('SessionError')
  }

  Unauthorized() {
    return this.handlerFactory('Unauthorized')
  }

  Forbidden() {
    return this.handlerFactory('Forbidden')
  }

  /*
    Server - OK
    ------
  */

  InternalError() {
    return this.handlerFactory('InternalServerError')
  }

  UnexpectedError() {
    return this.handlerFactory('UnexpectedError')
  }

  UnavailableService() {
    return this.handlerFactory('UnavailableService')
  }

  UnderMaintenance() {
    return this.handlerFactory('UnderMaintenance')
  }

  FatalError() {
    return this.handlerFactory('FatalError')
  }

  /*=============================================
  =              CUSTOM MESSAGES                =
  =============================================*/

  Custom(code, name, message) {
    let template = this._template

    if (!code) delete template[code]
    else
      template.code = code

    if (!name) delete template[name]
    else
      template.name = name

    if (!message) delete template[message]
    else
      template.message = message

    return template
  }

}

module.exports = MHandler
