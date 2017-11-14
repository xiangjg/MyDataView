var geoCoordMap = {"贵阳市":[106.71,26.63],"遵义市":[106.97,27.88],"铜仁市":[108.55,27.97],"毕节市":[105.7,27.22],"六盘水市":[104.91,26.49],"安顺市":[106.05,26.2],"黔东南苗族侗族自治州":[108.67,26.64],"黔西南布依族苗族自治州":[105.33,25.15],"黔南布依族苗族自治州":[107.06,25.81],"台江县":[108.31,26.63],"桐梓县":[106.86,28.42],"荔波县":[107.96,25.38],"镇远县":[108.52,27.08],"紫云苗族布依族自治县":[106.2,25.7],"兴仁县":[105.23,25.53],"盘县":[104.64,25.81],"从江县":[108.71,25.68],"松桃苗族自治县":[108.99,28.17],"织金县":[105.75,26.66],"麻江县":[107.6,26.45],"纳雍县":[105.28,26.8],"金沙县":[106.26,27.43],"三穗县":[108.8,26.93],"汇川区":[106.97,27.88],"安龙县":[105.33,25.15],"岑巩县":[108.69,27.35],"镇宁布依族苗族自治县":[105.63,25.8],"务川仡佬族苗族自治县":[107.91,28.63],"湄潭县":[107.47,27.79],"观山湖区":[106.6,26.64],"丹寨县":[107.93,26.25],"黔西县":[106.12,27.05],"凯里市":[107.94,26.6],"南明区":[106.74,26.51],"威宁彝族回族苗族自治县":[104.18,26.98],"施秉县":[108.18,27.05],"兴义市":[104.85,25],"罗甸县":[106.73,25.41],"石阡县":[108.15,27.5],"惠水县":[106.74,25.99],"赤水市":[105.92,28.52],"绥阳县":[107.24,28.16],"乌当区":[106.89,26.73],"雷山县":[108.13,26.3],"平坝区":[106.18,26.44],"大方县":[105.7,27.22],"福泉市":[107.5,26.79],"播州区":[106.86,27.63],"册亨县":[105.82,24.97],"玉屏侗族自治县":[108.98,27.33],"普安县":[105,25.74],"正安县":[107.39,28.5],"思南县":[108.17,27.84],"普定县":[105.73,26.34],"都匀市":[107.45,26.14],"水城县":[104.91,26.49],"息烽县":[106.67,27.15],"锦屏县":[109.11,26.58],"云岩区":[106.71,26.63],"习水县":[106.29,28.47],"黄平县":[107.9,26.99],"仁怀市":[106.3,27.87],"贞丰县":[105.67,25.42],"余庆县":[107.73,27.41],"长顺县":[106.42,25.97],"沿河土家族自治县":[108.35,28.65],"凤冈县":[107.74,27.95],"白云区":[106.67,26.74],"黎平县":[109.07,26.12],"清镇市":[106.33,26.68],"赫章县":[104.6,27.12],"剑河县":[108.67,26.64],"钟山区":[104.85,26.65],"独山县":[107.57,25.62],"瓮安县":[107.42,27.19],"平塘县":[107.06,25.81],"江口县":[108.8,27.72],"西秀区":[106.05,26.2],"三都水族自治县":[107.95,25.85],"德江县":[108.1,28.32],"修文县":[106.62,26.98],"贵定县":[107.18,26.43],"六枝特区":[105.42,26.26],"天柱县":[109.24,26.93],"红花岗区":[106.92,27.68],"望谟县":[106.18,25.26],"万山区":[109.26,27.52],"晴隆县":[105.22,25.87],"道真仡佬族苗族自治县":[107.61,28.92],"印江土家族苗族自治县":[108.55,27.97],"龙里县":[107,26.5],"榕江县":[108.41,26.04],"花溪区":[106.68,26.38],"开阳县":[107.01,27.07],"七星关区":[105.284852,27.302085]};


