'use strict';

/* Services */
/* global localStorage: true */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('todoApp.services', [])
.value('version', '0.1')
.factory('notesFactory', function() {
    return {
        put: function(note) {
            localStorage.setItem('todo' + (Object.keys(localStorage).length + 1), note);
        },
        get: function() {
            var notes = [];
            var keys = Object.keys(localStorage);

            for(var i = 0; i < keys.length; i++) {
                notes.push(localStorage.getItem(keys[i]));
            }

            return notes;
        }
    };
}); 
