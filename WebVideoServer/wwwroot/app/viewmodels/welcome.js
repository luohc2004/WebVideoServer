define(['durandal/app','knockout'], function (app,ko) {
    var ctor = function () {
        this.displayName = 'Welcome to the Durandal Starter Kit!';
        this.description = 'Durandal is a cross-device, cross-platform client framework written in JavaScript and designed to make Single Page Applications (SPAs) easy to create and maintain.';

        this.lang = {
            columns: {  // i18n key value set
                _id: 'ID',
                title: 'Title',
                desc: 'Description',
                date: 'Start Date'
            }
        };

        this.results = ko.observableArray([
            { _id: 1, title: 'A title', desc: 'A description', date: new Date() },
            { _id: 1, title: 'B title', desc: 'b description', date: new Date() }
        ]);
    }

    return ctor;
});