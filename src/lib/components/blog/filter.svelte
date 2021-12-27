<script>
    import client from "/src/routes/sanity.js";

    let query = "*[_type == 'category']{ title }"

    async function getCats() {
        let categories = await client.fetch(query);
        return categories;
    }
    const cats = getCats();
</script>

<div class="filterBox">
    <p class="sortBy">Sort by Topic:</p>
    {#await cats then categories}
        {#each categories as category}
            <button class="catBtn">{category.title}</button>
        {/each}
        <select class="mobileSelect">
            <option>Sort by Category</option>
            {#each categories as category}
                <option>{category.title}</option>
            {/each}
        </select>
    {/await}
</div>

<style>
    .filterBox {
        width: 75%;
        background-color: #757083;
        margin: 0 auto;
        margin-top: 30px;
        padding: 10px;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        place-items: center;
        font-size: 20px;
        font-weight: bold;
    }
    .catBtn {
        height: 50px;
        width: 200px;
        border: none;
        border-radius: 360px;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: #199BED;
        font-size: 16px;
    }
    .catBtn:hover {
        cursor: pointer;
    }
    .mobileSelect {
        display: none;
        height: 40px;
        border-radius: 360px;
        font-size: 16px;
    }
    @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 480px)
        and (-webkit-min-device-pixel-ratio: 2) {
            .filterBox {
                grid-template-columns: none;
                width: 90%;
                margin-top: 15px;
            }
            .catBtn {
                display: none;
            }
            .mobileSelect {
                display: block;
            }
            .sortBy {
                display: none;
            }
    }
</style>