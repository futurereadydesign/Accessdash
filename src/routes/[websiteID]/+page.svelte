<script>
  export let data;

  $: titel = data.bedrijf.titel;
  $: websites = data.bedrijf.websites;
</script>

<section class="heading">
  <p class="dashboard-heading">Dashboard</p>
  <h2 class="header-heading">{titel}</h2>
</section>

<style lang="scss">
</style>
