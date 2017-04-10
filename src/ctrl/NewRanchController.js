import {
    cattleBarn
} from '../app'
import {
    Ranch
} from '../db'

cattleBarn.controller("NewRanchController", function ($scope, $window, $location) {
    $scope.ranch = {}; // model to hold form values
    //$scope.ranch.name = "ranch";
    $scope.breedass = {}; // model to hold breed associations

    $scope.showRegBreedAss = 0; //counter to hold number of regbreedass forms to show
    console.log($scope.showRegBreedAss);

    //onchange add 1 on ranch type radio buttons
    $scope.ranchTypeCheck = function (value) {
        if (value == "commercial") {
            $scope.showRegBreedAss = 0;
        } else {
            $scope.showRegBreedAss = 1;
        }
    }

    //increment counter up to 2
    $scope.addRegBreedAss = function () {
        if ($scope.showRegBreedAss <= 2) {
            $scope.showRegBreedAss++;
            console.log($scope.showRegBreedAss);
        }
    }

    //check counter to show regbreedass forms
    $scope.checkBreedAss = function (val) {
        if (val == 1) {
            if ($scope.showRegBreedAss > 0) {
                return true;
            }
        }

        if (val == 2) {
            if ($scope.showRegBreedAss > 1) {
                return true;
            }
        }

        if (val == 3) {
            if ($scope.showRegBreedAss > 2) {
                return true;
            }
        }
    }

    $scope.save = function () {
        console.log('pre-save breedasss ' + JSON.stringify($scope.breedass));
        if (Object.keys($scope.ranch).length == 0) {
            $window.alert('nothing to save');
        } else {
            if (Object.keys($scope.breedass).length == 0) {
                $scope.breedass = {};
                $scope.ranch.breedass = $scope.breedass;
            } else {
                $scope.ranch.breedass = $scope.breedass;
            }

            //give ranch id to search on
            $scope.ranch.ranchId = 'current';

            Ranch.insert($scope.ranch, function (err, newItem) {
                console.log(newItem._id);
            });

            $scope.ranch = {};
            $scope.breedass = {};
            $scope.showRegBreedAss = 0;

            $window.alert('Ranch info saved');

            $location.path('/home');
        }
    }

    $scope.clear = function () {
        if ($window.confirm('Are you sure?')) {
            $scope.ranch = {};
            $scope.breedass = {};
            $scope.showRegBreedAss = 0;
        }
    }
});
