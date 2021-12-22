<script></script>

<nav class="custom-nav">
    <div class="nav-menu">
        <a href="/" class="brand">ryanboddy.net</a>
        <div></div>
        <a href="/contact"><i class="far fa-envelope-square"></i> contact</a>
        <a href="/blog" class="btnLink"><i class="fas fa-typewriter"></i> blog</a>
    </div>
</nav>

<style>
    .brand {
        font-size: 30px;
        font-family: 'Fjalla One', sans-serif;
        font-weight: normal;
    }
    a {
        color: var(--nav-color);
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
    }
    .custom-nav {
        width: 100%;
        height: 80px;
        background-color: var(--nav-bg)
    }
    .nav-menu {
        display: grid;
        height: 80px;
        grid-template-columns: 1fr 9fr repeat(2, 1fr);
        align-items: center;
    }
    .btnLink {
        background-color: var(--btn-bg);
        width: 100px;
        padding: 5px;
        border-radius: 90px;
        color: var(--btn-color);
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    }
    @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 480px)
        and (-webkit-min-device-pixel-ratio: 2) {
            .nav-menu {
                display: none;
            }
    }
</style>