'use strict';

/**
 * @ngdoc directive
 * @name velge-angularjs:velge
 * @description
 * # velge
 */
angular.module('VelgeAngularJS')
  .directive('velge', function ($document, $compile) {
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

        this.velge
          .addChoice({ name: 'orange' })
          .addChoice({ name: 'berry' })
          .addChoice({ name: 'tangy' });

      }
    };
  });
