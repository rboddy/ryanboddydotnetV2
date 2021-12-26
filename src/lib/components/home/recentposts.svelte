<script>
    import client from "/src/routes/sanity.js";
    import { each } from "svelte/internal";

    let query = "*[_type == 'post']{title, publishedAt, slug, excerpt}"

    async function getPosts() {
        let blogPosts = await client.fetch(query);
        return blogPosts;
    }
    const posts = getPosts();

</script>

<h1>Recent Posts</h1>

<div class="postsGrid">
    {#await posts then postlist}
        {#each postlist as post}
            <div class="postCard">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div class="btnBar">
                    <p>{post.publishedAt}</p>
                    <div></div>
                    <a href={post.slug.current}>Read More <i class="fas fa-arrow-square-right"></i></a>
                </div>
            </div>
        {/each}
    {/await}
</div>

<style>
    h1 {
        text-align: center;
        margin-top: 50px;
        color: #1D2030;
    }
    .postsGrid {
        max-width: 900px;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 50px;
        display: grid;
        gap: 30px;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        place-items: center;
    }
    .postCard {
        background-color: white;
        color: #1D2030;
        border-radius: 10px;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 10px;
    }
    .btnBar {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
    }
    .btnBar > a{
        text-decoration: none;
        color: #216798;
        font-size: 18px;
        font-weight: bold;
    }
</style>
