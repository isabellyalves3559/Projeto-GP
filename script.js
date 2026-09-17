// ==========================================
// PROTÓTIPO DIGITAL JTEKT - EQUIPE ROCKET
// ==========================================

/**
 * Função principal para trocar as telas do protótipo na Central de Demonstração
 * @param {string} idTela - O ID do container da tela que deve ser exibida (ex: 'sys-home')
 * @param {HTMLElement} elementoBotao - O botão que foi clicado para receber o destaque 'active'
 */
function abrirTelaSystem(idTela, elementoBotao) {
    // 1. Esconde todas as telas do monitor/sistema
    const telas = document.querySelectorAll('.system-screen');
    telas.forEach(function(tela) {
        tela.classList.remove('active');
    });

    // 2. Remove o destaque visual de todos os botões de navegação
    const botoes = document.querySelectorAll('.btn-nav');
    botoes.forEach(function(btn) {
        btn.classList.remove('active');
    });

    // 3. Exibe a tela correspondente ao ID passado
    const telaDestino = document.getElementById(idTela);
    if (telaDestino) {
        telaDestino.classList.add('active');
    }

    // 4. Aplica a classe 'active' ao botão selecionado
    if (elementoBotao) {
        elementoBotao.classList.add('active');
    }
}

/**
 * Função secundária para alternar telas internas (totem antigo/layout mobile)
 * @param {string} idTela - O ID da página interna
 */
function mudarTela(idTela) {
    const paginas = document.querySelectorAll('.totem-page');
    paginas.forEach(function(pagina) {
        pagina.classList.remove('active');
    });
    
    const paginaDestino = document.getElementById(idTela);
    if (paginaDestino) {
        paginaDestino.classList.add('active');
    }
}

// Mensagem no console para confirmar o carregamento correto do script no navegador
console.log("🚀 Script da Equipe Rocket carregado com sucesso!");