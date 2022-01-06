<div class="btnBar">
    <a href="/" class="socialBtn"><i class="fa-brands fa-discord fa-4x"></i></a>
    <a href="https://twitter.com/imryanboddy" target="_blank" class="socialBtn"><i class="fab fa-twitter-square fa-4x"></i></a>
    <a href="https://facebook.com/rbonfb" target="_blank" class="socialBtn"><i class="fab fa-facebook-square fa-4x"></i></a>
    <a href="https://github.com/rboddy" target="_blank" class="socialBtn"><i class="fab fa-github-square fa-4x"></i></a>
</div>

<style>
    .btnBar {
        width: 25%;
        margin: 0 auto;
        margin-top: 30px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        place-items: center;
    }
    .socialBtn {
        color: #1D2030;
    }
    @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 480px)
        and (-webkit-min-device-pixel-ratio: 2) {
            .btnBar {
                grid-template-columns: 1fr 1fr;
                width: 50%;
            }
    }
</style>