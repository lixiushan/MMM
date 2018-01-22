/**
 * Created by shan on 2018/1/21.
 */

$(function () {
  $.ajax({
    type:'get',
    url:'http://127.1.0.0:9090/api/getcouponproduct',
    data:{
      couponid:getParam('couponid')
    },
    success: function (re) {
      console.log(re);
      $('.list ul').html(template('tpl1',re));
      $('.mask ul').html(template('tpl2',re));
      //$(window).on('load', function () {
      //  var liWidth = $('.mask ul li').eq(0).outerWidth(true);//0
      //  var ulWidth = liWidth*re.result.length;
      //  console.log(liWidth);
      //});
      var liWidth = $('.mask ul li img').width();
      var ulWidth = liWidth*re.result.length;
      //console.log(liWidth, ulWidth);
      $('.mask ul').width(ulWidth);
    }
  });


  var index;
  $('.list ul').on('click','li', function () {
    //console.log($(this).find('img'));
    index = $(this).data('index');
    $('.mask ul').css('transform','translateX(-'+200*index+'px)');
    $('.mask').show();
    //$('.mask img').attr('src',$(this).find('img').attr('src'));
  });

  $('.arr-left').on('click', function () {

    index++;
    if(index > $('.mask li').length-1){
      index = 0;
      $('.mask ul').css('transform','translateX(-'+200*index+'px)');
    }else{
      $('.mask ul').css('transform','translateX(-'+200*index+'px)');
    }

    //alert(1)

  });
  $('.arr-right').on('click', function () {

    index--;
    if(index < 0){
      index = $('.mask li').length-1;
      $('.mask ul').css('transform','translateX(-'+200*index+'px)');
      return;
    }
    $('.mask ul').css('transform','translateX(-'+200*index+'px)');
    //alert(1)

  });
});
