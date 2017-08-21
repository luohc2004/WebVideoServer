define(['durandal/app', 'knockout'], function (app, ko) {
    var ctor = function () {
        this.displayName = '天天学舞蹈的视频';
        var data = [];
        for (var i = 1; i < 23; i++) {
            data.push({
                _id: i, title: '视频' + i, uploadDate: (new Date()).toLocaleDateString(), captureDate: (new Date()).toLocaleDateString()
            });
        }
        this.gridConfig = {
            data: data
        };
    }
    return ctor;
});