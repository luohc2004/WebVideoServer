define(['durandal/app', 'knockout','durandal/system','plugins/router'], function (app, ko,sys,router) {
    var ctor = function () {
        this.displayName = '天天学舞蹈的视频';
        var data = [];
        for (var i = 1; i < 23; i++) {
            data.push({
                _id: i, title: '视频' + i, uploadDate: (new Date()).toLocaleDateString(), captureDate: (new Date()).toLocaleDateString()
            });
        }
        this.gridConfig = {
            data: data,
            onRowSelect:function (row) {
              sys.log("navigate to detail",row._id);  
              router.navigate('detail/'+row._id);                
            }
        };
    }
    return ctor;
});