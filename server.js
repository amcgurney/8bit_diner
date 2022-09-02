let Open = document.getElementById("neon")
Open.onclick = turnOn

let Close = document.getElementById("neon")
Close.onclick = turnOff


function turnOff () {
  Open.style.color = "black"
  Open.style.animation = "none"
}

function turnOn () {
  Open.style.color = "#AB10B2;"
  Open.style.animation = "none"
}
