'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */
/* jshint ignore:start */

describe('todoApp', function() {

    browser.get('index.html');

    it('should visited', function() {
        var app = element.all(by.css('[ng-app="todoApp"]'));
        app.count().then(function (len) {
            expect(len).toEqual(1);
        });
    });

    describe('app action', function() {

        beforeEach(function() {
            browser.get('index.html');
        });

        it('should add one note', function() {
            var note = element(by.model('note')),
                btn = element(by.id('add-note'));
            note.sendKeys('note3');
            btn.click();

            var list = element.all(by.css('.list-group .list-group-item')).last();
            expect(list.getText()).toEqual('note3');
        });

    });
});
