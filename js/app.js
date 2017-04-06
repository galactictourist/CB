var cattleBarn = angular.module("cattleBarn", ['ng', 'ngRoute', 'ui.bootstrap']);

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

cattleBarn.controller('NavCtrl', ['$scope', function ($scope) {}]);

cattleBarn.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
  when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  }).
  when('/bulls-index', {
    templateUrl: 'views/cattle/bulls_index.html',
    controller: 'BullsIndexController'
  }).
  when('/bulls/:param', {
    templateUrl: 'views/cattle/bulls.html',
    controller: 'BullsController'
  }).
  when('/bulls/mortality/:param', {
    templateUrl: 'views/cattle/bulls_mortality.html',
    controller: 'BullsMortalityController'
  }).
  when('/bulls/med-meas/:param', {
    templateUrl: 'views/cattle/bulls_med_meas.html',
    controller: 'BullsMedMeasController'
  }).
  when('/bulls/offspring/:param', {
    templateUrl: 'views/cattle/bulls_offspring.html',
    controller: 'BullsOffspringController'
  }).
  when('/cows', {
    templateUrl: 'views/cattle/cows.html',
    controller: 'CowsController'
  }).
  when('/calves', {
    templateUrl: 'views/cattle/calves.html',
    controller: 'CalvesController'
  }).
  when('/steers', {
    templateUrl: 'views/cattle/steers.html',
    controller: 'SteersController'
  }).
  when('/heifers', {
    templateUrl: 'views/cattle/heifers.html',
    controller: 'HeifersController'
  }).
  when('/all', {
    templateUrl: 'views/cattle/all.html',
    controller: 'AllController'
  }).
  when('/new-bull', {
    templateUrl: 'views/cattle/new-bull.html',
    controller: 'NewBullController'
  }).
  when('/new-cow', {
    templateUrl: 'views/cattle/new-cow.html',
    controller: 'NewCowController'
  }).
  when('/new-calve', {
    templateUrl: 'views/cattle/new-calve.html',
    controller: 'NewCalveController'
  }).
  when('/new-steer', {
    templateUrl: 'views/cattle/new-steer.html',
    controller: 'NewSteerController'
  }).
  when('/settings', {
    templateUrl: 'views/admin/settings.html',
    controller: 'SettingsController'
  }).
  when('/ranchinfo', {
    templateUrl: 'views/admin/ranchinfo.html',
    controller: 'RanchInfoController'
  }).
  when('/contacts', {
      templateUrl: 'views/admin/contacts.html',
      controller: 'ContactsController'
    })
    .
  when('/reports', {
    templateUrl: 'views/admin/reports.html',
    controller: 'ReportsController'
  }).
  when('/sales', {
    templateUrl: 'views/admin/sales.html',
    controller: 'SalesController'
  }).
  when('/equipment-inventory', {
    templateUrl: 'views/admin/equipment-inventory.html',
    controller: 'Equip-Inv-Controller'
  }).
  when('/pastures-pens', {
    templateUrl: 'views/admin/pastures-pens.html',
    controller: 'Past-Pen-Controller'
  }).
  when('/pedigrees', {
    templateUrl: 'views/admin/pedigrees.html',
    controller: 'PedigreesController'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);

cattleBarn.controller("HomeController", function ($scope) {
  $scope.flag = false;
  $scope.dbItems = '';

  Ranch.count({}, function (err, count) {
    $scope.dbItems = count;
    console.log('dbItems count = ' + $scope.dbItems);
  });

  //load a partial here depending on if ranch is in db already
  $scope.getInclude = function () {

    console.log('in getInclude dbItems = ' + $scope.dbItems);

    if ($scope.dbItems === 0) {
      console.log('dbItems count 2 = ' + $scope.dbItems);
      $scope.flag = true; //check for existing ranch entry
    }

    if ($scope.flag) {
      return "views/new-ranch.html";
    } else {
      return "views/home-view.html";
    }
    return "";
  }
});

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
