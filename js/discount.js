/**
 * Created by shan on 2018/1/21.
 */
$(function () {
  $.ajax({
    type:'get',
    url:'http://127.1.0.0:9090/api/getdiscountproduct',
    data:{
      productid:getParam('productid')
    },

    success: function (re) {
      console.log(re);
      $('.main').prepend(template('tpl1',re));
    }
  })

});