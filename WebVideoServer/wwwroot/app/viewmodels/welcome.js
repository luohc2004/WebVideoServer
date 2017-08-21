define(['durandal/app', 'knockout'], function (app, ko) {
    var ctor = function () {
        this.displayName = '天天学舞蹈的视频';
        this.gridConfig = {
            data: [{
                _id: 1, title: '视频1', uploadDate: (new Date()).toLocaleDateString(), captureDate: (new Date()).toLocaleDateString(), onClick: function () {
                    alert(this.title);

                }
            },
            { _id: 2, title: '视频2', uploadDate: (new Date()).toLocaleDateString(), captureDate: (new Date()).toLocaleDateString() },
            ]
        };
    }
    return ctor;
});