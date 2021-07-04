$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});


// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d "+ " | " + hours + "h " + " | " + minutes + "m " + " | " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});


$(document).on("click", ".browse", function() {
    var file = $(this)
        .parent()
        .parent()
        .parent()
        .find(".file");
    file.trigger("click");
});
$(document).on("change", ".file", function() {
    $(this)
        .parent()
        .find(".form-control")
        .val(
            $(this)
                .val()
                .replace(/C:\\fakepath\\/i, "")
        );
});




$('.btn_open_d').click(function(){
    $('.nav_notification').toggleClass('show_conent');
});


jssor_slider1_starter = function (containerId) {

    var _SlideshowTransitions = [
        //Fade in L
        {$Duration: 1200, x: 0.3, $During: { $Left: [0.3, 0.7] }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }
        //Fade out R
        , { $Duration: 1200, x: -0.3, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }
        //Fade in R
        , { $Duration: 1200, x: -0.3, $During: { $Left: [0.3, 0.7] }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }
        //Fade out L
        , { $Duration: 1200, x: 0.3, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }

        //Fade in T
        , { $Duration: 1200, y: 0.3, $During: { $Top: [0.3, 0.7] }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2, $Outside: true }
        //Fade out B
        , { $Duration: 1200, y: -0.3, $SlideOut: true, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2, $Outside: true }
        //Fade in B
        , { $Duration: 1200, y: -0.3, $During: { $Top: [0.3, 0.7] }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }
        //Fade out T
        , { $Duration: 1200, y: 0.3, $SlideOut: true, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }

        //Fade in LR
        , { $Duration: 1200, x: 0.3, $Cols: 2, $During: { $Left: [0.3, 0.7] }, $ChessMode: { $Column: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2, $Outside: true }
        //Fade out LR
        , { $Duration: 1200, x: 0.3, $Cols: 2, $SlideOut: true, $ChessMode: { $Column: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2, $Outside: true }
        //Fade in TB
        , { $Duration: 1200, y: 0.3, $Rows: 2, $During: { $Top: [0.3, 0.7] }, $ChessMode: { $Row: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }
        //Fade out TB
        , { $Duration: 1200, y: 0.3, $Rows: 2, $SlideOut: true, $ChessMode: { $Row: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }

        //Fade in LR Chess
        , { $Duration: 1200, y: 0.3, $Cols: 2, $During: { $Top: [0.3, 0.7] }, $ChessMode: { $Column: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2, $Outside: true }
        //Fade out LR Chess
        , { $Duration: 1200, y: -0.3, $Cols: 2, $SlideOut: true, $ChessMode: { $Column: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }
        //Fade in TB Chess
        , { $Duration: 1200, x: 0.3, $Rows: 2, $During: { $Left: [0.3, 0.7] }, $ChessMode: { $Row: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2, $Outside: true }
        //Fade out TB Chess
        , { $Duration: 1200, x: -0.3, $Rows: 2, $SlideOut: true, $ChessMode: { $Row: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }

        //Fade in Corners
        , { $Duration: 1200, x: 0.3, y: 0.3, $Cols: 2, $Rows: 2, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2, $Outside: true }
        //Fade out Corners
        , { $Duration: 1200, x: 0.3, y: 0.3, $Cols: 2, $Rows: 2, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $SlideOut: true, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2, $Outside: true }

        //Fade Clip in H
        , { $Duration: 1200, $Delay: 20, $Clip: 3, $Assembly: 260, $Easing: { $Clip: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }
        //Fade Clip out H
        , { $Duration: 1200, $Delay: 20, $Clip: 3, $SlideOut: true, $Assembly: 260, $Easing: { $Clip: $Jease$.$OutCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }
        //Fade Clip in V
        , { $Duration: 1200, $Delay: 20, $Clip: 12, $Assembly: 260, $Easing: { $Clip: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }
        //Fade Clip out V
        , { $Duration: 1200, $Delay: 20, $Clip: 12, $SlideOut: true, $Assembly: 260, $Easing: { $Clip: $Jease$.$OutCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }
    ];

    var options = {
        $AutoPlay: 1,                                    //[Optional] Auto play or not, to enable slideshow, this option must be set to greater than 0. Default value is 0. 0: no auto play, 1: continuously, 2: stop at last slide, 4: stop on click, 8: stop on user navigation (by arrow/bullet/thumbnail/drag/arrow key navigation)
        $Idle: 1500,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
        $PauseOnHover: 1,                                   //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1
        $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $Cols is greater than 1, or parking position is not 0)
        $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
        $SlideDuration: 800,                                //Specifies default duration (swipe) for slide in milliseconds

        $SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
            $Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
            $Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
            $TransitionsOrder: 1,                           //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
            $ShowLink: true                                 //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
        },

        $ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
            $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
            $ChanceToShow: 1                                //[Required] 0 Never, 1 Mouse Over, 2 Always
        },

        $ThumbnailNavigatorOptions: {                       //[Optional] Options to specify and enable thumbnail navigator or not
            $Class: $JssorThumbnailNavigator$,              //[Required] Class to create thumbnail navigator instance
            $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
            $ActionMode: 1,                                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
            $SpacingX: 15,                                   //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
            $Cols: 8,                                       //[Optional] Number of pieces to display, default value is 1
            $ParkingPosition: 0                          //[Optional] The offset position to park thumbnail
        }
    };

    var jssor_slider1 = new $JssorSlider$(containerId, options);
    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizing
    function ScaleSlider() {
        var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
        if (parentWidth)
            jssor_slider1.$ScaleWidth(Math.max(Math.min(parentWidth, 780), 300));
        else
            $Jssor$.$Delay(ScaleSlider, 30);
    }

    ScaleSlider();
    $Jssor$.$AddEvent(window, "load", ScaleSlider);

    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    //responsive code end
};


(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = "Oct 30, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown"),
                    content = document.getElementById("content");

                headline.innerText = "It's my birthday!";
                countdown.style.display = "none";
                content.style.display = "block";

                clearInterval(x);
            }
            //seconds
        }, 0)
}());


(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = "May 30, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;

                document.getElementById("days-2").innerText = Math.floor(distance / (day)),
                document.getElementById("hours-2").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes-2").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds-2").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown-2"),
                    content = document.getElementById("content");

                headline.innerText = "It's my birthday!";
                countdown.style.display = "none";
                content.style.display = "block";

                clearInterval(x);
            }
            //seconds
        }, 0)
}());




$(function() {
    $("#sortableImgThumbnailPreview").sortable({
        connectWith: ".RearangeBox",


        start: function( event, ui ) {
            $(ui.item).addClass("dragElemThumbnail");
            ui.placeholder.height(ui.item.height());

        },
        stop:function( event, ui ) {
            $(ui.item).removeClass("dragElemThumbnail");
        }
    });
    $("#sortableImgThumbnailPreview").disableSelection();
});





document.getElementById('files').addEventListener('change', handleFileSelect, false);

function handleFileSelect(evt) {

    var files = evt.target.files;
    var output = document.getElementById("sortableImgThumbnailPreview");

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

        // Only process image files.
        if (!f.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
            return function(e) {
                // Render thumbnail.
                var imgThumbnailElem = "<div class='RearangeBox imgThumbContainer'><i class='fa fa-close imgRemoveBtn' onclick='removeThumbnailIMG(this)'></i><div class='IMGthumbnail' ><img  src='" + e.target.result + "'" + "title='"+ theFile.name + "'/></div><div class='imgName'>"+ theFile.name +"</div></div>";

                output.innerHTML = output.innerHTML + imgThumbnailElem;

            };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    }
}

function removeThumbnailIMG(elm){
    elm.parentNode.outerHTML='';
}

