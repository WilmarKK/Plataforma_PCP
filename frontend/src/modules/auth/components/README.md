# 📂 PlataformaPCP - Auth Components

## 🔐 Componentes de Autenticação

Componentes visuais reutilizáveis responsáveis pela experiência de login, autenticação via SSO e redirecionamento do usuário após validação.

## 🚀 Tecnologias Utilizadas

- **React 18** – Construção dos componentes
- **TypeScript** – Tipagem segura e robusta
- **CSS Modules** – Estilização isolada por componente
- **Custom Hooks** – Integração com autenticação e notificações
- **Lucide Icons** – Ícones modernos via props

---

## 📦 Componentes Disponíveis

### `LoginForm.tsx`
Formulário principal de autenticação via e-mail e senha.

| Elemento                | Descrição                                          |
|-------------------------|----------------------------------------------------|
| `input[type="email"]`   | Campo para login com e-mail ou nome de usuário     |
| `input[type="password"]`| Campo de senha com feedback visual                 |
| `checkbox`              | Opção "Lembrar-me"                                 |
| `forgotLink`            | Link fictício para recuperação de senha            |
| `Button`                | Componente reutilizável com estado de loading      |
| `useAuth()`             | Hook para lógica de login e autenticação           |
| `useNotification()`     | Hook para feedback ao usuário (erro/sucesso)       |

> 🎯 Estilizado com `LoginForm.module.css`, utilizando glassmorphism e microinterações.

---

### `SSOButtons.tsx`
Botões de login com métodos alternativos corporativos (fictício).

| Botão               | Ação                                               |
|---------------------|----------------------------------------------------|
| `Active Directory`  | Simula conexão com AD                              |
| `SSO Corporativo`   | Simula conexão com provedor SSO                    |

> 📢 Utiliza `useNotification()` para alertas e feedbacks sobre o estado da funcionalidade (em desenvolvimento).

> 🎯 Estilizado com `SSOButtons.module.css`, com responsividade integrada para mobile.

---

### `RedirectHandler.tsx`
Componente de controle de acesso. Redireciona o usuário conforme o estado de autenticação.

| Verificação                | Ação                                                  |
|----------------------------|-------------------------------------------------------|
| `isAuthenticated === true`| Redireciona para rota de origem ou `/dashboard`       |
| `isAuthenticated === false`| Redireciona para `/login`                            |
| `isLoading === true`       | Exibe mensagem de carregamento                       |

> 🔁 Ideal para ser usado em rotas protegidas ou logo após login.

---

## 🎨 Arquivos de Estilo

| Arquivo CSS              | Finalidade                                              |
|--------------------------|---------------------------------------------------------|
| `LoginForm.module.css`   | Estilo do formulário com foco em UX e acessibilidade    |
| `SSOButtons.module.css`  | Layout flexível dos botões SSO com adaptação mobile     |

---

## 🛠️ Boas Práticas

- **🔹 Separação de Responsabilidades**: cada componente tem uma única responsabilidade (SRP).
- **⚡ Feedback Imediato**: estados de carregamento e mensagens de erro bem definidos.
- **🧱 Estilo Isolado**: uso de CSS Modules evita conflitos globais.
- **📈 Preparado para Escalar**: hooks e estrutura permitem extensão simples com novos métodos de login.

---

## 📍 Caminho

src/modules/auth/components/
├── LoginForm.tsx
├── LoginForm.module.css
├── SSOButtons.tsx
├── SSOButtons.module.css
└── RedirectHandler.tsx

---

## 📌 Observações

- **Funcionalidade de SSO ainda em desenvolvimento**
- **Email de demonstração exposto propositalmente no ambiente de testes**
- **Ajustar integração com API real em produção no hook `useAuth()`**
