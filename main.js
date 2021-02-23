// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.querySelector("#modal")
const modalMsg = document.querySelector('#modal-message')
const likeBtns = document.querySelectorAll('li.like')

// Your JavaScript code goes here!
window.addEventListener('load', () => {
  modal.classList.add('hidden')
  upvote(likeBtns)
})

const upvote = btns => {
  for (let btn of likeBtns) {
    btn.addEventListener('click', (e) => {
      let heart = e.target.querySelector('span')
      mimicServerCall('ランズのうすらボケ.org')
        .then(json => {
          if (heart.innerText === EMPTY_HEART) {
            heart.innerText = FULL_HEART
            heart.classList.add('activated-heart')
          } else {
            heart.innerText = EMPTY_HEART
            heart.classList.remove('activated-heart')
          }
        })
        .catch(err => {
          modal.classList.remove('hidden')
          modalMsg.innerText = err
          setTimeout(() => {
            modal.classList.add('hidden')
          }, 5000)
        })
      
      
    })
  }
}

// const mimicsServerCall = (e) => {
  
// }


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
