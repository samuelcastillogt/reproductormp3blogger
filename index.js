const audio = document.getElementById("audio")
const boton = document.getElementById("boton")
const playBtn = document.getElementById("play")
const pauseBtn = document.getElementById("pause")
const cerrar = document.getElementById("cerrar")
const reproductor = document.getElementById("reproductor")
const control = document.getElementById("control")
const abrir = document.getElementById("open")
boton.addEventListener("click", ()=>{
    playBtn.classList.toggle("hidden")
    pauseBtn.classList.toggle("hidden")
    if(audio.paused){
        audio.play()
    }else{
        audio.pause()
    }
    
})
control.addEventListener("click", ()=>{
    abrir.classList.toggle("hidden")
    cerrar.classList.toggle("hidden")
    reproductor.classList.toggle("reproductor")
    reproductor.classList.toggle("reproductorflat")
})