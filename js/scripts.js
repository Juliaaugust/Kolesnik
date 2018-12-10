$(function(){

	$(".gallery a").fancybox({
		loop: false,
		nextEffect: "fade",
		prevEffect: "fade",
		helpers: {
			title: {
				type: "over"
			}
		}
	});
});