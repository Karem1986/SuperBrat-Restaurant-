//Target SuperBrat animation event//
// document.getElementById('superBrat').addEventListener('mouseover', function(event){
//     event.target.classList.add('animate')
//    setTimeout(() => {
//        event.target.classList.remove('animate')
//    }, 3000);


// });

document.getElementById('superBrat').addEventListener('mouseover', 

function(event){
    event.target.classList.add('animate')
  
});

document.getElementById('superBrat').addEventListener('mouseout', function(event){
    event.target.classList.remove('animate')

});

// Submit and all input forms on Homepage//
document.getElementById('special-offers').addEventListener('submit', function(event){
    
event.preventDefault();
document.getElementById('hidden').classList.remove('hidden')

}); 

//Ask for delivery address after selecting delivery 

document.getElementById('step2').addEventListener('change',

function(event) {

    //Show input which is the address option 
    document.getElementById('address').style.display = "block";
    //If the user changes to collect then hide it again  
    if(event.target.value === 'collection'){
    document.getElementById('address').style.display = "none";

    }


});

//POP up to see payment options 















