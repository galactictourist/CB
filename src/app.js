export const cattleBarn = angular.module('cattleBarn', [
    'ng', 'ngRoute', 'ui.bootstrap'
])

cattleBarn.run(function ($rootScope) {
    $rootScope.checkDB = function () {
        Ranch.find({}, function (err, docs) {

            angular.forEach(docs, function (doc, index) {
                console.log('a document ' + JSON.stringify(doc));

            });

        });
    };

    $rootScope.clearDB = function () {
        Ranch.remove({}, {
            multi: true
        }, function (err, numRemoved) {
            console.log(numRemoved + ' removed documents');
        });
    };
});

cattleBarn.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    }).when('/bulls-index', {
        templateUrl: 'views/cattle/bulls_index.html',
        controller: 'BullsIndexController'
    }).when('/bulls/:param', {
        templateUrl: 'views/cattle/bulls.html',
        controller: 'BullsController'
    }).when('/bulls/mortality/:param', {
        templateUrl: 'views/cattle/bulls_mortality.html',
        controller: 'BullsMortalityController'
    }).when('/bulls/med-meas/:param', {
        templateUrl: 'views/cattle/bulls_med_meas.html',
        controller: 'BullsMedMeasController'
    }).when('/bulls/offspring/:param', {
        templateUrl: 'views/cattle/bulls_offspring.html',
        controller: 'BullsOffspringController'
    }).when('/cows', {
        templateUrl: 'views/cattle/cows.html',
        controller: 'CowsController'
    }).when('/calves', {
        templateUrl: 'views/cattle/calves.html',
        controller: 'CalvesController'
    }).when('/steers', {
        templateUrl: 'views/cattle/steers.html',
        controller: 'SteersController'
    }).when('/heifers', {
        templateUrl: 'views/cattle/heifers.html',
        controller: 'HeifersController'
    }).when('/all', {
        templateUrl: 'views/cattle/all.html',
        controller: 'AllController'
    }).when('/new-bull', {
        templateUrl: 'views/cattle/new-bull.html',
        controller: 'NewBullController'
    }).when('/new-cow', {
        templateUrl: 'views/cattle/new-cow.html',
        controller: 'NewCowController'
    }).when('/new-calve', {
        templateUrl: 'views/cattle/new-calve.html',
        controller: 'NewCalveController'
    }).when('/new-steer', {
        templateUrl: 'views/cattle/new-steer.html',
        controller: 'NewSteerController'
    }).when('/settings', {
        templateUrl: 'views/admin/settings.html',
        controller: 'SettingsController'
    }).when('/ranchinfo', {
        templateUrl: 'views/admin/ranchinfo.html',
        controller: 'RanchInfoController'
    }).when('/contacts', {
        templateUrl: 'views/admin/contacts.html',
        controller: 'ContactsController'
    }).when('/reports', {
        templateUrl: 'views/admin/reports.html',
        controller: 'ReportsController'
    }).when('/sales', {
        templateUrl: 'views/admin/sales.html',
        controller: 'SalesController'
    }).when('/equipment-inventory', {
        templateUrl: 'views/admin/equipment-inventory.html',
        controller: 'Equip-Inv-Controller'
    }).when('/pastures-pens', {
        templateUrl: 'views/admin/pastures-pens.html',
        controller: 'Past-Pen-Controller'
    }).when('/pedigrees', {
        templateUrl: 'views/admin/pedigrees.html',
        controller: 'PedigreesController'
    }).otherwise({
        redirectTo: '/home'
    });
}]);
