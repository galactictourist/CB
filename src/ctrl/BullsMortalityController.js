import {
    cattleBarn
} from '../app'
import {
    Ranch
} from '../db'

cattleBarn.controller("BullsMortalityController", function ($scope, $q, $routeParams, $window, $location) {
    $scope.bullId = $routeParams.param;
    console.log('bull id ' + $routeParams.param);

    $scope.getBull = function () {
        var q = $q.defer();

        Ranch.findOne({
            _id: $scope.bullId
        }, function (err, docs) {
            q.resolve(docs);
        });

        return q.promise;
    }

    $scope.bulls = {};
    $scope.promise = $scope.getBull();

    $scope.promise.then(
        function (v) {
            $scope.bulls = v
        },
        function (err) {
            console.log(err)
        }
    );

    $scope.save = function () {
        if (Object.keys($scope.bulls).length == 0) {
            $window.alert('nothing to save');
        } else {
            Ranch.update({
                _id: $scope.bullId
            }, {
                    $set: $scope.bulls
                }, {}, function () { });
            $window.alert('Bull info saved');
        }
    }

    $scope.clear = function () {
        if ($window.confirm('Are you sure?')) { }
    }
});
