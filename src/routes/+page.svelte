<script>
    export let data;
    import Navbar from "../lib/components/navbar.svelte"
</script>

<main>
    <Navbar />

    <section class="heading">
        <p class="dashboard-heading">Dashboard</p>
        <h2 class="header-heading">Admin</h2>
    </section>

    <section class="websites">
        {#each data.websites as website}
            <section class="website-container">
                <section>
                    <h3>{website.titel}</h3>
                    <p class="links">{website.homepage}</p>
                    <p class="toegankelijk">{website.toegankelijk}</p>
                </section>
                <section>
                    <img src="/pcg-wheel.png" alt="">
                </section>
            </section>
        {/each}
    </section>
</main>

<style lang="scss">
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
        margin: 0 1em 1em;
    }

    .website-container {
        background-color: white;
        color: #5D666A;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /* gap: 1em; */
        text-decoration: none;
        padding: 1em;
        border-radius: .8em;
        width: 100%;
        transition: .25s ease;
	}

    .toegankelijk {
        padding: .7em;
        background-color: #BBFFD8;
        color: #00883C;
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