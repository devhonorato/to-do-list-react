
# Documentação do Projeto To-Do List React

## 📋 Descrição

Este projeto é uma aplicação moderna de gerenciamento de tarefas (to-do list) construída com **React + Vite + Tailwind CSS**. 
A aplicação oferece funcionalidades completas de CRUD (Create, Read, Update, Delete) para tarefas, com persistência local via localStorage e uma interface responsiva e intuitiva.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interface do usuário
- **Vite 5** - Ferramenta de build e desenvolvimento
- **Tailwind CSS 3** - Framework CSS utilitário
- **React Router DOM 6** - Roteamento para aplicação SPA
- **Lucide React** - Biblioteca de ícones
- **UUID** - Geração de IDs únicos
- **ESLint** - Análise estática de código

## 📦 Instalação

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**:
```bash
git clone [https://github.com/devhonorato/to-do-list-react.git](https://github.com/devhonorato/to-do-list-react.git)
cd to-do-list-react
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Execute em modo desenvolvimento**:
```bash
npm run dev
```

4. **Acesse a aplicação**:
Abra [http://localhost:5173](http://localhost:5173) no navegador

## 🎯 Comandos Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Compila para produção
- `npm run preview` - Previa build de produção
- `npm run lint` - Executa análise ESLint

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── AddTask.jsx     # Formulário de adição de tarefas
│   ├── Button.jsx      # Componente de botão
│   ├── Input.jsx       # Componente de input
│   ├── Tasks.jsx       # Lista de tarefas
│   └── Title.jsx       # Componente de título
├── pages/              # Páginas da aplicação
│   └── TaskPage.jsx    # Página de detalhes da tarefa
├── App.jsx             # Componente principal
├── App.css             # Estilos específicos do App
├── main.jsx            # Ponto de entrada da aplicação
└── index.css           # Estilos globais (Tailwind)
```

## 🔧 Principais Arquivos de Configuração

- **vite.config.js** - Configuração do Vite com plugin React
- **tailwind.config.js** - Configuração do Tailwind CSS
- **postcss.config.js** - Configuração do PostCSS
- **eslint.config.js** - Configuração do ESLint para React
- **package.json** - Dependências e scripts do projeto

## 🎨 Funcionalidades

- ✅ Adicionar novas tarefas com título e descrição
- ✅ Marcar/desmarcar tarefas como concluídas
- ✅ Excluir tarefas
- ✅ Visualizar detalhes das tarefas em página separada
- ✅ Persistência automática no localStorage
- ✅ Interface responsiva e moderna
- ✅ Navegação entre páginas com React Router

## 🛠️ Desenvolvimento

### Adicionando novas dependências
```bash
npm install <nome-do-pacote>
```

### Executando linting
```bash
npm run lint
```

### Build de produção
```bash
npm run build
```

## 🔮 Próximas Melhorias

- [ ] Integração com API externa / Firebase
- [ ] Filtros e ordenação de tarefas
- [ ] Categorias e tags
- [ ] Modo escuro/claro
- [ ] Exportação/importação de dados
- [ ] Notificações e lembretes
