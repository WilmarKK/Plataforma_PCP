# 📚 Documentação do Banco de Dados - PlataformaPCP

Esta documentação detalha a modelagem, estrutura, exemplos de uso e boas práticas do banco de dados PostgreSQL da plataforma, agora organizada de forma modular.

---

## 📈 Estrutura Modular
- Tabelas separadas por domínio/módulo (ex: produção, manutenção, estoque, qualidade)
- Models, schemas e serviços de cada domínio ficam em `app/modules/<modulo>/models`, `schemas`, `services`
- Usuários, permissões e logs centralizados
- Pronto para multi-tenant e internacionalização

---

## 🗂️ Exemplo de Caminhos
- Modelos de produção: `app/modules/production_analyzer/models/`
- Schemas de manutenção: `app/modules/maintenance/schemas/`
- Serviços de estoque: `app/modules/inventory/services/`

---

## 🛠️ Versionamento e Documentação
- Scripts SQL e migrações versionados em `database/`
- Documente cada alteração de schema e mantenha scripts organizados por módulo
- Atualize esta documentação a cada evolução do banco

---

## 🔗 Integração com Backend Modular
- Cada módulo importa apenas seus próprios models/schemas/serviços
- O core gerencia autenticação, usuários e permissões

---

## Exemplos de Queries, Dicas de Performance, Backup/Restore
- (Manter exemplos já existentes, mas atualizar caminhos e contexto para modularização)

> Siga sempre o padrão de documentação e modularização internacional. 