<script>
    let src = "/images/Pixelme.png";
</script>

<div class="bioGrid">
    <img {src} class="gravatar" alt="Ryan" />
    <p>I'm a web developer who is passionate about a beautiful, functional web.</p>
</div>

<style>
    .bioGrid {
        max-width: 700px;
        margin: 0 auto;
        display: grid;
        font-size: 26px;
        color: white;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        place-items: center;
        padding: 0px 30px 0px 30px;
    }
    .gravatar {
        border-radius: 360px;
        width: 25vh;
        height: auto;
    }
</style>