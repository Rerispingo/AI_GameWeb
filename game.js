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

let count = 0;
let countText;

function preload() {
    // Não há assets externos no momento
}

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

    // Efeito visual ao clicar
    button.on('pointerdown', () => {
        count++;
        countText.setText('Cliques: ' + count);
        
        // Pequena animação de feedback no botão
        button.setFillStyle(0x4444cc);
        this.time.delayedCall(100, () => {
            button.setFillStyle(0x6666ff);
        });
    });

    // Hover effects
    button.on('pointerover', () => button.setFillStyle(0x8888ff));
    button.on('pointerout', () => button.setFillStyle(0x6666ff));
}
