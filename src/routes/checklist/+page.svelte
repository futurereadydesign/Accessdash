<script>
    export let data;

    console.log(data);
</script>

<main>
    <article>
        {#each data.succescriteriums as succescriterium}
        <div>
            <span>Richtlijn {succescriterium.index}</span>
            <h3>{succescriterium.titel}</h3>
        </div>
            <details>
                <summary>
                    <label for="">
                        <input name="check" type="checkbox"/>
                    </label>
                </summary>
                    <div class="richtlijn-uitleg">{@html succescriterium.criteria.html}</div>
                    <p>{succescriterium.niveau}</p>
                    <p>{succescriterium.impact}</p>
                    <p>{succescriterium.oplossen}</p>
            </details>
        {/each}
    </article>
</main>


<style> 
    article > div {
		padding: 1em 1em 0 1em;
	}

	h3,
	h4 {
		font-size: 1.2rem;
		font-weight: 600;
	}

	span {
		font-weight: 100;
		font-family: 1em;
	}

	label {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: 600;
	}

	label div {
		margin-left: 1em;
	}

details {
		padding: 1em;
	}

	section details:not(:nth-child(2)) {
		border-top: 1px solid var(--c-container-stroke);
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
</style>