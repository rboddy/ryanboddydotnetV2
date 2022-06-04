<script>
    import Nav from '$lib/components/layout/nav.svelte';
</script>

<Nav />

<main>
    <slot />
</main>

<style>
    :global(body) {
		margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        background-color: #222;
	}
    :global(h1,h2) {
        margin-bottom: 0px;
        margin-top: 0px;
    }
</style>