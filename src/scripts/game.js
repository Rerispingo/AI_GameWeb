/**
 * Configuração principal do jogo Phaser.
 */
const config = {
    type: Phaser.WEBGL, // Força WebGL para maior nitidez em textos e formas
    backgroundColor: '#2d2d2d',
    parent: 'game-container',
    render: {
        antialias: true,
        pixelArt: false,
        roundPixels: true // Evita sub-pixels que causam embaçamento
    },
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    // Sincroniza a resolução interna com a densidade de pixels da tela
    resolution: window.devicePixelRatio || 1,
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

// Variável global para dinheiro
let money = 0.00;

function updateSidebarMoney() {
    const moneyDisplay = document.getElementById('money-display');
    if (moneyDisplay) {
        moneyDisplay.textContent = `$${money.toFixed(2)}`;
    }
}

function preload() {}

function create() {
    const self = this;
    
    // Referências
    let button, buttonText, barBackground, progressBar;
    let isPerformingAction = false;
    let currentTween = null;

    // Configurações de Design
    const btnWidth = 240;
    const btnHeight = 80;
    const barHeight = 24;
    const horizontalPadding = 100; // Margem de segurança maior
    const spacing = 50;

    /**
     * Posicionamento preciso usando Math.floor para evitar blur
     */
    const setupLayout = () => {
        const width = this.scale.width;
        const height = this.scale.height;
        const centerY = Math.floor(height / 2);

        // Cálculo da largura do slider com margens fixas
        // O slider deve ocupar o que sobrar descontando botão, margens e espaçamento
        let barWidth = width - (horizontalPadding * 2) - btnWidth - spacing;
        barWidth = Math.max(barWidth, 120);

        // Largura total ocupada pelos elementos
        const totalContentWidth = btnWidth + spacing + barWidth;
        
        // Ponto de início (X) para centralizar o bloco todo na tela
        const startX = Math.floor((width - totalContentWidth) / 2);

        const btnX = Math.floor(startX + (btnWidth / 2));
        const barX = Math.floor(startX + btnWidth + spacing + (barWidth / 2));

        if (!button) {
            // Botão
            button = this.add.rectangle(btnX, centerY, btnWidth, btnHeight, 0xef4444)
                .setInteractive({ useHandCursor: true });
            
            buttonText = this.add.text(btnX, centerY, 'Roubar sacolas de supermercado', {
                fontSize: '18px',
                fill: '#ffffff',
                fontFamily: 'Arial',
                fontWeight: 'bold',
                align: 'center',
                wordWrap: { width: btnWidth - 40 }
            }).setOrigin(0.5);

            // Slider
            barBackground = this.add.rectangle(barX, centerY, barWidth, barHeight, 0x3f3f46).setOrigin(0.5);
            progressBar = this.add.rectangle(Math.floor(barX - barWidth / 2), centerY, 0, barHeight, 0x22c55e).setOrigin(0, 0.5);

            // Eventos
            button.on('pointerdown', startAction);
            button.on('pointerover', () => { if (!isPerformingAction) button.setFillStyle(0xf87171); });
            button.on('pointerout', () => { if (!isPerformingAction) button.setFillStyle(0xef4444); });
        } else {
            // Update
            button.setPosition(btnX, centerY);
            buttonText.setPosition(btnX, centerY);
            barBackground.setPosition(barX, centerY);
            barBackground.setSize(barWidth, barHeight);
            
            progressBar.setPosition(Math.floor(barX - barWidth / 2), centerY);
            progressBar.height = barHeight;
            
            if (currentTween) {
                currentTween.updateTo('width', barWidth, true);
            } else {
                progressBar.width = isPerformingAction ? barWidth : 0;
            }
        }
    };

    function startAction() {
        if (isPerformingAction) return;

        isPerformingAction = true;
        button.setAlpha(0.6);
        progressBar.width = 0;

        // Recalcula largura atual para o tween
        const width = self.scale.width;
        const currentBarWidth = Math.max(width - (horizontalPadding * 2) - btnWidth - spacing, 120);

        currentTween = self.tweens.add({
            targets: progressBar,
            width: currentBarWidth,
            duration: 4000,
            ease: 'Linear',
            onComplete: () => {
                money += 0.10;
                updateSidebarMoney();
                
                isPerformingAction = false;
                button.setAlpha(1);
                progressBar.width = 0;
                currentTween = null;
            }
        });
    }

    setupLayout();

    this.scale.on('resize', () => {
        setupLayout();
    });

    updateSidebarMoney();
}
