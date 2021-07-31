


$('a.page').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 2000);
    return false;
});



    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 0,
      slidesPerView: 1,
      centeredSlides:true,
      hashNav:true,
       autoplay: {
          delay: 3000,
        },
    
       breakpoints: {
       
            640: {
             width: 170,
              spaceBetween: 0,
            },

            360: {
              width: 170,
              spaceBetween: 0,
            },

             320: {
              width: 150,
              spaceBetween: 0,
              
             
            }
      },
      slideChange: function() {
        console.log(this);
      }

    });

    galleryTop.on('slideChange', function () {
      $('.show-s-container .show-s').removeClass('active').eq(this.activeIndex).addClass('active')
    });



    var heroSingle = new Swiper('.swiper-hero-single', {
      spaceBetween: 10,
      slidesPerView: 1,

      centeredSlides:true,
      hashNav:true,
    
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

       autoplay: {
          delay: 2000,
        },

        breakpoints: {
         
            320: {
              width: 193,
            }
      },



        effect: "fade",
     
        on: {
          slideChange: function(item) {
            if (this.snapIndex === 4) {
              animateCounter();
            }
            
          }
        }

    });

 



    var swiperMobile = new Swiper('.swiper-container.swiper-full-mobile', {
      slidesPerView: 5,
      spaceBetween: 50,
      slideToClickedSlide:true,
      height:380,

      loop:false,
        autoplay: {
          delay: 3000,
        },


        keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

       breakpoints: {
            
            640: {
              freemode:true,
              slidesPerView: 3,
              spaceBetween: 20,
            },
            320: {
              freemode:true,
              slidesPerView: 3,
              spaceBetween: 20,
            }
      }

    });



  $('.show-s-container li').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active');
    });





    function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;


    if (/android/i.test(userAgent)) {
        $('.appstore-btn').css('display','none');
    }

   
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
       $('.android-btn').css('display','none');
    }

    return "unknown";
}
getMobileOperatingSystem();


  Splitting(); 

  ScrollOut({
    onShown: function(el) {
      // remove the class
      el.classList.remove("animated");

      // force reflow
      void el.offsetWidth;

      // re-add the animated cl
      el.classList.add("animated");
    },
      threshold: .2,


  });


  // counter js

function counterElement(duration, delay) {
  return function startAnimate(_, el) {
    $(el).prop('Counter', 0).animate({
          Counter: $(el).text()
      }, {
          duration: duration || 1500,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
          done: function() {
            $(this).addClass('completed');
          }
      });
    }
}



function animateCounter() {
  $('.completed').removeClass('completed');
  $('.count').each(counterElement());
}




$(document).ready(function() {
         

    $('.getApp').blur(function(e) {

        if (validatePhone('get-app-btn')) {
            $('.spnPhoneStatus').html('Valid');
            $('.spnPhoneStatus').css('color', 'green');
            $('.getAppBtn').removeClass('disabled');

        }

        else {
            $('#spnPhoneStatus').html('Invalid');
            $('#spnPhoneStatus').css('color', 'red');

        }
    });
});


function validatePhone(value) {
    var filter = /^[0-9]{10}$/;
    if (filter.test(value)) {
        return true;
    }
    else {
        return false;
    }
}

$('.get-app-input').blur(function() {
  $(this).data('touched', true);
  $(this).trigger('keyup');
})
  
$('.get-app-input').keyup(function() {
  if (!$(this).data('touched')) return;
  if (validatePhone($(this).val())) {
    $(this).parent().find('.get-app-sms').text('valid').css({color: 'green'});
    $(this).parent().find('.get-app-btn').removeClass('disabled')
  } else {
    $(this).parent().find('.get-app-btn').addClass('disabled')
    $(this).parent().find('.get-app-sms').text('invalid').css({color: 'red'});
  }
})



$('.hw-box').on({
    mouseenter: function(){
       $(this).animate({scrollTop:$('.hw-box').height()}, 'slow');
        return false;
    },
    mouseleave: function(){
      $(this).animate({ scrollTop: $('.hw-box').height()-$('.hw-box').height() });
        return false;
    }

});







