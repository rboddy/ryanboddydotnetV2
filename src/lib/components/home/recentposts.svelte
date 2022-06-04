<script>
    import client from "/src/routes/sanity.js";

    let query = "*[_type == 'post'] | order(publishedAt desc) {title, publishedAt, slug, excerpt}[0...3]"

    async function getPosts() {
        let blogPosts = await client.fetch(query);
        return blogPosts;
    }
    const posts = getPosts();

    function formatDate(date) {
        return new Date(date).toLocaleDateString()
    }

</script>

<h2>Recent Posts</h2>

<div class="postsGrid">
    {#await posts then postlist}
        {#each postlist as post}
            <div class="postCard">
                <div class="cardContent">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div class="btnBar">
                        <p>{formatDate(post.publishedAt)}</p>
                        <div></div>
                        <a href={post.slug.current}>Read More <i class="fas fa-arrow-square-right"></i></a>
                    </div>
                </div>
            </div>
        {/each}
        <div class="readMore">
            <a class="blogLink" href="/blog"><i class="fas fa-arrow-circle-right fa-5x"></i>All Posts</a>
        </div>
    {/await}
</div>

<style>
    h2 {
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
        /* gap: 30px; */
        row-gap: 30px;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        place-items: center;
    }
    .postCard {
        height: 250px;
        width: 90%;
        color: #1D2030;
        background: linear-gradient(to right, red, blue);
        padding: 10px;
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        animation: rgb 5s infinite;
    }
    .cardContent {
        background-color: #222;
        color: white;
        padding: 5px;
        box-sizing: border-box;
        height: 250px;
    }
    .btnBar {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
    }
    .cardContent a{
        text-decoration: none;
        color: red;
        font-size: 18px;
        font-weight: bold;
    }
    .readMore a {
        color: blue;
        text-decoration: none;
        font-weight: bold;
        text-align: center;
        display: grid;
        place-items: center;
        font-size: 20px;
        line-height: 1.5em;
    }
    @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 480px)
        and (-webkit-min-device-pixel-ratio: 2) {
            .postsGrid {
                grid-template-columns: none;
                width: 90%;
            }
            /* .postCard {
                height: auto;
            } */
    }
</style>
