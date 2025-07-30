"""
test_auth.py - Script para testar os endpoints de autenticação

Este script testa os endpoints /token e /me para verificar
se a autenticação está funcionando corretamente.
"""

import requests
import json

BASE_URL = "http://localhost:8000"

def test_login():
    """Testa o endpoint de login"""
    print("=== Testando Login ===")
    
    # Dados de login
    login_data = {
        "username": "admin@test.com",  # OAuth2PasswordRequestForm usa 'username'
        "password": "admin123"
    }
    
    # Fazer login
    response = requests.post(
        f"{BASE_URL}/auth/token",
        data=login_data,
        headers={"Content-Type": "application/x-www-form-urlencoded"}
    )
    
    if response.status_code == 200:
        token_data = response.json()
        print("✅ Login realizado com sucesso!")
        print(f"Token: {token_data['access_token'][:50]}...")
        return token_data["access_token"]
    else:
        print(f"❌ Erro no login: {response.status_code}")
        print(f"Resposta: {response.text}")
        return None

def test_login_json():
    """Testa o endpoint de login com JSON"""
    print("\n=== Testando Login JSON ===")
    
    # Dados de login
    login_data = {
        "email": "admin@test.com",
        "password": "admin123"
    }
    
    # Fazer login
    response = requests.post(
        f"{BASE_URL}/auth/token/json",
        json=login_data,
        headers={"Content-Type": "application/json"}
    )
    
    if response.status_code == 200:
        token_data = response.json()
        print("✅ Login JSON realizado com sucesso!")
        print(f"Token: {token_data['access_token'][:50]}...")
        return token_data["access_token"]
    else:
        print(f"❌ Erro no login JSON: {response.status_code}")
        print(f"Resposta: {response.text}")
        return None

def test_profile(token):
    """Testa o endpoint de perfil"""
    print("\n=== Testando Perfil ===")
    
    if not token:
        print("❌ Token não disponível")
        return
    
    # Acessar perfil
    headers = {"Authorization": f"Bearer {token}"}
    response = requests.get(f"{BASE_URL}/auth/me", headers=headers)
    
    if response.status_code == 200:
        profile_data = response.json()
        print("✅ Perfil obtido com sucesso!")
        print(f"ID: {profile_data['id']}")
        print(f"Email: {profile_data['email']}")
        print(f"Role: {profile_data['role']}")
        print(f"Ativo: {profile_data['is_active']}")
    else:
        print(f"❌ Erro ao obter perfil: {response.status_code}")
        print(f"Resposta: {response.text}")

def main():
    """Função principal de teste"""
    print("🚀 Iniciando testes de autenticação...")
    print("Certifique-se de que o servidor está rodando em http://localhost:8000")
    print("E que o usuário de teste foi criado (execute create_test_user.py)")
    
    # Testar login padrão
    token = test_login()
    
    # Testar perfil
    test_profile(token)
    
    # Testar login JSON
    token_json = test_login_json()
    
    # Testar perfil com token JSON
    test_profile(token_json)
    
    print("\n✅ Testes concluídos!")

if __name__ == "__main__":
    main()