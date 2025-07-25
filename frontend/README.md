# Plataforma PCP - Frontend

## Arquitetura Modular

Este projeto segue o padrão enterprise de plataforma, onde cada ferramenta (módulo) do PCP é independente, mas compartilha núcleo de layout, autenticação, tema e design system.

### Estrutura de Pastas
```
src/
  core/         # Layout, autenticação, temas, design system, hooks e serviços globais
    layout/
    components/
    services/
    store/
    hooks/
    types/
    utils/
  modules/      # Cada ferramenta do PCP é um módulo independente
    analisadorProducao/
      pages/
      components/
      services/
      store/
      hooks/
      types/
      utils/
    # estoque/, planejamento/, ordens/, relatorios/, etc.
  routes/       # Definição central das rotas da plataforma
  assets/
  App.tsx
  main.tsx
  index.css
```

### Como adicionar um novo módulo (ferramenta)
1. Crie uma pasta em `src/modules/NOME_DO_MODULO/`.
2. Siga a estrutura interna de pages, components, services, etc.
3. Importe as páginas/rotas do módulo em `src/routes/`.
4. Utilize componentes e hooks do core sempre que possível.
5. Documente o módulo com README e comentários claros.

### Build e Deploy com Docker

Para buildar e rodar o frontend em ambiente Docker:

1. Certifique-se de que o `Dockerfile` está presente em `frontend/`.
2. Execute:
   ```bash
   docker build -t pcp-frontend .
   docker run -p 3000:80 pcp-frontend
   ```
3. O frontend estará disponível em `http://localhost:3000` (ou porta configurada).

### Padrões e Boas Práticas
- Design system centralizado em `core/components/`
- Autenticação e permissões em `core/services/`
- Rotas centralizadas em `src/routes/`
- Documentação incremental e exemplos de uso

---

*Documentação atualizada automaticamente pelo assistente em 24/07/2025*
