<script>
  export let crumbs;
</script>

<ul>
  <li>
    <a href="/{crumbs.slug}" class="menu-title">
      <img src="/dashboard-icon.svg" alt="" />{crumbs.titel}
    </a>
  </li>
  {#each crumbs.items as item}
    <li>
      <a href="/{crumbs.origin}/{item.titel ? item.slug : item.id}"
        >{item.titel ? item.titel : "/" + item.slug}</a
      >
    </li>
  {/each}
</ul>

<style lang="scss">
  @import "$lib/sass/variables.scss";

  ul {
    list-style-type: none;
    font-size: 1rem;
    margin-top: 2em;

    li {
      margin-top: 1em;

      a {
        text-decoration: none;
      }
    }
  }
</style>
