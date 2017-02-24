angular.module('public')
.service('subscriptionService', subscriptionService);

subscriptionService.$inject = ['$http', 'MyApiPath'];

function subscriptionService($http, MyApiPath){
  var userData;
  this.getMenuItemsByShortName = function(short_name){
    return $http({
      method: 'GET',
      url: MyApiPath + '/menu_items/'+short_name+'.json'
    });
  }

  this.saveUserData = function(data){
    userData = data;
  }
  this.getUserData = function(){
    return userData;
  }

}