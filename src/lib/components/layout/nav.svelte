<script></script>

<nav class="custom-nav">
    <div class="nav-menu">
        <a href="/" class="brand">ryanboddy.net</a>
        <div></div>
        <a href="/contact"><i class="far fa-envelope-square"></i> contact</a>
        <a href="/blog"><i class="fas fa-typewriter"></i> blog</a>
        <a href="/" class="btnLink"><i class="fa-brands fa-discord"></i> Join</a>
    </div>
</nav>

<style>
    .brand {
        font-size: 30px;
        font-family: 'Fjalla One', sans-serif;
        font-weight: normal;
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
    @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 480px)
        and (-webkit-min-device-pixel-ratio: 2) {
            .nav-menu {
                display: none;
            }
    }
</style>