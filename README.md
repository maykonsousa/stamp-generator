# Gerador de Carimbos

Este é um projeto desenvolvido com Next.js que permite a criação e gerenciamento de selos para imagens de perfil e avatars.

![Gerador de Carimbos](/public/images/readme.png)

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org) - Framework React para produção
- TypeScript - Superset JavaScript com tipagem estática
- [Material-UI (MUI)](https://mui.com/) - Biblioteca de componentes React
- [Emotion](https://emotion.sh/) - Biblioteca para estilização CSS-in-JS
- [Firebase (firestore)](https://firebase.google.com/) - Banco de dados NoSQL para armazenamento dos carimbos e geração de URLs encurtadas
- [ESLint](https://eslint.org) - Linter para JavaScript/TypeScript utilizando o padrão AirBNB

## 📋 Pré-requisitos

- Node.js 18.x ou superior
- Yarn ou npm
- Conta no Firebase com projeto configurado e um firestore []()

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone https://github/com/maykonsousa/stamp-generator.git
cd stamp-generator
```

2. Instale as dependências:

```bash
yarn install
# ou
npm install
```

3. Configure as variáveis de ambiente:

- Copie o arquivo `.env.example` para `.env.local`
- Preencha as variáveis necessárias do Firebase:
  ```
  NEXT_PUBLIC_FIREBASE_API_KEY=
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
  NEXT_PUBLIC_FIREBASE_APP_ID=
  ```

4. Inicie o servidor de desenvolvimento:

```bash
yarn dev
# ou
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para visualizar o projeto.

## 🔥 Backend API Router

Temos um pequeno backend com duas rotas

POST api/shorten onde salvamos os parametros usados para a confecção do carimbo

```JSON
{
  "text":"texto do selo",
  "backgroundColor": "cor do fundo escolhido",
  "strokeColor":"cor da fonte",
  "format": "circle" //circle | square


}

```

O projeto utiliza o Firebase Firestore como backend, oferecendo as seguintes funcionalidades:

- **Armazenamento de Carimbos**: Salvamento dos dados dos carimbos gerados
- **URLs Encurtadas**: Geração de códigos únicos para compartilhamento dos carimbos

### Configuração do Firebase

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
2. Ative o serviço Firestore
3. Configure as regras de segurança do Firestore
4. Copie as credenciais do projeto para o arquivo `.env.local`

## 📁 Estrutura do Projeto

```
stamp-generator/
├── src/              # Código fonte
│   ├── components/   # Componentes React
│   ├── pages/        # Páginas da aplicação
│   ├── services/     # Serviços (Firebase, etc)
│   └── utils/        # Funções utilitárias
├── public/           # Arquivos estáticos
├── .env.local        # Variáveis de ambiente
└── package.json      # Dependências e scripts
```

## 🔧 Scripts Disponíveis

- `yarn dev` - Inicia o servidor de desenvolvimento
- `yarn build` - Cria a build de produção
- `yarn start` - Inicia o servidor de produção
- `yarn lint` - Executa o linter

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Contribuição

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

para suporte, me adicione no [linkedin](https://linkedin.com/in/maykonsousa) e mande uma mensagem
