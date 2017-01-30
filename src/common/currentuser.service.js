(function() {
"use strict";

angular.module('public')
.service('CurrentUserService', CurrentUserService);

/**
 * Used to store and track information about the currently logged in user.
 * This is intended to be injected any time we need some user metadata
 * or to find out if the user is authenticated.
 **/
CurrentUserService.$inject = ['MenuService','ApiPath'];
function CurrentUserService(MenuService, ApiPath) {
  var service = this;
  service._firstName = '';
  service._lastName = '';
  service._email = '';
  service._phone = '';
  service._favItem = '';
  service._imgSource = '';
  service._userSet = false;

  /**
   * Load the current user with username and token
   */

   service.saveUser = function(firstName, lastName, email, phone, favItem) {
     service._firstName = firstName;
     service._lastName = lastName;
     service._email = email;
     service._phone = phone;
     service._favItem = favItem;
     service._imgSource = ApiPath + "/images/" + favItem.short_name + ".jpg";
     service._userSet = true;
   };

   service.getUserInfo = function() {
     return service;
   }

}


})();
