<script>
  export let crumbs;
</script>

<section class="breadcrumbs">
  <section class="dashboard">
    <a href="/{crumbs.slug}" class="dashboard">
      <img src="/dashboard-icon.svg" alt="" />{crumbs.titel}
    </a>
  </section>
  <ul>
    {#each crumbs.items as item}
      <li>
        <a href="/{crumbs.origin}/{item.titel ? item.slug : item.id}"
          >{item.titel ? item.titel : "/" + item.slug}</a
        >
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  @import "$lib/sass/variables.scss";

  .breadcrumbs {
    padding-top: 2em;
  }

  ul {
    list-style-type: none;
    font-size: 1rem;
    margin-top: 1em;
  }

  li {
    margin-top: 1em;
  }

  ul li a {
    color: $text-color;
    text-decoration: none;
  }

  .dashboard {
    color: #0275ff;
    font-weight: 750;
    display: flex;
    text-decoration: none;
    align-items: center;
    flex-direction: row;
    font-size: 1.2rem;
  }
</style>
