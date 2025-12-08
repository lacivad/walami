const tarolo = document.querySelector('.tarolo');
const kupak = document.querySelector('#kupak');
const szoveg = document.querySelector('.szoveg');

const uzik = [];
let zarvaVanE = true;

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const res = await fetch('./uzik.csv');
        const text = await res.text();
        const sorok = text.split('\n').map(sor => sor.trim());
        sorok.forEach(sor => uzik.push(sor))
        
    } catch (error) {
        console.log(error);
    }
})

tarolo.addEventListener('click', () => {    
    if(zarvaVanE) {
        szoveg.textContent = '';
        tarolo.classList.remove('zar');
        tarolo.classList.add('nyit');
        zarvaVanE = false
        setTimeout(() => {
            if (!zarvaVanE && uzik.length > 0) {
            szoveg.textContent = uzik[Math.floor(Math.random() * uzik.length)]
        }
        }, 299)
        
    } else {
        szoveg.textContent = '';
        tarolo.classList.remove('nyit');
        tarolo.classList.add('zar');
        zarvaVanE = true
    }
})