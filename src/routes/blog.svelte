<script>
    import Header from '$lib/components/layout/header.svelte';
    import Filter from '$lib/components/blog/filter.svelte';
    import Search from '$lib/components/blog/search.svelte';
    import Articles from '$lib/components/blog/articles.svelte';
</script>

<Header text={"Blog"} />

<Filter />

<Search />

<Articles />
