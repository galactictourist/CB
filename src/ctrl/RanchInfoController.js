import {
    cattleBarn
} from '../app'
import {
    Ranch
} from '../db'

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
