
$(document).ready(function(){
    let [milliseconds,  seconds, minutes, hours]=[0,0,0,0];
    let int =null;
    $("#startTimer").click(function(){
        if(int!==null){
            clearInterval(int);
        }
        int = setInterval(displayTimer,10);
    });
    function displayTimer(){
        milliseconds+=10;
        seconds=milliseconds===1000?(milliseconds=0,seconds+1):seconds;
        minutes=seconds===60?(seconds=0,minutes+1):minutes;
        minutes=seconds===60?(seconds=0,minutes+1):minutes;
        hours=minutes===60?(minutes=0,hours+1):hours;
        let h=String(hours).padStart(2,"0");
        let m=String(minutes).padStart(2,"0");
        let s=String(seconds).padStart(2,"0");
        let ms=String(milliseconds).padStart(3,"0");
        $(".timerDisplay").html(h+" : "+m+" : "+s+" : "+ms);
    }
    $("#pauseTimer").click(function(){
        clearInterval(int);
    });
    $("#resetTimer").click(function(){
        clearInterval(int);
        [milliseconds,  seconds, minutes, hours]=[0,0,0,0];
        $(".timerDisplay").html("00 : 00 : 00 : 000");
    });

    //displayTimer();
});
