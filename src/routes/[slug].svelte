<script context="module">
    export async function load({ url }){
        
        console.log(url.pathname)

        const query = `*[ slug.current == '${ url.pathname.split('/').slice(-1)[0] }']{title, excerpt, publishedAt, slug, body, "categories": categories[]->title, "imageUrl": mainImage.asset->url, YouTube }`

        let blogPost = await client.fetch(query);
        // console.log(blogPost[0]);
        return {
            props: {
                post: blogPost[0]
            }
        }
    }
        
</script>

<script>
    import client from "/src/routes/sanity.js";
    import SvelteMarkdown from '../utils/svelte-markdown-main';
    import { goto } from '$app/navigation';
    import Signature from "$lib/components/blog/signature.svelte";

    function formatDate(date) {
        return new Date(date).toLocaleDateString()
    }

    function redirectCat(postCategory) {
        goto(`/category/${postCategory}`);
    }

    export let post
</script>

<svelte:head>
	<meta name="description" content={post.excerpt} />
	<meta property="og:description" content={post.excerpt} />
	<meta name="twitter:description" content={post.excerpt} />
    <meta property="og:title" content="{post.title}" />
	<meta name="twitter:title" content="{post.title}" />
	<meta property="og:image" content="{post.imageUrl}" />
	<meta name="twitter:image" content="{post.imageUrl}" />
</svelte:head>

<div class="blogPost">
    <h1>{post.title}</h1>
    <h3>Published: {formatDate(post.publishedAt)}</h3>
    <div class="categories">
        {#each post.categories as category}
            <button on:click={() => redirectCat(category)} class="catBtn">{category}</button>
        {/each}
    </div>
    {#if post.imageUrl}
        <img class="headerImage" src={post.imageUrl} alt="Main blog" />
    {/if}
    <div class="post">
        <SvelteMarkdown source={post.body} />
    </div>
    {#if post.YouTube}
    <iframe width="560" height="315" src={post.YouTube.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    {/if}
</div>

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
        color: black;
    }
    .catBtn:hover {
        cursor: pointer;
    }
    h1 {
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