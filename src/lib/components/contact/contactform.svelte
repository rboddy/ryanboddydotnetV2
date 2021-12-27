<form class="contactForm">
    <div class="inputBar">
        <input type="text" class="formInput" placeholder="Name" />
        <input type="text" class="formInput" placeholder="Email" />
    </div>
    <textarea class="messageBox" placeholder="message"></textarea>
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
        width: 100%;
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
        border-radius: 15px;
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
    }

</style>