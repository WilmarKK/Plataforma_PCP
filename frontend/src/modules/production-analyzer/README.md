# 📊 Módulo Analisador de Produção

## 📋 Descrição

O **Analisador de Produção** é um módulo completo para análise de dados industriais, focado em métricas de **OEE (Overall Equipment Effectiveness)**, **performance**, **disponibilidade** e **qualidade** de Ordens de Produção (OPs).

## 🎯 Funcionalidades Principais

### 📥 Entrada de Dados
- **Conexão com Banco de Dados**: Integração com PostgreSQL/MySQL
- **Importação de Arquivos**: Suporte para CSV/Excel
- **API Externa**: Integração com sistemas MES
- **Tabela de Dados**: Visualização e gerenciamento de OPs

### 📊 Dashboard Interativo
- **KPIs em Tempo Real**: OEE, Disponibilidade, Performance, Qualidade
- **Gráficos Dinâmicos**: Evolução temporal das métricas
- **Análise por Status**: Distribuição das OPs por estado
- **Filtros Temporais**: Visualização por períodos (7D, 30D, 90D)

### 🎯 Análise Executiva
- **Cards Detalhados por OP**: Análise individual de cada Ordem de Produção
- **Métricas Visuais**: Barras de progresso com cores indicativas
- **Insights Inteligentes**: Identificação automática de oportunidades
- **Alertas de Performance**: Notificações de desvios críticos

## 🏗️ Estrutura do Módulo

```
production-analyzer/
├── components/
│   ├── ProductionAnalyzer.tsx    # Componente principal
│   └── index.ts                  # Exportações dos componentes
├── pages/
│   ├── ProductionAnalyzerPage.tsx # Página principal
│   └── index.ts                   # Exportações das páginas
├── index.ts                       # Exportações do módulo
└── README.md                      # Documentação
```

## 🎨 Design e Interface

### 🌈 Paleta de Cores
- **Azul/Roxo**: Entrada de dados (`from-blue-500 to-purple-600`)
- **Verde/Azul**: Dashboard (`from-green-500 to-blue-500`)
- **Roxo/Rosa**: Análise executiva (`from-purple-500 to-pink-500`)

### ✨ Características Visuais
- **Background Gradient**: Tema escuro com gradientes sutis
- **Glass Morphism**: Elementos com `backdrop-blur` e transparências
- **Animações Suaves**: Transições e hover effects
- **Responsividade**: Layout adaptável para diferentes telas

## 🚀 Como Usar

### 1. Instalação
```bash
# O módulo já está integrado ao projeto principal
# Certifique-se de que todas as dependências estão instaladas
npm install
```

### 2. Navegação
Acesse o módulo através da rota:
```
/modules/production-analyzer
```

### 3. Abas Disponíveis

#### 📥 Entrada de Dados
- Configure conexões com fontes de dados
- Importe arquivos CSV/Excel
- Visualize dados em tabela interativa
- Gerencie OPs e seus status

#### 📊 Dashboard
- Monitore KPIs principais em tempo real
- Analise tendências através de gráficos
- Visualize distribuição por status
- Exporte relatórios

#### 🎯 Análise Executiva
- Examine OPs individualmente
- Identifique oportunidades de melhoria
- Monitore alertas de performance
- Acesse insights estratégicos

## 📊 Métricas Disponíveis

### OEE (Overall Equipment Effectiveness)
- **Cálculo**: Disponibilidade × Performance × Qualidade
- **Cores**: Verde (>80%), Amarelo (60-80%), Vermelho (<60%)

### Componentes do OEE
1. **Disponibilidade**: Tempo operacional / Tempo planejado
2. **Performance**: Velocidade real / Velocidade nominal
3. **Qualidade**: Produtos bons / Total produzido

## 🔧 Customização

### Modificar Dados Mock
Edite o array `mockOPs` em `ProductionAnalyzer.tsx`:
```typescript
const mockOPs = [
  { 
    id: 'OP-001', 
    produto: 'Produto A', 
    status: 'Concluída', 
    oee: 87, 
    disponibilidade: 92, 
    performance: 89, 
    qualidade: 95 
  },
  // Adicione mais OPs aqui
];
```

### Adicionar Novas Abas
1. Adicione nova entrada no array `tabs`
2. Crie componente da nova aba
3. Adicione renderização condicional no return

### Personalizar Cores
Modifique as classes Tailwind nos gradientes:
```typescript
const tabs = [
  { 
    id: 'nova-aba', 
    label: 'Nova Aba', 
    icon: NovoIcon, 
    color: 'from-cor1 to-cor2' 
  }
];
```

## 🔗 Integração com Backend

### Endpoints Sugeridos
```typescript
// GET /api/production/ops - Listar OPs
// POST /api/production/ops - Criar OP
// PUT /api/production/ops/:id - Atualizar OP
// GET /api/production/metrics - Obter métricas
// POST /api/production/import - Importar dados
```

### Estrutura de Dados
```typescript
interface ProductionOrder {
  id: string;
  produto: string;
  status: 'Concluída' | 'Em Andamento' | 'Planejada' | 'Atrasada';
  oee: number;
  disponibilidade: number;
  performance: number;
  qualidade: number;
  dataInicio?: Date;
  dataFim?: Date;
}
```

## 🎯 Próximas Funcionalidades

- [ ] Filtros avançados por período, produto, status
- [ ] Exportação de relatórios em PDF/Excel
- [ ] Configuração de alertas personalizados
- [ ] Integração com sistemas MES reais
- [ ] Análise preditiva com IA
- [ ] Dashboard em tempo real com WebSockets

## 🐛 Solução de Problemas

### Estilos não Aplicados
- ✅ Verifique se o Tailwind CSS está configurado
- ✅ Confirme que as classes CSS estão sendo carregadas
- ✅ Certifique-se de que não há conflitos de CSS

### Componente não Renderiza
- ✅ Verifique importações dos ícones Lucide React
- ✅ Confirme que o React Router está configurado
- ✅ Verifique console do navegador para erros

### Dados não Aparecem
- ✅ Verifique se o array `mockOPs` está populado
- ✅ Confirme se há erros de JavaScript no console
- ✅ Teste com dados diferentes

## 📱 Responsividade

O módulo é totalmente responsivo com breakpoints:
- **Mobile**: `< 768px` - Layout em coluna única
- **Tablet**: `768px - 1024px` - Layout híbrido
- **Desktop**: `> 1024px` - Layout completo

## 🎨 Acessibilidade

- Contraste adequado entre texto e fundo
- Navegação por teclado suportada
- Ícones com significado semântico
- Texto alternativo em elementos visuais

---

**Desenvolvido com ❤️ para otimizar a análise de produção industrial**