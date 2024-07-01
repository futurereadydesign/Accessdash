<script>
  import Navbar from "$lib/components/navbar.svelte";
</script>

<main>
  <slot />
</main>

<style lang="scss">
  main {
    width: 100%;
    margin-left: 14em;
    padding: 30px;
    padding-top: 30px;
  }
</style>
