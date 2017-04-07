export const cattleBarn = angular.module('cattleBarn', [
    'ng', 'ngRoute', 'ui.bootstrap'
])

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
