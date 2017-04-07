import './globals'
import {
    Ranch
} from './db'

import {
    cattleBarn
} from './app'

import './ctrl/NavCtrl'
import './ctrl/NavCtrl'

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

cattleBarn.controller("BullsController", function ($scope, $q, $routeParams, $window, $location) {
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
            }, {}, function () {

            });
            $window.alert('Bull info saved');
        }
    }

    $scope.clear = function () {
        if ($window.confirm('Are you sure?')) {}
    }
});

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
            }, {}, function () {});
            $window.alert('Bull info saved');
        }
    }

    $scope.clear = function () {
        if ($window.confirm('Are you sure?')) {}
    }
});

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
