# Cliente para gerenciamento e batalhas Pokemon
![image](https://github.com/silvasilas99/pokemonbattle-client/assets/49960425/39cc0bec-3f9a-40a5-b486-8857b10b1090)

    Visão Geral do Projeto: 
    
     Cliente construído com o framework Next.js para oferecer interface ágil 
     para criação e geranciamento de pokemons 
    
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

