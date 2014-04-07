'use strict';

// jasmine specs for filters go here
/* jshint ignore:start */

describe('filter', function() {
    beforeEach(module('todoApp'));

    describe('truncate', function() {
        it('should truncate string', inject(function(truncateFilter) {
            expect(truncateFilter('12345678', 1)).toEqual('1');
            expect(truncateFilter('12345678', 0)).toEqual('');
            expect(truncateFilter('12345678', 9)).toEqual('12345678');
        }));
    });
});
