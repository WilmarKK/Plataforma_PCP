/**
 * Configuração ESLint Legacy (Fallback)
 * 
 * Esta configuração serve como fallback para ambientes que ainda
 * não suportam o ESLint v9 flat config. Mantém as mesmas regras
 * da configuração principal para consistência.
 */
module.exports = {
  // Configuração raiz - não busca outras configurações acima
  root: true,
  
  // Ambientes suportados
  env: { 
    browser: true,      // Ambiente do navegador
    es2020: true,       // Recursos ES2020
    node: true          // Ambiente Node.js para configs
  },
  
  // Configurações estendidas
  extends: [
    'eslint:recommended',                    // Regras básicas recomendadas
    '@typescript-eslint/recommended',       // Regras TypeScript recomendadas
    'plugin:react-hooks/recommended',       // Regras para React Hooks
  ],
  
  // Arquivos ignorados
  ignorePatterns: [
    'dist',              // Build de produção
    'build',             // Build alternativo
    'node_modules',      // Dependências
    'coverage',          // Relatórios de cobertura
    '.eslintrc.cjs'      // Este próprio arquivo
  ],
  
  // Parser para TypeScript
  parser: '@typescript-eslint/parser',
  
  // Configurações do parser
  parserOptions: {
    ecmaVersion: 'latest',               // Versão ECMAScript mais recente
    sourceType: 'module',                // Usa módulos ES
    ecmaFeatures: {
      jsx: true                          // Suporte a JSX
    },
    project: ['./tsconfig.json'],        // Projeto TypeScript
    tsconfigRootDir: __dirname           // Diretório raiz do tsconfig
  },
  
  // Plugins utilizados
  plugins: [
    'react-refresh',                     // Plugin React Refresh
    '@typescript-eslint'                 // Plugin TypeScript
  ],
  
  // Regras personalizadas (mantém consistência com a config v9)
  rules: {
    // === REGRAS DO REACT ===
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    
    // === REGRAS DO TYPESCRIPT ===
    '@typescript-eslint/no-unused-vars': [
      'error', 
      { 
        argsIgnorePattern: '^_',         // Ignora parâmetros com _
        varsIgnorePattern: '^_',         // Ignora variáveis com _
        destructuredArrayIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    
    // === REGRAS GERAIS ===
    'prefer-const': 'error',
    'no-var': 'error',
    'object-shorthand': 'warn',
    'prefer-template': 'warn',
    'no-console': 'warn',
    'no-debugger': 'error',
    'eqeqeq': ['error', 'always'],
    'curly': ['error', 'all'],
    
    // === REGRAS DE ESTILO ===
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'es5'],
    'no-trailing-spaces': 'error',
    'eol-last': 'error',
    
    // === REGRAS DE PERFORMANCE ===
    'no-unused-expressions': 'error',
    'no-unreachable': 'error',
    'no-duplicate-imports': 'error'
  },
  
  // Configurações específicas por arquivos
  overrides: [
    {
      // Arquivos de configuração
      files: ['*.config.js', '*.config.ts', 'vite.config.ts'],
      env: {
        node: true
      },
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-var-requires': 'off'
      }
    },
    {
      // Arquivos de teste (quando implementados)
      files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
      env: {
        jest: true
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ]
};