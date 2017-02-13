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
        name: 'bags of cookies',
        quantity: 5
      },
      {
        name: 'bags of chips',
        quantity: 5
      },
      {
        name: 'bags of nuts',
        quantity: 3
      },
      {
        name: 'bags of veggies',
        quantity: 5
      },
      {
        name: 'cheeseburger',
        quantity: 4
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