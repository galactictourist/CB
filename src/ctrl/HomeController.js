import {
    cattleBarn
} from '../app'
import {
    Ranch
} from '../db'

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
    }
});
