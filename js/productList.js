/**
 * Created by shan on 2018/1/19.
 */
$(function(){

  $.ajax({
    type:'get',
    url:'http://127.1.0.0:9090/api/getcategorybyid',
    data:{
      categoryid:getParam('categoryid')
    },
    success: function (re) {
      console.log(re);
      $('.nav').html(template('tpl1',re));
    }
  });



  function render(page){
    $.ajax({
      type:'get',
      url:'http://127.1.0.0:9090/api/getproductlist',
      data:{
        categoryid:getParam('categoryid'),
        pageid:page || 1
      },
      success: function (re) {
        console.log(re);
        re.category = getParam('category');
        var obj = {
            count:Math.ceil(re.totalCount/re.pagesize),
            page:page || 1
        };
        $('.list ul').html(template('tpl2',re));

        $('.page').html(template('tpl3',obj));
        //var prevpage = $('.prev').data('page',1)
      }
    });
  }
  render();

  $('.page').on('click','.page-list div',function () {
    var page = $(this).data('page');
    //if(page <= 1){
    //  $('.prev').addClass('now');
    //}else{
    //  $('.prev').removeClass('now');
    //}
    //if(page >= 3){
    //  $('.next').addClass('now');
    //}else{
    //  $('.next').removeClass('now');
    //}
    render(page);
  });
  $('.page').on('click','.prev,.next', function () {
    if($(this).hasClass('now')){
      return;
    }
    var page = $(this).data('page');
    render(page);
  });
  $('.page').on('click','.page-default', function () {
    $('.page-list').toggleClass('active');
  })
});