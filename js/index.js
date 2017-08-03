//jQuery to collapse the navbar on scroll
var header_height  = $('.navbar').height(),
    intro_height    = $('.intro-section').height(),
    offset_val = intro_height + header_height;
$(window).scroll(function() {
  var scroll_top = $(window).scrollTop();
    if (scroll_top >= offset_val) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".navbar-fixed-top").removeClass("navbar-transparent");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      $(".navbar-fixed-top").addClass("navbar-transparent");
    }
});

//jQuery for page scrolling feature 
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 100) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".navbar-fixed-top").removeClass("navbar-transparent");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      $(".navbar-fixed-top").addClass("navbar-transparent");
    }
});
//www.123contactform.com script begins here
<script type="text/javascript" defer src="//www.123contactform.com/embed/2875538.js" data-role="form" data-default-width="650px"></script>
<p>Powered by <a class="footerLink13" title="123ContactForm" href="http://www.123contactform.com">123ContactForm</a> | <a style="font-size:small!important;color:#000000!important; text-decoration:underline!important;" title="Looks like phishing? Report it!" href="http://www.123contactform.com/sfnew.php?s=123contactform-52&control119314=http:///contact-form--2875538.html&control190=Report%20abuse" rel="nofollow">Report abuse</a></p>
//www.123contactform.com script ends here 

