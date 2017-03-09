angular.module('public')
.service('subscriptionService', subscriptionService);

subscriptionService.$inject = ['$http', 'ApiPath'];

function subscriptionService($http, ApiPath){
  var userData;
  this.getMenuItemsByShortName = function(short_name){
    return $http({
      method: 'GET',
      url: ApiPath + '/menu_items/'+short_name+'.json'
    });
  }

  this.saveUserData = function(data){
    userData = data;
  }
  this.getUserData = function(){
    return userData;
  }

}