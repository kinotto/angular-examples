angular.module('public')
.controller('subscriptionCtrl', subscriptionCtrl);

subscriptionCtrl.$inject = ['subscriptionService', '$scope', '$q'];

function subscriptionCtrl(subscriptionService, $scope, $q){
  var _this = this;
  var menuItem;
  _this.checkMenuItem = function(menuNumber){
    var deferred = $q.defer();
    _this.infoSaved = false;
    var promise =  subscriptionService.getMenuItemsByShortName(menuNumber);
    promise.then(function(result){
      menuItem = result.data;
      deferred.resolve();
    })
    .catch(function(err){
      $scope.subscriptionForm.menuNumber.$invalid = true;
      $scope.subscriptionForm.$invalid = true;
      console.log(err);
      deferred.reject();
    })

    return deferred.promise;
  }
_this.saveUserData = function(userData){
    _this.checkMenuItem(userData.menuNumber) //check menu number for safety, could happen that ng-blur does not trigger
    .then(function(){
      userData.menuItem = menuItem;
      subscriptionService.saveUserData(userData);
      _this.infoSaved = true;
    })
    
  }
}