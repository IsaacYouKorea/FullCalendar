/**
 * Created by YJIsaac on 2016. 5. 28..
 */

var FullCalendar=(function(){
    "use strict"

    var index = 1,
        dom = $("#calendar");

    var init = function(_data){

        dom.fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            defaultDate: '2016-05-12',
            selectable: true,
            selectHelper: false,
            select: function(start, end, jsEvent){
                app.inputDialog.show();
            },
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: _data
        });

    }

    var show = function(){

    }

    var hide = function(){

    }




    return {
        init:function(_data){
            console.log("cal init");
            init(_data);
        },

        addEvent:function(){

        },

        removeEvent:function(){

        },

        updateEvent:function(){

        }
    }

});