//portfolio page
//for the contact form:

$('#showModal').on('click', function() {
	$('.modal-background').css('display', 'flex').hide().fadeIn();
	$('.modal-content').fadeIn();
});

$('#close').on('click', function () {
$('.modal-background').hide();
$('.modal-content').hide();
});

//for dropdown menu:

// $(document).ready(function () { 
// $('.portfolio').hover(function() {
// 	$('.dropdown').toggle();
// 	})
// })


//for client page

$('.unlock').on('click', function (event) {
	event.preventDefault();

var required = $('.required').val();
var required2 = $('.required2').val();
console.log(required);
console.log(required2);


if (required.length === 0) {
	$('.required').addClass('error');
}
else {
	$('.required').removeClass('error');
}
if (required2.length === 0){
	$('.required2').addClass('error');
}
else {
	$('.required2').removeClass('error');
}
});




