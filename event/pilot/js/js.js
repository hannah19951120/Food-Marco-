let scroll = true;
$(document).ready(function() {

    $('.hero__title').addClass('hero__title-clear')

    // 按鈕滑動
   $(".scrollBtn").bind("click",function(){
    event.preventDefault();
    let id=$(this).attr("data-scrollName");

    let target_top = $("#scroll"+id).offset().top; // 取得目標區塊的y座標
    let $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          $body.animate({
                scrollTop: target_top
          }, 800);
    scroll = false;

    })
      
  // ================= 滾動到指定部位 =================
  let nowScroll = false;
  let lastScrollTop =0, delta =5;
    $(window).scroll((event)=>{

      let scrollPos = $(window).scrollTop();
      let heroPos = $('#hero').outerHeight();
      let secPos = $('#intro').offset().top;
      let secHeight = secPos+$('#intro').outerHeight();

      let $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

      if(scrollPos<heroPos&&nowScroll==false){
            //在hero的位子。或在頂端
            if(scrollPos-5 > lastScrollTop){
                  //往下滾動，前往intro
                  // $body.stop();
                  $body.animate({
                        scrollTop: secPos
                  }, 500);
                  nowScroll = true;
                  setTimeout(()=>{ nowScroll = false; }, 550);

                  // console.log('往下滾動，前往intro');
                  console.log(nowScroll);

            }
            else if(scrollPos+5 < lastScrollTop){
                  //往上滾動，直接往頂
                  // $body.stop();
                  $body.animate({
                        scrollTop: 0
                  }, 500);
                  nowScroll = true;
                  setTimeout(()=>{ nowScroll = false; }, 550);

                  // console.log('往上滾動，直接往頂 hero');
            }
      }
      lastScrollTop = scrollPos;
  })
  
  // ================= 滾動監聽餐廳列表Tab =================
    

});