<script>
  import Breadcrumbs from "./breadcrumbs.svelte";
  export let crumbs;
</script>

<nav>
  <img src="/logo.svg" class="logo" alt="" />
  <ul>
    <li>
      <a href="/" class="menu-title">
        <img src="/dashboard-icon.svg" alt="" />Dashboard
      </a>
    </li>
    <li><a href="/">Info</a></li>
    <li><a href="/">Voortgang</a></li>
    <li><a href="/">Scan</a></li>
  </ul>
  {#if crumbs}
    <Breadcrumbs {crumbs} />
  {/if}
</nav>

<style lang="scss">
  @import "$lib/sass/variables.scss";

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 14rem;
    height: 100vh;
    padding: 2rem;
    background-color: $white-color;

    ul {
      list-style-type: none;
      font-size: 1rem;
      margin-top: 3.5em;

      li {
        margin-top: 1em;

        a {
          text-decoration: none;
        }
      }
    }
  }

  .logo {
    width: 10rem;
  }
</style>
