let box = document.querySelector('#box');

box.setAttribute('style','border: 5px solid black; height: 400px; width: 400px;');


let i = 0
box.addEventListener('click', () => {
    if (i == 0) {
        box.setAttribute('style','border: 5px solid black; height: 400px; width: 400px; border-radius: 50%; transition-duration: 2s; background-color: red;');
        i++
    } else {
        box.setAttribute('style','border: 5px solid black; height: 400px; width: 400px; transition-duration: 2s');
        i--
    }
});

