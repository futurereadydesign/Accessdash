<script>
    export let data;
	
    import Navbar from "../../lib/components/navbar.svelte"

    console.log(data);
</script>

<main>
    <Navbar />

    {#each data.succescriteriums as succescriterium}
        <article>
            <div class="content-container">
                <div class="text-content">
                    <span>Richtlijn {succescriterium.index}</span>
                    <h3>{succescriterium.titel}</h3>
                    <a href="{succescriterium.wcag}">{succescriterium.wcag}</a>
                </div>
                <label class="checkbox-label" for="">
                    <input name="check" type="checkbox"/>
                </label>
            </div>
            <details>
                <summary>
                </summary>
                <div class="richtlijn-uitleg">{@html succescriterium.criteria.html}</div>
                <!-- <p>{succescriterium.niveau}</p> -->
                <section class="bot-container">
                    <div class="bot-block">
                        <h4><img src="../heart-icon.svg" alt="Impact icon"> Impact op gebruiker</h4>
                        <p>{succescriterium.impact}</p>
                    </div>
                    <div class="bot-block">
                        <h4><img src="../test-icon.svg" alt="Test icon"> Hoe te testen</h4>
                        <p>{succescriterium.oplossen}</p>
                    </div>
                </section>
            </details>
        </article>
    {/each}
</main>

<style>
    article {
        margin-left: 15em;
        max-width: 60vw;
        background-color: white;
        margin-bottom: 1em;
        border-radius: 20px;
    }

    .content-container {
        padding: 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .text-content {
        display: flex;
        flex-direction: column;
    }

    h3, h4 {
        font-size: 1.2rem;
        font-weight: 600;
    }

    a {
        color: #5D666A;
        text-decoration: none;
    }

    .checkbox-label {
        margin-left: auto;
    }

    label {
        display: flex;
        align-items: center;
        font-weight: 600;
    }

    details {
        padding: 1em;
    }

    summary {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    summary::-webkit-details-marker {
        display: none;
    }

    summary:before {
        content: '🡒';
        font-size: 1.5em;
        color: #5D666A;
        width: 30px;
    }

    details[open] summary:before {
        content: '🡓';
    }

    details > div {
        font-size: 0.9em !important;
        padding-top: 1em;
    }

    input[type='checkbox'] {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
        color: #0275FF;
        min-width: 2em;
        width: 2em;
        height: 2em;
        border: 0.2em solid currentColor;
        border-radius: 0.3em;
        transform: translateY(-0.075em);
        display: grid;
        place-content: center;
    }

    input[type='checkbox']::before {
        content: '';
        width: 1em;
        height: 1em;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transform: scale(0);
        background-color: #F8F9FC;
    }

    input[type='checkbox']:checked::before {
        transform: scale(1);
    }

    input[type='checkbox']:checked {
        background-color: #0275FF;
    }

    .bot-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        max-width: 1200px;
        gap: 1em;
        margin-top: 1em;
    }

    .bot-block {
        padding: 20px;
        background-color: #F0F0F0;
        border-radius: 10px;
    }
</style>
