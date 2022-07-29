let h2 = document.querySelector("h2");
let body = document.querySelector("body")
let button = document.querySelector("button")

window.onload = function (){
  if(window.navigator.onLine){
    online();
  } else {
    offline()
  }
}

button.onclick = function() {
  window.location.reload()
  if(window.navigator.onLine){
    online();
  } else {
    offline()
  }
}

function online() {
  body.classList.add("online");
  h2.innerHTML = "browser is online"
}

function offline() {
  body.classList.remove("online")
  h2.innerHTML = "browser is offline"

}

window.addEventListener('online',online)
window.addEventListener('offline',offline)