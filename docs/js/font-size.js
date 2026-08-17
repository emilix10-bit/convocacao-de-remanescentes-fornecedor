console.log("Script de fonte carregado com sucesso!");

let currentFontSize = 16;
try {
    currentFontSize = parseFloat(localStorage.getItem('userFontSize')) || 16;
} catch (e) {}

window.aplicarFonte = function() {
    let styleTag = document.getElementById('dynamic-font-style');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'dynamic-font-style';
        document.head.appendChild(styleTag);
    }
    
    styleTag.innerHTML = `
        .wy-nav-content, .rst-content, article, p, li, td, th, span, a {
            font-size: ${currentFontSize}px !important;
            line-height: 1.6 !important;
        }
    `;
    
    try {
        localStorage.setItem('userFontSize', currentFontSize);
    } catch (e) {}
};

window.aumentarFonte = function() {
    console.log("Botão A+ clicado!");
    if (currentFontSize < 24) {
        currentFontSize += 2;
        window.aplicarFonte();
    }
};

window.diminuirFonte = function() {
    console.log("Botão A- clicado!");
    if (currentFontSize > 12) {
        currentFontSize -= 2;
        window.aplicarFonte();
    }
};

window.resetarFonte = function() {
    console.log("Botão A (Reset) clicado!");
    currentFontSize = 16;
    window.aplicarFonte();
};

// Aplica a fonte assim que a página terminar de carregar
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", window.aplicarFonte);
} else {
    window.aplicarFonte();
}
