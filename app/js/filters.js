'use strict';

/* Filters */

angular.module('todoApp.filters', [])
    .filter('truncate', function() {
        return function(input, length) {
            input = String(input);
            return (input.length > length ? input.substring(0, length) : input);
        };
    });
