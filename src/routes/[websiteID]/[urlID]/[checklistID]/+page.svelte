<script>
  import Navbar from "$lib/components/navbar.svelte";
  import { page } from "$app/stores";
  export let data;

  $: titel = data.singleUrl.url.website.titel;
  $: slug = data.singleUrl.url.slug;
  $: urls = data.singleUrl.url.website.urls;
  $: origin = $page.params.urlID + "/" + $page.params.websiteID;

  $: crumbs = {
    titel: titel,
    slug: data.singleUrl.url.website.slug,
    items: urls,
    origin: origin,
  };
</script>

<Navbar {crumbs} />
<section class="heading">
  <p>Dashboard</p>
  <h2>{titel}/{slug}</h2>
</section>

{#each data.checklist.richtlijns as richtlijns}
  <article>
    <div class="richtlijn-container">
      <h3>
        <span>{richtlijns.titel}</span>
        <span>Richtlijn {richtlijns.index}</span>
      </h3>
      <img src={richtlijns.icon.url} alt={richtlijns.icon.fileName} />
    </div>
    {#each richtlijns.succescriteria as succescriteria}
      <section class="criterias">
        <details>
          <summary>
            <div class="content-container">
              <div>
                <h3>{succescriteria.index} {succescriteria.titel}</h3>
                <a href={succescriteria.wcag}>{succescriteria.wcag}</a>
              </div>
              <label class="checkbox-label" for="">
                <input name="check" type="checkbox" />
              </label>
            </div>
          </summary>
          <div class="richtlijn-uitleg">
            {@html succescriteria.criteria.html}
          </div>
          <!-- <p>{succescriterium.niveau}</p> -->
          <section class="bot-container">
            <div>
              <h4>
                <img src="../heart-icon.svg" alt="Impact icon" /> Impact op gebruiker
              </h4>
              <p>{succescriteria.impact}</p>
            </div>
            <div>
              <h4>
                <img src="../test-icon.svg" alt="Test icon" /> Hoe te testen
              </h4>
              <p>{succescriteria.testen}</p>
            </div>
          </section>
          <section class="fix-container">
            <div>
              <h4 class="solution">
                Hoe je dit kunt oplossen ({succescriteria.index})
              </h4>
              <p>{succescriteria.oplossen}</p>
            </div>
          </section>
        </details>
      </section>
    {/each}
  </article>
{/each}

<style lang="scss">
  @import "$lib/sass/variables.scss";

  .heading {
    margin-bottom: 2em;

    p {
      font-size: 1rem;
    }

    h2 {
      font-size: 2rem;
    }
  }

  article {
    max-width: 60vw;
    margin-bottom: 1em;
    border-radius: 20px;
    background-color: $white-color;

    .richtlijn-container {
      padding: 1.5em 0 1em 2em;

      span:first-child {
        font-size: 1.5em;
      }

      span:last-child {
        margin-left: 1em;
        font-size: 1em;
        font-weight: 400;
      }

      img {
        margin-left: 1em;
        margin-bottom: -0.3em;
      }
    }

    .content-container,
    .richtlijn-container {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 1em;
    }

    > section {
      border-top: 3px solid $border-color;

      details {
        padding: 1.2em;

        &[open] summary:before {
          content: "🡓";
        }

        summary {
          display: flex;
          flex-direction: row;
          align-items: center;

          &:before {
            content: "🡒";
            width: 30px;
            font-size: 1.5em;
            color: $text-color;
          }
        }

        label {
          margin-left: auto;

          input[type="checkbox"] {
            display: grid;
            place-content: center;
            width: 2em;
            min-width: 2em;
            height: 2em;
            appearance: none;
            -webkit-appearance: none;
            color: $primary-color;
            background-color: rgba(2, 117, 255, 0.1);
            border: 0.2em solid currentColor;
            border-radius: 0.3em;
            transform: translateY(-0.075em);
          }

          input[type="checkbox"]::before {
            content: "";
            width: 1em;
            height: 1em;
            clip-path: polygon(
              14% 44%,
              0 65%,
              50% 100%,
              100% 16%,
              80% 0%,
              43% 62%
            );
            transform: scale(0);
            background-color: #f8f9fc;
          }

          input[type="checkbox"]:checked::before {
            transform: scale(1);
          }

          input[type="checkbox"]:checked {
            background-color: #0275ff;
          }
        }

        > div {
          padding-top: 1em;
          font-size: 0.9em !important;
        }

        .bot-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          max-width: 1200px;
          gap: 1em;
          margin-top: 1em;

          div {
            padding: 20px;
            background-color: #f0f0f0;
            border-radius: 10px;

            h4 {
              display: flex;
              align-items: center;
              gap: 0.4em;
              margin-bottom: 0.5em;
            }
          }
        }

        .fix-container {
          margin-top: 1em;
          padding: 20px;
          background-color: rgba(2, 117, 255, 0.2);
          border-radius: 10px;
          border: solid 2px #0275ff;
          color: #5d666a;

          h4 {
            color: #0275ff;
            margin-bottom: 0.5em;
          }
        }
      }

      h3,
      h4 {
        font-size: 1.2rem;
        font-weight: 600;
      }

      a {
        color: #5d666a;
        text-decoration: none;
        opacity: 70%;
      }
    }
  }
</style>
