;(function(){
  angular.module('data')
  .component('items', {
    bindings: {
      items: '<'
    },
    templateUrl: 'items.template.html',
    controller: ['$stateParams', function($stateParams){
      this.categoryName = $stateParams.categoryName;
    }]
  });

})()