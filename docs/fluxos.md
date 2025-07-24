# Fluxos de Dados e Processos

## Fluxo de Cadastro de Máquina

1. Usuário (admin) acessa o frontend e preenche o formulário de cadastro de máquina.
2. Frontend envia requisição POST para `/machines/` no backend.
3. Backend valida e salva os dados no banco (PostgreSQL).
4. Máquina fica disponível para uso nas análises e dashboards.

```mermaid
sequenceDiagram
  participant Admin
  participant Frontend
  participant Backend
  participant DB as PostgreSQL
  Admin->>Frontend: Preenche dados da máquina
  Frontend->>Backend: POST /machines/
  Backend->>DB: INSERT máquina
  Backend-->>Frontend: Confirmação
  Frontend-->>Admin: Exibe sucesso
```

## Fluxo de Análise de Produção

1. Sistema busca parâmetros da máquina no banco.
2. Instancia a lógica da máquina (ex: Bobst) via registry.
3. Realiza cálculos de produção conforme regras.
4. Retorna resultados para o frontend.

```mermaid
sequenceDiagram
  participant Frontend
  participant Backend
  participant DB as PostgreSQL
  participant Rules as BobstRules
  Frontend->>Backend: Solicita análise
  Backend->>DB: Busca parâmetros
  Backend->>Rules: Instancia lógica
  Rules-->>Backend: Resultado
  Backend-->>Frontend: Exibe análise
```

---

*Para detalhes de endpoints, veja [api/endpoints.md](api/endpoints.md)* 