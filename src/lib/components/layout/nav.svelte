<script>
    import { slide } from 'svelte/transition';
    let visible = false;

    function toggle() {
        visible = !visible;
    }
</script>

<nav class="custom-nav">
    <div class="nav-menu">
        <a href="/" class="brand">ryanboddy.net</a>
        <div></div>
        <a href="/contact"><i class="far fa-envelope-square"></i> contact</a>
        <a href="/blog"><i class="fas fa-typewriter"></i> blog</a>
        <a href="https://discord.gg/B5sqjqfK7N" target="_blank" class="btnLink"><i class="fa-brands fa-discord"></i> Join</a>
    </div>
    <div class="mobileNavBtn">
        <div></div>
        <button on:click={toggle} class="hamburger"><i class="fas fa-bars"></i></button>
    </div>
</nav>
{#if visible}
<div class="mobileNav" transition:slide >
    <a class="mobileLink" on:click={toggle} href="/"><i class="fas fa-home"></i> Home</a>
    <hr />
    <a class="mobileLink" on:click={toggle} href="/contact"><i class="far fa-envelope-square"></i> Contact</a>
    <hr />
    <a class="mobileLink" on:click={toggle} href="/blog"><i class="fas fa-typewriter"></i> Blog</a>
    <hr />
    <a class="mobileLink" target="_blank" href="https://discord.gg/B5sqjqfK7N"><i class="fa-brands fa-discord"></i> Join</a>
    <hr />
</div>
{/if}

<style>
    .brand {
        font-size: 30px;
        font-family: 'Fjalla One', sans-serif;
        font-weight: normal;
    }
    .hamburger {
        display: none;
    }
    a {
        color: #EBE8E6;
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
    }
    .custom-nav {
        width: 100%;
        height: 80px;
        background-color: #1D2030;
    }
    .nav-menu {
        display: grid;
        height: 80px;
        grid-template-columns: 1.5fr 7.5fr repeat(3, 1fr);
        place-items: center;
    }
    .btnLink {
        background-color: #199BED;
        width: 100px;
        padding: 5px;
        border-radius: 90px;
        color: #1D2030;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .mobileNav {
        display: none;
        text-align: right;
    }
    .mobileLink {
        padding-right: 10px;
    }
    @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 480px)
        and (-webkit-min-device-pixel-ratio: 2) {
            .nav-menu {
                display: none;
            }
            .mobileNavBtn {
                height: 80px;
                display: grid;
                grid-template-columns: 4fr 1fr;
                place-items: center;
            }
            .hamburger {
                display: block;
                font-size: 30px;
                background: none;
                border: none;
                color: white;
            }
            .mobileNav {
                display: block;
                background-color: #1D2030;
                border-top: 1px solid white;
            }
    }
</style>