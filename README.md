# 🐾 PetAdote - Sistema de Adoção de Animais

O **PetAdote** é uma aplicação web moderna desenvolvida em React para gerenciar o fluxo de adoção de animais de estimação. O sistema divide-se em uma área pública (onde os usuários podem navegar pelos animais e manifestar interesse em adotá-los) e uma área administrativa segura (destinada ao gerenciamento interno do catálogo de pets).

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as melhores práticas do ecossistema do React:

* **React (Vite):** Ambiente de desenvolvimento rápido e otimizado para o Frontend.
* **React Router:** Controle de rotas dinâmicas, navegação interna e persistência de estados entre páginas.
* **React Hook Form:** Gerenciamento, performance e validação inteligente de formulários.
* **Tailwind CSS:** Framework utilitário para uma estilização moderna, limpa e responsiva.
* **Context API:** Centralização do estado global para controle de autenticação do administrador e sincronização do catálogo.
* **JSON Server:** API REST simulada localmente para realizar a persistência real dos dados por métodos HTTP.

---

## 💡 Arquitetura e Soluções Implementadas

### 🌐 Fluxo Público e Formulário Inteligente
* **Catálogo de Pets:** Busca assíncrona na API para renderização dos animais disponíveis. Possui travas contra renderização nula ou lentidão no carregamento do servidor.
* **Redirecionamento de Adoção Sem Perda de Dados:** Ao clicar em `"Adotar Me!"` em um card de animal na listagem, o usuário é imediatamente transferido para a rota `/adotar`. O nome do pet é enviado como estado em segundo plano (`location.state`), preenchendo automaticamente o campo de seleção do formulário sem a necessidade de remover o pet do catálogo antes do tempo.

### 🔒 Área Administrativa e Segurança de Contexto
* **Autenticação Centralizada:** O estado `estaLogado` é mantido globalmente e sincronizado via `localStorage`.
* **Navbar Dinâmica:** Menus como "Cadastro" e "Gerenciar" modificam-se em tempo real na barra superior baseados no estado ativo de login.
* **Gerenciamento CRUD Completo:** Conexão total do contexto com os verbos assíncronos HTTP (`GET`, `POST`, `PUT`, `DELETE`) para controle total do banco de dados simulado.

---

## ⚙️ Como Executar o Projeto Localmente

Siga o passo a passo abaixo para rodar a aplicação na sua máquina:
```bash
1. Clonar o Repositório

git clone https://github.com/gersonsenna/tabalho-frontend.git
cd tabalho-frontend

2. Instalar as Dependências
Instale todos os pacotes necessários listados no projeto (incluindo o React Hook Form e o Tailwind):

npm install

3. Iniciar a API Local (JSON Server)
O Contexto do projeto está configurado para consumir os dados na porta 3001. Certifique-se de que o script do seu servidor fake está rodando nessa porta:

npm run server

4. Executar o Projeto em Modo de Desenvolvimento
Com o servidor de banco de dados rodando, inicie o Vite em outro terminal:

npm run dev

Estrutura de Pastas Principal

src/
├── components/
│   └── Navbar.jsx          # Barra de navegação com links dinâmicos
├── contexts/
│   └── PetContext.jsx      # Provedor do estado global e requisições à API
├── pages/
│   ├── Home.jsx            # Landing page do sistema
│   ├── ListagemPets.jsx    # Catálogo público dos animais
│   ├── FormularioAdocao.jsx# Requerimento com preenchimento automatizado
│   ├── Login.jsx           # Autenticação do administrador
│   ├── Registrar.jsx       # Criação de novas credenciais adm
│   ├── CadastroPet.jsx     # Inserção de novos animais (POST)
│   └── GerenciarPets.jsx   # Painel de controle (PUT/DELETE)
├── App.jsx                 # Centralizador do Provider e Roteamento Geral
└── main.jsx                # Inicializador limpo do React no DOM