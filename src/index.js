import cipher from './cipher.js';

//window.alert("Bem vindes ao lugar que te ajudará a se comunicar de um jeito secreto!")

const buttonCipher = document.getElementById("buttonCipher");
const buttonDecipher = document.getElementById("buttonDecipher");

document.getElementById("buttonCipher").addEventListener("click", cipherTextReturn);
document.getElementById("buttonDecipher").addEventListener("click", decipherTextReturn);

function cipherTextReturn(e) {
    e.preventDefault()
    const offset = parseInt(document.getElementById("offsetNumber1").value)
    const string = document.getElementById("ToCodeText").value
    const resultCipher = cipher.encode(offset, string);
    const showResult = document.getElementById("ResultCodeText")
    showResult.value = resultCipher;
    // console.log(document.getElementById("offsetNumber1").value)
}

function decipherTextReturn(e) {
    e.preventDefault()
    const offset = parseInt(document.getElementById("offsetNumber1").value)
    const string = document.getElementById("ToCodeText").value
    const resultDecipher = cipher.decode(offset, string)
    const showResult = document.getElementById("ResultCodeText")
    showResult.value = resultDecipher;
}