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
        color: white;
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
        background-color: #00E9FF;
        color: #0F292F;
    }
    .shake:hover{ 
        animation: shake .25s 2;
        animation-timing-function: linear;
        cursor: pointer;
    }

    @keyframes shake {
        0% { transform: rotate(0.5deg); }
        50% { transform: rotate(-5deg); }
        100% { transform: rotate(5deg); }
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