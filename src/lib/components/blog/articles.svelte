<script>
import { onMount } from "svelte";

    import client from "/src/routes/sanity.js";
    import { search } from '/src/routes/stores.js';

    onMount(() => {
        search.subscribe(value => {
            const items = document.querySelectorAll('#articleRow');
            for (let item of items) {
                item.style.display = item.innerText.toLowerCase().includes(value.toLowerCase())
                ? "grid"
                : "none";
            }
        })
    })

    let query = `*[ _type == 'post' ] | order(publishedAt desc) {title, publishedAt, slug }`

    async function getPosts() {
        let blogPosts = await client.fetch(query);
        return blogPosts;
    }
    const posts = getPosts();

    function formatDate(date) {
        return new Date(date).toLocaleDateString()
    }
</script>

<h1>Articles</h1>

<div class="articles">
    <hr />
    <div class="articleList">
        {#await posts then postList}

            {#each postList as post}
                <div class="articleRow" id="articleRow">
                    <a class="articleLink" href={post.slug.current} >{post.title}</a> 
                    <div></div>
                    <p class="date">{formatDate(post.publishedAt)}</p>
                </div>
            {/each}
        
        {/await}
    </div>
</div>

<style>
    h1 {
        text-align: center;
        margin-top: 30px;
    }
    hr {
        margin-bottom: 30px;
    }
    .articles {
        margin: 0 auto;
        margin-top: 30px;
        width: 60%;
        font-size: 18px;
    }
    a {
        text-decoration: none;
        color: #216798;
        font-size: 18px;
        font-weight: bold;
    }
    .articleRow {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
    }
    .date {
        text-align: right;
    }
    @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 480px)
        and (-webkit-min-device-pixel-ratio: 2) {
            .date {
                display: none;
            }
            .articleRow {
                grid-template-columns: none;
            }
            .articleLink {
                margin: 15px 0px 15px 0px;
            }
    }
</style>