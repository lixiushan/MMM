/**
 * Created by shan on 2018/1/21.
 */

$(function(){

  $.ajax({
    type:'get',
    url:'http://127.1.0.0:9090/api/getbaicaijiatitle',
    success: function (re) {
      console.log(re);
      $('#wrapper').html(template('tpl1',re));
      $(window).trigger('resize');
      new IScroll('#wrapper',{
        scrollY:false,
        scrollX:true
      });
      render();
    }
  });


  // 监听窗口
  $(window).on('resize', function () {
    // 由于windth方法获取的宽度会自动四舍五入，
    // 与页面实际渲染值相差小数点，遂+1，防止ul整个宽度不够
    var ulWidth = 0;
    $('#wrapper li').each(function () {
      var liWidth = parseFloat(window.getComputedStyle(this).width);
      ulWidth += liWidth;
    });
    $('#wrapper ul').width(Math.ceil(ulWidth));
  });
  function render(id){
    $.ajax({
      type:'get',
      url:'http://127.1.0.0:9090/api/getbaicaijiaproduct',
      data:{
        titleid:id || 0
      },
      success: function (re) {
        console.log(re);
        $('.list ul').html(template('tpl2',re));
      }
    });
  }


  $('#wrapper').on('click','a', function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
    var id = $(this).data('id');
    render(id);
  })
});