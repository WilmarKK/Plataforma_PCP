@echo off
REM Derruba todos os serviços e remove volumes

docker-compose down -v

echo Ambiente Docker parado e volumes removidos! 