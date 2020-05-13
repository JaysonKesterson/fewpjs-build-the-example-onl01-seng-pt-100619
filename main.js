// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal")
  const errorMsg = document.getElementById("modal-message")
  const heartBtns = document.getElementsByClassName('like-glyph')
  modal.className = "hidden"

  function changeHeart(heart){
    if(heart.classList.contains('activated-heart')){
      heart.innerText = EMPTY_HEART
      heart.classList.remove("activated-heart")
    }
    else {
      heart.innerText = FULL_HEART
      heart.classList.add("activated-heart")
    }
  }

  for(button of heartBtns){
    button.addEventListener("click", (event) => {
      mimicServerCall()
      .then(changeHeart(event.target))
      .catch(function(error) {
        errorMsg.innerText = error.message
        modal.classList.remove("hidden")
        setTimeout(function(){  modal.classList.add("hidden")}, 5000);
      })
    })
}
})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
