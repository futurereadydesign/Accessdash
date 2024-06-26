<nav>
  <img src="/logo.svg" class="logo" alt="" />
  <section class="dashboard-container">
    <section class="dashboard">
      <img src="/dashboard-icon.svg" alt="" />
      <a href="/" class="dashboard">Dashboard</a>
    </section>
    <ul>
      <li><a href="#">Info</a></li>
      <li><a href="#">Voortgang</a></li>
      <li><a href="#">Scan</a></li>
    </ul>
  </section>
</nav>

<style lang="scss">
  @import "$lib/sass/variables.scss";

  nav {
    background-color: #ffffff;
    width: 14rem;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding: 2rem;
    color: #5d666a;
  }

  nav a {
    text-decoration: none;
  }

  .logo {
    width: 10rem;
  }

  .dashboard-container {
    margin-top: 4em;
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
  }

  .dashboard {
    color: #0275ff;
    font-weight: 750;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    font-size: 1.2rem;
  }
</style>
