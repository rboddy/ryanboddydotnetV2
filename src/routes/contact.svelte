<script>
    import Header from '$lib/components/layout/header.svelte';
    import SocialButtons from '$lib/components/contact/socialbuttons.svelte';
    import ContactForm from '$lib/components/contact/contactform.svelte';
</script>

<Header text={'Contact'} />

<SocialButtons />

<h2 class="pageBreak">Or...</h2>

<ContactForm />

<style>
    .pageBreak {
        text-align: center;
        margin-top: 30px;
    }
</style>
