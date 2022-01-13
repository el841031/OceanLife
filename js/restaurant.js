$(document).ready(function () {

  $(".menu_box").slick({
    arrows: true, //是否要箭頭
    dots: true,  //是否要點點
    dotsClass: 'slick-dots',
    autoplay:true, // 是否自動播放
    autoplaySpeed:4000, // 幾秒後切換下一張
    speed:800, // 切換的速度
    slidesToShow:3, // 畫面出現的圖片數量
    pauseOnHover:false, // 滑鼠停在上面時，是否要暫停自動撥放
      
    responsive: [{ // RWD
      breakpoint: 992, // 斷點
      settings: {
        slidesToShow: 2,
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }  
    }] 
     
  })

});