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
