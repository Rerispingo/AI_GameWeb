/**
 * Configuração principal do jogo Phaser.
 */
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

// Variável para armazenar a contagem de cliques
let count = 0;
// Objeto de texto do Phaser para exibir a contagem de cliques na tela
let countText;

/**
 * Função de pré-carregamento do Phaser.
 * Usada para carregar assets do jogo (imagens, sons, etc.) antes do início.
 * Atualmente, não há assets externos, então está vazia.
 */
function preload() {
    // Não há assets externos no momento
}

/**
 * Função de criação do Phaser.
 * Chamada uma vez quando o jogo é iniciado, após o pré-carregamento.
 * Aqui são criados os objetos do jogo, configurados eventos e a interface inicial.
 */
function create() {
    // Texto do contador
    countText = this.add.text(400, 200, 'Cliques: 0', {
        fontSize: '48px',
        fill: '#ffffff',
        fontFamily: 'Arial'
    }).setOrigin(0.5);

    // Botão interativo
    const button = this.add.rectangle(400, 400, 200, 80, 0x6666ff)
        .setInteractive({ useHandCursor: true });

    const buttonText = this.add.text(400, 400, 'CLIQUE AQUI', {
        fontSize: '24px',
        fill: '#ffffff',
        fontFamily: 'Arial'
    }).setOrigin(0.5);

    // Configura o evento de clique (pointerdown) para o botão
    button.on('pointerdown', () => {
        count++; // Incrementa a contagem de cliques
        countText.setText('Cliques: ' + count); // Atualiza o texto na tela
        
        // Pequena animação de feedback no botão: muda a cor ao clicar e retorna após um curto período
        button.setFillStyle(0x4444cc);
        this.time.delayedCall(100, () => {
            button.setFillStyle(0x6666ff);
        });
    });

    // Efeitos de hover: muda a cor do botão quando o mouse passa por cima e quando sai
    button.on('pointerover', () => button.setFillStyle(0x8888ff)); // Mouse entra
    button.on('pointerout', () => button.setFillStyle(0x6666ff)); // Mouse sai
}
