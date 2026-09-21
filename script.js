// Aguarda o carregamento completo do HTML antes de executar o código
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona TODOS os botões de verificação da página
    // querySelectorAll cria uma lista com todos os elementos que possuem a classe '.btn-verificar'
    const botoes = document.querySelectorAll('.btn-verificar');

    // Usamos o forEach para aplicar uma regra a CADA um dos botões encontrados
    botoes.forEach(function(botao) {

        // Adiciona um "escutador de eventos" para reagir ao clique do usuário
        botao.addEventListener('click', function() {

            // 'this' refere-se ao botão exatamente onde o usuário clicou
            // .parentElement pega o elemento pai do botão (que é o nosso <article class="card">)
            const cardPai = this.parentElement;

            // Busca o elemento com a explicação dentro DESTE card específico
            const explicacao = cardPai.querySelector('.explicacao');

            // Verifica se a explicação está oculta (se tem a classe 'escondido')
            if (explicacao.classList.contains('escondido')) {
                // Remove a classe para REVELAR o texto
                explicacao.classList.remove('escondido');
                // Altera o texto do botão para indicar a nova ação
                this.textContent = 'Ocultar Explicação';
            } else {
                // Adiciona a classe novamente para ESCONDER o texto
                explicacao.classList.add('escondido');
                // Voltar o texto original do botão
                this.textContent = 'Verificar Fato';
            }

        });

    });

});
