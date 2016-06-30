var cattleBarn = angular.module("cattleBarn",['ngRoute', 'lokijs', 'ui.bootstrap']);

 cattleBarn.config(['$routeProvider',function($routeProvider) {

  $routeProvider.
               when('/home', {
                   templateUrl: 'views/home.html',
                   controller: 'HomeController'
               }).
               when('/bulls', {
                   templateUrl: 'views/cattle/bulls.html',
                   controller: 'BullsController'
               }).
               when('/cows', {
                   templateUrl: 'views/cattle/cows.html',
                   controller: 'CowsController'
               }).
               when('/calves', {
                   templateUrl: 'views/cattle/calves.html',
                   controller: 'CalvesController'
               }).
               when('/steers', {
                   templateUrl: 'views/cattle/steers.html',
                   controller: 'SteersController'
               }).
               when('/heifers', {
                   templateUrl: 'views/cattle/heifers.html',
                   controller: 'HeifersController'
               }).
               when('/all', {
                   templateUrl: 'views/cattle/all.html',
                   controller: 'AllController'
               }).
               when('/new-bull', {
                   templateUrl: 'views/cattle/new-bull.html',
                   controller: 'NewBullController'
               }).
               when('/new-cow', {
                   templateUrl: 'views/cattle/new-cow.html',
                   controller: 'NewCowController'
               }).
               when('/new-calve', {
                   templateUrl: 'views/cattle/new-calve.html',
                   controller: 'NewCalveController'
               }).
               when('/new-steer', {
                   templateUrl: 'views/cattle/new-steer.html',
                   controller: 'NewSteerController'
               }).
               when('/settings', {
                   templateUrl: 'views/admin/settings.html',
                   controller: 'SettingsController'
               })
               .
               when('/contacts', {
                   templateUrl: 'views/admin/contacts.html',
                   controller: 'ContactsController'
               })
               .
               when('/reports', {
                   templateUrl: 'views/admin/reports.html',
                   controller: 'ReportsController'
               })
               .
               when('/sales', {
                   templateUrl: 'views/admin/sales.html',
                   controller: 'SalesController'
               })
               .
               when('/equipment-inventory', {
                   templateUrl: 'views/admin/equipment-inventory.html',
                   controller: 'Equip-Inv-Controller'
               })
               .
               when('/pastures-pens', {
                   templateUrl: 'views/admin/pastures-pens.html',
                   controller: 'Past-Pen-Controller'
               })
               .
               when('/pedigrees', {
                   templateUrl: 'views/admin/pedigrees.html',
                   controller: 'PedigreesController'
               })
               .
                otherwise({
                redirectTo: '/home'
                });
}]); 


 

 cattleBarn.controller("HomeController",function($scope){

  $scope.ranch = {};

  //load a partial here depending on if ranch is in db already
  $scope.getInclude = function(){
    if(! $scope.ranch.id){
        return "views/new-ranch.html";
    } else {
        return "views/home-view.html";
    }
    return "";
    }

      
      
  });

 	cattleBarn.controller("BullsController",function($scope, Loki){

    $scope.bullName = "Testbull";

    $scope.bullList = [
    {
      name: 'Elsie',
      status: 'Active'
    },
    {
      name: 'Joey',
      status: 'Active'
    },
    {
      name: 'DeeDee',
      status: 'Active'
    }

    ]

  //   $scope.things = {};

  //   function loadHandler(){
  //     $scope.$apply(function() {
  //       things = db.getCollection('things');
  //       if (things === null){
  //         db.addCollection('things');
  //         things = db.getCollection('things');
  //       }
  //       db.saveDatabase();
  //       $scope.things = things.data;
  //     })

  //   }

		// var things = null;

  //   db = new Loki('db.json', {
  //     persistenceMethod: 'fs',
  //     autoload: true,
  //     autosave: true,
  //     autoloadCallback: loadHandler
  //   });
   
  //   $scope.thing = {};

    

  //   $scope.addThing = function() {

  //     things.insert({
  //       name: $scope.thing.name,
  //       color: $scope.thing.color
  //     });
  //     $scope.thing = {};

  //     db.saveDatabase();
  //   };

  //   $scope.collections = db.listCollections();
  //   console.log(db.listCollections());


	});

	cattleBarn.controller("CowsController",function($scope){

	 		$scope.name= "Sandeep Kumar";
			
	});

  cattleBarn.controller("NewCowController",function($scope){

      
      
  });

  cattleBarn.controller("NewCalveController",function($scope){

     
      
  });

  cattleBarn.controller("NewBullController",function($scope){

     
      
  });

  cattleBarn.controller("NewSteerController",function($scope){

      
      
  });

  