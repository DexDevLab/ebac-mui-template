<h1 align="center">Template Material UI para EBAC</h1>
<p align=center><i align="center">Template utilizando Material UI como Design System para o exercício dos Módulos 38 e 39 do curso "Profissão: Engenheiro Front-End" da Instituição EBAC - Escola Britânica de Artes Criativas e Tecnologia</i></p>

<br>

<div align="center">

<a href="https://html.com"><img src="https://img.shields.io/badge/HTML5-%23E34F26.svg?logo=html5&logoColor=white" height="22" alt="HTML5"/></a>
<a href="https://www.w3.org/Style/CSS/Overview.en.html"><img src="https://img.shields.io/badge/CSS3-%231572B6.svg?logo=css3&logoColor=white" height="22" alt="CSS3"/></a>
<a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next-black?logo=next.js&logoColor=white" height="22" alt="NextJS"/></a>
<a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white" height="22" alt="NodeJS"/></a>
<a href="https://reactjs.org"><img src="https://img.shields.io/badge/react-black?logo=react&logoColor=white" height="22" alt="React"/></a>

<a href=""><img src="https://img.shields.io/badge/maintenance-as--is-yellow.svg" height="22" alt="Maintenance-as-is"/></a>
<a href=""><img src="https://img.shields.io/github/last-commit/dexdevlab/ebac-mui-template" height="22" alt="LastCommit"></a>

<a href=""><img src="https://img.shields.io/github/repo-size/dexdevlab/ebac-mui-template" height="22" alt="RepoSize"/></a>
<a href=""><img src="https://img.shields.io/github/languages/code-size/dexdevlab/ebac-mui-template" height="22" alt="CodeSize"/></a>

<a href=""><img src="https://img.shields.io/github/forks/dexdevlab/ebac-mui-template" height="22" alt="Fork"></a>
<a href=""><img src="https://img.shields.io/github/v/release/dexdevlab/ebac-mui-template" height="22" alt="Version"/></a>
<a href="https://github.com/dexdevlab/ebac-mui-template/blob/main/LICENSE"><img src="https://img.shields.io/github/license/dexdevlab/ebac-mui-template" height="22" alt="License"></a>

