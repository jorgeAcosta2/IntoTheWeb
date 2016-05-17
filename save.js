/*jslint browser: true*/
/*global $, jQuery*/

var saveButton = document.getElementById('savelink');

function download()
{
    var data = canvas.toDataURL('image/png');
    this.href = data;
}
saveButton.download = "drawing.png";
saveButton.addEventListener('click', download);