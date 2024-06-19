<script>
    export let data;
	
    import Navbar from "../../lib/components/navbar.svelte"

    console.log(data);
</script>

<main>
    <Navbar />

    <section class="spacer"></section>
    <section class="heading">
        <p class="dashboard-heading">Dashboard</p>
        <h2 class="header-heading">Future Ready Design/Home</h2>
    </section>

    {#each data.richtlijns as richtlijns}
        <article>
            <div class="richtlijn-container">
                <h3><span class="richtlijn">{richtlijns.titel}</span> <span class="richtlijn-index">Richtlijn {richtlijns.index}</span> <img class="richtlijn-icon" src="{richtlijns.icon.url}" alt="{richtlijns.icon.fileName}" /></h3>
            </div>
            {#each richtlijns.succescriteria as succescriteria}
                <section class="criterias">
                    <details>
                        <summary>
                            <div class="content-container">
                                <div class="text-content">
                                    <h3>{succescriteria.index} {succescriteria.titel}</h3>
                                    <a href="{succescriteria.wcag}">{succescriteria.wcag}</a>
                                </div>
                                <label class="checkbox-label" for="">
                                    <input name="check" type="checkbox"/>
                                </label>
                            </div>
                        </summary>
                        <div class="richtlijn-uitleg">{@html succescriteria.criteria.html}</div>
                        <!-- <p>{succescriterium.niveau}</p> -->
                        <section class="bot-container">
                            <div class="bot-block">
                                <h4><img src="../heart-icon.svg" alt="Impact icon"> Impact op gebruiker</h4>
                                <p>{succescriteria.impact}</p>
                            </div>
                            <div class="bot-block">
                                <h4><img src="../test-icon.svg" alt="Test icon"> Hoe te testen</h4>
                                <p>{succescriteria.testen}</p>
                            </div>
                        </section>
                        <section class="fix-container">
                            <div>
                                <h4 class="solution">Hoe je dit kunt oplossen ({succescriteria.index})</h4>
                                <p>{succescriteria.oplossen}</p>
                            </div>
                        </section>
                    </details>
                </section>
            {/each}
        </article>
    {/each}

    <section class="filters">
        <button>Voldoet niet(14)</button>
        <button>Voldoet(9)</button>
        <button>A(19)</button>
        <button>AA(12)</button>
        <button>AAA(11)</button>
    </section>

</main>

<style>
    .spacer {
        height: 2em;
    }

    .heading {
        margin-left: 15em;
        margin-bottom: 2em;
    }

    .dashboard-heading {
        font-size: 1rem;
    }

    .header-heading {
        font-size: 2rem;
    }

    article {
        margin-left: 15em;
        max-width: 60vw;
        background-color: white;
        margin-bottom: 1em;
        border-radius: 20px;
    }

    .richtlijn {
        font-size: 1.5em;
    }

    .criterias {
        border-top: 3px solid #F0F0F0;
    }

    .richtlijn-index {
        font-size: 1em;
        font-weight: 400;
        margin-left: 1em;
    }

    .content-container, .richtlijn-container {
        padding: 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .richtlijn-container {
        padding-top: 1.5em;
        padding-left: 2em;
        padding-bottom: 1em;
    }

    .richtlijn-icon {
        margin-left: 1em;
        margin-bottom: -.3em;
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
        opacity: 70%;
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
        padding: 1.2em;
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
        background-color: rgba(2, 117, 255, .1);
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

    .bot-block h4 {
        display: flex;
        align-items: center;
        gap: .4em;
        margin-bottom: .5em;
    }

    .fix-container {
        margin-top: 1em;
        padding: 20px;
        background-color: rgba(2, 117, 255, .2);
        border-radius: 10px;
        border: solid 2px #0275FF;
        color: #5D666A;
    }

    .solution {
        color: #0275FF;
        margin-bottom: .5em;
    }


</style>
