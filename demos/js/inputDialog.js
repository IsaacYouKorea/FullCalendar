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
        domCancel = null,
        dataTitle = null,
        dataStartDate = null,
        dataEndDate = null,
        dataTeam = null;

    var init = function(start, end){
        dataTitle = null;
        dataStartDate = start;
        dataEndDate = end;
        dataTeam = null;
        domTitle.val(dataTitle);
    }

    var show = function(_x, _y){
        dom.css({left:_x, top:_y});
        dom.fadeIn();
        domTitle.focus();
    }

    var hide = function(){
        console.log(dom);
        dom.hide();
        domTitle.val(null);
        console.log("hide");
    }


    domTitle = dom.find("#title");
    domCreate = dom.find("#btnCreate");
    domCancel = dom.find("#btnCancel");

    domCreate.click(function(){
        console.log("create");
        var inputData;

        var title  = domTitle.val();
        var eventData;

        if (title) {
            eventData = {
                title: title,
                start: dataStartDate,
                end: dataEndDate
            };
            console.log(eventData);
        }
        app.calendar.insertEvent(eventData);

        hide();
        init();
    });

    domCancel.click(function(){
        console.log("cancel");
        hide();
    });


    return {
        init:function(_start, _end){
            init(_start, _end);
            hide();
        },

        show:function(_x, _y){
            show(_x, _y);
        },

        hide:function(){
            hide();
        },

        testApp:function(){
            app.callApp();
        }
    }

});