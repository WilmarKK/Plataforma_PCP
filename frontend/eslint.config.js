import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

/**
 * Configuração do ESLint v9 para PlataformaPCP Frontend
 * 
 * Esta configuração utiliza o novo formato flat config do ESLint v9
 * e inclui regras específicas para React, TypeScript e qualidade de código
 */
export default tseslint.config([
  // Ignora arquivos de build e dependências
  {
    ignores: [
      'dist/**/*',           // Build de produção
      'build/**/*',          // Build alternativo
      'node_modules/**/*',   // Dependências
      'coverage/**/*',       // Relatórios de cobertura
      '*.config.js',         // Arquivos de configuração (evita conflitos)
      '.eslintrc.cjs'        // Configuração legacy
    ]
  },

  // Configuração para arquivos TypeScript e TSX
  {
    files: ['**/*.{ts,tsx}'],
    
    // Estende configurações recomendadas
    extends: [
      js.configs.recommended,                    // Regras básicas JavaScript
      ...tseslint.configs.recommended,           // Regras TypeScript
      ...tseslint.configs.recommendedTypeChecked // Regras com verificação de tipos
    ],
    
    // Configurações de linguagem
    languageOptions: {
      ecmaVersion: 2020,                         // Versão ECMAScript
      globals: {
        ...globals.browser,                      // Globals do navegador
        ...globals.es2020                        // Globals ES2020
      },
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: import.meta.dirname
      }
    },
    
    // Plugins utilizados
    plugins: {
      'react-hooks': reactHooks,                 // Regras para hooks do React
      'react-refresh': reactRefresh              // Regras para React Refresh
    },
    
    // Regras personalizadas
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
          argsIgnorePattern: '^_',               // Ignora parâmetros que começam com _
          varsIgnorePattern: '^_',               // Ignora variáveis que começam com _
          destructuredArrayIgnorePattern: '^_'   // Ignora elementos de array com _
        }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',         // Avisa sobre uso de 'any'
      '@typescript-eslint/prefer-nullish-coalescing': 'error', // Prefere ?? ao invés de ||
      '@typescript-eslint/prefer-optional-chain': 'error',  // Prefere optional chaining
      '@typescript-eslint/no-non-null-assertion': 'warn',   // Avisa sobre ! não-null
      '@typescript-eslint/consistent-type-imports': 'error', // Imports de tipo consistentes
      
      // === REGRAS GERAIS DE QUALIDADE ===
      'prefer-const': 'error',                   // Prefere const quando possível
      'no-var': 'error',                         // Proíbe var, usar let/const
      'object-shorthand': 'warn',                // Prefere sintaxe curta de objetos
      'prefer-template': 'warn',                 // Prefere template strings
      'no-console': 'warn',                      // Avisa sobre console.log
      'no-debugger': 'error',                    // Proíbe debugger em produção
      'eqeqeq': ['error', 'always'],             // Força === ao invés de ==
      'curly': ['error', 'all'],                 // Força chaves em todos os blocos
      
      // === REGRAS DE ESTILO ===
      'indent': ['error', 2],                    // Indentação de 2 espaços
      'quotes': ['error', 'single'],             // Prefere aspas simples
      'semi': ['error', 'always'],               // Força ponto e vírgula
      'comma-dangle': ['error', 'es5'],          // Vírgula no final quando permitido
      'no-trailing-spaces': 'error',             // Remove espaços no final das linhas
      'eol-last': 'error',                       // Força linha vazia no final do arquivo
      
      // === REGRAS DE PERFORMANCE ===
      'no-unused-expressions': 'error',          // Proíbe expressões não utilizadas
      'no-unreachable': 'error',                 // Proíbe código inalcançável
      'no-duplicate-imports': 'error'            // Proíbe imports duplicados
    }
  },

  // Configuração específica para React Hooks
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks
    },
    rules: {
      ...reactHooks.configs.recommended.rules    // Aplica todas as regras de hooks
    }
  },

  // Configuração para arquivos de configuração
  {
    files: ['**/*.config.{js,ts}', 'vite.config.ts'],
    languageOptions: {
      globals: {
        ...globals.node                          // Globals do Node.js para configs
      }
    },
    rules: {
      'no-console': 'off',                       // Permite console em configs
      '@typescript-eslint/no-var-requires': 'off' // Permite require() em configs
    }
  }
])
