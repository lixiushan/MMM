/**
 * Created by shan on 2018/1/20.
 */
$(function () {

  $.ajax({
    type:'get',
    url:'http://127.1.0.0:9090/api/getmoneyctrlproduct',
    data:{
      productid:getParam('productid')
    },
    success: function (re) {
      console.log(re);
      $('.main').prepend(template('tpl1',re));
      $('.content p>img').addClass('img1').addClass('fr');
    }
  });



});