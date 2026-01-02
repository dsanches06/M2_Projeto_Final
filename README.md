# Projeto Final - Módulo 2: Bistrô Bar Sanches & Pinto

## 📋 Informações da Dupla

|  Identificação  |      Elemento      |
|-----------------|--------------------|
|   upskill207    | [Danilson Sanches] |
|   upskill229    | [Abel Pinto]       |

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
