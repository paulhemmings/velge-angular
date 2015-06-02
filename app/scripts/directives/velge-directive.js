'use strict';

/**
 * @ngdoc directive
 * @name velge-angularjs:velge
 * @description
 * # velge
 */
angular.module('VelgeAngularJS')
  .directive('velge', ['$parse', function ($parse) {
    return {
      template: '<div class="velge-container"></div>',
      restrict: 'EA',
      transclude: true,
      replace: true,

      controller: function($scope, $element, $attrs) {

        $scope.velge = this.velge = new Velge($element, {
          placeholder: 'Choose'
        });

        this.velge.setup();

        $attrs.$observe("choices", function(target,o) {
            var choices = $parse($attrs.choices);
            $scope.velge.setOptions([]);
            choices().map(function(choice) {
                $scope.velge.addChoice(choice);
            });
        });

      }


    };
  }]);
