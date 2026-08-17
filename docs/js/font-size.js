let currentFontSize = parseFloat(localStorage.getItem('userFontSize')) || 16;

function aplicarFonte() {
    let styleTag = document.getElementById('dynamic-font-style');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'dynamic-font-style';
        document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = `
        .wy-nav-content, .rst-content, article, p, li, td, th {
            font-size: ${currentFontSize}px !important;
            line-height: 1.6 !important;
        }
    `;
    localStorage.setItem('userFontSize', currentFontSize);
}

function aumentarFonte() {
    if (currentFontSize < 24) {
        currentFontSize += 2;
        aplicarFonte();
    }
}

function diminuirFonte() {
    if (currentFontSize > 12) {
        currentFontSize -= 2;
        aplicarFonte();
    }
}

function resetarFonte() {
    currentFontSize = 16;
    aplicarFonte();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', aplicarFonte);
} else {
    aplicarFonte();
}
