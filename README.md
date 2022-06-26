# Curso react Avançado
Aplicação SSR de um site de e-commerce de jogos.

## Sumário
- [Utlizando o boilerplate](#)
- [Conteúdos](#conteúdos)
  - [Typescript](#typescript)
  - [Testes](#testes)
  - [StoryBook](#storybook)
- [Arquitetura do projeto](#arquitetura-do-projeto)
- [Padrões utilizados](#padrões-utilizados)
- [Desenvolvimento](#desenvolvimento)
  - [Setup](#setup)
  - [Iniciar Projeto](#iniciar-projeto)
  - [Outros scripts](#outros-scripts)
- [Referências](#referências)

---

## Utilizando o boilerplate

Para baixar este setup de projeto, use o seguinte comando:

```bash
yarn create next-app -e https://github.com/brian-izaki/won-games-boilerplate
```

---

## Conteúdos
Temas centrais abordados no projeto

<br>

### Typescript

<details>
<summary>Conteúdo visto</summary>

- topico 1
---
</details>
<br>


### Testes

<details>
<summary>Conteúdo</summary>

#### jest

- lib responsável pelos testes
- `jest --bail`: faz os testes pararem no primeiro que der falha. Caso contrário ele continuaria todos os testes


#### testing-library

- lib reponsável por renderizar os componentes do React
---
</details>
<br>

### Storybook

<details>
<summary>Conteúdo</summary>

Esta lib auxilia na visualização dos componentes de forma individual ou juntas pois gera um site apenas com os componentes.

- uma **story** é o componente que será visualizado na página que a lib gera.
- os arquivos de config do storybook ficam no [.storybook](./.storybook/)
  - o arquivo `main.js` é onde fica a config principal (onde achar os arquivos de stories, etc)
    - o parametro `stories`, é quem diz onde estarão os stories que devem ser mostrados.
  - no arquivo `previews.js` ficam configs globais que cada storiy irá utilizar
    - o export do `decorator` serviu para **setar as estilizações globais do `Styled-Components`**, com isso toda story irá consguir pegar os estilos globais.
- **addons** (extensões), eles auxiliam no desenvolvimento, destaca-se o `addon-essentials` que veio na versão 6.0 do storyBook, com ele fica mais fácil manusear os componentes no site gerado. ex: setar parametros, funcionalidades extras pra visualizar diferentes fluxos, etc.

<br>

- no script que executa o storybook foi adicionado o `-s ./public`, ele serve pra que o site do storyBook consiga pegar as imagens
  ``` bash
    npx start-storybook -s ./public -p 6006
  ```

## Sobre o Story (componentes que aparecem no site gerado)
Nele que fazemos a renderização do componente, podemos:

- setar parametros iniciais pro componente
- criar diferentes versões de layout

---
</details>
<br>

### Exemplo

<details>
<summary>Conteúdo</summary>

- topico 1
---
</details>
<br>

---

## Arquitetura do projeto

- **Componentes** possuem um diretório com todos os arquivos relacionados a ele (obs: só crie um arquivo caso seja utilizado)
  - ex: testes, Story do storybook, estilos do styled component
  ```
  - NomeComponente
    |- index.tsx
    |- styles.ts
    |- test.tsx
    |- stories.tsx
  ```
  - _stories.tsx_
    - São pra visualizar o componente no site gerado pelo StoryBook ([ver nota](#storybook))
  - _test.tsx_
    - Testes unitários com a lib **Jest**
  - _styles_
    - Estilos css-in-js com o **Styled Components**

---

## Padrões utilizados

- **Componentes**
  - Ao utilizar um estilo css-in-js o arquivo é importado e nomeado com `S` de style (Serve para diferenciar dos componentes que não são de styles) ex:
    ```TypeScript
    import * as S from './styles'

    const Exemplo = () => {
      return (
        <S.Container>
          <S.Text> teste </S.Text>
        </S.Container>
      )
    }
    ```

---

## Desenvolvimento

### Setup

- Ter o `Node` instalado
- O projeto utiliza o `yarn` como gerenciador de pacotes
- Baixar dependencias do projeto
  ```bash
  yarn
  ```

### Iniciar projeto
- Start do projeto localmente
  ```bash
  yarn dev
  ```

- Executar testes
  ```bash
  # executa apenas uma vez
  yarn test

  # "hot reload" pra testes
  yarn test:watch
  ```

- Ver o StoryBook (estará em http://localhost:6006/)
  ```bash
  yarn storybook
  ```

### Outros scripts
- build para produção
  ```bash
  yarn build
  ```
---

## Referências

- [husky](https://typicode.github.io/husky/#/): commit lint
- [storybook](https://storybook.js.org/docs/react/get-started/introduction)
  - [decorators](https://storybook.js.org/docs/react/writing-stories/decorators#gatsby-focus-wrapper)
