# Link para visualização do projeto

https://minhas-series-react-js.netlify.app/

# Comando para rodar o servidor, terminal (1)

```js
yarn start
```

# Comando para rodar o servidor, terminal (2)

```js
node .\node_modules\minhas-series-server\index.js
```

# obs: localhost:3002/api (Vai aparecer os dados do servidor)

```js
{
"info": "Minhas Séries Server",
"datetime": "2019-07-31T02:33:29.617Z"
}
```

# Quando chegar uma requisição vai para o proxy, link dentro do package.json

```js
"proxy": "http://localhost:3002/"
```

# Bootstrap (Aplicação mais bunita)

```js
yarn add bootstrap
```

Site:
https://getbootstrap.com/

# Reactstrap (Aplicação mais bunita)

```js
yarn add reactstrap
```

Site:
https://reactstrap.github.io/

# React-router-dom (Trabalhar com as rotas)

```js
yarn add react-router-dom
```

# Abaixando o servidor, instalando todos os pacotes, instalado como dependencia (Back-End)

```js
yarn add https://github.com/devpleno/minhas-series-server
```

# Axios (Puchando os dados)

```js
yarn add axios
```

# Rodando dois Script's ao mesmo tempo

```js
yarn add npm-run-all
```

# UseState

Podemos guardar um estado dentro de nossa aplicação

# useEffect

O UseEffect tem alguns efeitos, pode ser alguma alteração que tenha feito na minha aplicação, posso definir quais são as dependencias caso eles sejam alteradas faz com que o UseEffect seja executado novamente.

# Salvando meu projeto no GitHub

## 1 => Criar um novo repositório, no Github.

## 2 => Depois irá aparecer no github, os passos para sincronizar o projeto do vscode, com o github.

```js
Opção <code>
echo "# minhas_series_react_js" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/gilbertoreact/minhas_series_react_js.git
git push -u origin main
```

## 3 => digite no terminal

```js
echo "# minhas_series_react_js" >> README.md
```

## 4 => digite no terminal

```js
git init
```

obs: caso aparecer um erro, dizendo,

```js
Reinitialized existing Git repository in C:/Projetos/minhas-series-react-js/.git/
```

Este comando vai resolver seu problema, para adicionar uma nova url.

Verificando qual URL do repositório está.
```js
git remote -v 
```
Removendo URL do repositorio que estava
```js
git remote remove origin
```
Adicionando uma nova URL
```js
git remote add (URL do seu repositório)
```


## 5 => digite no terminal (Tem aque estar na opção master)

```js
git init
```

## 6 => digite no terminal (Verificando arquivos que você pode adicionar, vai estar na cor vermelha)

```js
git status -u
```

## 7 => digite no terminal, (Quando faz (git add .) todos os arquivos são enviados) (Para adicionar somente um arquivo, git add README.md)

```js
 git add .
```

## 8 => digite no terminal (Agora vai aparecer na cor verde, todos os arquivos adicionados, para ser comitado)

```js
git status -u
```

## 9 => digite no terminal (Agora você deu o nome do seu commit, o nome da versão que você editou)

```js
git commit -m "Primeiro Commit"
```

## 10 => OBS: Se for sua primeira vez, vai aparecer uma observação para você configurar seu e-mail e seu nome assim:

Configuração global para todos os projetos
E-mail

```js
git config --global user.email "e-mail do seu github"
```

Nome

```js
git config --global user.name "Seu nome"
```

Para configurar somente um projeto
E-mail

```js
git config user.email "E-mail github"
```

Nome

```js
git config user.name "Seu Nome"
```

## 11 => digite no terminal

```js
git commit -m "Primeiro Commit"
```

## 12 => digite no terminal (Não vai conter mais nada, pois já foi comitado)

```js
git status -u
```

## 13 => digite no terminal (Para enviar para o github, você deve agora copiar o link)

```js
git remote add origin https://github.com/gilbertoreact/minhas_series_react_js.git
```

Obs:
No meu caso esta assim, porque o nome do meu repositório e (minhas_series_react_js), o github gera este link automático, na opção <>code do github.

## 14 => digite no terminal (Enviando para o github)

```js
 git push -u origin master
```

## 15 => digite no terminal (Se no terminal, pedir o username, você coloca o usuario do github)

Exemplo:
Usuário

```js
Username for 'https://github.com': (Usuario github)
```

Password

```js
Password for 'https://seu e-mail': (Digite sua senha do github)
```

# minhas-series-react-js
