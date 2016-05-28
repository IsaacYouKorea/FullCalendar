/**
 * Created by YJIsaac on 2016. 5. 28..
 */

var InputDialog =(function(){
    "use strict"

    var index = 1,
        type = "list",
        dom = $("#inputDialog"),
        domTitle = null,
        domCreate = null,
        domCancel = null;


    var show = function(){
        dom.fadeIn();
    }

    var hide = function(){
        console.log(dom);
        dom.fadeOut();
        domTitle.val(null);
        console.log("hide");
    }


    domTitle = dom.find("#title");
    domCreate = dom.find("#btnCreate");
    domCancel = dom.find("#btnCancel");

    domCreate.click(function(){
        console.log("create");
        app.insertEvent(inputData);
    });

    domCancel.click(function(){
        console.log("cancel");
        hide();
    });


    return {
        init:function(){
            hide();
        },

        show:function( _start, _end){
            show();
        },

        hide:function(){
            hide();
        },

        testApp:function(){
            app.callApp();
        }
    }

});