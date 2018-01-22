/**
 * Created by shan on 2018/1/20.
 */

$(function () {
  var height;
  var arr;
  $.ajax({
    type:'get',
    url:'http://127.1.0.0:9090/api/getinlanddiscount',
    success: function (re) {
      //console.log(re);
      arr = re.result;
      render();
      height = $('.main ul li').eq(0).outerHeight(true);
    }
  });

  function render(){
    $('.content').append(template('tpl1',{result: arr.splice(0,6)}));
  }

  var index =1;
  $(window).on('scroll', function () {

    var scrollHeight = window.pageYOffset; //滚出去的距离
    var windowHeight = $(window).height(); //窗口高度
    var heightHtml =  height * 3*index + $('.header').height();
    var distance = heightHtml - scrollHeight - windowHeight;
    console.log(distance);
    if( distance < 100 ){
      //alert(11);
      index++;
      setTimeout(function () {
        render();
      },1000);

      //return false;
    }
  });


});