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
}

/**
 * Inicializa a interface do jogo.
 */
function initGame() {
    const container = document.getElementById('game-container');
    if (!container) return;

    // Criar estrutura do jogo usando Tailwind
    container.innerHTML = `
        <div class="flex flex-col items-center justify-center h-full w-full p-2 space-y-8">
            <div id="action-row" class="flex items-center space-x-6 w-full max-w-[98%] px-4">
                <!-- Botão de Ação -->
                <button id="rob-button" class="w-64 h-20 bg-red-500 hover:bg-red-400 active:scale-95 transition-all rounded-md font-bold text-white text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed shrink-0">
                    Roubar sacolas de supermercado
                </button>

                <!-- Barra de Progresso -->
                <div class="flex-grow h-20 bg-zinc-800 rounded-md overflow-hidden border border-zinc-700">
                    <div id="progress-bar" class="h-full w-0 bg-green-500 transition-none"></div>
                </div>
            </div>
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
    
    // Atualização inicial
    updateSidebarMoney();
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initGame);
