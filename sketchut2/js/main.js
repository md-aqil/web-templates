	$(window).stellar({
    horizontalScrolling: false,
    verticalOffset: 0,
    horizontalOffset: 0
  });


			new WOW().init();

			$('a.page').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});


			var scene = document.getElementById('scene');
			var parallax = new Parallax(scene)

			var scene = document.getElementById('scene2');
			var parallax = new Parallax(scene2)



$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('affix animated fadeInDown', $(this).scrollTop() > $nav.height());
  });
});