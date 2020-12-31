var numberFormat = function (row,column,cellValue) {

    let value = cellValue
    if(value==null){
        return '-'
    }
    var param = {};
    var k = 10000,
        sizes = ['', '万', '亿', '万亿'],
        i;
        if(value < k){
            param.value =value
            param.unit=''
        }else{
            i = Math.floor(Math.log(value) / Math.log(k)); 
      
            param.value = ((value / Math.pow(k, i))).toFixed(2);
            param.unit = sizes[i];
        }

return param.value+param.unit;
}
//小数转百分数
function numberToPercent(row,column,point){
    var str=Number(point*100).toFixed(2);
    str+="%";
    return str;
}
//加百分数
function toPercent(row,column,point){
    var str=Number(point).toFixed(2);
    str+="%";
    return str;
}
//以万为单位
function wan(row,column,value){
    return numberFormat(null,null,value*10000)
}
//以千为单位
function qian(row,column,value){
    return numberFormat(null,null,value*1000)
}
//以 手 为单位
function bai(row,column,value){
    return numberFormat(null,null,value*100)
}
function yi(row,column,value){
    return numberFormat(null,null,value*100000000)
}
function limit(row,column,value){
    if(value=='U'){
        return '涨停'
    }
    return '跌停'
}

module.exports={numberFormat,toPercent,wan,qian,bai,yi,limit}