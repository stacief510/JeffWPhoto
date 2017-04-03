//portfolio page
//for the contact form:

$('#showModal').on('click', function() {
	$('.modal-background').css('display', 'flex').hide().fadeIn();
	$('.modal-content').fadeIn();
});

$('#close').on('click', function () {
$('.modal-background').hide();
$('.modal-content').hide();
})

//for dropdown menu:

// $(document).ready(function () { 
// $('.portfolio').hover(function() {
// 	$('.dropdown').toggle();
// 	})
// })


