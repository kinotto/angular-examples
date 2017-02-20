;(function(){
  angular.module('MenuApp')
  .config(configFn);

  configFn.$inject = ['$urlRouterProvider', '$stateProvider']
  function configFn($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
     .state('home', {
        url: '/',
        template: '<h4>Welcome to our Restaurant</h4> <a ui-sref="categories">categories</a>'
     })
     .state('categories', {
        url: '/categories',
        template: '<categories cats="categories"></categories>',
        controller: ['$scope', 'categories', function($scope, categories){
          $scope.categories = categories.data;
        }],
        resolve: {
          categories: ['MenuDataService', function(MenuDataService){
            return MenuDataService.getAllCategories();
          }]
        }
     })
     .state('items', {
        url: '/items/{categoryName}',
        template: '<items items="items"></items>',
        controller: ['$scope', 'items', function($scope, items){
          $scope.items = items.data.menu_items;
        }],
        resolve: {
          items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams){
            var categoryShortName = $stateParams.categoryName;
            return MenuDataService.getItemsForCategory(categoryShortName);
          }]
        },
        params: {
          categoryName: null
        }
     })


  }
})()