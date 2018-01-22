/**
 * Created by shan on 2018/1/19.
 */
function getParamObj(){
  //console.log(location.search);
  var paramStr = decodeURI(location.search).slice(1);
  //console.log(paramStr.slice(1));
  var paramArr = paramStr.split('&');
  var paramObj = {};
  //console.log(paramArr);
  for(var i = 0; i < paramArr.length; i++){
    var key = paramArr[i].split('=')[0];
    var value = paramArr[i].split('=')[1];
    paramObj[key] = value;
  }
  //console.log(paramObj);
  return paramObj;
}

function getParam(key){
  return getParamObj()[key];
}

