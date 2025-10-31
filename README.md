# ⚡ PokeDex Recoil

Um projeto simples em **React + TypeScript** utilizando **Recoil** para gerenciamento de estado global e integração com a **PokeAPI**.

Este projeto foi sugerido pelo [chat gpt](https://chatgpt.com) com base no seguinte prompt:

> "Crie um desafio para eu praticar a utilização do Recoil como gerenciador de estado global, React e typescript. Esse desafio deve utilizar a [PokeAPI](https://pokeapi.co)."

---

## 🧠 Objetivo

Criar uma pequena Pokédex que consome dados da [PokeAPI](https://pokeapi.co) e permite:

- Exibir uma lista de Pokémons.
- Marcar/desmarcar Pokémons como favoritos.
- Visualizar apenas os Pokémons favoritos.
- (Opcional) Buscar Pokémons por nome.

---

## 🧩 Tecnologias

- React (com Vite)
- TypeScript
- Recoil
- Axios
- TailwindCSS
- Shadcn UI

---

## ⚙️ Funcionalidades

### 1️⃣ Listagem de Pokémons

- Ao iniciar a aplicação, são carregados **20 Pokémons** da PokeAPI.
- Cada Pokémon é exibido em um card contendo:
  - Nome do Pokémon.
  - Tipo (ou tipos, se for mais de um)
  - Um botão para favoritar/desfavoritar (⭐ / ☆).

---

### 2️⃣ Favoritos

- O usuário pode **favoritar** um Pokémon clicando no ícone ⭐.
- Os favoritos são mantidos no estado global (`atom`).
- Um **selector** exibe uma lista derivada contendo apenas os Pokémons marcados como favoritos.

---

### 3️⃣ Listas separadas

- Baseado nos filtros, a tela principal exibe:
  - **Favoritos** → mostra apenas os Pokémons favoritados.
  - **Geral** → mostra todos os Pokémons.

---

### 4️⃣ Estado Global (Recoil)

- `pokemonListState`: atom que armazena todos os Pokémons carregados.
- `favoritePokemonsSelector`: selector que filtra apenas os Pokémons favoritados.

---

### 5️⃣ (Opcional) Filtro de Busca - feito!

- Campo de busca que filtra os Pokémons por nome (pode ser implementado via outro selector dinâmico).

---

## 🚀 Requisitos

1. **Exibir Pokémons**: listar 20 Pokémons iniciais da API.
2. **Favoritar/Desfavoritar**: alternar o estado de favorito nos cards.
3. **Listar Favoritos**: mostrar apenas os Pokémons favoritados.
4. **Atualização Reativa**: ao favoritar/desfavoritar, as listas atualizam automaticamente.
5. **Organização**: usar `atoms/`, `selectors/`, `hooks/` e `components/` de forma modular.
6. **Boas práticas**: usar TypeScript com tipagem do estado global.

---

## 💡 Aprendizado Esperado

- Entender a diferença entre `atom` e `selector` no Recoil.
- Gerenciar estado global de forma reativa.
- Criar estados derivados e evitar duplicação de lógica.
- Consumir APIs externas e integrar com Recoil.
- Organizar uma aplicação React com arquitetura limpa.

---

## 🧑‍💻 Desafio Extra - Feito!

Implemente uma busca dinâmica:

- Crie um atom para armazenar o termo de busca.
- Crie um selector que filtra os Pokémons da lista com base no nome.
- Adicione um campo de input para alterar o termo e atualizar os resultados em tempo real.

---

## 🧾 Licença

Projeto livre para fins educacionais.
