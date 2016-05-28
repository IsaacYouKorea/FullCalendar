/**
 * Created by YJIsaac on 2016. 5. 28..

    FullCalendar API

    추가기능 :
        1.  과목 추가하기 (insertClass(강의 이름, 강의시작날짜 강의종료날짜 강의 시작시간 강의 끝나는 시간));



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
            dragOpacity:0.75,
            defaultDate: '2016-05-12',
            selectable: true,
            selectHelper: false,
            select: function(start, end, jsEvent){
                console.log(jsEvent);
                app.inputDialog.init(start, end);
                app.inputDialog.show(jsEvent.pageX, jsEvent.pageY);
            },
            editable: true,
            eventLimit: true, // allow "more" link when too many events,
            droppable: true, // this allows things to be dropped onto the calendar
            drop: function() {
                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                }
            },
            events: _data
        });
    }

    var show = function(){

    }

    var hide = function(){

    }

    var filter = function(){

    }

    var insertEvent = function(_data){
        dom.fullCalendar('renderEvent', _data, true); // stick? = true
        dom.fullCalendar('unselect');
    }



    return {
        init:function(_data){
            console.log(_data);
            init(_data);
        },

        insertEvent:function(_data){
            insertEvent(_data);
        },

        insertClass:function(_title, _start, _end, _sthour, _endhour, _className){

            var startDate = new Date(_start);
            var endDate = new Date(_end);

            while(startDate <= endDate){

                var startTime = new Date(startDate.getTime());
                startTime.setHours(_sthour);

                var endTime = new Date(startDate.getTime());
                endTime.setHours(_endhour);

                startDate.setDate(startDate.getDate() + 7);
                insertEvent({"title":_title, "start":startTime, "end":endTime, "className":_className});
            }

        },

        removeEvent:function(){

        },

        updateEvent:function(){

        },

        filter:function(_selector){
            dom.find("."+_selector).addClass("notice");
            dom.find(".fc-event").not("."+_selector).removeClass("notice");
            //$(".fc-content").not(_selector).removeClass("notice");
        }


    }

});