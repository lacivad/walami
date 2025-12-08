const kupak = document.querySelector('#image');
const szoveg = document.querySelector('.szoveg');
const tarolo = document.querySelector('.container');

const uzik = [];
let isClosed = true;

window.addEventListener('DOMContentLoaded', async() => {
    try {
        const response = await fetch('./uzik.csv');
        const text = await response.text();
        const sorok = text.split('\n').map(sor => sor.trim())
        sorok.forEach(sor => {
            uzik.push(sor);
        });
    } catch (error){
        console.log(error)
    }
});

const animateCap = async (start, end) => {
    const step = start < end ? 1 : -1
    for (let index = start; index !== end + step; index += step) {
        await new Promise(resolve => setTimeout(resolve, 13));
        kupak.src = `./images/bottlecap_${index}.png`
    }
}

tarolo.addEventListener('click', async () => {
    if(isClosed) {
        await animateCap(0, 10);
        szoveg.textContent = uzik[Math.floor(Math.random() * uzik.length)];
        szoveg.classList.remove("hidden")
        isClosed = false;
    } else {
        szoveg.classList.add("hidden")
        await animateCap(10, 0);
        isClosed = true;
    }
})

