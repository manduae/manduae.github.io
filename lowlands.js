 var image = document.getElementsByTagName('img')[0];
 var image_to_show = 0;
 var image_container = ['images/logo.png', 'images/logo3.png', 'images/logo2.png']; //Put all the images you wantq


 setInterval(function () {

     if (image_to_show >= image_container.length - 1) //Return to the first one
     {
         image_to_show = 0;
     } else {
         image_to_show++;
     }

     image.src = image_container[image_to_show];

 }, 3000);


 // https://stackoverflow.com/questions/44546916/changing-images-with-javascript //
