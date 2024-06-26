<script>
  export let data;
  import Navbar from "../lib/components/navbar.svelte";
</script>

<Navbar />

<section class="heading">
  <p class="dashboard-heading">Dashboard</p>
  <h2 class="header-heading">Admin</h2>
</section>

<section class="websites">
  {#each data.bedrijven as bedrijf}
    <a href={bedrijf.slug} class="website-container">
      <section>
        <h3>{bedrijf.titel}</h3>
        <a href={bedrijf.homepage} class="links">{bedrijf.homepage}</a>
        <p class="toegankelijk">{bedrijf.toegankelijk}</p>
      </section>
      <section>
        <img src="/pcg-wheel.png" alt="" />
      </section>
    </a>
  {/each}
</section>

<style lang="scss">
  @import "$lib/sass/variables.scss";

  .heading {
    margin-bottom: 2em;
  }

  .dashboard-heading {
    font-size: 1rem;
  }

  .header-heading {
    font-size: 2rem;
  }

  .websites {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(23em, 1fr));
    gap: 1.2em;
    list-style-type: none;
  }

  .website-container {
    background-color: white;
    color: #5d666a;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* gap: 1em; */
    text-decoration: none;
    padding: 1em;
    border-radius: 0.8em;
    width: 100%;
    transition: 0.25s ease;
  }

  .website-container a {
    color: #5d666a;
    text-decoration: none;
  }

  .toegankelijk {
    padding: 0.7em;
    background-color: #bbffd8;
    color: #00883c;
    margin-top: 1em;
    font-weight: 600;
    width: max-content;
    border-radius: 69px;
    font-weight: 700;
  }

  h3 {
    font-size: 1.4em;
    font-weight: 700;
  }

  .links {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 12em;
    height: 1.2em;
    white-space: nowrap;
  }
</style>
