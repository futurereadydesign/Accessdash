<!-- src/routes/+page.svelte -->
<script context="module" lang="ts">
    import { client } from '../././lib/graphql-client';
    import getQueryPartner from '../././lib/queries';
    
    export async function load() {
        const query = getQueryPartner(gql);
        const { data } = await client.query({ query });
        return {
            websites: data.websites
        };
    }
</script>

<script>
    export let websites;
</script>

<main>
    <h1>Websites</h1>
    <ul>
        {#each websites as website}
            <li>
                <h2>{website.titel}</h2>
                <p>{website.slug}</p>
                <a href={website.homepage}>Homepage</a>
            </li>
        {/each}
    </ul>
</main>