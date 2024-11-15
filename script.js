const claveCifrado = {
    'a': 'z',
    'b': 'x',
    'c': 'v',
    'd': 'u',
    'e': 't',
    'f': 's',
    'g': 'r',
    'h': 'q',
    'i': 'p',
    'j': 'o',
    'k': 'n',
    'l': 'm',
    'm': 'l',
    'n': 'k',
    'o': 'j',
    'p': 'i',
    'q': 'h',
    'r': 'g',
    's': 'f',
    't': 'e',
    'u': 'd',
    'v': 'c',
    'w': 'b',
    'x': 'a',
    'y': '9',
    'z': '8'
};

function encriptar() {
    var texto = document.querySelector('.textoIngreso').value.toLowerCase();
    var textoEncriptado = '';

    for (var i = 0; i < texto.length; i++) {
        var caracter = texto.charAt(i);
        if (claveCifrado.hasOwnProperty(caracter)) {
            textoEncriptado += claveCifrado[caracter];
        } else {
            textoEncriptado += caracter;
        }
    }

    document.querySelector('.textoRespuesta').textContent = textoEncriptado;
}

function desencriptar() {
    var textoEncriptado = document.querySelector('.textoRespuesta').textContent;
    var textoDesencriptado = '';

    for (var i = 0; i < textoEncriptado.length; i++) {
        var caracter = textoEncriptado.charAt(i);
        for (var key in claveCifrado) {
            if (claveCifrado[key] === caracter) {
                textoDesencriptado += key;
                break;
            }
        }
        if (!claveCifrado.hasOwnProperty(caracter)) {
            textoDesencriptado += caracter;
        }
    }

    document.querySelector('.textoRespuesta').textContent = textoDesencriptado;
}

function cambiarMensaje() {
    document.querySelector('.textoRespuesta').textContent = 'Ningún mensaje fue encontrado';
}
