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

cattleBarn.controller("BullsMedMeasController", function ($scope, $q, $routeParams, $window, $location) {
    $('#myTabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

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

    $scope.medList = [{
            treatdate: '10/12/15',
            proc: 'eye exam'
        },
        {
            treatdate: '12/22/12',
            proc: 'tail exam'
        },
        {
            treatdate: '10/12/15',
            proc: 'eye exam'
        }
    ];

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
            }, {}, function () {});
            $window.alert('Bull info saved');
        }
    }

    $scope.clear = function () {
        if ($window.confirm('Are you sure?')) {}
    }
});

cattleBarn.controller("BullsOffspringController", function ($scope, $q, $routeParams, $window, $location) {
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

    $scope.medList = [{
            treatdate: '10/12/15',
            proc: 'eye exam'
        },
        {
            treatdate: '12/22/12',
            proc: 'tail exam'
        },
        {
            treatdate: '10/12/15',
            proc: 'eye exam'
        }
    ];

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
            }, {}, function () {});

            $window.alert('Bull info saved');
        }
    }

    $scope.clear = function () {
        if ($window.confirm('Are you sure?')) {}
    }
});

cattleBarn.controller("CowsController", function ($scope) {
    $scope.name = "Sandeep Kumar";

});

cattleBarn.controller("NewCowController", function ($scope) {});

cattleBarn.controller("NewCalveController", function ($scope) {});

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
