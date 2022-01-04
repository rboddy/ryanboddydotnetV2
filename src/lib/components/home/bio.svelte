<script>
    import Cta from '$lib/components/home/cta.svelte'

    let src = "/images/PrimaryImage.png";
</script>

<div class="bioGrid">
    <img {src} class="avatar" alt="Ryan" />
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
    .avatar {
        border-radius: 20px;
        width: 40vh;
        height: auto;
    }
    @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 480px)
        and (-webkit-min-device-pixel-ratio: 2) {
            .bioGrid {
                grid-template-columns: none;
            }
    }
</style>