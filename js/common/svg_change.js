$(document).ready(function () {

  // 透過CSS改變svg的顏色
  // jQuery.each() : 遍歷，迴圈的概念
  jQuery('img.svg').each(function(){ // 找出所有img圖檔是svg格式
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    // jQuery.get(空白/ 索引值) | 從整個jQuery中找到是否有匹配的值(imgURL) 
    // console.log( $( "li" ).get(2) );
    jQuery.get(imgURL, function(data) {

      // Get the SVG tag, ignore the rest   
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG   
      if(typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      } 

      // Add replaced image's classes to the new SVG   
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org 
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, if the viewport is not set the SVG wont't scale.   
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      // Replace image with new SVG   
      $img.replaceWith($svg);
    }, 'xml');
  });

});