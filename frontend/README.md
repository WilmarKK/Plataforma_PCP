# PlataformaPCP - Frontend

## 🏭 Gestão Industrial Inteligente

Plataforma modular completa para análise de produção, manutenção, estoque e qualidade. Transforme dados em decisões estratégicas.

## 🚀 Tecnologias

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática + segurança
- **Vite** - Build tool ultrarrápido
- **React Router** - Roteamento
- **Lucide React** - Ícones modernos
- **CSS Modules** - Estilos organizados

## 📁 Estrutura do Projeto

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── app/                    # Configuração da aplicação
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── router.tsx
│   ├── core/                   # Configurações centrais
│   │   ├── config/             # Constantes e configurações
│   │   ├── types/              # Tipos TypeScript globais
│   │   └── utils/              # Utilitários gerais
│   ├── shared/                 # Componentes e recursos compartilhados
│   │   ├── components/         # Componentes reutilizáveis
│   │   │   ├── ui/             # Componentes de interface
│   │   │   └── layout/         # Componentes de layout
│   │   ├── hooks/              # Custom hooks
│   │   └── styles/             # Estilos globais
│   └── modules/                # Módulos da aplicação
│       └── home/               # Módulo da página inicial
│           ├── components/
│           ├── pages/
│           └── index.ts
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Design System

### Cores
- **Background**: Dark theme com glassmorphism
- **Accent**: Azul moderno (#3b82f6)
- **Status**: Verde (sucesso), Amarelo (desenvolvimento), Cinza (planejado)

### Componentes
- **Glassmorphism**: Efeitos de vidro com blur
- **Micro-animações**: Transições suaves
- **Cards modulares**: Sistema de grade responsivo
- **Gradientes**: Cores vibrantes para ícones

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repo]

# Entre no diretório
cd plataforma-pcp-frontend

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Verifica o código
npm run lint:fix     # Corrige problemas de lint
npm run type-check   # Verifica tipos TypeScript
npm run format       # Formata o código
```

## 📱 Módulos Disponíveis

### ✅ Disponível
- **Análise de Produção**: Monitore OEE, disponibilidade e performance

### 🚧 Em Desenvolvimento
- **Manutenção**: Gestão de manutenção preventiva e preditiva
- **Integrações**: APIs para ERP, MES, SCADA

### 📋 Planejado
- **Estoque**: Controle inteligente com rastreabilidade
- **Qualidade**: Sistema de gestão da qualidade
- **Analytics & BI**: Dashboards avançados e IA

## 🔧 Configuração de Desenvolvimento

### Path Mapping
O projeto utiliza path mapping para imports limpos:
```typescript
import { Button } from '@/shared/components/ui';
import { HomePage } from '@/modules/home';
import { THEME } from '@/core/config/theme';
```

### CSS Modules
Cada componente possui seu próprio arquivo de estilos:
```typescript
import styles from './Component.module.css';
```

### Hooks Personalizados
- `useNotification`: Sistema de notificações
- `useScroll`: Controle de scroll
- `useIntersectionObserver`: Animações baseadas em scroll

## 🎯 Próximos Passos

1. **Implementar módulos específicos**
2. **Adicionar autenticação**
3. **Integrar com APIs backend**
4. **Implementar testes automatizados**
5. **Configurar CI/CD**

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Equipe

Desenvolvido com foco em excelência operacional pela equipe PlataformaPCP.

---

**PlataformaPCP** - Transformando a indústria através da tecnologia 🏭✨
