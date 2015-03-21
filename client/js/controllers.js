$(function() {
  var mediumApp = angular.module('mediumApp', []);

  mediumApp.controller('GamepadConfigCtrl', function ($scope) {

    $scope.gamepads = [
      {
        axes: {
          0: 1.1,
          1: 0.9,
          2: 0.8
        }
      }
    ];

  });
});