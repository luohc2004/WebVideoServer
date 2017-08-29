define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    //Note: This module exports an object.
    //That means that every module that "requires" it will get the same object instance.
    //If you wish to be able to create multiple instances, instead export a function.
    //See the "welcome" module for an example of function export.
    var self=this;
    self.title='';
    self.videoUrl='';
    self.activate=function (_id) {
        if (app.isDebug) {
            self.title='视频'+_id+' 【'+'2017-08-21】';
            self.videoUrl='/Videos/1.mp4';
        }else{
            //get data from server
        }
    };
    self.canDeactivate=function () {
            //the router's activator calls this function to see if it can leave the screen
            return app.showMessage('Are you sure you want to leave this page?', 'Navigate', ['Yes', 'No']);
    };

    return self;
});