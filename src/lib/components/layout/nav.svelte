<script></script>

<nav class="custom-nav">
    <div class="nav-menu">
        <a href="/" class="brand">ryanboddy.net</a>
        <div></div>
        <a href="/contact">contact</a>
        <a href="/blog" class="btnLink">blog</a>
    </div>
</nav>

<style>
    .brand {
        font-size: 20px;
        font-weight: bold;
        font-family: 'Asap Condensed', sans-serif;
    }
    a {
        color: var(--nav-color);
        text-decoration: none;
        font-size: 18px;
        text-align: center;
        font-weight: bold;
    }
    .custom-nav {
        width: 100%;
        height: 50px;
        background-color: var(--nav-bg)
    }
    .nav-menu {
        display: grid;
        height: 50px;
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
</style>