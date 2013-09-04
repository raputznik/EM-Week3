jQuery(document).ready(function($) {
	
	// Stuff to do as soon as the DOM is ready;
 $("#slides").slidesjs({
    callback: {
      loaded: function(number) {
        // Do something awesome!
        // Passes start slide number
      },
      start: function(number) {
        // Do something awesome!
        // Passes slide number at start of animation
      },
      complete: function(number) {
        // Do something awesome!
        // Passes slide number at end of animation
      $('.slidesjs-pagination-item a').html('<i class="icon-circle-blank"></i>');
      $('.slidesjs-pagination-item a.active').html('<i class="icon-circle"></i>');

      }
    }
  });
      // find the gallery list items and remove the html from them
      $('.slidesjs-pagination-item a').html('<i class="icon-circle-blank"></i>');
      $('.slidesjs-pagination-item a.active').html('<i class="icon-circle"></i>');

      $('.slidesjs-next').html('<i class="icon-chevron-sign-right"></i>');
      $('.slidesjs-previous').html('<i class="icon-chevron-sign-left"></i>');


	// initiate our gallery
});