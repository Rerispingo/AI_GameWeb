# Idle Rob Tycoon

Este é um projeto base para o jogo web **Idle Rob Tycoon**, desenvolvido com **Vanilla JavaScript, HTML5 e Tailwind CSS**. O objetivo é servir como um ponto de partida leve e modular para desenvolvimento assistido por AI.

## 🛠 Tecnologias
- **HTML5 / JavaScript (ES6+)**
- **Tailwind CSS** (via CDN para estilização)
- **DOM API** para manipulação da interface e lógica de jogo

## 📂 Estrutura de Arquivos
- `index.html`: Ponto de entrada simplificado.
- `src/`: Pasta contendo o código fonte organizado.
    - `components/`: Componentes da interface modularizados (ex: `sidebar.js`).
    - `scripts/`: Lógica do jogo e scripts auxiliares (ex: `game.js`).
    - `styles/`: Arquivos de estilização e configurações do Tailwind (ex: `styles.css`, `tailwind-config.js`).
- `icons/`: Pasta contendo assets vetoriais (SVG) utilizados na interface do usuário.

## ✨ Novidades
- **Modularização**: O código foi totalmente organizado em pastas e arquivos separados para facilitar a manutenção.
- **Estilização com Tailwind CSS**: Todo o CSS foi extraído para arquivos externos, incluindo a configuração do tema.
- **Sidebar Interativa**: Agora é um componente modular que injeta seu próprio HTML e lógica.
- **Layout Flexbox**: Organização harmoniosa entre o canvas do jogo e a barra lateral.

## 🧠 Contexto para AI (Prompt Optimization)
Ao realizar modificações neste projeto, considere:
1. **Lógica de Estado**: O dinheiro do jogador é mantido pela variável global `money`.
2. **Interface DOM**: O jogo não utiliza Canvas ou Phaser. Todos os elementos visuais são elementos HTML reais manipulados via JS e estilizados com Tailwind CSS.
3. **Interatividade**: O botão de ação e a barra de progresso ocupam quase toda a largura da tela (`max-w-[98%]`) para maximizar o uso do espaço.
4. **Design**: O slider de progresso possui a mesma altura que o botão de ação (`h-20`) e bordas levemente arredondadas (`rounded-md`) para um visual mais robusto e industrial.
5. **Modularização**: Scripts de jogo estão em `src/scripts/game.js` e componentes de UI em `src/components/`.

## 🚀 Como Executar
Basta abrir o arquivo `index.html` em um navegador. Recomenda-se usar um servidor local (ex: `Live Server` do VS Code).

## 📝 Notas de Implementação
- **Performance**: Utilização de `requestAnimationFrame` para o slider de progresso, garantindo 60fps sem sobrecarga.
- **Mecânica de Ação**: Botão à esquerda e Barra de Progresso à direita, seguindo o layout original mas agora com elementos HTML nativos.
- **Responsividade**: Layout baseado em Flexbox do Tailwind CSS, adaptando-se automaticamente a diferentes tamanhos de tela.

