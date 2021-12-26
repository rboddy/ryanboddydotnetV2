<div class="cta">
    <h2>It's dangerous to go alone!</h2>
    <button class="ctaBtn shake"><i class="fa-brands fa-discord"></i> Join the community</button>
</div>

<style>
    .cta {
        text-align: center;
    }
    h2 {
        font-size: 3vh;
        font-family: "Fjalla One", sans-serif;
        color: #1D2030;
    }
    .ctaBtn {
        height: 50px;
        padding: 10px 30px 10px 30px;
        border: none;
        border-radius: 360px;
        margin-top: 20px;
        box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.25);
        font-size: 1rem;
        font-weight: bold;
        background-color: #199BED;
        color: #0F292F;
    }
    .shake{ 
        animation: shake 5.25s infinite;
        animation-timing-function: linear;
        cursor: pointer;
    }

    @keyframes shake {
        45% { transform: rotate(0deg); }
        50% { transform: rotate(-3deg); }
        55% { transform: rotate(3deg); }
        60% { transform: rotate(0deg); }
    }
    @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 480px)
        and (-webkit-min-device-pixel-ratio: 2) {
            h2 {
                margin-top: 30px;
            }
    }
</style>