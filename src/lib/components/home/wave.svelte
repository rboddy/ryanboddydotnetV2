<script></script>

<div class="hero">
</div>

<div class="wave">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <style type="text/css">
            rect{fill:url(#MyGradient)}
        </style>
        <defs>
            <linearGradient id="MyGradient">
                <stop offset="0%" stop-color="#CB2D6F" />
                <stop offset="50%" stop-color="#501F3A" />
            </linearGradient>
        </defs>
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>

<style>
    .hero {
        width: 100%;
        height: 400px;
        background: linear-gradient(to right, #CB2D6F, #501F3A);
        display: flex;
        align-items: center;
        z-index: -1;
    }

    .wave {
        position: absolute;
        top: 50;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        z-index: -1;
    }

    .wave svg {
        position: relative;
        display: block;
        width: calc(200% + 1.3px);
        height: 20vw;
    }

    .wave .shape-fill {
        fill: url(#MyGradient);
    }
</style>