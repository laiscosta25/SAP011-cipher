import cipher from './cipher.js';

document.getElementById("buttonCipher").addEventListener("click", cipherTextReturn);
document.getElementById("buttonDecipher").addEventListener("click", decipherTextReturn);

function cipherTextReturn(e) {
  e.preventDefault()
  const offset = parseInt(document.getElementById("offsetNumber1").value)
  const string = document.getElementById("ToCodeText").value
  const resultCipher = cipher.encode(offset, string);
  const showResult = document.getElementById("ResultCodeText")
  showResult.value = resultCipher;
}

function decipherTextReturn(e) {
  e.preventDefault()
  const offset = parseInt(document.getElementById("offsetNumber1").value)
  const string = document.getElementById("ToCodeText").value
  const resultDecipher = cipher.decode(offset, string)
  const showResult = document.getElementById("ResultCodeText")
  showResult.value = resultDecipher;
}