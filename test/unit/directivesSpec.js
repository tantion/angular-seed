'use strict';

/* jasmine specs for directives go here */
/* jshint ignore:start */

describe('directives', function() {
    beforeEach(module('todoApp'));

    describe('customer-color', function() {
        it('should use customer color', function() {
            inject(function($compile, $rootScope) {
                var element = $compile('<span custom-color="rgb(0, 0, 0)"></span>')($rootScope);
                expect(element.css('background-color')).toEqual('rgb(0, 0, 0)');
            });
        });
    });
});
