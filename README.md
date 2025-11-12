# 🎬 Netflix Simples – Next.js + MongoDB + JWT

Projeto educacional inspirado na interface da Netflix, utilizando **Next.js**, **MongoDB**, **API Routes (pages/api)** e um sistema simples de **login com JWT**.

Ideal para estudos de:
- Frontend com **Next.js (App Router)**
- Backend com **API Routes**
- Banco de dados **MongoDB**
- Autenticação com **JWT**
- Integração de sistemas em um único projeto

---

## 🚀 Tecnologias utilizadas

- **Next.js 14+**
- **React 18**
- **MongoDB + Mongoose**
- **JWT (jsonwebtoken)**
- **bcryptjs** para hash de senha
- **ESM Modules** (type: module)
- **Node.js (18+)**

---

## 📁 Estrutura do Projeto

netflix-simples/
│ .env.local
│ package.json
│ README.md
│
├── app/ # Frontend (App Router)
│ ├── layout.js
│ ├── page.js # Página principal
│ └── login/
│ └── page.jsx # Tela de Login
│
├── lib/
│ └── mongo.js # Conexão com MongoDB
│
├── models/
│ └── Filme.js # Modelo de Filme (Mongoose)
│
├── pages/ # Backend (API Routes)
│ └── api/
│ ├── filmes/
│ │ └── index.js # CRUD básico de filmes
│ └── auth/
│ └── login.js # Autenticação JWT
│
├── public/
│
└── scripts/
└── seed.js # Script para inserir dados iniciais no DB


## ⚙️ Instalação

### 1) Clone o repositório
```sh
git clone https://github.com/SEU_USUARIO/netflix-simples.git
cd netflix-simples
2) Instale as dependências

npm install
3) Configure o arquivo .env.local
Crie este arquivo na raiz do projeto:


MONGODB_URI=sua_string_do_mongo_aqui
JWT_SECRET=sua_chave_secreta_jwt
NEXT_PUBLIC_BASE_URL=http://localhost:3000
🗄️ Banco de Dados (MongoDB)
Execute o script para popular o banco:


npm run seed
Isso criará um exemplo inicial (como Matrix).

🔐 Autenticação (Login com JWT)
O sistema possui apenas login, sem cadastro.
Usuário padrão:


Copiar código
email: jonas@teste.com
senha: 123456
Ao logar, o backend envia um JWT, que é salvo no:

localStorage.token

localStorage.user

Esse token pode ser usado para proteger rotas ou chamar APIs privadas.

▶️ Como rodar o projeto
Para iniciar em ambiente de desenvolvimento:


npm run dev
O projeto ficará disponível em:

👉 http://localhost:3000

📌 Rotas importantes
Frontend
Caminho	Descrição
/	Página inicial (catálogo)
/login	Tela de autenticação

Backend (API Routes)
Rota	Método	Descrição
/api/auth/login	POST	Valida usuário e gera JWT
/api/filmes	GET / POST	Lista ou adiciona filmes no MongoDB

🔒 Sistema de Login
Fluxo:
Usuário preenche email e senha

Chamada POST → /api/auth/login

Backend:

valida email

valida senha com bcrypt

gera token JWT (expira em 7 dias)

Token é salvo no navegador

Página principal pode verificar o token e bloquear acesso

🧰 Scripts disponíveis
Comando	Ação
npm run dev	inicia o servidor Next
npm run build	gera build de produção
npm run start	inicia modo produção
npm run seed	popula o MongoDB com filmes iniciais

🧑‍🏫 Observações
Este projeto é apenas educacional.
Para produção recomenda-se:

Usar cookies httpOnly em vez de localStorage

Middleware de autenticação

Controle de acesso

Sanitização de dados

Logs e monitoramento

📜 Licença
Este projeto é livre para uso educacional.

✨ Autor
Criado por Professor Jonas para aulas de programação, Next.js e MongoDB.
