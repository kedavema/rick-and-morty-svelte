<script>
  import Character from "./lib/Character.svelte";

  let characters = [];
  let page = 1;
  async function loadCharacters() {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();
    characters = data.results;
  }

  loadCharacters();

  function nextPage() {
    page++;
    loadCharacters();
  }

  function previousPage() {
    page--;
    loadCharacters();
  }
</script>

<h1 class="title">Rick and Morty Svelte</h1>
<div class="container">
  <div class="btns">
    <button on:click={previousPage} disabled={page == 1} class="btn">Previous</button>
    <button on:click={nextPage} class="btn">Next</button>
  </div>
  <div class="grid">
    {#each characters as character}
      <Character {character} />
    {/each}
  </div>
</div>
