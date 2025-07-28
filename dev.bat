@echo off
echo =====================================
echo PlataformaPCP - Ambiente Development
echo =====================================
echo.

:: Limpa a tela
cls

:: Inicia Backend (porta 8000)
echo [1/2] Iniciando Backend (FastAPI)...
start "Backend - FastAPI (8000)" cmd /k "cd backend && call venv\Scripts\activate.bat && python -m uvicorn app.main:app --reload --port 8000"

:: Espera 2 segundos
timeout /t 2 /nobreak > nul

:: Inicia Frontend (porta 5173)
echo [2/2] Iniciando Frontend (Vite)...
start "Frontend - Vite (5173)" cmd /k "cd frontend && npm run dev"

echo.
echo =====================================
echo Servidores Iniciados:
echo.
echo Frontend : http://localhost:5173
echo Backend  : http://localhost:8000
echo API Docs : http://localhost:8000/docs
echo =====================================
echo.
echo Para encerrar: feche os terminais ou pressione Ctrl+C
taskkill /F /IM python.exe
