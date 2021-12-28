<script>
    import{ init, sendForm } from 'emailjs-com';
    init("user_yIQs4o5dkho3nOercs84S");

    function sendMessage() {
        let message = document.getElementById('contactForm');
        console.log(message);
            sendForm('default_service', 'contact_form', message)
                .then(() => {
                    window.alert('Success! Message sent!');
                }).catch(() => {
                    window.alert('Error! Try again later.');
                })
    }
</script>

<form class="contactForm" on:submit|preventDefault={sendMessage} id="contactForm">
    <div class="inputBar">
        <input type="text" class="formInput" name="user_name" required placeholder="Name" />
        <input type="text" class="formInput" name="user_email" required placeholder="Email" />
    </div>
    <textarea class="messageBox" name="message" required placeholder="message"></textarea>
    <button type="submit" class="submitBtn">Send</button>
</form>

<style>
    .contactForm {
        margin: 0 auto;
        margin-top: 50px;
        margin-bottom: 50px;
        width: 25%;
        text-align: center;
    }
    .contactForm *:focus {
        outline: none;
    }
    .formInput {
        height: 40px;
        font-size: 16px;
        border: none;
        border-radius: 90px;
        padding-left: 20px;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .messageBox {
        margin-top: 30px;
        width: 100%;
        height: 200px;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
        border: none;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 15px;
        font-size: 16px;
        font-family: 'Open Sans', sans-serif;
    }
    .inputBar {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }
    .submitBtn {
        height: 40px;
        width: 200px;
        border: none;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: #199BED;
        border-radius: 90px;
        margin-top: 15px;
        margin-bottom: 15px;
        float: right;
        font-size: 16px;
    }
    @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 480px)
        and (-webkit-min-device-pixel-ratio: 2) {
            .contactForm {
                width: 80%;
            }
            .inputBar {
                grid-template-columns: none;
            }
    }

</style>