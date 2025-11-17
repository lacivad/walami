const messages = [];
const msgBox = document.querySelector('#messageBox');
const msgButton = document.querySelector('#messageButton');

window.addEventListener("DOMContentLoaded", async () => {
    try{
        const uzik = await fetch('./uzik.csv');
        const uzikText = (await uzik.text()).split('\n').map(sor => `${sor.trim()}`);
        uzikText.forEach(uzi => { 
            messages.push(uzi)
        });
    } catch (error) {
        console.error(error)
    }
});
console.log(messages)
msgButton.addEventListener('click', () => {
    let num = (Math.floor(Math.random() * 423))
    msgBox.textContent = messages[num];
})