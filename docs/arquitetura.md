# Arquitetura do Sistema

O sistema PlataformaPCP é composto por:
- **Frontend:** React 18 + TypeScript + Tailwind CSS
- **Backend:** FastAPI + Python + SQLAlchemy
- **Banco de Dados:** PostgreSQL
- **Infraestrutura:** Docker Compose, Nginx, Redis

## Diagrama de Arquitetura

```mermaid
graph TD
  subgraph Frontend
    A[React App]
  end
  subgraph Backend
    B[FastAPI]
    C[Services & Rules]
    D[Database Models]
  end
  subgraph Database
    E[(PostgreSQL)]
  end
  subgraph Infra
    F[Nginx]
    G[Docker Compose]
    H[Redis]
  end
  A -- API REST --> B
  B -- ORM --> D
  D -- SQL --> E
  B -- Cache --> H
  F -- Proxy --> B
  G -- Orquestra --> F
```

## Componentes Principais
- **Frontend:** Interface de administração e dashboards.
- **Backend:** API REST, lógica de negócio, regras de máquinas.
- **Database:** Armazena máquinas, parâmetros, produção, usuários.
- **Infra:** Orquestração, proxy reverso, cache.

---

*Para detalhes de fluxos, veja [fluxos.md](fluxos.md)* 