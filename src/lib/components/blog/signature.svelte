<script>
    let src = "/images/Pixelme.png";
</script>

<div class="signatureBox">
    <img {src} class="gravatar" alt="Ryan" />
    <p>Thank you so much for reading this post and for sticking around! I want every article I put out to bring value to those in my community and the dev community as a whole. If you are new here, thanks for visiting. If you are returning, thank you for your continued support. Remember that if you haven't yet, you can join our growing community on our <a href="https://discord.gg/B5sqjqfK7N" target="_blank">discord server.</a> Cheers!</p>
</div>

<style>
    .signatureBox {
        width: 50%;
        padding: 10px 20px 10px 20px;
        display: grid;
        grid-template-columns: 1fr 3fr;
        margin: 0 auto;
        background-color: white;
        border-radius: 15px;
        margin-top: 30px;
        margin-bottom: 30px;
        font-size: 18px;
        place-items: center;
    }
    img {
        width: 75%;
        height: auto;
        border-radius: 360px;
    }
    @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 480px)
        and (-webkit-min-device-pixel-ratio: 2) {
            .signatureBox {
                width: 75%;
                grid-template-columns: none;
            }
    }
</style>