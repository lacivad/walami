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