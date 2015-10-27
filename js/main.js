// alert('hello');

// GLOBAL VARIABLES
// Array of paths to images (relative urls)
var imagePaths = ['images/redPotato.jpg', 'images/bacon.jpg', 'images/parsley.jpg', 'images/bowl.jpg' ];
// Array with likes

// What is our current position (index)
var currentIndex = 0;

// when the user clicks on the next button
$('#next').on('click', function(){
	// update the current position
	currentIndex++;
	// remove any disabled styles from previous button
	$('#prev').removeAttr('disabled');
	// display the next image (change img src)
	$('#image').attr('src', imagePaths[currentIndex]);
	// If we are on the last photo
	if (currentIndex === 3){
		// disable the next button (will need to look up)
		$('#next').prop('disabled', true);
	}
});

// when the user clicks on the previous button
$('#prev').on('click', function(){
	// update the current position
	currentIndex--;
	// remove any disabled styles from next button
	$('#next').removeAttr('disabled');
	// update the img src to the previous image
	$('#image').attr('src', imagePaths[currentIndex]);
	// If we are on the first photo
	if (currentIndex === 0){
		// Disable the previous button
		$('#prev').prop('disabled', true);
	}
});

// Media Query javascript
$('.hamburger').on('click', function() {
	if($('.menu').hasClass('open')) {
		$('.menu').removeClass('open');
	} else {
		$('.menu').addClass('open');
	}
	});

