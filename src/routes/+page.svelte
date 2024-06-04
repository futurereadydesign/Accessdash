<script>
    export let data;
    console.log(website.titel);
</script>

<main>
  <h1>Websites</h1>
  <ul>
    {#each data.websites as website}
      <li>
        <h2>{website.titel}</h2>
        <p>Slug: {website.slug}</p>
        <p>Homepage: {website.homepage}</p>
      </li>
    {/each}
  </ul>
</main>