'use strict';

/* jshint ignore:start */
/* jasmine specs for controllers go here */

describe('TodoController', function(){
    var $scope;

    beforeEach(module('todoApp'));
    beforeEach(inject(function($rootScope, $controller, notesFactory) {
        $scope = $rootScope.$new();
        var ctrl = $controller('TodoController', {
            $scope: $scope,
            notesFactory: notesFactory
        });
    }));

    var len = 0;
    it('should an array notes', function() {
        expect(angular.isArray($scope.notes)).toBe(true);
        len = $scope.notes.length;
    });
    it('should add one note', function() {
        $scope.note = 'note';
        $scope.createNote();
        expect($scope.notes.length).toEqual(len + 1);
        expect($scope.notes.pop()).toEqual('note');
    });
});
