
  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('.me').css({
      'transform' : 'translate(0px, '+ wScroll /60 +'%)'
    });

    $('.back-bird').css({
      'transform' : 'translate(0px, '+ wScroll /35 +'%)'
    });

  });
