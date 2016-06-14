NG_DOCS={
  "sections": {
    "api": "API Documentation"
  },
  "pages": [
    {
      "section": "api",
      "id": "app",
      "shortName": "app",
      "type": "object",
      "moduleName": "app",
      "shortDescription": "App for users to store contact information. Contacts CRUD functionality. Requires ngResource, ngRoute, ngMessages, uiGmapgoogle-maps, and ui.mask.",
      "keywords": "api app contact contacts crud functionality mask ngmessages ngresource ngroute object requires store ui uigmapgoogle-maps users"
    },
    {
      "section": "api",
      "id": "app.controller:cdContactAddCtrl",
      "shortName": "cdContactAddCtrl",
      "type": "controller",
      "moduleName": "app",
      "shortDescription": "Controller which handles adding a contact to the database.",
      "keywords": "$location $scope $update _id add addcontact adding address addressfields api app based cdcontactsvc cdnotifiersvc contact contactaddressfieldssvc contactfieldssvc contacts controller database defined field fields handles initialized metadata method notification object property redirect returned service success successful user variable"
    },
    {
      "section": "api",
      "id": "app.controller:cdContactEditCtrl",
      "shortName": "cdContactEditCtrl",
      "type": "controller",
      "moduleName": "app",
      "shortDescription": "Controller which handles the editing of a contact&#39;s details.",
      "keywords": "$on $routeprovider $scope $update $viewcontentloaded access address addresses addressfields api app array bind cdcontactsvc cdgooglemapscoordinatessvc cdgooglemapssvc cdnotifiersvc contact contactaddressfieldssvc contactfieldssvc contacts content controller coordinates created database defined details editing element field fields google handles initiaclize initialze input intitializing js loaded location map maps method notification object pass pin property redirect returned savecontact service specific update updated user values variable view zoomed"
    },
    {
      "section": "api",
      "id": "app.controller:cdContactListCtrl",
      "shortName": "cdContactListCtrl",
      "type": "controller",
      "moduleName": "app",
      "shortDescription": "Controller which handles the listing of contacts for a user.",
      "keywords": "$scope _id addcontact addressfields api app based boolean cdcontactsvc cdnotifiersvc contact contactfields contacts controller createuser definitions deletecontact deleted displaying failure faulire field fields flag handles identifier indicate listing method notification object passed passing property query reason redirect returned service shouldlog showedit splice success user variable whethere"
    },
    {
      "section": "api",
      "id": "app.controller:cdNavBarLoginCtrl",
      "shortName": "cdNavBarLoginCtrl",
      "type": "controller",
      "moduleName": "app",
      "shortDescription": "Controller which handles navbar login form function.",
      "keywords": "api app authenticateuser bootstrappeduserobject cdauthsvc cdnotifiersvc controller document element empty ensure failure form function handles location login logout logoutuser method navbar ng-model notification object parameters passing password removed root scope script set signin signout string success text user username variables view"
    },
    {
      "section": "api",
      "id": "app.controller:cdSignupCtrl",
      "shortName": "cdSignupCtrl",
      "type": "controller",
      "moduleName": "app",
      "shortDescription": "Controller which displays signup page/form. Handles creation of new user success and failures. ",
      "keywords": "$scope api app cdauthsvc cdnotifiersvc controller create created createuser creation displays document email equal failures faulire firstname form handles inputs lastname location method newuser newuserdata ng-model notification notivication object params passing password reason reqponse root set signup success user variable variables"
    },
    {
      "section": "api",
      "id": "app.controller:cdUserListCtrl",
      "shortName": "cdUserListCtrl",
      "type": "controller",
      "moduleName": "app",
      "shortDescription": "Controller which controls the display of the User List view.",
      "keywords": "api app cdusersvc controller controls created display equal list query service user users variable variables view"
    },
    {
      "section": "api",
      "id": "app.directive:formField",
      "shortName": "formField",
      "type": "directive",
      "moduleName": "app",
      "shortDescription": "This directive:",
      "keywords": "$scope api app binding bootstrap cdcontactaddctrl contact controller create directive ea element errors field fieldtypes form form-input freom html input inputs live markup messages ng-message oject one-way passed record required set template two-way type view"
    },
    {
      "section": "api",
      "id": "app.directive:usernameUniqueValidator",
      "shortName": "usernameUniqueValidator",
      "type": "directive",
      "moduleName": "app",
      "shortDescription": "This directive:",
      "keywords": "$http api app boolean call case directive exists indicating input invalid keystroke met ngmodel promise received required returned standard username valid validator"
    },
    {
      "section": "api",
      "id": "app.directive:validateEmailTld",
      "shortName": "validateEmailTld",
      "type": "directive",
      "moduleName": "app",
      "shortDescription": "This directive:",
      "keywords": "api app case defined directive false indicating initialized input inputs keystroke met ng-model ngmodel occurs pattern regex remains required standard status test tested true validator validity var"
    },
    {
      "section": "api",
      "id": "app.directive:validatePasswordCharacters",
      "shortName": "validatePasswordCharacters",
      "type": "directive",
      "moduleName": "app",
      "shortDescription": "This directive:",
      "keywords": "agains api app array case directive false indicating initialized input inputs keystroke mated met ng-model ngmodel occurs pattern remain remains required required_patters standard status successive test tested true truth truths validator validity"
    },
    {
      "section": "api",
      "id": "app.filter:camelCase",
      "shortName": "camelCase",
      "type": "filter",
      "moduleName": "app",
      "shortDescription": "This filter:",
      "keywords": "api app camelcase capitalized filter input letter letters lowercase removed space string transformed"
    },
    {
      "section": "api",
      "id": "app.filter:keyFilter",
      "shortName": "keyFilter",
      "type": "filter",
      "moduleName": "app",
      "shortDescription": "This filter:",
      "keywords": "api app doesn empty filter filtered identifying key match obj object omitting pair pairs query remaining result returned term values"
    },
    {
      "section": "api",
      "id": "app.filter:labelCase",
      "shortName": "labelCase",
      "type": "filter",
      "moduleName": "app",
      "shortDescription": "This filter:",
      "keywords": "api app case filter input labelcase letter space string transformed upper"
    },
    {
      "section": "api",
      "id": "app.service:cdAuthSvc",
      "shortName": "cdAuthSvc",
      "type": "service",
      "moduleName": "app",
      "shortDescription": "Service providing methods to authenticate, create, and log out user. Also used to authorize route access per role.",
      "keywords": "$http $q $save access api app authenticate authenticateuser authorize authorizecurrentuserforroute authorized call cdidentitysvc cdusersvc create createuser currentuser data defer equal failure false include isauthorized log logout logoutuser message method methods model newuser newuserdata object passed passing password post promise providing reason response returns role route service setting success true user username variable variables"
    },
    {
      "section": "api",
      "id": "app.service:cdContactSvc",
      "shortName": "cdContactSvc",
      "type": "service",
      "moduleName": "app",
      "shortDescription": "Angular ngResource used to make API calls for contact CRUD functionality",
      "keywords": "angular api app calls contact crud functionality ngresource service"
    },
    {
      "section": "api",
      "id": "app.service:cdIdentitySvc",
      "shortName": "cdIdentitySvc",
      "type": "service",
      "moduleName": "app",
      "shortDescription": "Service:",
      "keywords": "$scope api app application authenticateuser based bool boolean bootstrappeduserobject call calls cdauthsvc cdnavbarloginctrl cdusersvc check controller currentuser data decision dictates dropdowns equal existis exists flag idenity indicate indicates isauthenticated link logged login logout method navbar navbar-login node object param persistance pug push redirect refresh response returns role script service set sets successful tag true undefined user values variable view"
    },
    {
      "section": "api",
      "id": "app.service:cdNotifierSvc",
      "shortName": "cdNotifierSvc",
      "type": "service",
      "moduleName": "app",
      "shortDescription": "Service providing methods to return toastr message types",
      "keywords": "api app color error info message method methods msg notification pattern presentd providing return service styled success toastr types warning"
    },
    {
      "section": "api",
      "id": "app.service:cdToastr",
      "shortName": "cdToastr",
      "type": "service",
      "moduleName": "app",
      "shortDescription": "Service providing toastr as accessible swervice to pass into cdNotifierSvc.",
      "keywords": "accessible api app cdnotifiersvc pass providing service swervice toastr"
    },
    {
      "section": "api",
      "id": "app.service:cdUserSvc",
      "shortName": "cdUserSvc",
      "type": "service",
      "moduleName": "app",
      "shortDescription": "Service providing UserResource via ng-Resource API calls",
      "keywords": "api app calls ng-resource providing service userresource"
    },
    {
      "section": "api",
      "id": "app.service:contactAddressFieldsSvc",
      "shortName": "contactAddressFieldsSvc",
      "type": "service",
      "moduleName": "app",
      "shortDescription": "Service providing value object of fields associated with contact&#39;s address.",
      "keywords": "address api app associated contact fields object providing service"
    },
    {
      "section": "api",
      "id": "app.service:contactFieldsSvc",
      "shortName": "contactFieldsSvc",
      "type": "service",
      "moduleName": "app",
      "shortDescription": "Service providing value object of fields associated with contacts.",
      "keywords": "api app associated contacts fields object providing service"
    },
    {
      "section": "api",
      "id": "app.service:FieldTypes",
      "shortName": "FieldTypes",
      "type": "service",
      "moduleName": "app",
      "shortDescription": "Defines object containing field types with associated errors. The object is used by itterating through values and creating ng-message entries for form elements so that custom errors are displayed when invalid.",
      "keywords": "api app associated creating custom defines displayed elements entries errors field form invalid itterating ng-message object service types values"
    },
    {
      "section": "api",
      "id": "app.service:stateAbbreviations",
      "shortName": "stateAbbreviations",
      "type": "service",
      "moduleName": "app",
      "shortDescription": "Service providing value object of state abbreviations.",
      "keywords": "abbreviations api app object providing service"
    }
  ],
  "apis": {
    "api": true
  },
  "html5Mode": false,
  "editExample": true,
  "startPage": "/api",
  "scripts": [
    "angular.min.js"
  ]
};