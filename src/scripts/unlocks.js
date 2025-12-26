/**
 * Sistema de Desbloqueios (Unlock System)
 * Gerencia o desbloqueio de novas funcionalidades, itens e ações.
 */

const UnlockSystem = {
    // Lista de itens que podem ser desbloqueados
    // Estrutura: { id, condition: () => boolean, onUnlock: () => void, unlocked: boolean }
    registry: [],

    /**
     * Registra um novo item desbloqueável.
     * @param {Object} item - Objeto com id, condition e onUnlock.
     */
    register(item) {
        this.registry.push({
            ...item,
            unlocked: false
        });
    },

    /**
     * Verifica todos os itens registrados para ver se algum novo foi desbloqueado.
     * Deve ser chamado periodicamente (ex: a cada ganho de dinheiro).
     */
    check() {
        this.registry.forEach(item => {
            if (!item.unlocked && item.condition()) {
                item.unlocked = true;
                if (item.onUnlock) item.onUnlock();
                console.log(`[UnlockSystem] Desbloqueado: ${item.id}`);
                
                // Dispara um evento customizado para que a UI possa reagir
                const event = new CustomEvent('unlock', { detail: { id: item.id } });
                window.dispatchEvent(event);
            }
        });
    },

    /**
     * Verifica se um item específico já está desbloqueado.
     * @param {string} id - O ID do item.
     * @returns {boolean}
     */
    isUnlocked(id) {
        const item = this.registry.find(i => i.id === id);
        return item ? item.unlocked : false;
    }
};

// Exporta globalmente para uso em outros scripts
window.UnlockSystem = UnlockSystem;
