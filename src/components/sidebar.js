/**
 * Componente da Sidebar.
 * Contém o HTML e a lógica de comportamento da barra lateral.
 */
const Sidebar = {
    render() {
        return `
            <div id="sidebar" class="w-[250px] min-w-[50px] max-w-[500px] bg-sidebar shadow-[2px_0_5px_rgba(0,0,0,0.5)] sidebar-transition visible relative flex flex-col shrink-0">
                <div id="sidebar-content" class="p-6 overflow-y-auto flex-grow w-full box-border space-y-6">
                    <header>
                        <h2 class="text-2xl font-bold text-white tracking-tight">Idle Rob Tycoon</h2>
                        <p class="text-sm text-gray-400 mt-1 uppercase tracking-widest font-semibold">Painel de Controle</p>
                        <!-- Exibição de dinheiro atualizada via scripts/game.js -->
                        <div class="mt-4 p-3 bg-zinc-800 rounded-lg border border-yellow-500/30 flex items-center justify-between">
                            <span class="text-gray-400 text-xs uppercase font-bold tracking-tighter">Dinheiro</span>
                            <span id="money-display" class="text-xl font-mono text-yellow-500 font-bold">$0.00</span>
                        </div>
                    </header>
                    
                    <section class="space-y-4">
                        <h3 class="text-lg font-semibold text-gray-100 border-b border-gray-700 pb-2">Loja</h3>
                        <div class="bg-zinc-800/50 p-4 rounded-lg border border-gray-700">
                            <p class="text-gray-400">Itens da loja virão aqui.</p>
                        </div>
                    </section>
                </div>
                <div id="resizer" class="w-[5px] cursor-col-resize bg-resizer absolute right-0 top-0 bottom-0 z-[5] hover:bg-resizer-hover"></div>
            </div>
        `;
    },

    init() {
        const sidebar = document.getElementById('sidebar');
        const resizer = document.getElementById('resizer');
        let isResizing = false;

        resizer.addEventListener('mousedown', (e) => {
            isResizing = true;
            sidebar.classList.remove('sidebar-transition');
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', stopResizing);
            document.body.style.cursor = 'col-resize';
        });

        function handleMouseMove(e) {
            if (!isResizing) return;
            const newWidth = e.clientX;
            if (newWidth > 150 && newWidth < 500) {
                sidebar.style.width = `${newWidth}px`;
            }
        }

        function stopResizing() {
            isResizing = false;
            sidebar.classList.add('sidebar-transition');
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', stopResizing);
            document.body.style.cursor = 'default';
        }
    }
};

// Injeta a sidebar no DOM
document.addEventListener('DOMContentLoaded', () => {
    const container = document.body;
    container.insertAdjacentHTML('afterbegin', Sidebar.render());
    Sidebar.init();
});
