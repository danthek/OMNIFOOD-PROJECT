$(document).ready(function(){
  
      /*Este es el codigo paera que apaerezca la barra de navegacion y desparezca al subir (waypoint es un plug in)*/
      $('.js--section-features').waypoint(function(direction){
        /*seleccionamos la clase js--barra que esta ligada a la seccion de features ya que ahi queremos que ocurra el evento, despues le asignamos el metodo waypoint , por ultimo asignamos la funcion de direccion, al final si se scrollea hacia abajo, se triggerea la clase sticky, o si subimos, se remueve*/
            if (direction  == "down"){

                $('nav').addClass('sticky');
            }
            else{
                  $('nav').removeClass('sticky');     
            }          
      },{
          offset:'60px;'
        }
      );
  
   /*Scroll on buttons (los 2 botones naranjas principales*/
      $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
      });

       $('.js--scroll-to-features').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000); 
      });
  
  /*}Navigation scroll (este lo baje de internet de css tricks como snippet de jquery*/
  
      // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });

  
    /*Animations (le indico que cuando llegue al way point "js--wp-X" le añada la clase de animated_ X a tal elemento*/
      
      /*section features*/
      $('.js--wp-1').waypoint(function(direction){
         $('.js--wp-1').addClass('animated fadeIn');
      },{
        offset:'50%;'
      })
  
   /*iphone image*/
      $('.js--wp-2').waypoint(function(direction){
         $('.app-screen').addClass('animated fadeInUp');
      },{
        offset:'20%;'
      })
  
   /*city tumbnails*/
      $('.js--wp-3').waypoint(function(direction){
         $('.section-cities img').addClass('animated fadeIn');
      },{
        offset:'30%;'
      })
  
   /*1st suscription plan*/
      $('.js--wp-4').waypoint(function(direction){
         $('.js--wp-4').addClass('animated pulse');
      },{
        offset:'50%;'
      });
  
  
     /*mobile nav*/
      $('.js--nav-icon').click(function(){
        var nav =  $('.js--main-nav'); 
        var icon = $('.js--nav-icon i')
        
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-navicon-round')){
          icon.addClass('ion-close-round');
          icon.removeClass('ion-navicon-round');
        }
        else{
          icon.addClass('ion-navicon-round');
          icon.removeClass('ion-close-round');
        }
        
      });
  
});

