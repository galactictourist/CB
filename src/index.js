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
import './ctrl/NewBullController'
import './ctrl/NewSteerController'

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
