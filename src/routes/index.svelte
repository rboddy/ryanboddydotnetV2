<script>
    import Shape from '$lib/components/layout/shape.svelte';
    import Intro from '$lib/components/home/intro.svelte';
    import Bio from '$lib/components/home/bio.svelte';
    import Recentposts from '$lib/components/home/recentposts.svelte';
</script>

<Shape --color="#757083" />

<Intro />

<Bio />

<Recentposts />

<footer>
    <p>Copyright &copy; Ryan Boddy 2021 | Illustrations done by <a href="https://twitter.com/JoyceHamilton44">JoyceHamilton44</a></p>
</footer>

<style>
    footer {
        width: 100%;
        text-align: center;
    }
</style>
