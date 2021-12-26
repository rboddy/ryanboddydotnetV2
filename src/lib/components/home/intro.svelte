<div class="introMessage">
    <h1>Hello There!</h1>
    <h3>My name is <span style="text-decoration: underline;">Ryan</span>.</h3>
</div>

<style>
    .introMessage {
        margin: 0 auto;
        margin-top: 30px;
        width: 75%;
        text-align: center;
        color: white;
        font-family: 'Fjalla One', sans-serif;
    }
    h1 {
        font-size: 8vh;
        margin-bottom: 0px;
    }
    h3 {
        font-size: 4vh;
        margin-top: 0px;
    }
    @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 480px)
        and (-webkit-min-device-pixel-ratio: 2) {
            .introMessage  {
                margin-top: -160px;
            }
    }
</style>