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
            var notes = this.get();
            notes.push(note);
            localStorage.setItem('todo', JSON.stringify(notes));
        },
        get: function() {
            var notes;
            notes = JSON.parse(localStorage.getItem('todo')) || [];
            return notes;
        }
    };
}); 
