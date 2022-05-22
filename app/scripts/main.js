console.log('\'Allo \'Allo!');

// service worker
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('./sw.js')
//     .then((serviceWorker) => {
//       console.log('Service Worker registered: ', serviceWorker);
//     })
//     .catch((error) => {
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


// Show menu in mobile
$('.site-menu-icon').click(function () {
  var self = $(this);
  var body = $('body');
  var siteMenu = $('.header-site-nav');
  var siteMenuIcon = $('.site-menu-icon');

  if (!self.hasClass('open')) {
    self.addClass('open');
    siteMenu.addClass('open show');
    body.addClass('no-scroll');
  } else {
    console.log('else');
    self.removeClass('open');
    siteMenu.removeClass('open show');
    siteMenuIcon.removeClass('open show');
    body.removeClass('no-scroll');
  }
});

$('.header-site-nav-list a').click(function () {
  var self = $(this);
  var body = $('body');
  var siteMenu = $('.header-site-nav');
  var siteMenuIcon = $('.site-menu-icon');

  if (!body.hasClass('no-scroll')) {
  } else {
    console.log('admo');
    self.removeClass('open');
    siteMenu.removeClass('open show');
    siteMenuIcon.removeClass('open show');
    body.removeClass('no-scroll');
  }
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(':focus')) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });
