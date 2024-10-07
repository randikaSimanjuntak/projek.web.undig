//up animation on cover section
const animasi = document.querySelector(".cover")
const body = document.querySelector("body")
const animSec = document.querySelector(".image-animation")
const icon = document.querySelector(".icon")
const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const lagu = document.getElementById("lagu")

document.getElementById("btnCover").addEventListener('click', () => {
  animasi.classList.add("active")
  body.style.overflow = "scroll"
  play.style.display = "none"
  pause.style.display = "block"
  lagu.play()
});

document.getElementById("backIcon").addEventListener('click', () => {
  animasi.classList.remove("active")
  body.style.overflow = "hidden"
  play.style.display = "block"
  pause.style.display = "none"
  lagu.pause()
})

//btn play and pause 
play.addEventListener('click', () => {
  play.style.display = "none"
  pause.style.display = "block"
  lagu.play()
})

pause.addEventListener('click', () => {
  icon.style.animation = "none"
  play.style.display = "block"
  pause.style.display = "none"
  lagu.pause()
})

//timer in event
const countDownDate = new Date("Oct 30, 2024 09:00:0").getTime();

const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const hari = document.getElementById("hari")
  const jam = document.getElementById("jam")
  const menit = document.getElementById("menit")
  const detik = document.getElementById("detik")
  
  hari.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
  jam.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  menit.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  detik.innerHTML = Math.floor((distance % (1000 * 60)) / 1000)

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "ACARA DIMULAI!";
  }
});

//rsvp
const btnRsvp = document.getElementById("rsvpBtn")

btnRsvp.addEventListener('click', (event) => {
  event.preventDefault()

  const prompt = document.getElementById("prompt")
  const email = document.getElementById("email").value
  const nama = document.getElementById("nama").value
  const ucapan = document.getElementById("ucapan").value
  const opsi = document.getElementById("opsi").value

  if(email == "" || nama == "" || ucapan == "") {
      setTimeout(() => {
        prompt.innerText = "Tolong dilengkapi!"
      }, [1600])
  }else {
    if(opsi === "Akan Berhadir") {
      setTimeout(() => {
        prompt.innerText = `Oke ${nama}! data kamu sudah dikonfirmasi.`
      }, [1600])
    }else {
      setTimeout(() => {
        prompt.innerText = `Oke ${nama}!`
      }, [1600])
    }
  }
  
  email = "";
  nama = "";
  ucapan = "";
})