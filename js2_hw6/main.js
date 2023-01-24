let input = document.querySelector('#input');
let button = document.querySelector('#button');
let reverseText = document.querySelector('#reverseText');
let reversedArray = [];

let revTex = () => {

    const str = input.value
    const letters = str.split('')
    let reversed = letters.reverse().join('')
    reversedArray.push(reversed);
    reverseText.innerHTML = ''
    reversedArray.forEach((word) => {
        reverseText.innerHTML += word + '<br>'
    })
}

button.addEventListener('click', revTex)