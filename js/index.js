/**
 * Created by shan on 2018/1/19.
 */
$(function () {
  mui('.mui-scroll-wrapper').scroll({
    indicators: false //是否显示滚动条
  });
  $.ajax({
    type:'get',
    url:'http://127.1.0.0:9090/api/getindexmenu',
    success: function (re) {
      console.log(re);
      $('.nav').html(template('tpl1',re));
    }
  });
  $.ajax({
    type:'get',
    url:'http://127.1.0.0:9090/api/getmoneyctrl',
    success: function (re) {
      console.log(re);
      console.log($('.mui-table-view'));
      $('.mui-table-view').html(template('tpl2',re));
    }
  });
  $('.nav').on('click','.more',function () {
    //alert(1);
    $('.nav1').toggleClass('active');
  });
});