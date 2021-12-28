<script>
    import client from "/src/routes/sanity.js";
    import { page } from '$app/stores'
import Articles from "$lib/components/blog/articles.svelte";

    let query = `*[ slug.current == '${ $page.params.slug }']{title, publishedAt, slug, body, 'images': body[].asset->url, "categories": categories[]->title, "imageUrl": mainImage.asset->url }`

    async function getPost() {
        let blogPost = await client.fetch(query);
        console.log(blogPost[0]);
        return blogPost[0];
    }
    const post = getPost();

    function formatDate(date) {
        return new Date(date).toLocaleDateString()
    }
</script>

{#await post then article}
    <div class="blogPost">
        <h2>{article.title}</h2>
        <h3>Published: {formatDate(article.publishedAt)}</h3>
        <div class="categories">
            {#each article.categories as category}
                <button>{category}</button>
            {/each}
        </div>
        <div class="post">
            <img class="headerImage" src={article.imageUrl} alt="Main blog" />
            {#each article.body as paragraph, i}
                {#if paragraph.children != undefined}
                    <p>{paragraph.children[0].text}</p>
                {:else}
                    <img src={article.images[i]} alt='Blog'/>
                {/if}
            {/each}
        </div>
    </div>
{/await}

<style>
    .blogPost {
        width: 60%;
        margin: 0 auto;
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
    .post > p {
        text-align: left;
    }
    .post > img {
        max-width: 100%;
        font-size: 16px;
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