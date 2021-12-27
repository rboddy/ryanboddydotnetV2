<script></script>

<div class="triangle">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>

<style>
    .triangle {
        position: absolute;
        z-index: -1;
        top: 80px;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
    }

    .triangle svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 700px;
        transform: rotateY(180deg);
    }

    .triangle .shape-fill {
        fill: #757083;
    }
    @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 480px)
        and (-webkit-min-device-pixel-ratio: 2) {
            .triangle svg {
                height: 350px;
            }
    }
</style>