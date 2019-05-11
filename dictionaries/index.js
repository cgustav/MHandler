/*
---------------------
ERROR MESSAGES INDEX
---------------------

        Requests E000 - E010

        Validation E010 - E029
        -----------------------
              EmptyParameters: 'E010',
              RequiredEmptyField: 'E011',
              ValidationError: 'E012',
              WrongDataType: 'E013',
              DuplicatedField: 'E014',
              DuplicatedValue: 'E015',


        Resources E030 - E049
        ---------------------
              DuplicatedResource: 'E030'
              ResourceNotFound: 'E031'


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


        Server E080 - E099
        ------------------
              InternalServerError: 'E080'
              UnexpectedError: 'E081'
              UnavailableService: 'E082'
              UnderMaintenance: 'E083'
              FatalError: 'E084'
*/

const AUTH = require('./auth')
const RESOURCES = require('./resources')
const SERVER = require('./server')
const VALIDATION = require('./validation')

const dictionaries = Object.assign({}, VALIDATION, RESOURCES, AUTH, SERVER)

module.exports = dictionaries;
