angular.module('public')
.controller('subscriptionCtrl', subscriptionCtrl);

subscriptionCtrl.$inject = ['subscriptionService', '$scope'];

function subscriptionCtrl(subscriptionService, $scope){
  var _this = this;

_this.saveUserData = function(userData){
  var promise =  subscriptionService.getMenuItemsByShortName(userData.menuNumber);
  promise.then(function(result){
    userData.menuItem = result.data;
    subscriptionService.saveUserData(userData);
    _this.shortNameIsValid = true;
  })
  .catch(function(err){
    $scope.subscriptionForm.menuNumber.$invalid = true;
     _this.shortNameIsValid = false;
    console.log(err);
  })
  }
}