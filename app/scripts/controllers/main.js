'use strict';

/**
 * @ngdoc function
 * @name installApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the installApp
 */

angular.module('your.module', ['akoenig.deckgrid'])
  .controller('MainCtrl', function ($scope) {
    $scope.photos = [
        {id: 'p1', 'title': 'A nice day!', src: "http://lorempixel.com/300/400/"},
        {id: 'p2', 'title': 'Puh!', src: "http://lorempixel.com/300/400/sports"},
        {id: 'p3', 'title': 'What a club!', src: "http://lorempixel.com/300/400/nightlife"}
    ];
    });

