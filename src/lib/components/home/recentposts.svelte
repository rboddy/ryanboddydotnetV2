<script>
import { onMount } from "svelte";

    import client from "/src/routes/sanity.js";

    onMount(() => {
        let query = "*[_type == 'post']";
        client.fetch(query).then((posts) => {
            console.log(posts)
        })
    })
</script>

<h1>yeah</h1>