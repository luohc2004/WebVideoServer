define(['durandal/app', 'knockout','durandal/system','plugins/router'], function (app, ko,sys,router) {
  var ctor = function () {
    var data = [];
    if (app.isDebug) {
      debugData(data);
    }
    else{
      getData(data);
    }
    this.gridConfig = {
      data: data,      
      columns: [
      { header: '序号', property: '_id' },
      { header: '名称', property: 'title', canSearch : true },
      { header: '上传日期', property: '上传日期' },
      {header:'拍摄日期',property:'拍摄日期'},
      {header:'',property:'',canSort:false}
      ],
      pageSize:5
    };
    function debugData(data) {
      for (var i = 1; i < 23; i++) {
        data.push({
          _id: i, title: '视频' + i, 上传日期: (new Date()).toLocaleDateString(),
          拍摄日期: (new Date()).toLocaleDateString(),videoUrl:'/videos/1.mp4'
        });
      }
      data=ko.observableArray(data);
    }
    function getData(data) {
            // 待实现
          }
        };
        return ctor;
      });