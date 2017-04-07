import './globals'
import {
    Ranch
} from './db'

import {
    cattleBarn
} from './app'

import './ctrl/NavCtrl'
import './ctrl/HomeController'
import './ctrl/NewRanchController'
import './ctrl/BullsController'
import './ctrl/BullsMortalityController'
import './ctrl/BullsMedMeasController'
import './ctrl/BullsOffspringController'
import './ctrl/CowsController'
import './ctrl/NewCowController'
import './ctrl/NewCalveController'

cattleBarn.controller("NewBullController", function ($scope, $window, $location) {
    $scope.bulls = {}; // model to hold form values
    $scope.bulls.type = "bull";
    $scope.bulls.status = "active";
    console.log('bull scope ' + JSON.stringify($scope.bulls));

    $scope.save = function () {
        if (Object.keys($scope.bulls).length == 0) {
            $window.alert('nothing to save');
        } else {
            Ranch.insert($scope.bulls, function (err, newItem) {
                console.log(newItem._id);
            });
            $scope.bulls = {};
            // $scope.breedass.length = 0;
            // $scope.showRegBreedAss = 0;

            $window.alert('New bull saved');

            //$location.path('/home');
        }
    }

    $scope.clear = function () {
        if ($window.confirm('Are you sure?')) {
            $scope.bulls = {};
            // $scope.breedass.length = 0;
            // $scope.showRegBreedAss = 0;
        }
    }

    $scope.cancel = function () {
        $scope.bulls = {};
        $location.path('/home');
    }
});

cattleBarn.controller("NewSteerController", function ($scope) {});

cattleBarn.controller("RanchInfoController", function ($scope, $q, $rootScope) {
    $scope.ranch = {};

    $scope.getRanchInfo = function () {
        var q = $q.defer();

        Ranch.findOne({
            ranchId: 'current'
        }, function (err, doc) {
            q.resolve(doc);
        });
        return q.promise;
    };

    $scope.promise = $scope.getRanchInfo();
    $scope.promise.then(
        function (v) {
            $scope.ranch = v;
            console.log(JSON.stringify($scope.ranch));
        }
    );
});
