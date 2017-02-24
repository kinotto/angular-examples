'use strict';


describe("module 5 spec", function(){
  var $httpBackend, subscriptionCtrl, subscriptionCtrlScope = {}, $controller;

  beforeEach(module('public'));
  beforeEach(module('common'));
  //beforeEach(module('ngMockE2E'));
  
 
  beforeEach(inject(function($injector, _$controller_){
    $httpBackend = $injector.get('$httpBackend');
    $controller = _$controller_;
    var response = {"id":7,"short_name":"A7"};
    var url = "https://kinotto-restaurant.herokuapp.com/menu_items/A7.json";
    $httpBackend.when('GET', url).respond(response);
  }))
  
  beforeEach(function(){
    subscriptionCtrl = $controller('subscriptionCtrl', {$scope: subscriptionCtrlScope});
  })

  it('should get menu items from the server', function(){
   
    var userData = {menuNumber: 'A7'};
    subscriptionCtrl.saveUserData(userData);
    $httpBackend.flush();
    expect(userData.menuItem.short_name).toEqual('A7'); 
    //expect(subscriptionCtrl.$scope.)
    
    //expect(true).toEqual(true);
  })



})

/*
angular.module('myApplicationModule', [])
    .value('mode', 'app')
    .value('version', 'v1.0.1');


describe('MyApp', function() {

  // You need to load modules that you want to test,
  // it loads only the "ng" module by default.
  beforeEach(module('myApplicationModule'));

  // inject() is used to inject arguments of all given functions
  it('should provide a version', inject(function(mode, version) {
    expect(version).toEqual('v1.0.1');
    expect(mode).toEqual('app');
  }));


  // The inject and module method can also be used inside of the it or beforeEach
  it('should override a version and test the new version is injected', function() {
    // module() takes functions or strings (module aliases)
    module(function($provide) {
      $provide.value('version', 'overridden'); // override version here
    });

    inject(function(version) {
      expect(version).toEqual('overridden');
    });
  });
});
*/