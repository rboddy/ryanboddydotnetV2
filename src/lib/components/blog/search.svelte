<script>
    import { search } from '/src/routes/stores.js';

    function searchField() {
        
    }
</script>

<form class="searchForm">
    <input type='text' class='search' placeholder="&#128269 Search" />
</form>

<style>
    .searchForm {
        display: grid;
        place-items: center;
    }
    .search {
        width: 400px;
        height: 30px;
        margin: 0 auto;
        margin-top: 30px;
        border-radius: 360px;
        padding: 10px;
        font-size: 16px;
        padding-left: 20px;
        border: none;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .search:focus {
        outline: none;
    }
    @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 480px)
        and (-webkit-min-device-pixel-ratio: 2) {
            .search {
                width: 80%;
                margin-top: 15px;
            }
    }
</style>