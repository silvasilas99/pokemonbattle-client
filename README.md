# Cliente para gerenciamento e batalhas Pokemon
    Visão Geral do Projeto: 
    
    Este projeto objetiva alcansar uma compreensão maior sobre organização de modulos Node.js, 
    assim como seus mecânismos para tratamentos de exceções, testes unitários e de integração, uso de recursos 
    sincronos e assincronos, dentre outras especifidades da ferramenta. Além disso, também fornece uma interface
    REST para uso em clientes diverosos de integração (como Discord) para entretenimento de amigos e colegas.
    
## Instruções de Utilização: 
      Clone o repositório do projeto
        git clone github.com/silvasilas99/pokebattlee-server/

      Utilize algum dos comandos abaixo (de acordo com seu gerenciador de pacotes):
      ```bash
      npm run dev
      # ou
      yarn dev
      # ou
      pnpm dev
      # ou
      bun dev
      ```

      Acesse o endereço http://localhost:3000
        E se divirta criando e batalhando com seus pokemons

## Pacotes Externos ao Next Utilizados: 
    "axios": "^1.6.7",
    "lodash": "^4.17.21",

## Estrutura do Projeto:
    .
    ├── README.md
    ├── next-env.d.ts      
    ├── next.config.mjs    
    ├── package-lock.json  
    ├── package.json       
    ├── postcss.config.js  
    ├── public
    ├── src
    │   ├── app
    │   │   ├── globals.css
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   └── components
    │       ├── BattleFormModal.tsx
    │       ├── Button.tsx
    │       ├── CreatingFormModal.tsx
    │       ├── EditingFormModal.tsx
    │       ├── Modal.tsx
    │       └── PokemonsTable.tsx
    ├── tailwind.config.ts
    └── tsconfig.json

