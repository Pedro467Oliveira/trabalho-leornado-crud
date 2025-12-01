# Provap2 - API Fornecedor

Projeto: API RESTful com Express + SQLite3 (ES Modules)

Descrição
- API para gerenciar fornecedores usando tabela `fornecedor` com colunas: `id`, `cnpj`, `nome`, `email`.
- Segue arquitetura em camadas: `routes`, `controllers`, `services`, `repositories`, `config`.

Requisitos
- Node.js (v14+ recomendado)
- npm

Como rodar localmente
```powershell
cd 'c:\Users\Pedro Oliveira\Downloads\trabalho-leornado'
npm install
npm run dev
```
- A API ficará disponível em `http://localhost:3000`.

Endpoints principais
- POST `/api/fornecedores`  — criar fornecedor
  - Body JSON: `{ "cnpj": "...", "nome": "...", "email": "..." }`
  - Retorno: `201` e `{ id: <novo_id> }`
- GET `/api/fornecedores` — listar fornecedores (200)
- GET `/api/fornecedores/:id` — buscar por id (200 ou 404)
- PUT `/api/fornecedores/:id` — atualizar (200, 404, 409)
- DELETE `/api/fornecedores/:id` — remover (200 ou 404)

Observações
- A migração SQL `migrations/create_usuario_table.sql` foi adaptada para criar a tabela `fornecedor`.
- O projeto está configurado como ES Modules (veja `package.json` -> `type: "module"`).

Se quiser, eu posso:
- Renomear a pasta local para `provap2-leonardo` (faço em seguida).
- Adicionar um arquivo `.gitignore` para `node_modules` (recomendado).