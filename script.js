document.addEventListener('DOMContentLoaded', function() {
    var botonEncriptar = document.getElementById('btnEncriptar');
    var botonDesencriptar = document.getElementById('btnDesencriptar');
    var botonCopiar = document.getElementById('btnCopiar');
    var textoArea = document.getElementById('texto');
    var resultado = document.getElementById('textoResultado');

    botonEncriptar.onclick = function() {
        var texto = textoArea.value;
        resultado.textContent = encriptarTexto(texto);
    }

    botonDesencriptar.onclick = function() {
        var texto = textoArea.value;
        resultado.textContent = desencriptarTexto(texto);
    }

    botonCopiar.onclick = function() {
        var texto = resultado.textContent;
        navigator.clipboard.writeText(texto).then(function() {
            alert('Texto copiado al portapapeles');
        }).catch(function(err) {
            console.error('Error al copiar el texto: ', err);
        });
    }

    function encriptarTexto(mensaje) {
        return mensaje
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    function desencriptarTexto(mensaje) {
        return mensaje
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }
});

