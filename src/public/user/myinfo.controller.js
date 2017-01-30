(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['CurrentUserService'];
function MyInfoController(CurrentUserService) {
  var $ctrl = this;

  $ctrl.user = CurrentUserService.getUserInfo();
}

})();
