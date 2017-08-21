define(['durandal/app', 'knockout'], function (app, ko) {
    var ctor = function () {
        this.displayName = '天天学舞蹈的视频';

        this.lang = {
            columns: {  // i18n key value set
                _id: 'ID',
                title: '名称',
                uploadDate: '上传时间',
                captureDate: '拍摄时间'
            }
        };

        this.results = ko.observableArray([
            {
                _id: 1, title: '视频1', uploadDate: (new Date()).toLocaleDateString(), captureDate: (new Date()).toLocaleDateString(), onClick: function () {
                    alert(this.title);

                }
            },
            { _id: 2, title: '视频2', uploadDate: (new Date()).toLocaleDateString(), captureDate: (new Date()).toLocaleDateString() },
        ]);

        for (var i = 3; i < 23; i++) {
            this.results.push({
                _id: i, title: '视频' + i, uploadDate: (new Date()).toLocaleDateString(), captureDate: (new Date()).toLocaleDateString()
            });
        }
    }
    return ctor;
});