const messages = [];
const msgBox = document.querySelector('#messageBox');
const msgButton = document.querySelector('#messageButton');

window.addEventListener("DOMContentLoaded", async () => {
    try{
        const uzik = await fetch('./uzik.csv');
        console.log(uzik)
    } catch (error) {
        console.error(error)
    }
});