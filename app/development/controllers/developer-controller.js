angular
    .module('DeveloperModule')
    .controller('DeveloperController', ['$scope', function($scope) {

      function initialize() {
        $scope.velgeChoices = [
            { name: 'orange' },
            { name: 'berry' },
            { name: 'tangy' }
        ];
      }
      initialize();

    }]);
