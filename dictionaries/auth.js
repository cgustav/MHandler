/*
Authentication & Authorization E050 - E069
------------------------------------------
      UserAlreadyExist 'E050'
      BadCredentials 'E051'
      DisabledAccount 'E052'
      -
      TokenRequired 'E053'
      TokenExpired 'E054'
      InvalidToken 'E055'
      -
      SessionExpired 'E056'
      SessionError 'E057'
      -
      Unauthorized 'E058'
      Forbidden 'E059'

*/

module.exports = {

  UserAlreadyExist: {
    code: 'E050',
    name: 'UserAlreadyExist',
    message: {
      en: 'The given username already exists.',
      es: 'El username especificado ya existe.'
    }
  },

  BadCredentials: {
    code: 'E051',
    name: 'BadCredentials',
    message: {
      en: 'Authentication error, the specified credentials are wrong.',
      es: 'Error de autenticación, las credenciales especificadas son incorrectas.'
    }
  },

  DisabledAccount: {
    code: 'E052',
    name: 'DisabledAccount',
    message: {
      en: 'Authentication error, this account is currently disabled.',
      es: 'Error de autenticación, esta cuenta está actualmente deshabilitada.'
    }
  },

  TokenRequired: {
    code: 'E053',
    name: 'TokenRequired',
    message: {
      en: 'Cannot perform the requested because an authorization token is required.',
      es: 'No se puede realizar la operación solicitada porque se necesita un token de autorización.'
    }
  },

  TokenExpired: {
    code: 'E054',
    name: 'TokenExpired',
    message: {
      en: 'Authorization error, the provided token is expired.',
      es: 'Error de autorización, el token especificado está expirado.'
    }
  },

  InvalidToken: {
    code: 'E055',
    name: 'InvalidToken',
    message: {
      en: 'To perform this operation you must to send a valid access token.',
      es: 'Para realizar esta operación debe enviar un token de acceso válido.'
    }
  },

  SessionExpired: {
    code: 'E056',
    name: 'SessionExpired',
    message: {
      en: 'The current session is expired. Try authenticating your credentials again.',
      es: 'La sesión actual ha caducado. Intente autenticando sus credenciales nuevamente.'
    }
  },

  SessionError: {
    code: 'E057',
    name: 'SessionError',
    message: {
      en: 'A session error has occurred, try authenticating your credentials again.',
      es: 'Ha ocurrido un error de sesión. Intente autenticando sus credenciales nuevamente.'
    }
  },

  Unauthorized: {
    code: 'E058',
    name: 'Unauthorized',
    message: {
      en: 'Your system privileges do not allow you to perform the requested operation.',
      es: 'Sus privilegios de sistema no le permiten realizar la operación solicitada.'
    }
  },

  Forbidden: {
    code: 'E059',
    name: 'Forbidden',
    message: {
      en: 'The access to the requested resource is forbidden.',
      es: 'El acceso al recurso solicitado está prohibido.'
    }
  }


}
