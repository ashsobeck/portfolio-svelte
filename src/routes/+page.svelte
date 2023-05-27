<script>
    import { typewriter } from '$lib/typewriter';
    import { onMount } from 'svelte';
    import Experience from './Experience.svelte';
	import { Group } from '@svelteuidev/core';
    
    let ready = false;
    onMount(() => {
        ready = true;
    });
</script>

<h1>Ashton Sobeck</h1>
{#if ready}
    <p transition:typewriter|local>Software Engineer</p>
{/if }
<Experience />
