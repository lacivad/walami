const moodSlider = document.querySelector("#moodSlider")
const image = document.querySelector('#image')
//console.log(moodSlider)
document.addEventListener('DOMContentLoaded', ()=>{image.src = `./img/4.png`})

moodSlider.addEventListener('input', () => {
    const sliderValue = parseInt(moodSlider.value)+1;
    image.src = `./img/${sliderValue}.png`
})