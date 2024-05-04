# Desafio Técnico - API de Pokémon

Este projeto foi desenvolvido como parte de um desafio técnico para demonstrar habilidades em desenvolvimento de APIs, testes de unidade, uso de contêineres Docker e configuração de pipelines de integração contínua (CI) com Github Actions e AWS ECR/App Runner.

## Desenvolvimento da API

A API de Pokémon foi desenvolvida utilizando Node.js e Express.js. Ela fornece endpoints para pesquisar Pokémon por nome, tipo e combinação de nome e tipo, bem como para recuperar todos os Pokémon disponíveis.

## Github Workflow

Uma pipeline de integração contínua foi configurado utilizando Github Actions. A cada push na branch `main`, o workflow é acionado. Ele constrói a imagem Docker da aplicação, a envia para o AWS ECR e, em seguida, atualiza a implantação da AWS App Runner com a nova imagem.