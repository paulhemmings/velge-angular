'use strict';

describe('Directive: velge', function () {

  // load the directive's module
  beforeEach(module('VelgeAngularJS'));

  var element,
    scope,
    compile,
    mapController;

  beforeEach(inject(function ($rootScope, _$compile_) {
    scope = $rootScope.$new();
    compile = _$compile_;
  }));

  function compileDirective(tpl) {
    element = angular.element(tpl);
    compile(element)(scope);
    scope.$digest();
    // mapController = element.controller('map');
  }

  beforeEach(function() {
    scope.choices = [
      { name: 'orange' }
    ];

    element = '<velge></velge>';
    compileDirective(element);
  });

  it('element shouldn\'t be undefined', function() {
    expect(element).not.toBeUndefined();
  });

  it('should have a class of velge-container when it compiles', function(){
    expect((element[0]).className).toContain('velge-container');
  });

  describe('Rendering the controller with choices', function() {
    it('should have access to center', function() {
      expect(element.scope().choices).toBeDefined();
    });
  });

  // describe('mapController', function() {
  //
  //   var defaultIcon,
  //     currentIcon,
  //     icon,
  //     coordinates,
  //     id,
  //     group;
  //
  //   describe('addMarkerToMap()', function() {
  //
  //     it('mapController.getCurrentIcon() must be called', function() {
  //       spyOn(mapController, 'getCurrentIcon').and.callThrough();
  //       icon = mapController.getCurrentIcon();
  //       expect(mapController.getCurrentIcon).toHaveBeenCalled();
  //     });
  //
  //     it('mapController.createMapMarker() must be called', function() {
  //       spyOn(mapController, 'createMapMarker').and.callThrough();
  //       mapController.createMapMarker();
  //       expect(mapController.createMapMarker).toHaveBeenCalled();
  //     });
  //
  //     it('mapController.createMarkerWindows() must be called', function() {
  //       spyOn(mapController, 'createMarkerWindows');
  //       mapController.createMarkerWindows();
  //       expect(mapController.createMarkerWindows).toHaveBeenCalled();
  //     });
  //   });
  // });


});
