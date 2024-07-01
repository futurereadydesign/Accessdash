<script>
  export let data;
  import Navbar from "$lib/components/navbar.svelte";
</script>

<Navbar />
<section class="heading">
  <p>Dashboard</p>
  <h2>Admin</h2>
</section>

<section class="websites">
  {#each data.bedrijven as bedrijf}
    <a href={bedrijf.slug}>
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

    p {
      font-size: 1rem;
    }

    h2 {
      font-size: 2rem;
    }
  }

  .websites {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(23em, 1fr));
    gap: 1.2em;
    list-style-type: none;

    > a {
      background-color: $white-color;
      color: $text-color;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      text-decoration: none;
      padding: 1em;
      border-radius: 0.8em;
      transition: 0.25s ease;

      section {
        h3 {
          font-size: 1.4em;
          font-weight: 700;
        }

        p {
          padding: 0.7em;
          background-color: #bbffd8;
          color: $succes-color;
          margin-top: 1em;
          font-weight: 600;
          width: max-content;
          border-radius: 69px;
          font-weight: 700;
        }

        a {
          text-overflow: ellipsis;
          overflow: hidden;
          width: 12em;
          height: 1.2em;
          white-space: nowrap;
        }
      }
      a {
        color: $text-color;
        text-decoration: none;
      }
    }
  }
</style>
