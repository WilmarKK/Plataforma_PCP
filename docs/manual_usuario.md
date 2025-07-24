# Manual do Usuário e FAQ

## Como cadastrar uma máquina
1. Acesse o painel de administração (frontend).
2. Preencha o formulário de cadastro de máquina com nome, tipo, velocidade, tempo de setup e descrição.
3. Clique em "Salvar". A máquina ficará disponível para análise.

## Como acessar a API
- Acesse a documentação automática em: `http://localhost:8000/docs`
- Use ferramentas como Postman, Insomnia ou cURL para testar os endpoints.

## Perguntas Frequentes (FAQ)

**1. Como adiciono uma nova máquina com lógica personalizada?**
- Crie o arquivo de regras em `backend/app/services/machine_rules/`.
- Registre a máquina em `rules_registry.py`.
- Cadastre a máquina via API ou painel admin.

**2. Como altero parâmetros de uma máquina?**
- Use o endpoint de atualização (`PUT /machines/{machine_id}`) ou edite pelo painel admin.

**3. Onde encontro exemplos de uso da API?**
- Veja o arquivo `docs/api/exemplos.md`.

**4. Como contribuo com a documentação?**
- Atualize ou crie arquivos em `docs/` sempre que implementar novas features.

---

*Para dúvidas técnicas, consulte também os READMEs do backend e dos serviços.* 