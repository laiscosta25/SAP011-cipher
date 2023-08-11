const cipher = {// Objeto "cipher" que contém as funções de cifragem e decifragem

  encode: function (offset, string) {// Função para cifrar o texto
    if (!offset) {// Verifica se o campo "offset" foi preenchido
      throw new TypeError("Algum campo não foi preenchido. Por favor, verifique e tente novamente.");
    }

    let textCode = "";// Variável para armazenar o texto cifrado

    for (let i = 0; i < string.length; i++) { // Loop para percorrer cada caractere na string
      const cifrar = string.charCodeAt(i);// Obtém o código Unicode do caractere

      if (cifrar >= 65 && cifrar <= 90) {// Caracteres de letras maiúsculas
        textCode += String.fromCharCode(((cifrar - 65 + offset) % 26) + 65);// Executa a cifragem para letras maiúsculas
      } else if (cifrar >= 97 && cifrar <= 122) {// Caracteres de letras minúsculas
        textCode += String.fromCharCode(((cifrar - 97 + offset) % 26) + 97);// Executa a cifragem para letras minúsculas
      } else {
        textCode += string.charAt(i);// Mantém caracteres não alfabéticos inalterados
      }
    }
    return textCode;
  },

  decode: function (offset, string) {
    if (!offset) {
      throw new TypeError("Algum campo não foi preenchido. Por favor, verifique e tente novamente.");
    }
    
    let textDecode = "";

    for (let i = 0; i < string.length; i++) {
      const decifrar = string.charCodeAt(i);

      if (decifrar >= 65 && decifrar <= 90) {
        textDecode += String.fromCharCode(((decifrar + 65 - offset) % 26) + 65);
      } else if (decifrar >= 97 && decifrar <= 122) {
        textDecode += String.fromCharCode(((decifrar - 122 - offset) % 26) + 122);
      } else {
        textDecode += string.charAt(i);
      }
    }
    return textDecode;
  }

}
export default cipher