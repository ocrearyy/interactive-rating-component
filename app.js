function displaypopup() {
    document.querySelector('#popup').style.display = 'block';
    document.querySelector('#rating-section').style.display = 'none';
}


const rating = document.querySelector('.rating-container');
const rating1= document.querySelector('#one');
const rating2= document.querySelector('#two');
const rating3= document.querySelector('#three');
const rating4= document.querySelector('#four');
const rating5= document.querySelector('#five');

function displayRating() {
    
    if(rating1 is ){
        rating.addEventListener('click', function(){rating1.style.background = 'red'});
    }
}

rating.addEventListener('click', function(){rating2.style.background = 'red'});


// If you're using native JavaScript, 
// attach an event listener to the container
//  holding the buttons and listen for click events. 
//  When a button is clicked, add a class, and with that class,
//  you can style the button to be whatever you want.
