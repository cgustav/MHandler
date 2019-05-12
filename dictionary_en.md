# Error Docs

Errors documentation filtered by category.

## Validation errors

* * *

### EmptyParameters

```javascript
{
    code: 'E010',
    name: 'EmptyParameters',
    message: 'Was expected to receive parameters but none has been found.'
}
```

### EmptyFields

```javascript
{
    code: 'E011',
    name: 'RequiredEmptyField',
    message:'The following parameters should be completed: (...)',
}
```

### ValidationError

```javascript
{
    code: 'E012',
    name: 'ValidationError',
    message: 'The following parameters (...) does not meet the validation conditions.',
}
```

### WrongDataType

```javascript
{
    code: 'E013',
    name: 'WrongDataType',
    message: 'Data type is not valid for (...) parameters.',
}
```

### DuplicatedField

```javascript
{
    code: 'E014',
    name: 'DuplicatedField',
    message: 'Cannot process operation if fields (...) are duplicated.',
}
```

### DuplicatedValue

```javascript
{
    code: 'E015',
    name: 'DuplicatedValue',
    message: 'The (...) value(s) already exists, please try again with a different value.',
}
```


## Resource errors

* * *

### DuplicatedResource

```javascript
{
    code: 'E030',
    name: 'DuplicatedResource',
    message: 'Operation was rejected because it attempts to duplicate a system resource.',
}
```

### ResourceNotFound

```javascript
{
    code: 'E031',
    name: 'ResourceNotFound',
    message: 'The specified resource does not exist.',
}
```


## Authentication & Authorization Errors

* * *

### UserAlreadyExist

```javascript
{
    code: 'E050',
    name: 'UserAlreadyExist',
    message: 'The given username already exists.',
}
```


### BadCredentials

```javascript
{
    code: 'E051',
    name: 'BadCredentials',
    message: 'Authentication error, the specified credentials are wrong.',
}
```


### DisabledAccount

```javascript
{
    code: 'E052',
    name: 'DisabledAccount',
    message: 'Authentication error, this account is currently disabled.',
}
```


### TokenRequired

```javascript
{
    code: 'E053',
    name: 'TokenRequired',
    message: 'Cannot perform the requested because an authorization token is required.',
}
```


### TokenExpired

```javascript
{
    code: 'E054',
    name: 'TokenExpired',
    message: 'Authorization error, the provided token is expired.',
}
```


### InvalidToken

```javascript
{
    code: 'E055',
    name: 'InvalidToken',
    message: 'To perform this operation you must to send a valid access token.',
}
```


### SessionExpired

```javascript
{
    code: 'E056',
    name: 'SessionExpired',
    message: 'The current session is expired. Try authenticating your credentials again.',
}
```


### SessionError

```javascript
{
    code: 'E057',
    name: 'SessionExpired',
    message: 'A session error has occurred, try authenticating your credentials again.',
}
```


### Unauthorized

```javascript
{
    code: 'E058',
    name: 'Unauthorized',
    message: 'Your system privileges do not allow you to perform the requested operation.',
}
```


### Forbidden

```javascript
{
    code: 'E059',
    name: 'Forbidden',
    message: 'The access to the requested resource is forbidden.',
}
```


## Server Errors

* * *

### InternalServerError

```javascript
{
    code: 'E080',
    name: 'InternalServerError',
    message: 'Internal server error.',
}
```


### UnexpectedError

```javascript
{
    code: 'E081',
    name: 'UnexpectedError',
    message: 'An unexpected error has occurred.',
}
```


### UnavailableService

```javascript
{
    code: 'E082',
    name: 'UnavailableService',
    message: 'The method to the specified resource is currently unavailable.',
}
```


### UnderMaintenance

```javascript
{
    code: 'E083',
    name: 'UnavailableService',
    message: 'Cannot process requests while services are under maintenance.',
}
```


### FatalError

```javascript
{
    code: 'E084',
    name: 'FatalError',
    message: 'A fatal error occurred while processing your request.',
}
```
