'use strict';

// jasmine specs for services go here
/* jshint ignore:start */

describe('service', function() {
    beforeEach(module('todoApp'));

    describe('version', function() {
        beforeEach(module('todoApp'));
        it('should return current version', inject(function(version) {
            expect(version).toEqual('0.1');
        }));
    });

    describe('notesFactory', function() {
        it('should get notes', inject(function (notesFactory) {
            var notes = notesFactory.get();
            expect(angular.isArray(notes)).toBe(true);
        }));
        it('should put note', inject(function (notesFactory) {
            var note = 'note1',
                notes,
                note2;
            notesFactory.put(note);
            notes = notesFactory.get();
            note2 = notes[notes.length - 1];
            expect(note).toEqual(note2);
        }));
    });
});
