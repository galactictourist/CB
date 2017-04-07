import {
    cattleBarn
} from '../app'
import {
    Ranch
} from '../db'

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
