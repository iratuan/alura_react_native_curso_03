# Tutorial de consumo de API utilizando react native.
Autor: [Alura](https://cursos.alura.com.br/course/react-native-utilizando-web-api/)
Adaptação: Iratuã Júnior
Data: 27/12/2023
### Ferramentas
* expo v49
* react native
* node
* npm
* json-server
* conhecimentos básicos em desenvolvimento de apps utilizando react native
* conhecimentos básicos de javascript
* conhecimentos básicos em utilização de API's.
_____
## Configurando o ambiente
* [Instale o json-server](https://www.npmjs.com/package/json-server)
* [Instale o expo](https://docs.expo.dev/get-started/installation/)
* Crie o diretório onde a API Fake irá residir. De preferencia, no mesmo nível do seu app.
```
    /
    ---/app
    ---/server
    ------db.json
```
Note que criei um arquivo chamado db.json. Esse arquivo será a nossa api fake, que será invocada através do json-server.

O conteúdo do arquivo db.json será
```json
{
    "users": [
      {
        "login": "andreocunha",
        "id": 1,
        "avatar_url": "https://avatars.githubusercontent.com/u/54721131?v=4",
        "name": "André Oliveira Cunha",
        "email": "andre@email.com",
        "followers": 43,
        "following": 54
      },
      {
        "login": "nataliakt",
        "id": 2,
        "avatar_url": "https://avatars.githubusercontent.com/u/9091491?v=4",
        "name": "Natalia Kelim Thiel",
        "email": "natalia@email.com",
        "followers": 51,
        "following": 7
      }
    ],
    "repos": [
      {
        "id": 2,
        "name": "api-escolas",
        "data": "1 de jan. de 2021",
        "postId": 1
      },
      {
        "id": 3,
        "name": "Arduino_AVES_Telemetria",
        "data": "1 de jan. de 2021",
        "postId": 1
      },
      {
        "id": 4,
        "name": "bot_piano_tiles",
        "data": "1 de jan. de 2021",
        "postId": 1
      },
      {
        "id": 1,
        "name": "2048evolution",
        "data": "1 de jan. de 2021",
        "postId": 2
      },
      {
        "id": 2,
        "name": "alura-pikachu",
        "data": "1 de jan. de 2021",
        "postId": 2
      },
      {
        "id": 3,
        "name": "alura-react-native-comecando-do-zero",
        "data": "1 de jan. de 2021",
        "postId": 2
      },
      {
        "id": 5,
        "name": "Alura_cursos",
        "data": "1 de jan. de 2021",
        "postId": 1
      }
    ]
  }
```

Agora, dentro do diretório server, digite o comando
```bash
npx json-server --watch db.json
```
Verifique a saída do seu terminal se o seguinte código foi impresso:

```bash
  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/users
  http://localhost:3000/repos

  Home
  http://localhost:3000
```

Se a saída foi algo parecido, parabéns, você já tem o ambiente inicial configurado.


#### Criando o app

Execute o comando abaixo dentro da pasta do seu projeto, no nível irmão ao diretório server, criado anteriormente.
```bash npx create-expo-app app  ```
_____

navegue até o diretório e rode ```npm install```

Instale também as seguintes dependências
```bash
npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config@^19.0.0
```

Após isso, rode o comando npm start e pressione w, para abrir o app em seu browser, porém, se você tiver o ambiente android ou ios configurado, por selecionar seu target à vontade.

Por útimo, instale o axios, que será responsável por fazer as chamadas à API.

```bash
npm install axios   
```

______________