|| [Conteúdo](#section-conteudo) || [Stack](#section-stack) || [Instruções](#section-instrucoes) ||

|| [Notas de versão](#section-changelog) || [Autores](#section-autores) || [Contato](#section-contato) || [Licença](#section-licenca) ||

</div>

<hr>

<a name="section-conteudo">

## Conteúdo

</a>

<br>

O objetivo deste repositório é comportar o material necessário para servir de exemplo prático do exercício do Módulo 38 e do Módulo 39 do curso "Profissão: Engenheiro Front-End" da Instituição EBAC - Escola Britânica de Artes Criativas e Tecnologia. Contém uma simulação de um trabalho de build, deployment, teste e revisão de um projeto contendo Material UI como Design System.

<hr>

<a name="section-stack">

## Stack

</a>

<br>

- **Linguagem Principal:** [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- **Linguagens de Marcação e Estilo:** [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML), [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS), [SASS](https://sass-lang.com/documentation)
- **Framework Principal:** [Node.js](https://nodejs.org/en/docs/)
- **Framework estrutural:** [Next.js](https://nextjs.org/docs/getting-started)
- **Framework de design:** [Material UI](https://mui.com/material-ui/getting-started/overview/)
- **Gerenciador de Bibliotecas:** [npm](https://www.npmjs.com)
- **Bibliotecas:** Para uma lista completa de bibliotecas e dependências nos mais variados escopos, conferir o arquivo [package.json](https://github.com/dexdevlab/github-repo-template/blob/main/package.json).

<hr>

<a name="section-instrucoes">

## Instruções

</a>

<br>

### Utilizando o repositório como projeto

1 - Faça um git clone ou o download do repositório, da forma que preferir

```bash

git clone https://github.com/dexdevlab/ebac-mui-template.git

```

2 - Execute `npm install` para carregar as dependências

#### Testando a aplicação

Execute `npm run dev` do terminal dentro do diretório do projeto. A aplicação irá ser executada na porta 3000 como padrão.

#### Usando Jest

Execute `npm run test` do terminal dentro do diretório do projeto. Um teste será performado.

#### Realizando Deploy

Simplesmente publique o commit normalmente no branch principal (main). Com isso, um deploy no Github Pages será realizado via Github Actions.

<hr>

<a name="section-changelog">

## Notas de versão

</a>

<br>

### v5.2.0-240306

- Removido script de limpeza do Yarn
- Adicionado script de atualização do caniuse
- Ajuste no workflow para uso do Next.js e publicação no Github Pages usando Github Actions

### v5.1.0-240306

- Adicionado script de limpeza do Yarn para o repositório
- Adicionado script de limpeza do cache do git
- Removida integração com o Snyk para o repositório
- Ajuste de sintaxe e linting do workflow do Github Actions
- Atualização do workflow para uso do Next.js e publicação no Github Pages usando Github Actions

### v5.0.0-230413

- Atualização da documentação
- Restruturação dos estilos para dentro de `/pages`
- Incorporação da página de Dashboard como componente de `index.js`

### v4.1.0-230413

- Refatoração do index.js

### v4.0.0-230413

- Restruturação dos componentes para compatibilidade com o Deploy

### v3.3.0-230413

- Ajuste no workflow do Github Actions
- Ajuste no arquivo de configuração do Nextjs
- Alteração dos scripts do package.json

### v3.2.0-230412

- Alteração de Yarn para npm como gerenciador de bibliotecas

### v3.1.4-230412

- Ajuste no workflow do Github Actions

### v3.1.3-230412

- Ajuste no workflow do Github Actions
- Ajuste no preset de configuração

### v3.1.2-230412

- Restruturação dos imports para caminhos relativos sem aliases
- Remoção do index.js da componentização dinâmica

### v3.1.1-230412

- Restruturação dos imports para caminhos relativos sem aliases

### v3.1.0-230412

- Restruturação da componentização para um import mais dinâmico
- Reconfiguração dos scripts de deploy para ajustes mais precisos
- Ajuste no Actions para teste de deploy

### v3.1.0-230412-rc

- Restruturação da componentização para um import mais dinâmico
- Reconfiguração dos scripts de deploy para ajustes mais precisos
- Ajuste no Actions para teste de deploy

### v3.1.0-230412-beta

- Restruturação da componentização para um import mais dinâmico
- Reconfiguração dos scripts de deploy para ajustes mais precisos
- Ajuste no Actions para teste de deploy

### v3.0.1-230412

- Correção da automação de deploy pelo Github Pages

### v3.0.0-230412

- Atualização da documentação
- Implementação da automação de deploy pelo Github Pages

### v3.0.0-230412-rc

- Atualização da documentação
- Implementação da automação de deploy pelo Github Pages

### v3.0.0-230412-beta

- Atualização da documentação
- Implementação da automação de deploy pelo Github Pages

### v2.0.2-230412

- Atualização da documentação

### v2.0.1-230412

- Atualização da documentação

### v2.0.0-230412

- Ajustes de linting para ES6 / React
- Ajuste de localização (idioma) do conteúdo da interface
- Testes e validações

### v2.0.0-230412-rc

- Implementação de teste de componente

### v2.0.0-230411-beta

- Ajustes de linting para ES6 / React
- Ajuste de localização (idioma) do conteúdo da interface

### v1.0.0-230410

- Publicação do repositório

<hr>

<a name="section-autores">

## Autores

</a>

<br>

<a href="https://github.com/dexdevlab/ebac-mui-template/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=dexdevlab/ebac-mui-template" />
</a>

<hr>

<a name="section-contato">

## Contato

</a>

<br>

Se você gostou deste projeto, dê uma <a href="https://github.com/dexdevlab/ebac-mui-template" data-icon="octicon-star" aria-label="Star dexdevlab/ebac-mui-template on GitHub">estrela</a>. <br>
Para contato, envie um email a: <a href="mailto:dex.houshi@hotmail.com">dex.houshi@hotmail.com</a>

<hr>

<a name="section-licenca">

## Licença

</a>

Licenciado sob a [MIT License](https://github.com/dexdevlab/ebac-mui-template/blob/main/LICENSE).
