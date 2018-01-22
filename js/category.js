/**
 * Created by shan on 2018/1/19.
 */
$(function () {
  $.ajax({
    type:'get',
    url:'http://127.1.0.0:9090/api/getcategorytitle',
    success: function (re) {
      console.log(re);
      $('.list ul').html(template('tpl1',re));
      re.result.forEach(function (e,i) {
        render(e.titleId,i);
      })


    }
  });
  function render(id,i){
    $.ajax({
      type:'get',
      url:'http://127.1.0.0:9090/api/getcategory',
      data:{titleid:id},
      success: function (re) {
        console.log(re);
        $('.cate').eq(i).append(template('tpl2',re))
      }
    })
  }
  $('.list ul').on('click','.title', function () {
    $(this).next().toggleClass('active');
  })
});