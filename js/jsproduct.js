/**
 * Created by shan on 2018/1/21.
 */
$(function () {
  $.ajax({
    type:'get',
    url:'http://127.1.0.0:9090/api/getgsshop',
    success: function (re) {
      console.log(re);
      $('.jd ul').html(template('tpl1',re));
    }
  });

  $.ajax({
    type:'get',
    url:'http://127.1.0.0:9090/api/getgsshoparea',
    success: function (re) {
      console.log(re);
      $('.hb ul').html(template('tpl2',re));
    }
  });

  $('.item li').on('click', function () {
    var id = $(this).data('id');
    switch (id){
      case 'jd':
        $('.jd').toggleClass('active');
        break;
      case 'hb':
        $('.hb').toggleClass('active');
        break;
      case 'total':
        $('.total').toggleClass('active');
        break;
    }
  });
  $('.jd,.hb').on('click','li', function () {

    $(this).find('span').removeClass('active').addClass('now');
    $(this).siblings().find('span').addClass('active').removeClass('now');
    $(this).parent().parent().addClass('active');
    render();
  });


  function render(){
    var shopid = $('.jd li span.now').parents('li').data('shopid');
    var areaid = $('.hb li span.now').parents('li').data('areaid');
    console.log(shopid,areaid);
    $.ajax({
      type:'get',
      url:'http://127.1.0.0:9090/api/getgsproduct',
      data:{
        shopid : shopid || 0,
        areaid : areaid || 0
      },
      success: function (re) {
        //console.log(re);
        $('.content ul').html(template('tpl3',re));
      }
    });
  }
  render();
});