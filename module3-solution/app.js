(function(){
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', foundItems);
  NarrowItDownController.$inject = ['MenuSearchService', '$timeout']
  function NarrowItDownController(MenuSearchService, $timeout){
    var _this = this;
    _this.onRemove = function(index){
      _this.foundItems.splice(index, 1);
    }
    _this.narrowItDown = function(searchTerm){
      _this.loading = true;
      
        MenuSearchService.getMatchedMenuItems(searchTerm)
        .then(function(foundItems){
          _this.loading = false;
          _this.foundItems = foundItems;
        })
        .catch(function(err){
          console.log(err);
        })
        
      }
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http){
    var service = this;
    service.getMatchedMenuItems = function(searchTerm){
      return $http({
          url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
        }).then(function(res){
        var found = res.data.menu_items;
        var foundItems = [];
        for(var i = 0; i < found.length; i++){
          if(found[i].description.indexOf(searchTerm) > 0){
            foundItems.push(found[i]);
          }
        }

        return foundItems;
      })
    }
  }

  function foundItems(){
    var ddo = {
      restrict: 'E',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      templateUrl: 'template.html'
    };
    return ddo;
  }
})();