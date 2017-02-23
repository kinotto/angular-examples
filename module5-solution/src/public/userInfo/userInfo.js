angular.module('public')
.controller('userInfoCtrl', userInfoCtrl);

userInfoCtrl.$inject = ['subscriptionService', '$scope'];

function userInfoCtrl(subscriptionService, $scope){
  var _this = this;

_this.userData = subscriptionService.getUserData();
}