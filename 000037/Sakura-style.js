var i = 0;
var images = [];
var time = 3000;
        
images[0] = 'Features.jpg';
images[1] = 'Marigold.jpeg';
images[2] = 'Features2.jpg';
images[3] = 'Sandalwood.jpeg';
images[4] = 'Features3.jpeg';

function changeImage() {
    document.getElementsByName("slider")[0].src = images[i];
        
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changeImage, time);
}
        
window.onload = changeImage;
