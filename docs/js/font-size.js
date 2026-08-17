// 1. Tenta recuperar o tamanho salvo, com proteção contra bloqueio do navegador (SecurityError)
let currentFontSize = 16;
try {
    currentFontSize = parseFloat(localStorage.getItem('userFontSize')) || 16;
} catch (e) {
    console.warn("O navegador bloqueou o localStorage. O tamanho da fonte não será salvo para as próximas páginas.");
}

// 2. Cria a função global para aplicar o estilo na tela
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
    
    // Tenta salvar o novo tamanho
    try {
        localStorage.setItem('userFontSize', currentFontSize);
    } catch (e) {}
};

// 3. Cria as funções globais dos botões
window.aumentarFonte = function() {
    if (currentFontSize < 24) {
        currentFontSize += 2;
        window.aplicarFonte();
    }
};

window.diminuirFonte = function() {
    if (currentFontSize > 12) {
        currentFontSize -= 2;
        window.aplicarFonte();
    }
};

window.resetarFonte = function() {
    currentFontSize = 16;
    window.aplicarFonte();
};

// 4. Aplica a fonte assim que a página terminar de carregar
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", window.aplicarFonte);
} else {
    window.aplicarFonte();
}
