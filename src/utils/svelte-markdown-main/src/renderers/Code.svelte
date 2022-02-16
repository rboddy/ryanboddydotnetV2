<script>
  import { HighlightSvelte } from "svelte-highlight";
  import vs2015 from "svelte-highlight/src/styles/vs2015";

  export let text
  $: code = text
</script>

<svelte:head>
  {@html vs2015}
</svelte:head>

<HighlightSvelte {code} />