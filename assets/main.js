
// scroll to top
  window.addEventListener('scroll', function(){
            var scroll=document.querySelector('.scrollTop');
            scroll.classList.toggle("active", window.scrollY > 500)
        })
        function scrollToTop(){
            window.scrollTo({
                top:0,
                behavior:"smooth"
            })
        }

        // handbuger
$('.burger').on('click', function (event) {
			$('.navigation-bar').slideToggle('200');
		})



		// popup Message after contact form is filled
		var msg =document.querySelector('#connect');

			$('#btn').click(function(){
				// var username= $('#user').val()
				var user=$('#user').val().trim();
				var email=$('#email').val().trim();

				if(user ==''|| email =='' ){
					msg.classList.add('error');
			msg.innerHTML= 'Fields cannot be empty';			
		}else {
			msg.classList.add('success');
			msg.innerHTML= user +  " , thank you for contacting me.";

			// setTimeout(()=> msg.remove(), 2000);

			
				}
		})


//submit button disabled until user checks the yes checkbox

$(document).ready(function(){
	decideBtnStatus();
	$("#terms").click(function(){
	decideBtnStatus();
		})
	})

	if($('#terms').prop('checked')){
  		reEnableBtn();
		}

	function reEnableBtn(){
		$("#btn").removeAttr("disabled");
	} 

		function decideBtnStatus() {
			if($('#terms').prop('checked')){
				$("#btn").removeAttr("disabled");
			}else{
				$('#btn').attr('disabled',true);
			}
		}


	// Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: false,
            fadeOut:false,
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 500,
            backSpeed: 0,
            showCursor: true,
        cursorChar: "|",
        autoInsertCss: true,
        });
    }


// change color of link when clicked
$("a").click(function(){
$("a").css("color","");
$(this).css("color", "#17a2b8");
});

// toggle the font-awesome home icon
$('#house').click(function(){
	$('#home').slideToggle()
	});

// toggle the font-awesome phone icon
$('#phone').click(function(){
	$('#number').slideToggle()
	});


 $('.navigation-bar a').click(function(){
 $(".navigation-bar").slideToggle();
        });


$('#testimonial-carousel').owlCarousel({
	autoplay:true,
	dots:false,
	nav:true,
    loop:true,
    navTest:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})