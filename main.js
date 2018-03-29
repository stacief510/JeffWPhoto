/* Home Page:
//when the website loads, 
//subtly have the background photo alternate between three different photos every 5 seconds.
function cycleBackgrounds() {
    var index = 0;

    $imageEls = $('.toggle-image'); // Get the images to be cycled.

    setInterval(function () {
        // Get the next index.  If at end, restart to the beginning.
        index = index + 1 < $imageEls.length ? index + 1 : 0;
        // Show the next image.
        $imageEls.eq(index).addClass('show');
        // Hide the previous image.
        $imageEls.eq(index - 1).removeClass('show');

    }, 2000);
};


//when user clicks on contact
//have a modal pop up with a form to fill out.

//when user hovers over Portfolio 
//slideToggle a drop down menu with three options to take user  to different portfolio pages


Portfolio Page:
//when user hovers over a photo
//photo becomes opague
//white box appears with title of photo category

//when user hovers over Portfolio 
//slideToggle a drop down menu with three options to take user  to different portfolio pages

//when user clicks on contact
//have a modal pop up with a form to fill out.

Client Page:
//when user hovers over Portfolio 
//slideToggle a drop down menu with three options to take user  to different portfolio pages

//when user clicks on contact
//have a modal pop up with a form to fill out.

//when user enters text in username field && enters a password
//log into view photo album.
//else
//bring addClass of error to both input fields.

About Page:
//when user hovers over Portfolio 
//slideToggle a drop down menu with three options to take user  to different portfolio pages

//when user clicks on contact
//have a modal pop up with a form to fill out.
*/