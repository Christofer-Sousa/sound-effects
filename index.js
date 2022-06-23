const tome = new Audio('./audios/tome rodrigo faro.mp3')
const btnTome = document.querySelector("#tome")

btnTome.addEventListener("click", ()=>{
    tome.play()
})

const demais = new Audio('./audios/demais.mp3')
const btnDemais = document.querySelector("#demais")

btnDemais.addEventListener("click", ()=>{
    demais.play()
})

const eleGosta = new Audio('./audios/Ele Goosta.mp3')
const btnEleGosta = document.querySelector("#ele-gosta")

btnEleGosta.addEventListener("click", ()=>{
    eleGosta.play()
})

const ui = new Audio('./audios/ui.mp3')
const btnUi = document.querySelector("#ui")

btnUi.addEventListener("click", ()=>{
    ui.play()
})

const rapaiz = new Audio('./audios/rapaaiz.mp3')
const btnRapaiz = document.querySelector("#rapaiz")

btnRapaiz.addEventListener("click", ()=>{
    rapaiz.play()
})
