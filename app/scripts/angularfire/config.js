angular.module('firebase.config', [])
  .constant('FBURL', 'https://case-studies.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');