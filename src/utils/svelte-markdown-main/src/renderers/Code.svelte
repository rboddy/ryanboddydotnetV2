<script>
  export let lang
  export let text
</script>

<pre class={lang}><code>{text}</code></pre>

<style>
  pre {
    overflow-x: auto;
    background-color: #1D2030;
    color: white;
    padding: 10px;
    border-radius: 10px;
  }
</style>