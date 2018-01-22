/**
 * Created by shan on 2018/1/21.
 */
$(function () {
  console.log(getParam('brandtitleid'));
  $.ajax({
    type:'get',
    url:'http://127.1.0.0:9090/api/getbrand',
    data:{
      brandtitleid:getParam('brandtitleid')
    },
    success: function (re) {
      console.log(re);
      $('.brand1 ul').html(template('tpl1',re));
    }
  });

  $.ajax({
    type:'get',
    url:'http://127.1.0.0:9090/api/getbrandproductlist',
    data:{
      brandtitleid:getParam('brandtitleid'),
      pagesize: 4
    },
    success: function (re) {
      console.log(re);
      $('.brand2 ul').html(template('tpl2',re));

    }
  });

  function render(){
    $.ajax({
      type:'get',
      url:'http://127.1.0.0:9090/api/getproductcom',
      data:{
        productid:0
      },
      success: function (re) {
        console.log(re);
        $('.comment1 ul').html(template('tpl3',re));
      }
    })
  }
  render();
});