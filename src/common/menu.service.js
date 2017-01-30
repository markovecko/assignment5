(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);

MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.favoriteItem ={};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {

      return response.data;
    });
  };

  service.getMenuItem = function (shortCode) {
    var config = {};
    return $http.get(ApiPath + '/menu_items/' + shortCode + '.json').then(function (response) {
      return response.data;
    });
  };

  // service.getMenuItem = function (shortCode) {
  //   var config = {};
  //   var httpPromise = $http({
  //     method: "GET",
  //     url: (ApiPath + "/menu_items/" + shortCode + ".json")
  //   });
  //
  //   return httpPromise.then(function(response){
  //     service.favoriteItem = {id:response.data.id, short_name:response.data.short_name, description:response.data.description};
  //     //console.log(service.favoriteItem);
  //       return response.data;
  //     });
  //   }

    service.test = function(){
      //console.log(favoriteItem);
      return service.favoriteItem;
    };
}
})();
