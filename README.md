# Pokémon Team Builder

## Introdução
Este projeto foi desenvolvido durante o processo seletivo para concorrer a uma vaga de desenvolvedor React. Trata-se de um app de construtor pokémons feito em [React](https://reactjs.org/). Cada time é composto por 6 pokémons e um título. O construtor é simples, tendo como principal objetivo construir times de pokemons e possui duas telas, uma com o construtor de times e listagem das opções de pokemons selecionáveis e a outra com a listagem dos times criados.

> Esse repositório se refere a parte do Frontend. Link para o [repositório do backend aqui](https://github.com/asjuanguilherme/pokemon-team-builder-api).

## Tecnologias Utilizadas
* [React.js](https://reactjs.org/)
* [Axios](https://axios-http.com/)
* [Styled Components](https://styled-components.com/)
* [Typescript](https://www.typescriptlang.org/)
* [Prettier](https://prettier.io/)
* [Husky](https://typicode.github.io/husky/#/)

## Imagens
<img src="https://user-images.githubusercontent.com/40828086/164949213-00876a75-4df6-4edd-872a-11bf32b13630.png" alt="Construtor e Listagem de Pokémons" height="480px"> <img src="https://user-images.githubusercontent.com/40828086/164949210-abe6b8ea-3792-4276-ab75-4c792c2715ac.png" alt="Listagem de Times" height="480px"> <img src="https://user-images.githubusercontent.com/40828086/164949211-468dc2f9-e006-4732-b7e6-7b90056de3d3.gif" alt="Fluxo de Interação" height="480px">

## Dados do App
O App foi desenvolvido usando React, os dados dos pokémons foram conseguidos graças a comunicação com a API [Pokéapi](https://pokeapi.co/), já os dados dos times criados, foram armazenados num backend desenvolvido em Node.js utilizando Express.js.

## Como Iniciar o Projeto Localmente (No seu computador)
1. Certifique-se de ter o Node.js instalado numa versão >= 16
```sh
node -v
```
> Caso possua uma versão diferente do node, sugiro instalar o [NVM](https://github.com/nvm-sh/nvm) para gerenciar sua versão do node sempre que precisar mudar.

2. Instale as dependencias
```sh
npm install ou yarn
```
3. Edite as variáveis de ambiente em .env.example e renomeie para .env
```sh
REACT_APP_TEAMS_API_URL='https://url-base-da-api-do-backend.com/'
REACT_APP_POKEMONS_API_URL='https://url-base-da-pokeapi.com/'
```
> [Backend de Teams](https://github.com/asjuanguilherme/pokemon-team-builder-api)
> [Pokeapi](https://pokeapi.co/)

4. Inicie o projeto
```sh
npm run start ou yarn start
```
5. Build de Produção
```sh
npm run build ou yarn build
```