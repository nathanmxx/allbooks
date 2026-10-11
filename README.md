# AllBooks

Loja de livros feita em React e TypeScript, que conversa com uma API de testes
em json-server. É o projeto da formação de React da Alura sobre integração com
APIs: a página inicial e a API vieram prontas do curso, e o trabalho foi ligar
as duas, com cadastro, login e área do usuário.

## Como rodar

Precisa do Node.js. São dois programas, cada um na sua pasta, e os dois ficam
rodando ao mesmo tempo.

A API, na porta 8000:

    cd api-alurabooks
    npm install
    npm run start-auth

O site, na porta 3000:

    cd curso-react-alurabooks
    npm install
    npm start

Depois abra `http://localhost:3000`.

## O que o site faz

- **Cadastro**: um formulário em modal envia nome, e-mail, endereço e senha
  para a API.
- **Login**: outro modal envia e-mail e senha. A API devolve um token, que fica
  guardado no `sessionStorage` do navegador.
- **Requisições autenticadas**: um interceptor do axios coloca o token no
  cabeçalho `Authorization` de toda requisição, sem repetir isso em cada tela.
- **Minha conta**: em `/minha-conta/pedidos`, a lista de pedidos do usuário vem
  da API, com data, valor total e data de entrega.
- **Sair**: apaga o token e volta para a página inicial.

## A API

É uma API de mentira, para estudo. Os dados ficam em dois arquivos JSON, e as
senhas são guardadas em texto puro, então ela não serve para uso real.

    POST /public/registrar      cria um usuário e devolve o token
    POST /public/login          confere e-mail e senha e devolve o token
    GET  /public/lancamentos    livros em lançamento
    GET  /public/mais-vendidos  livros mais vendidos
    GET  /livros                também /autores e /categorias, sem login
    GET  /pedidos               exige o token

O token é um JWT com validade de 12 horas. Qualquer rota fora das públicas
responde 401 quando ele falta ou é inválido.

## Como está organizado

    api-alurabooks/
      server.js        rotas de cadastro e login, e a checagem do token
      database.json    livros, autores, categorias e pedidos
      usuarios.json    usuários cadastrados
    curso-react-alurabooks/
      src/
        http/          instância do axios e o interceptor do token
        rotas/         rotas do site
        paginas/       página inicial, minha conta e pedidos
        componentes/   barra de navegação, modais de cadastro e login, banner
        interfaces/    tipos de livro e de pedido

## Tecnologias

React 18, TypeScript, React Router 6 e axios no site. Os botões, campos e
modais vêm da `ds-alurabooks`, a biblioteca de componentes da própria formação.

Na API, json-server e jsonwebtoken.
