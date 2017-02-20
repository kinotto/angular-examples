;(function(){
  angular.module('data')
  .component('categories', {
    bindings: {
        categories: '<cats'
      },
      templateUrl: 'categories.template.html'

  });

})()