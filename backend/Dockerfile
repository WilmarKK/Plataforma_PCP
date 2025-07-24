# Dockerfile para Backend FastAPI
FROM python:3.12-slim

# Variáveis de ambiente para evitar prompts e melhorar logs
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Diretório de trabalho
WORKDIR /app

# Instala dependências do sistema
RUN apt-get update && apt-get install -y build-essential libpq-dev && rm -rf /var/lib/apt/lists/*

# Copia requirements e instala dependências Python
COPY requirements.txt ./
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Copia o restante do código
COPY . .

# Cria usuário não-root
RUN useradd -m appuser && chown -R appuser /app
USER appuser

# Comando padrão (pode ser sobrescrito pelo docker-compose)
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"] 