$(function () {
    var mychart1 = echarts.init(document.getElementById('chart-left-one'));
    mychart1.setOption(option1);

    var mychart2 = echarts.init(document.getElementById('chart-left-two'));
    mychart2.setOption(option2);

    $("#sys-date .date").append(moment().format("YYYY年 MM月 DD日 周 ")+NumberToChinese(moment().format("E"))+"<img src='img/timg.jpg' style='width: 15px;height: 15px;margin: 0 10px'/>");

    var mychart3 = echarts.init(document.getElementById('chart-right-one'));
    mychart3.setOption(right_top_option);
    setInterval(function (){
        for(var i=0;i< right_top_option.series[0].data.length;i++){
            right_top_option.series[0].data[i] = Math.ceil(Math.random()*10);
            right_top_option.series[1].data[i] = (Math.random()*3).toFixed(2) - 0;
        }
        mychart3.setOption(right_top_option);
    },2000)

    var mychart4 = echarts.init(document.getElementById('chart-right-two'));
    mychart4.setOption(option4);
    setInterval(function (){
        option4.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
        option4.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;
        option4.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0;
        option4.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0;
        mychart4.setOption(option4);
    },2000)

    var bottom_one_chart = echarts.init(document.getElementById('bottom_one_chart'));
    bottom_one_chart.setOption(bottom_one_option);
    var bottom_two_chart = echarts.init(document.getElementById('bottom_two_chart'));
    bottom_two_chart.setOption(bottom_two_option);
    var bottom_three_chart = echarts.init(document.getElementById('bottom_three_chart'));
    bottom_three_chart.setOption(bottom_three_option);

    var mapchart = echarts.init(document.getElementById('chart-map'));
    mapchart.setOption(map_option);

    var number = Math.ceil(Math.random()*10000000000);
    setNumber(number);

    var temp = number,t;
    setInterval(function () {
        var scale = 50;
        if(temp < number+scale){
            if(t)
                clearInterval(t);
            t = setInterval(function () {
                temp ++;
                if(temp == number+scale)
                    clearInterval(t);
                else
                    setNumber(temp);
            },20);
        }else{
            if(t)
                clearInterval(t);
            t = setInterval(function () {
                temp --;
                if(temp == number)
                    clearInterval(t);
                else
                    setNumber(temp);
            },20);
        }
    },5000);
    function setNumber(num) {
        var html = '';
        var numStr = num.toString();
        for(var i=0;i<numStr.length;i++){
            html += '<span style="margin-left: 20px">'+numStr.charAt(i)+'</span>'
        }
        $("#number").empty();
        $("#number").append('<span>￥</span>'+html);
    }

})

var option1 = {
    color:['#c9f5f5','#ff5173'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        type:'plain',
        left : 'center',
        top:'bottom',
        data:['自营','代理'],
        textStyle:{color:'#FFFFFF'}
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '75%',
            center: ['50%', '40%'],
            label: {
                normal: {
                    position: 'inside',
                    formatter:'{d}%'
                }
                },
            data: [
                {value: 60, name: '自营'},
                {value: 40, name: '代理'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};



var option2 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直达', selected:true},
                {value:679, name:'营销广告'},
                {value:1548, name:'搜索引擎'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:335, name:'直达'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1048, name:'百度'}
            ]
        }
    ]
};

var option4 = {
    tooltip : {
        formatter: "{a} <br/>{c} {b}"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'速度',
            type:'gauge',
            min:0,
            max:220,
            splitNumber:11,
            radius: '50%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
                    width: 3,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :15,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :25,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {           // 分隔线
                shadowColor : '#fff', //默认透明
                shadowBlur: 5
            },
            title : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 20,
                    fontStyle: 'italic',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            detail : {
                backgroundColor: 'rgba(30,144,255,0.8)',
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '50%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff'
                }
            },
            data:[{value: 40, name: 'km/h'}]
        },
        {
            name:'转速',
            type:'gauge',
            center : ['25%', '55%'],    // 默认全局居中
            radius : '30%',
            min:0,
            max:7,
            endAngle:45,
            splitNumber:7,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.29, 'lime'],[0.86, '#1e90ff'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width:5,
                shadowColor : '#fff', //默认透明
                shadowBlur: 5
            },
            title : {
                offsetCenter: [0, '-30%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontStyle: 'italic',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            detail : {
                //backgroundColor: 'rgba(30,144,255,0.8)',
                // borderWidth: 1,
                borderColor: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                width: 80,
                height:30,
                offsetCenter: [25, '20%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff'
                }
            },
            data:[{value: 1.5, name: 'x1000 r/min'}]
        },
        {
            name:'油表',
            type:'gauge',
            center : ['75%', '50%'],    // 默认全局居中
            radius : '30%',
            min:0,
            max:2,
            startAngle:135,
            endAngle:45,
            splitNumber:2,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                },
                formatter:function(v){
                    switch (v + '') {
                        case '0' : return 'E';
                        case '1' : return 'Gas';
                        case '2' : return 'F';
                    }
                }
            },
            splitLine: {           // 分隔线
                length :15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width:2,
                shadowColor : '#fff', //默认透明
                shadowBlur: 5
            },
            title : {
                show: false
            },
            detail : {
                show: false
            },
            data:[{value: 0.5, name: 'gas'}]
        },
        {
            name:'水表',
            type:'gauge',
            center : ['75%', '50%'],    // 默认全局居中
            radius : '30%',
            min:0,
            max:2,
            startAngle:315,
            endAngle:225,
            splitNumber:2,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                show: false
            },
            axisLabel: {
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                },
                formatter:function(v){
                    switch (v + '') {
                        case '0' : return 'H';
                        case '1' : return 'Water';
                        case '2' : return 'C';
                    }
                }
            },
            splitLine: {           // 分隔线
                length :15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width:2,
                shadowColor : '#fff', //默认透明
                shadowBlur: 5
            },
            title : {
                show: false
            },
            detail : {
                show: false
            },
            data:[{value: 0.5, name: 'gas'}]
        }
    ]
};


