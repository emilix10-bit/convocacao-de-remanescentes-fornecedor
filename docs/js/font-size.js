document.addEventListener('DOMContentLoaded', function() {
    let currentFontSize = parseFloat(localStorage.getItem('userFontSize')) || 16;

    // Função que aplica a fonte na página
    function aplicarFonte() {
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
        localStorage.setItem('userFontSize', currentFontSize);
    }

    // Aplica a configuração salva assim que a página é aberta
    aplicarFonte();

    // Captura os botões criados no HTML através do ID
    const btnAumentar = document.getElementById('btn-zoom-in');
    const btnDiminuir = document.getElementById('btn-zoom-out');
    const btnResetar = document.getElementById('btn-zoom-reset');

    // Cria as ações caso o botão exista na tela
    if (btnAumentar) {
        btnAumentar.addEventListener('click', function() {
            if (currentFontSize < 24) {
                currentFontSize += 2;
                aplicarFonte();
            }
        });
    }

    if (btnDiminuir) {
        btnDiminuir.addEventListener('click', function() {
            if (currentFontSize > 12) {
                currentFontSize -= 2;
                aplicarFonte();
            }
        });
    }

    if (btnResetar) {
        btnResetar.addEventListener('click', function() {
            currentFontSize = 16;
            aplicarFonte();
        });
    }
});
