$(document).ready(function () {

	// TOP按鈕置頂
	$('#BackTop').click(function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:0}, 400);
	});
	
});