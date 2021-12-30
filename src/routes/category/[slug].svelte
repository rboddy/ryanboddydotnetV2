<script>
    import client from "/src/routes/sanity.js";
    import { page } from '$app/stores'

    let query = `*[ _type == 'category' && title == '${ $page.params.slug }']{
  _id, title,
  "posts": *[ _type =='post' && references(^._id) ]{title, 'slug': slug.current, publishedAt}}`

    async function getPosts() {
        let blogPosts = await client.fetch(query);
        console.log(blogPosts[0].posts);
        return blogPosts[0].posts;
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
                <a class="articleLink" href={`/${post.slug}`} >{post.title}</a> 
                <div></div>
                <p class="date">{formatDate(post.publishedAt)}</p>
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
    .articleList {
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
            .articleList {
                grid-template-columns: none;
            }
            .articleLink {
                margin: 15px 0px 15px 0px;
            }
    }
</style>