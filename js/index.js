//Log out a message to show you've got JavaScript running
console.log('Javascript is running')



//Define a variable `myName` and log it out
let myName = 'Julian'
console.log(myName)


//Define a function `getVowelCount()`
function getVowelCount(aString) {
    lowercaseString = aString.toLowerCase()
    lowercaseString = lowercaseString.replaceAll('a', "")
    lowercaseString = lowercaseString.replaceAll('e', "")
    lowercaseString = lowercaseString.replaceAll('i', "")
    lowercaseString = lowercaseString.replaceAll('o', "")
    lowercaseString = lowercaseString.replaceAll('u', "")
    lowercaseString = lowercaseString.replaceAll('y', "")
    let count = aString.length - lowercaseString.length
    return count
}


//Define a variable `numVowelsInName` and log it out

let numVowelsInName = getVowelCount(myName)
console.log(numVowelsInName)


//Create a variable `h1Elememt` that refers to the `<h1>` element in the DOM.
//Then change the text of that element
var h1Element = $('h1').text('Interactive Pet Viewer')


//Create a variable `footerElement` that refers to the `<footer>`, then
//change the HTML content of that element
var footerElement = $('footer').html('<small>All images from <a href="https://unsplash.com/">unsplash.com</a></small>')



//Change the CSS `display` property of the `#cats` element
//Add the `active` class to the `#btnShowDogs` element
$("#cats").css('display','none')
$('#btnShowDogs').addClass('active')



//Add an event listener to the buttons to respond to click events.
//The listener's function will toggle the `#dogs` and `#cats` divs,
//and toggle which button has the `active` class
$('.btn-group').on('click',function(){

    $("#btnShowDogs").toggleClass('active');
    $("#btnShowCats").toggleClass('active');
    // $('#cats').toggleCSS('display', 'none');
    // $('#dogs').toggleCSS('display', 'none');
    $('#dogs').toggle('display')
    $('#cats').toggle('display')
});


//Change the `cursor` CSS property of the images
$('img').css('cursor', 'pointer');



//Add the `data-bs-toggle` and `data-bs-target` attributes to the images
$('img').attr('data-bs-toggle', 'modal')
$('img').attr('data-bs-target', 'modalSelector')



//Ad an event listener to the modal for `show.bs.modal` events.
//The listener's function will replace the modal's image `src` and
//`alt` attributes with the values from the clicked image.
$('.modal').on('click', function(){
    let imageClicked = $(event.relatedTarget)
    let imageClickedSrc = imageClicked.attr('src')
    let imageClickedAlt = imageClicked.attr('alt')
    $('#modalImage').attr({
        src:imageClickedSrc,
        alt:imageClickedAlt
    })
})