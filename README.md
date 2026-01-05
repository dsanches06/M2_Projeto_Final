# Projeto Final - Módulo 2: Bistrô Bar Sanches & Pinto

## 🧭 Tema do Projeto

**O Menu Digital — Site moderno para um restaurante, café ou food truck.**

## 📋 Informações da Dupla

|  Identificação  |      Elemento      |
|-----------------|--------------------|
|   upskill217    |   Danilson Sanches |
|   upskill229    |   Abel Pinto       |

## 🔗 Repositório

**Link do repositório:** [https://github.com/dsanches06/M2_Projeto_Final.git]

---

## 📐 Justificação das Opções Técnicas

### 1. **Estrutura do Projeto**

#### Organização de Arquivos
```
├── index.html          # Arquivo principal HTML
├── css/
│   ├── styles.css      # Estilos globais
│   └── carousel.css    # Estilos específicos do carrossel
├── js/
│   └── scripts.js      # Lógica interativa
└── images/             # Recursos visuais
```

#### Justificação:
- **Separação de responsabilidades:** Cada tipo de arquivo está organizado em diretórios específicos, facilitando manutenção e escalabilidade.
- **Modularidade CSS:** O carousel possui estilos separados para melhor organização e reutilização.
- **Estrutura simples:** Adequada para um projeto de aprendizagem, evitando complexidade desnecessária.

#### HTML Semântico:
- Utilização de tags semânticas como `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` em vez de divs genéricas
- Manutenção da clareza e significado estrutural do documento

### 2. **Interatividade**

#### Menu Responsivo (Mobile-First)
```javascript
// Toggle entre estados aberto/fechado do menu
btn.addEventListener("click", () => {
  addClassList(menu);
  toogleSlideMenu(menu);
});
```
**Justificação:**
- Adaptação automática para diferentes tamanhos de tela
- Melhor experiência do utilizador em dispositivos móveis
- Navegação acessível através de botão toggle

#### Modal de Reservas
- **Implementação:** Popup modal para formulário de reservas
- **Justificação:**
  - Mantém utilizador na página principal
  - Não recarrega a página (melhor UX)
  - Permite preenchimento de formulário sem perder contexto

#### Carrossel Automático
- **Rotação contínua** de imagens do menu
- **Justificação:**
  - Destaca visualmente os pratos principais
  - Engajamento visual do utilizador
  - Anima a experiência de navegação

#### Scroll Suave
```css
html {
  scroll-behavior: smooth;
}
```
- Transições suaves ao clicar em âncoras de navegação
- Melhora a experiência visual geral

### 3. **Acessibilidade (WCAG 2.1)**

#### 🏷️ Atributos ARIA (Accessible Rich Internet Applications)
- **aria-label:** Labels descritivos para elementos interativos
  - `aria-label="Abrir Menu"` no botão de menu
  - `aria-label="menu a carta"` nas opções do menu
- **aria-hidden="true":** Oculta ícones puramente decorativos dos leitores de tela
  - Ícones Font Awesome não afetam a experiência de utilizadores cegos

#### 📝 Labels Associadas
```html
<label for="nome">Nome:</label>
<input id="nome" type="text" />
```
- Cada campo de formulário possui label associada
- Facilita navegação com teclado e leitores de tela

#### 🎯 Navegação Semântica
- **Links com âncoras:** `href="#menudegustação"` permite navegação estruturada
- **Estrutura de headings:** h1, h2, h3 em ordem hierárquica
- **Keyboard navigation:** Todos os elementos interativos são acessíveis via teclado

#### 🌈 Contraste de Cores
```css
:root {
  --primary-bg-color: #c93b3b;    /* Vermelho destaque */
  --secondary-bg-color: #1560ac;  /* Azul profundo */
  --text-color: #0e0e0f;          /* Preto/Cinza escuro */
}
```
- Razões de contraste adequadas entre texto e fundo
- Cores distintas para diferenciação de elementos

#### 📱 Responsive Design
```css
@media (max-width: 768px) {
  /* Layouts ajustados para móvel */
}
```
- Adaptação automática a diferentes tamanhos de tela
- Preserva acessibilidade em todos os dispositivos

#### ⌨️ Keyboard Accessibility
- Todos os botões e links são navegáveis com Tab
- Menu dropdown funciona com teclado
- Modal pode ser fechado com Esc (implementação adicional)

#### 📄 Meta Tags
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Projeto de Modulo 2" />
```
- Codificação UTF-8 adequada
- Viewport configurada para responsividade
- Descrição para motores de busca

#### 🖼️ Atributos ALT
```html
<img alt="Bistro Bar Sanchez Pinto" src="imagem.jpg" />
```
- Todas as imagens possuem descrição alternativa
- Acessibilidade para utilizadores com deficiência visual

### **Exemplos de Acessibilidade (Práticos)**

Abaixo estão exemplos práticos e fáceis de aplicar no projeto para melhorar a acessibilidade.

- **Skip link (ir direto ao conteúdo):**

```html
<a href="#maincontent" class="skip-link">Ir para o conteúdo</a>
<main id="maincontent" tabindex="-1" role="main">...</main>
```

- **Foco visível (CSS):**

```css
.skip-link:focus,
a:focus,
button:focus {
  outline: 3px solid #ffd54f;
  outline-offset: 2px;
}
```

- **Botão de menu acessível (ARIA + atualização via JS):**

```html
<button id="menuBtn" aria-expanded="false" aria-controls="site-menu" aria-label="Abrir menu">Menu</button>
<nav id="site-menu" aria-hidden="true">...</nav>
```

```javascript
// ao alternar o menu
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('site-menu');
const expanded = btn.getAttribute('aria-expanded') === 'true';
btn.setAttribute('aria-expanded', String(!expanded));
menu.setAttribute('aria-hidden', String(expanded));
```

- **Modal acessível (marcação mínima):**

```html
<button aria-haspopup="dialog" aria-controls="reserva-modal">Reservar</button>
<div id="reserva-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" hidden>
  <h2 id="modal-title">Reservas</h2>
  <button class="close">Fechar</button>
  <form>...</form>
</div>
```

Principais pontos para o modal:
- remover `hidden` e focar o primeiro elemento interativo ao abrir;
- adicionar `aria-hidden="true"` ao restante conteúdo quando o modal estiver aberto;
- permitir fecho com `Esc` e manter foco dentro do modal (focus trap).

- **Carrossel acessível (rolê com controles):**

```html
<div class="carousel" role="region" aria-roledescription="carousel" aria-label="Pratos em destaque">
  <button aria-label="Anterior" class="prev">‹</button>
  <div class="slides">...</div>
  <button aria-label="Próximo" class="next">›</button>
</div>
```

Inclua indicadores visíveis e `aria-live` para avisos não intrusivos quando o slide mudar.

- **Atualizações dinâmicas (ex.: carrinho):**

```html
<div id="cart-updates" aria-live="polite"></div>
```

- **Alt text descritivo (boa prática):**

```html
<img src="coxinha.jpg" alt="Coxinha crocante com recheio de frango e ervas, servida com molho agridoce" />
```

- **Contraste de cores:**

Use ferramentas como o Lighthouse ou o WCAG Contrast Checker. Exemplos de variáveis:

```css
:root {
  --bg: #ffffff;
  --text: #111111; /* contraste alto */
}
```

Esses exemplos cobrem padrões básicos que melhoram muito a usabilidade e conformidade WCAG. Para componentes complexos (modal, carrossel) recomendo implementar o foco/trapping e testar com teclado e leitor de tela.

---

## ✨ Funcionalidades Principais

1. **Menu Responsivo** - Adaptado para mobile e desktop
2. **Carrossel de Imagens** - Apresentação automática dos pratos
3. **Modal de Reservas** - Formulário integrado na página
4. **Navegação por Âncoras** - Acesso rápido a diferentes secções
5. **Design Responsivo** - Funcionalidade em todos os tamanhos de tela

---

## 🎓 Conceitos Aplicados

- HTML5 Semântico
- CSS3 (Flexbox, Grid, Media Queries)
- JavaScript ES6+ (Event Listeners, DOM Manipulation)
- Design Responsivo (Mobile-First)
- Acessibilidade Web (WCAG 2.1)
- SEO (Search Engine Optimization)

---

## 📅 Data de Submissão

Janeiro de 2026
