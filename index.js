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
    const lang = this.getLanguage()
    const mods = this.getMods()
    let template = this.getTemplate()

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

  /*=============================================
  =              FUNCTION TEMPLATES             =
  =============================================*/

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

  InternalError() {
    const _n = 'InternalServerError'
    return this.handlerFactory(_n)
  }

  UnexpectedError() {
    const _n = 'UnexpectedError'
    return this.handlerFactory(_n)
  }

  UnavailableService() {
    const _n = 'UnavailableService'
    return this.handlerFactory(_n)
  }

  /*=============================================
  =              CUSTOM MESSAGES                =
  =============================================*/

  Custom(code, name, message) {
    const template = this.getTemplate()
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


//TODO:
//*Include stackTrace option
//*Include time option ext
//*Include hash option
