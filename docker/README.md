# Docker & DevOps - AnalisadorProducaoWeb

Esta pasta contém scripts e instruções para build, deploy e gerenciamento do ambiente Docker do projeto.

## Estrutura
- `build.sh` / `build.bat`: Builda as imagens do backend e frontend
- `up.sh` / `up.bat`: Sobe todos os serviços com Docker Compose
- `down.sh` / `down.bat`: Derruba todos os serviços e remove volumes
- `../backend/Dockerfile`: Dockerfile do backend FastAPI
- `../frontend/Dockerfile`: Dockerfile do frontend React/Vite
- `../docker-compose.yml`: Orquestração dos serviços

## Comandos principais

### Buildar imagens
- **Linux/Mac:**
  ```bash
  cd docker
  bash build.sh
  ```
- **Windows:**
  ```bat
  cd docker
  build.bat
  ```

### Subir ambiente
- **Linux/Mac:**
  ```bash
  bash up.sh
  ```
- **Windows:**
  ```bat
  up.bat
  ```

### Derrubar ambiente e limpar volumes
- **Linux/Mac:**
  ```bash
  bash down.sh
  ```
- **Windows:**
  ```bat
  down.bat
  ```

## Dicas
- Certifique-se de que o Docker e o Docker Compose estão instalados.
- Os scripts assumem que você está na pasta `docker/` ao rodá-los.
- Para logs detalhados, use `docker-compose logs -f`.
- Para acessar o backend: http://localhost:8000
- Para acessar o frontend: http://localhost:3000

## Troubleshooting
- Se der erro de porta, verifique se não há outro serviço rodando nas portas 8000/3000/5432.
- Se precisar rebuildar tudo, rode o script de build novamente.
- Para limpar volumes e dados, use o script de down. 