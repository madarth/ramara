console.log('\'Allo \'Allo!');

// service worker
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('./sw.js')
//     .then(serviceWorker => {
//       console.log('Service Worker registered: ', serviceWorker);
//     })
//     .catch(error => {
//       console.error('Error registering the Service Worker: ', error);
//     });
// }

// image lazy load
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  // Dynamically import the LazySizes library
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
  document.body.appendChild(script);
}

let text = document.querySelector('.circle-text strong');
// console.log(text);
text.innerHTML = text.innerText.split('').map(
  (char, i) =>
    `<span style="transform: rotate(${i * 12}deg)">${char}</span>`
).join('');

let text2 = document.querySelector('.circle-text2 strong');
console.log(text2);
text2.innerHTML = text2.innerText
  .split('')
  .map(
    (char, i) => `<span style="transform: rotate(${i * 12}deg)">${char}</span>`
  )
  .join('');

let text3 = document.querySelector('.circle-text3 strong');
// console.log(text);
text3.innerHTML = text3.innerText
  .split('')
  .map(
    (char, i) => `<span style="transform: rotate(${i * 12}deg)">${char}</span>`
  )
  .join('');

  	// Show menu in mobile
	$('.site-menu-icon').click(function () {
    var self = $(this);
    var body = $('body');
    var siteMenu = $('.header-site-nav');

    if (!self.hasClass('open')) {
      self.addClass('open');
      siteMenu.addClass('open show');
      body.addClass('no-scroll');
    } else {
      console.log('else');
      self.removeClass('open');
      siteMenu.removeClass('open');
      siteHeader.removeClass('open');
      body.removeClass('no-scroll');
      setTimeout(function () {
        siteMenu.removeClass('show');
      }, 200);
    }
  });

	// // submenu open
	// $(".menu-item-has-children > a").click(function (e) {
	// 	e.preventDefault();
	// 	$(".menu-item-has-children").toggleClass("active");
	// 	$(".menu-item-has-children .sub-menu").toggleClass("open");
	// });

	// $(document).click(function (e) {
	// 	$(".menu-item-has-children").each(function () {
	// 		var container = $(".menu-item-has-children");
	// 		if (!container.is(e.target) && container.has(e.target).length === 0) {
	// 			$(this).removeClass("active");
	// 			$(".menu-item-has-children .sub-menu").removeClass("open");
	// 		}
	// 	});
	// });


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
          if ($target.is(':focus')) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
