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
1. **Lógica de Estado**: O dinheiro do jogador é mantido pela variável global `money`.
2. **Responsividade e Qualidade**: O jogo utiliza `Phaser.Scale.RESIZE` e `resolution: window.devicePixelRatio`. Foi forçado o modo `Phaser.WEBGL` e ativado `roundPixels: true` para garantir nitidez máxima e evitar o aspecto embaçado.
3. **Interatividade**: O botão de ação e o slider de progresso estão posicionados horizontalmente. O slider possui margens fixas de segurança (`horizontalPadding: 100`) para evitar que encoste nas extremidades da página.
4. **Coordenadas**: Elementos são posicionados dinamicamente via função `setupLayout` com `Math.floor`, garantindo que os objetos fiquem alinhados perfeitamente à grade de pixels.

## 🚀 Como Executar
Basta abrir o arquivo `index.html` em um navegador. Para evitar problemas de CORS com assets futuros, recomenda-se usar um servidor local (ex: `Live Server` do VS Code ou `python -m http.server`).

## 📝 Notas de Implementação
- **Qualidade Visual**: Forçado WebGL e arredondamento de pixels para eliminar o blur. Removido conflito de centralização do Flexbox no `index.html`.
- **Mecânica de Ação**: Botão à esquerda e Slider à direita. O Slider agora respeita uma margem de 100px, garantindo elegância visual.
- **Responsividade**: O sistema de layout recalcula e reposiciona todos os elementos em tempo real ao redimensionar a janela.

