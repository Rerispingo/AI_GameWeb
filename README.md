# Idle Rob Tycoon

Este é um projeto base para o jogo web **Idle Rob Tycoon**, desenvolvido com a biblioteca **Phaser 3**. O objetivo é servir como um ponto de partida otimizado para desenvolvimento assistido por AI, agora com uma interface mais rica.

## 🛠 Tecnologias
- **Phaser 3.60.0** (via CDN)
- **Tailwind CSS** (via CDN para estilização)
- **HTML5 / JavaScript (ES6+)**

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
1. **Lógica de Estado**: O contador de cliques é mantido pela variável global `count`.
2. **Cena Única**: O jogo utiliza a configuração de cena inline dentro do objeto `config`.
3. **Interatividade**: O botão é um `Phaser.GameObjects.Rectangle` com listeners de eventos (`pointerdown`, `pointerover`, `pointerout`).
4. **Coordenadas**: O canvas tem 800x600. Elementos centrais estão em (400, 200) e (400, 400).
5. **Layout Flexbox**: O `index.html` agora utiliza flexbox para organizar o jogo e a sidebar, permitindo layouts responsivos.

## 🚀 Como Executar
Basta abrir o arquivo `index.html` em um navegador. Para evitar problemas de CORS com assets futuros, recomenda-se usar um servidor local (ex: `Live Server` do VS Code ou `python -m http.server`).

## 📝 Notas de Implementação
- **Botão**: Criado manualmente com um retângulo e um texto sobreposto para evitar dependência de imagens externas (assets).
- **Feedback**: Há um delay de 100ms no clique para feedback visual de cor.
