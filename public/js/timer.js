$(function () {
    //window.setInterval("refresh()", 2*1000);
    window.setInterval("refreshTime()", 1000);

    startmarquee("left-list-content",50, 1, 2000);
    startmarquee("right-list-content",50, 1, 2000);
})


var refresh = function () {
    var wrapArr = $("#left-list .row-content");
    $("#left-list .row-content").slideUp(500,function () {
            $("#left-list .row-content").slideDown(500);
    });
}

var refreshTime = function () {
    $("#sys-date .time").empty();
    $("#sys-date .time").append(moment().format("hh:mm:ss"));
}

/**
 * @param domId 容器id
 * @param lh 一次滚动高度
 * @param speed 速度
 * @param delay 停留时间
 */
function startmarquee(domId, lh, speed, delay) {
    var t;
    var oHeight = 250;/** div的高度 **/
    var p = false;
    var o = document.getElementById(domId);
    var preTop = 0;
    o.scrollTop = 0;
    function start() {
        t = setInterval(scrolling, speed);
        o.scrollTop += 1;
    }
    function scrolling() {
        if (o.scrollTop % lh != 0
            && o.scrollTop % (o.scrollHeight - oHeight - 1) != 0) {
            preTop = o.scrollTop;
            o.scrollTop += 1;
            if (preTop >= o.scrollHeight || preTop == o.scrollTop) {
                o.scrollTop = 0;
            }
        } else {
            clearInterval(t);
            if(o.scrollTop == oHeight)
                o.scrollTop = 0;
            setTimeout(start, delay);
        }
    }
    setTimeout(start, delay);
}