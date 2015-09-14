(function () {
    "use strict";

    var app = angular.module("app", ["ui.calendar"]);

    function myDriveController($scope) {
        $scope.pageNumber = 1;
        $scope.login = function() {
            $scope.pageNumber += 1;
        };
        $scope.uiConfig = {
            calendar: {
                height: 450,
                editable: true,
                header: {
                    left: 'month basicWeek basicDay agendaWeek agendaDay',
                    center: 'title',
                    right: 'today prev,next'
                },
                dayClick: $scope.alertEventOnClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize
            }
        };
    }

    myDriveController.$inject = ["$scope"];
    app.controller("MyDriveController", myDriveController);
})();
