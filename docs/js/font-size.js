let fontFactor = parseFloat(localStorage.getItem('userFontFactor')) || 1.0;

function aplicarFonte() {
    // Ajusta a escala da fonte no elemento principal da página
    document.documentElement.style.fontSize = (fontFactor * 100) + '%';
    localStorage.setItem('userFontFactor', fontFactor);
}

function aumentarFonte() {
    if (fontFactor < 1.4) { // Limite máximo (+40%)
        fontFactor += 0.1;
        aplicarFonte();
    }
}

function diminuirFonte() {
    if (fontFactor > 0.8) { // Limite mínimo (-20%)
        fontFactor -= 0.1;
        aplicarFonte();
    }
}

function resetarFonte() {
    fontFactor = 1.0;
    aplicarFonte();
}

// Aplica o tamanho salvo assim que a página carrega
document.addEventListener('DOMContentLoaded', aplicarFonte);