var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
var mapData = [
    {name: "乌当区", value: 10},
    {name: "花溪区", value:10},
    {name: "南明区", value:10},
    {name: "云岩区", value: 10},
    {name: "白云区", value: 10},
    {name: "观山湖区", value:10},
    {name: "息烽县", value:10},
    {name: "开阳县", value:10},
    {name: "修文县", value:10},
    {name: "清镇市", value:10},
    {name: "红花岗区", value: 20},
    {name: "汇川区", value: 20},
    {name: "播州区", value:20},
    {name: "桐梓县", value: 20},
    {name: "正安县", value:20},
    {name: "绥阳县", value:20},
    {name: "务川仡佬族苗族自治县", value:20},
    {name: "道真仡佬族苗族自治县", value:20},
    {name: "凤冈县", value:20},
    {name: "余庆县", value:20},
    {name: "湄潭县", value:20},
    {name: "赤水市", value:20},
    {name: "习水县", value:20},
    {name: "仁怀市", value:20},
    {name: "六枝特区", value: 90},
    {name: "盘县", value:90},
    {name: "钟山区", value:90},
    {name: "水城县", value: 90},
    {name: "西秀区", value: 30},
    {name: "普定县", value:30},
    {name: "关岭布依族苗族自治县", value: 30},
    {name: "镇宁布依族苗族自治县", value:30},
    {name: "紫云苗族布依族自治县", value: 30},
    {name: "平坝区", value:30},
    {name: "织金县", value: 40},
    {name: "金沙县", value: 40},
    {name: "黔西县", value:40},
    {name: "大方县", value:40},
    {name: "七星关区", value:40},
    {name: "纳雍县", value: 40},
    {name: "赫章县", value:40},
    {name: "威宁彝族回族苗族自治县",value:40},
    {name: "碧江区", value:80},
    {name: "万山区", value:80 },
    {name: "江口县", value: 80},
    {name: "玉屏侗族自治县", value: 80},
    {name: "石阡县", value:80 },
    {name: "思南县", value:80 },
    {name: "印江土家族苗族自治县", value: 80},
    {name: "德江县", value: 80},
    {name: "沿河土家族自治县", value:80 },
    {name: "松桃苗族自治县", value:80 },
    {name: "兴义市", value:60},
    {name: "贞丰县", value:60 },
    {name: "晴隆县", value:60 },
    {name: "普安县", value:60 },
    {name: "兴仁县", value:60 },
    {name: "望谟县", value:60 },
    {name: "册亨县", value: 60},
    {name: "安龙县", value:60 },
    {name: "凯里市", value:50 },
    {name: "三穗县", value: 50},
    {name: "黄平县", value:50 },
    {name: "镇远县", value:50 },
    {name: "施秉县", value: 50},
    {name: "天柱县", value: 50},
    {name: "岑巩县", value:50 },
    {name: "剑河县", value: 50},
    {name: "锦屏县", value:50 },
    {name: "台江县", value:50 },
    {name: "榕江县", value:50 },
    {name: "丹寨县", value: 50},
    {name: "黎平县", value: 50},
    {name: "麻江县", value: 50},
    {name: "从江县", value:50 },
    {name: "雷山县", value:50 },
    {name: "都匀市", value:70 },
    {name: "荔波县", value:70 },
    {name: "福泉市", value:70 },
    {name: "贵定县", value:70 },
    {name: "瓮安县", value: 70},
    {name: "独山县", value:70 },
    {name: "长顺县", value:70 },
    {name: "罗甸县", value:70 },
    {name: "龙里县", value:70 },
    {name: "平塘县", value:70 },
    {name: "三都水族自治县", value:70 },
    {name: "惠水县", value:70 },

    {name:"贵阳市",value:200},
    {name:"安顺市",value:150},
    {name:"毕节市",value:150},
    {name:"六盘水市",value:150},
    {name:"遵义市",value:150},
    {name:"铜仁市",value:150},
    {name:"黔东南苗族侗族自治州",value:150},
    {name:"黔西南布依族苗族自治州",value:150},
    {name:"黔南布依族苗族自治州",value:150}
];

var map_option = {
    title: {
        text: '标题XXXXXXXX',
        subtext: '副标题XXXXX',
        x:'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name + ' : ' + params.value[2];
        }
    },
    visualMap: [{
        type: 'continuous',
        seriesIndex: 0,
        text: ['bar3D'],
        calculable: true,
        max: 300,
        inRange: {
            color: ['#87aa66', '#eba438', '#d94d4c']
        }
    }, {
        type: 'continuous',
        seriesIndex: 1,
        text: ['scatter3D'],
        left: 'right',
        max: 100,
        calculable: true,
        inRange: {
            color: ['#000', 'blue', 'purple']
        }
    }],
    geo3D: {
        map: '贵州',
        roam: true,
        itemStyle: {
            areaColor: '#1d5e98',
            opacity: 1,
            borderWidth: 0.4,
            borderColor: '#000'
        },
        label: {
            show: true,
            textStyle: {
                color: '#000', //地图初始化区域字体颜色
                fontSize: 8,
                opacity: 1,
                backgroundColor: 'rgba(0,23,11,0)'
            },
        },
        emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 3,
                    backgroundColor: 'rgba(0,23,11,0)'
                }
            }
        },
        shading: 'lambert',
        light: { //光照阴影
            main: {
                color: '#fff', //光照颜色
                intensity: 2, //光照强度
                shadowQuality: 'high', //阴影亮度
                shadow: true, //是否显示阴影

            }
        }
    },
    series: [
        {
            name: 'bar3D',
            type: 'bar3D',
            coordinateSystem: 'geo3D',
            data: convertData(mapData),
            barSize: 0.5, //柱子粗细
            symbolSize: function (val) {
                return val[2] / 5;
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            }
        },{
            name: 'scatter3D',
            type: "scatter3D",
            coordinateSystem: 'geo3D',
            symbol: 'pin',
            symbolSize: 30,
            opacity: 1,
            label: {
                show: false,
                formatter: '{b}'
            },
            itemStyle: {
                borderWidth: 0.5,
                borderColor: '#fff'
            },
            data: convertData([{name:"贵阳市",value:200},
                {name:"安顺市",value:150},
                {name:"毕节市",value:150},
                {name:"六盘水市",value:150},
                {name:"遵义市",value:150},
                {name:"铜仁市",value:150},
                {name:"黔东南苗族侗族自治州",value:150},
                {name:"黔西南布依族苗族自治州",value:150},
                {name:"黔南布依族苗族自治州",value:150}])
        }
    ]
};