/**
 * Created by shan on 2018/1/20.
 */
$(function () {

  function render(page){
    $.ajax({
      type:'get',
      url:'http://127.1.0.0:9090/api/getmoneyctrl',
      data:{
        //categoryid:getParam('categoryid'),
        pageid:page || 1
      },
      success: function (re) {
        console.log(re);
        //re.category = getParam('category');
        var obj = {
          count:Math.ceil(re.totalCount/re.pagesize),
          page:page || 1
        };
        $('.list ul').html(template('tpl2',re));
        //
        $('.page').html(template('tpl3',obj));
        //var prevpage = $('.prev').data('page',1)
      }
    });
  }
  render();

  $('.page').on('click','.page-list div',function () {
    var page = $(this).data('page');
    render(page);
  });
  $('.page').on('click','.prev,.next', function () {
    //alert(1)
    var page = $(this).data('page');
    render(page);
  });
  $('.page').on('click','.page-default', function () {
    $('.page-list').toggleClass('active');
  })

});