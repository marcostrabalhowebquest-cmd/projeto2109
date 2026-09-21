// Aguarda o carregamento do documento HTML para iniciar o código
document.addEventListener("DOMContentLoaded", function() {

    // Captura todos os botões que possuem a classe .btn-verificar
    const botoes = document.querySelectorAll('.btn-verificar');

    // Percorre a lista de botões adicionando a função de clique a cada um
    botoes.forEach(function(botao) {
        botao.addEventListener('click', function() {

            // Identifica o card pai do botão clicado
            const cardPai = this.parentElement;

            // Encontra a div de explicação dentro deste card específico
            const explicacao = cardPai.querySelector('.explicacao');

            // Alterna a classe 'escondido' para revelar ou ocultar a resposta
            if (explicacao.classList.contains('escondido')) {
                explicacao.classList.remove('escondido');
                this.textContent = 'Ocultar Explicação';
            } else {
                explicacao.classList.add('escondido');
                this.textContent = 'Verificar Fato';
            }
            
        });
    });

});
