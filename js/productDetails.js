/**
 * Created by shan on 2018/1/20.
 */
$(function () {

  $.ajax({
    type:'get',
    url:'http://127.1.0.0:9090/api/getproduct',
    data:{
      productid:getParam('productid')
    },
    success: function (re) {
      console.log(re);
      //console.log(re.result[0].bjShop);
      var index = re.result[0].productName.indexOf(' ');
      var productName = re.result[0].productName.slice(0,index);
      var category = getParam('category');
      $('.nav').html(template('tpl1',{list: productName,category:category}));
      $('.photo').html(template('tpl2',re));
      $('.img2').prev().addClass('img1');
    }
  });

  $.ajax({
    type:'get',
    url:'http://127.1.0.0:9090/api/getproductcom',
    data:{
      productid:getParam('productid')
    },
    success: function (re) {
      console.log(re);
      $('.comment .content').html(template('tpl3',re));
    }
  })


});