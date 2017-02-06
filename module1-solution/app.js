(function(){
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.userInput = '';

    $scope.checkTooMuch = function(){
      var inputArray = $scope.userInput.split(',');
      cleanEmptyString(inputArray);
      if(inputArray.length > 0 && inputArray.length  <= 3){
        $scope.result = 'Enjoy!';
      }
      if(inputArray.length > 3){
        $scope.result = 'Too much!';
      }
      if(inputArray.length === 0){
        $scope.result = 'Please enter data first';
      }
    }

    var cleanEmptyString= function(inputArray){
      if(inputArray.length === 1 && inputArray[0] === ''){
        inputArray.splice(0, 1);
      }
    }

  }

})();