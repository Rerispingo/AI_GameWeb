/**
 * Lógica do jogo refatorada para Vanilla JS + HTML/CSS (removido Phaser).
 */

// Variável global para dinheiro (mantida conforme README)
let money = 0.00;

/**
 * Atualiza a exibição de dinheiro na sidebar.
 */
function updateSidebarMoney() {
    const moneyDisplay = document.getElementById('money-display');
    if (moneyDisplay) {
        moneyDisplay.textContent = `$${money.toFixed(2)}`;
    }
    // Verifica desbloqueios sempre que o dinheiro muda
    if (window.UnlockSystem) {
        window.UnlockSystem.check();
    }
}

/**
 * Inicializa a interface do jogo.
 */
function initGame() {
    const container = document.getElementById('game-container');
    if (!container) return;

    // Criar estrutura do jogo usando Tailwind
    container.innerHTML = `
        <div id="game-actions" class="flex flex-col items-center justify-center h-full w-full p-2 space-y-8">
            <div id="action-rob" class="flex items-center space-x-6 w-full max-w-[98%] px-4">
                <!-- Botão de Ação -->
                <button id="rob-button" class="w-64 h-20 bg-red-500 hover:bg-red-400 active:scale-95 transition-all rounded-md font-bold text-white text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed shrink-0">
                    Roubar sacolas de supermercado
                </button>

                <!-- Barra de Progresso -->
                <div class="flex-grow h-20 bg-zinc-800 rounded-md overflow-hidden border border-zinc-700">
                    <div id="progress-bar" class="h-full w-0 bg-green-500 transition-none"></div>
                </div>
            </div>
            
            <!-- Novos botões/ações serão injetados aqui pelo sistema de desbloqueio -->
        </div>
    `;

    const button = document.getElementById('rob-button');
    const progressBar = document.getElementById('progress-bar');
    let isPerformingAction = false;

    function startAction() {
        if (isPerformingAction) return;

        isPerformingAction = true;
        button.disabled = true;
        
        const duration = 4000; // 4 segundos
        const startTime = Date.now();

        function updateProgress() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min((elapsed / duration) * 100, 100);
            
            progressBar.style.width = `${progress}%`;

            if (elapsed < duration) {
                requestAnimationFrame(updateProgress);
            } else {
                // Ação concluída
                money += 0.10;
                updateSidebarMoney();
                
                // Resetar
                isPerformingAction = false;
                button.disabled = false;
                progressBar.style.width = '0%';
            }
        }

        requestAnimationFrame(updateProgress);
    }

    button.addEventListener('click', startAction);
    
    // --- PREPARAÇÃO PARA DESBLOQUEIOS ---
    
    // Exemplo: Registrar um desbloqueio de nova ação
    if (window.UnlockSystem) {
        window.UnlockSystem.register({
            id: 'action-pickpocket',
            condition: () => money >= 0.50, // Desbloqueia com $0.50
            onUnlock: () => {
                const actionsContainer = document.getElementById('game-actions');
                if (actionsContainer) {
                    const newActionHTML = `
                        <div id="action-pickpocket-row" class="flex items-center space-x-6 w-full max-w-[98%] px-4 animate-fade-in">
                            <button id="pickpocket-button" class="w-64 h-20 bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all rounded-md font-bold text-white text-lg shadow-lg shrink-0">
                                Bater carteiras no metrô
                            </button>
                            <div class="flex-grow h-20 bg-zinc-800 rounded-md overflow-hidden border border-zinc-700">
                                <div id="pickpocket-progress" class="h-full w-0 bg-blue-400 transition-none"></div>
                            </div>
                        </div>
                    `;
                    actionsContainer.insertAdjacentHTML('beforeend', newActionHTML);
                    
                    // Adicionar lógica para o novo botão (exemplo simplificado)
                    const ppButton = document.getElementById('pickpocket-button');
                    ppButton.addEventListener('click', () => {
                        // Lógica similar ao startAction, mas com valores diferentes
                        console.log("Ação de bater carteiras iniciada!");
                    });
                }
            }
        });
    }

    // Atualização inicial
    updateSidebarMoney();
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initGame);
