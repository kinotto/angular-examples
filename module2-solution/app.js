(function(){
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController )
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService){
    this.toBuyList = ShoppingListCheckOffService.getToBuyList();
    this.buyItem = function(index){
      ShoppingListCheckOffService.buyItem(index);
    }
    
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService){
    this.alreadyBoughtList = ShoppingListCheckOffService.getAlreadyBoughtList();
  }

  function ShoppingListCheckOffService(){
    var toBuyList = [
      {
        name: 'cookies',
        quantity: 5
      },
      {
        name: 'chips',
        quantity: 5
      },
      {
        name: 'nuts',
        quantity: 5
      },
      {
        name: 'veggies',
        quantity: 5
      },
      {
        name: 'milk',
        quantity: 5
      },
    ];
    var alreadyBoughtList = [];

    this.getToBuyList = function(){
      return toBuyList;
    }
    this.getAlreadyBoughtList = function(){
      return alreadyBoughtList;
    }

    this.buyItem = function(index){
      var item = toBuyList[index];
      toBuyList.splice(index, 1);
      alreadyBoughtList.push(item);
    }
  }

})();