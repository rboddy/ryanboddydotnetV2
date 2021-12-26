<script>
    import client from "/src/routes/sanity.js";
    import { each } from "svelte/internal";

    let query = "*[ _type == 'post' ]{title}"

    async function getPosts() {
        let blogPosts = await client.fetch(query);
        return blogPosts;
    }
    const posts = getPosts();

</script>

{#await posts then postlist}
	{#each postlist as post}
        <p>{post.title}</p>
    {/each}
{/await}