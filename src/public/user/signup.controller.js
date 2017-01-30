(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService','CurrentUserService'];
function SignUpController(MenuService, CurrentUserService) {
  var $ctrl = this;
  $ctrl.itemNotFound = false;
  $ctrl.saveSuccessful = false;

  // $ctrl.submit_old = function () {
  //   var selectedItem = CurrentUserService.saveUser($ctrl.user.firstName, $ctrl.user.lastName, $ctrl.user.email, $ctrl.user.phone, $ctrl.user.favItem);
  //   // console.log(selectedItem);
  //   $ctrl.completed = true;
  // };


  // $ctrl.submit = function() {
  //     CurrentUserService.saveUser($ctrl.user.firstName, $ctrl.user.lastName, $ctrl.user.email, $ctrl.user.phone, $ctrl.user.favItem).then(function(favItem) {
  //       console.log("favItem = ", favItem);
  //       $ctrl.user.favItemObject = favItem;
  //         $ctrl.itemNotFound = false;
  //         $ctrl.saveSuccessful = true;
  //
  //   })
  //   .catch(function(error) {
  //     $ctrl.itemNotFound = true;
  //     $ctrl.saveSuccessful = false;
  //   });
  // };


  $ctrl.submit = function() {
      MenuService.getMenuItem($ctrl.user.favItem).then(function(favItem) {
        CurrentUserService.saveUser($ctrl.user.firstName, $ctrl.user.lastName, $ctrl.user.email, $ctrl.user.phone, favItem);
        $ctrl.user.favItemObject = favItem;
          $ctrl.itemNotFound = false;
          $ctrl.saveSuccessful = true;
      }, function(response) {
        // Login failed
        $ctrl.itemNotFound = true;
        $ctrl.saveSuccessful = false;
      })
    };
}
})();
