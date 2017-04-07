import {
    cattleBarn
} from '../app'
import {
    Ranch
} from '../db'

cattleBarn.controller("BullsIndexController", function ($scope, $q) {
    $scope.getBulls = function () {
        var q = $q.defer();

        Ranch.find({
            type: 'bull'
        }, function (err, docs) {
            q.resolve(docs);
        });

        return q.promise;
    }

    $scope.bullList = {};
    $scope.promise = $scope.getBulls();

    $scope.promise.then(
        function (v) {
            $scope.bullList = v
        },
        function (err) {
            console.log(err)
        }
    );
});
