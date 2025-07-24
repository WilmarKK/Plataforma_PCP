#!/bin/bash
# Builda as imagens do backend e frontend

docker build -t analisador-backend ../backend

docker build -t analisador-frontend ../frontend

echo "Imagens buildadas com sucesso!" 