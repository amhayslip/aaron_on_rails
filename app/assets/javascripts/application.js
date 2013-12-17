// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function(){
     $(".twitter a").mouseenter(function(){   $(".twitter a").css("color", "#FF5B5A");
   });
   $(".twitter a").mouseleave(function(){
   $(".twitter a").css("color", "#575656");            
});
});

$(document).ready(function(){
$('#links a').click(function(){
    var linkId = $(this).attr("href");
    $("body").animate({scrollTop: $(linkId).offset().top}, "slow");
    return false;
});
});

$(document).ready(function(){
     $(".blog a").mouseenter(function(){   $(".blog a").css("color", "#FF5B5A");
   });
   $(".blog a").mouseleave(function(){
   $(".blog a").css("color", "#575656");            
   });
})

$(document).ready(function() {
    $('.pull-me').click(function() {
    $('.panel').slideToggle('slow');
    });
});

$(function() {
      var pull     = $('#pull');
        menu     = $('nav ul');
        menuHeight  = menu.height();

      $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
      });

      $(window).resize(function(){
            var w = $(window).width();
            if(w > 320 && menu.is(':hidden')) {
              menu.removeAttr('style');
            }
        });
    });

$(document).ready(function(){
     $(".design a").mouseenter(function(){   $(".design a").css("color", "#575656");
   });
   $(".design a").mouseleave(function(){
   $(".design a").css("color", "#FF5B5A");            
});
});

$(document).ready(function(){
     $(".makerlink").mouseenter(function(){   $(".makerlink").css("color", "#575656");
   });
   $(".makerlink").mouseleave(function(){
   $(".makerlink").css("color", "#FF5B5A");            
});
});



$(document).ready(function(){
     $(".macphone").mouseenter(function(){   $(".macphone").css("opacity", "0.9");
   });
   $(".macphone").mouseleave(function(){
   $(".macphone").css("opacity", "1");            
});
});

$(document).ready(function(){
     $(".comingsoon a").mouseenter(function(){   $(".comingsoon a").css("opacity", "0.8");
   });
   $(".comingsoon a").mouseleave(function(){
   $(".comingsoon a").css("opacity", "1");            
});
});