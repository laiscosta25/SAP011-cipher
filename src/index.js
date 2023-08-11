import cipher from './cipher.js'; // importação do módulo

document.getElementById("buttonCipher").addEventListener("click", cipherTextReturn); // Adiciona um Event Listener ao botão "Cifrar" e chama a função cipherTextReturn
document.getElementById("buttonDecipher").addEventListener("click", decipherTextReturn); // ao botão "Decifrar", chama a função decipherTextReturn 


function cipherTextReturn(e) {// função para cifrar o texto
  e.preventDefault()// Evita que o formulário seja enviado
  const offset = parseInt(document.getElementById("offsetNumber1").value)// Obtém o valor do campo de deslocamento
  const string = document.getElementById("ToCodeText").value// Obtém o valor do campo de texto a ser cifrado
  const resultCipher = cipher.encode(offset, string) // Chama a função de cifragem do módulo cipher.js
  const showResult = document.getElementById("ResultCodeText")// Exibe o resultado da cifragem no campo de resultado
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