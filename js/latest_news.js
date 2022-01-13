$(document).ready(function () {

  // 選單切換
  $("a.change_btn").on("click", function(e){
    e.preventDefault();

    $(this).addClass("-on");
    $(this).siblings().removeClass("-on");
  
    $("div.tab").removeClass("-on");
    // 選擇 div .tab .data-targer(相對應的數字) 
    // .data-targer="news_tab01 / news_tab02 / news_tab03"
    $("div.tab." + $(this).attr("data-target")).addClass("-on");
  
    // 選單切換控制頁碼 (園區公告、活動消息不會出現頁碼)
    $("div.number_bt").removeClass("-on");
    $("div.number_bt." + $(this).attr("data-target")).addClass("-on");
  });

  // 頁碼切換
  $("a.change").on("click", function(e){
    e.preventDefault();

    $(this).addClass("-on");
    $(this).siblings().removeClass("-on");
  });

});

