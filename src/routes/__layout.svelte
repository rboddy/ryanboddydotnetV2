<script>
    import Nav from '$lib/components/layout/nav.svelte';
    import { page } from '$app/stores';
</script>

{#if $page.path === '/'}
    <Nav --nav-bg='#0F292F' --nav-color='#00E9FF' --btn-color='#0F292F' --btn-bg='#00E9FF' />
{:else if $page.path === '/contact'}
    <Nav --nav-bg='#00E9FF' --nav-color='#0F292F' --btn-color="#00E9FF" --btn-bg='#0F292F' />
{:else}
    <Nav --nav-bg='#CB2D6F' --nav-color='#0F292F' --btn-color="#00E9FF" --btn-bg='#0F292F' />
{/if}

<main>
    <slot />
</main>

<style>
    :global(body) {
		margin: 0;
        font-family: 'Open Sans', sans-serif;
	}
</style>