# velge-angular

This is a simple AngularJS directive wrapper for the tag management library Velge
http://dscout.github.io/velge/

# Installation

Currently you'll need to clone the repo, and build:

```bash
npm install
grunt build
```

This will create a distributable you can add to your project:

```html
<script src="/lib/velge-angular.min.js"></script>
```

Add the module to your app:

```html
angular.module('MyApp', ['VelgeAngularJS'])
```

The directive can then be added straight to your HTML:

```html
<velge choices="{{velgeChoices}}"></velge>
```

Setting the options can then be done inside the controller:

```html
angular.module('MyApp')
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
```
