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
    return require('./dictionaries/messages')(this._lang)
  }

  getErrorCodeDictionary() {
    return require('./dictionaries/codes')()

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

  objectFactory(errorName, message) {
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

    for (let i = 0; i < args.length; i++) {
      if (i === args.length - 1)
        args[i] = args[i] + ' '
      else
        args[i] = args[i] + ', '

      message[1] = message[1].concat(args[i])
    }
    message = message.join('') + '.'

    return this.objectFactory(_n, message)
  }

  ValidationError(...args) {
    const _n = 'ValidationError'

    let message = this.messageFactory({
      args,
      errorName: _n
    })

    //deprecated v 0.0.1
    // let message = this.getErrorMessage(_n).split('$[]')
    // for (let i = 0; i < args.length; i++) {
    //   if (i != args.length - 1)
    //     args[i] = args[i] + ', '
    //
    //   message[0] = message[0].concat(args[i])
    // }
    // message = message.join('')

    return this.objectFactory(_n, message)
  }

  WrongDataType(...args) {
    const _n = 'WrongDataType'

    let message = this.messageFactory({
      args,
      errorName: _n
    })

    //deprecated v 0.0.1
    // let message = this.getErrorMessage(_n).split('$[]')
    // for (let i = 0; i < args.length; i++) {
    //   if (i != args.length - 1)
    //     args[i] = args[i] + ', '
    //
    //   message[0] = message[0].concat(args[i])
    // }
    // message = message.join('')

    return this.objectFactory(_n, message)
  }

  DuplicatedValue(...args) {
    const _n = 'DuplicatedValue'

    let message = this.messageFactory({
      args,
      errorName: _n
    })

    //deprecated v 0.0.1
    //let message = this.getErrorMessage(_n).split('$[]')
    // for (let i = 0; i < args.length; i++) {
    //   if (i != args.length - 1)
    //     args[i] = args[i] + ', '
    //
    //   message[0] = message[0].concat(args[i])
    // }
    // message = message.join('')

    return this.objectFactory(_n, message)
  }

  DuplicatedField(...args) {
    const _n = 'DuplicatedField'


    let message = this.messageFactory({
      args,
      errorName: _n
    })

    //deprecated v 0.0.1
    //let message = this.getErrorMessage(_n).split('$[]')
    // for (let i = 0; i < args.length; i++) {
    //   if (i != args.length - 1)
    //     args[i] = args[i] + ', '
    //
    //   message[0] = message[0].concat(args[i])
    // }
    // message = message.join('')

    return this.objectFactory(_n, message)
  }

  EmptyParameters() {
    const _n = 'EmptyParameters'
    return this.objectFactory(_n)
  }

  InternalError() {
    const _n = 'InternalServerError'
    return this.objectFactory(_n)
  }

  UnexpectedError() {
    const _n = 'UnexpectedError'
    return this.objectFactory(_n)
  }

  UnavailableService() {
    const _n = 'UnavailableService'
    return this.objectFactory(_n)
  }

  /*=============================================
  =              CUSTOM MESSAGES                =
  =============================================*/

  Custom(code, name, message) {
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
