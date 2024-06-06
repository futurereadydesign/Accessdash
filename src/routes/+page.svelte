<script>
    export let data;

    
    console.log(data);
</script>

<main>
    <nav>
        <img src="/logo.svg" class="logo" alt="">
        <section class="dashboard-container">
            <section class="dashboard">
                <img src="/dashboard-icon.svg" alt="">
                <p class="dashboard">Dashboard</p>
            </section>
            <ul>
                <li>Dashboard</li>
                <li>Info</li>
                <li>Voortgang</li>
                <li>Scan</li>
            </ul>
        </section>
    </nav>

    {#each data.websites as website}
        <section>
            <h3>{website.titel}</h3>
            <p>{website.homepage}</p>
        </section>
    {/each}
</main>

<style>
    nav {
        background-color: #FFFFFF;
        width: 14rem;
        height: 100%;
        position:absolute;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        padding: 2rem;
        color: #5D666A;
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

    .dashboard {
        color: #0275FF;
        font-weight: 750;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        font-size: 1.2rem;
    }
</style>