<script>
    import { typewriter } from '$lib/typewriter';
    import { onMount } from 'svelte';

    let ready = false;
    onMount(() => {
        ready = true;
    });

</script>

<h1>Ashton Sobeck</h1>
{#if ready}
    <p transition:typewriter|local>Software Engineer</p>
{/if }
