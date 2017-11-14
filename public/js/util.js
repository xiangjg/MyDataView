var chnNumChar = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
var chnUnitSection = ["", "万", "亿", "万亿", "亿亿"];
var chnUnitChar = ["", "十", "百", "千"];

function NumberToChinese(num) {
    var unitPos = 0;
    var strIns = '', chnStr = '';
    var needZero = false;

    if (num === 0) {
        return chnNumChar[0];
    }

    while (num > 0) {
        var section = num % 10000;
        if (needZero) {
            chnStr = chnNumChar[0] + chnStr;
        }
        strIns = SectionToChinese(section);
        strIns += (section !== 0) ? chnUnitSection[unitPos] : chnUnitSection[0];
        chnStr = strIns + chnStr;
        needZero = (section < 1000) && (section > 0);
        num = Math.floor(num / 10000);
        unitPos++;
    }

    return chnStr;
}

function SectionToChinese(section) {
    var strIns = '', chnStr = '';
    var unitPos = 0;
    var zero = true;
    while (section > 0) {
        var v = section % 10;
        if (v === 0) {
            if (!zero) {
                zero = true;
                chnStr = chnNumChar[v] + chnStr;
            }
        } else {
            zero = false;
            strIns = chnNumChar[v];
            strIns += chnUnitChar[unitPos];
            chnStr = strIns + chnStr;
        }
        unitPos++;
        section = Math.floor(section / 10);
    }
    return chnStr;
}

//全屏
function fullScreen() {
    var element= document.documentElement; //若要全屏页面中div，var element= document.getElementById("divID");
    //IE 10及以下ActiveXObject
    if (window.ActiveXObject)
    {
        var WsShell = new ActiveXObject('WScript.Shell')
        WsShell.SendKeys('{F11}');
    }
    //HTML W3C 提议
    else if(element.requestFullScreen) {
        element.requestFullScreen();
    }
    //IE11
    else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
    // Webkit (works in Safari5.1 and Chrome 15)
    else if(element.webkitRequestFullScreen ) {
        element.webkitRequestFullScreen();
    }
    // Firefox (works in nightly)
    else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    }
}

//退出全屏
function fullExit(){
    var element= document.documentElement;//若要全屏页面中div，var element= document.getElementById("divID");
    //IE ActiveXObject
    if (window.ActiveXObject)
    {
        var WsShell = new ActiveXObject('WScript.Shell')
        WsShell.SendKeys('{F11}');
    }
    //HTML5 W3C 提议
    else if(element.requestFullScreen) {
        document.exitFullscreen();
    }
    //IE 11
    else if(element.msRequestFullscreen) {
        document.msExitFullscreen();
    }
    // Webkit (works in Safari5.1 and Chrome 15)
    else if(element.webkitRequestFullScreen ) {
        document.webkitCancelFullScreen();
    }
    // Firefox (works in nightly)
    else if(element.mozRequestFullScreen) {
        document.mozCancelFullScreen();
    }
}