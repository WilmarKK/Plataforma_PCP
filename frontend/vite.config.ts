import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Configuração do Vite para o PlataformaPCP Frontend
export default defineConfig({
  // Plugins utilizados
  plugins: [
    react({
      // Configurações do plugin React
      include: "**/*.tsx", // Inclui apenas arquivos .tsx
      babel: {
        plugins: [
          // Plugins Babel adicionais podem ser adicionados aqui
        ]
      }
    })
  ],
  
  // Configurações do servidor de desenvolvimento
  server: {
    port: 5173,           // Porta padrão do servidor dev
    strictPort: true,     // Falha se a porta estiver ocupada
    open: true,           // Abre o navegador automaticamente
    host: true,           // Permite acesso via rede local
    cors: true,           // Habilita CORS para desenvolvimento
  },
  
  // Configurações de preview (produção local)
  preview: {
    port: 4173,
    strictPort: true,
    open: true,
    host: true
  },
  
  // Resolução de módulos e aliases
  resolve: {
    alias: {
      // Path mapping para imports mais limpos
      '@': path.resolve(__dirname, './src'),
      '@/app': path.resolve(__dirname, './src/app'),
      '@/core': path.resolve(__dirname, './src/core'),
      '@/shared': path.resolve(__dirname, './src/shared'),
      '@/modules': path.resolve(__dirname, './src/modules')
    }
  },
  
  // Configurações de CSS
  css: {
    modules: {
      // Configuração para CSS Modules
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    },
    postcss: {
      plugins: [
        // Plugins PostCSS podem ser adicionados aqui no futuro
        // Ex: autoprefixer, tailwindcss, etc.
      ]
    }
  },
  
  // Configurações de build
  build: {
    outDir: 'dist',           // Diretório de output
    sourcemap: true,          // Gera sourcemaps para debug
    minify: 'esbuild',        // Usa esbuild para minificação (mais rápido)
    target: 'esnext',         // Target de compilação
    rollupOptions: {
      output: {
        // Chunking otimizado para melhor cache
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['lucide-react']
        }
      }
    },
    // Tamanho limite para warnings (500kb)
    chunkSizeWarningLimit: 500
  },
  
  // Otimizações de dependências
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
      'clsx'
    ]
  },
  
  // Configurações de ambiente
  define: {
    // Variáveis disponíveis em tempo de build
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString())
  }
})