/*jslint browser: true*/
/*global $, jQuery*/

//JQuery testing
$("#main-header").show("slow").hide("slow").show("slow");

/***** Start of lightbox *****/

//Creating overlay
var $overlay = $('<div id="overlay"></div>');
$("body").append($overlay);

//Append image to overlay
var $image = $("<img/>");
$overlay.append($image);

//Creating/Adding caption for images on overlay
var $caption = $("<p></p>");
$overlay.append($caption);

//Capture Click Event on Image
$(".slides a").click(function(event){
    event.preventDefault();
    var imagehref = $(this).attr("href"); 
    console.log(imagehref); //verify click event in console
    $image.attr("src", imagehref); //Add href to src attr on $image
    $overlay.show();
    
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});

//Hide overlay when clicked
$overlay.click(function(){
    $overlay.hide();
});

/***** End of Lightbox ******/


