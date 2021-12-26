<script>
    import Cta from '$lib/components/home/cta.svelte'

    let src = "/images/Pixelme.png";
</script>

<div class="bioGrid">
    <img {src} class="gravatar" alt="Ryan" />
    <Cta />
</div>

<style>
    .bioGrid {
        max-width: 900px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        place-items: center;
        padding: 0px 30px 0px 30px;
    }
    .gravatar {
        border-radius: 360px;
        width: 25vh;
        height: auto;
    }
</style>