(function(){
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.userInput = '';
    var results = [
      {
        message: 'Enjoy!',
        style: {
          color: 'green',
          border: '1px solid green'
        }
      },
      {
        message: 'Too much!',
        style: {
          color: 'green',
          border: '1px solid green'
        }
      },
      {
        message: 'Please enter data first',
        style: {
          color: 'red',
          border: '1px solid red'
        }
      }
    ]
    $scope.checkTooMuch = function(){
      var inputArray = $scope.userInput.split(',');
      cleanEmptyString(inputArray);
      if(inputArray.length > 0 && inputArray.length  <= 3){
        $scope.result = results[0];
      }
      if(inputArray.length > 3){
        $scope.result = results[1];
      }
      if(inputArray.length === 0){
        $scope.result = results[2];
      }
    }

    var cleanEmptyString= function(inputArray){
      if(inputArray.length === 1 && inputArray[0].trim() === ''){
        return inputArray.splice(0, 1);
      }
      for(var i = 0;  i < inputArray.length; i++){
        if(inputArray[i].trim() === ''){
          inputArray.splice(i, 1);  //remove empty string  eg. item1, , item2 
          i--; // without this we skip an element
        }
      }


    }

  }

})();