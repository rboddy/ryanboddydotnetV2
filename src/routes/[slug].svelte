<script>
    import client from "/src/routes/sanity.js";
    import { page } from '$app/stores'
    import SvelteMarkdown from 'svelte-markdown';
    import { goto } from '$app/navigation';
    import Signature from "$lib/components/blog/signature.svelte";

    let query = `*[ slug.current == '${ $page.params.slug }']{title, publishedAt, slug, body, "categories": categories[]->title, "imageUrl": mainImage.asset->url }`

    async function getPost() {
        let blogPost = await client.fetch(query);
        // console.log(blogPost[0]);
        return blogPost[0];
    }
    const post = getPost();

    function formatDate(date) {
        return new Date(date).toLocaleDateString()
    }

    function redirectCat(postCategory) {
        goto(`/category/${postCategory}`);
    }
</script>

{#await post then article}
    <div class="blogPost">
        <h2>{article.title}</h2>
        <h3>Published: {formatDate(article.publishedAt)}</h3>
        <div class="categories">
            {#each article.categories as category}
                <button on:click={() => redirectCat(category)} class="catBtn">{category}</button>
            {/each}
        </div>
        <img class="headerImage" src={article.imageUrl} alt="Main blog" />
        <div class="post">
            <SvelteMarkdown source={article.body} />
        </div>
    </div>
{/await}
<Signature />

<style>
    .blogPost {
        width: 50%;
        margin: 0 auto;
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
    h2 {
        font-size: 5vh;
        margin-top: 30px;
    }
    * {
        text-align: center;
    }
    .categories {
        margin-bottom: 30px;
    }
    img {
        max-width: 100%;
    }
    .post {
        text-align: left;
        font-size: 18px;
    }
    img {
        width: 100%;
    }
    @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 480px)
        and (-webkit-min-device-pixel-ratio: 2) {
            .blogPost {
                width: 80%;
            }
    }
</style>