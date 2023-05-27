<script>
	import { typewriter } from '$lib/typewriter';
	import { onMount } from 'svelte';
	import Experience from './Experience.svelte';
	import { Center, Container } from '@svelteuidev/core';

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

<Container>
	<Center>
		<h1>Ashton Sobeck</h1>
	</Center>
	{#if ready}
		<Center>
			<p transition:typewriter|local>Software Engineer</p>
		</Center>
	{/if}
	<Experience />
</Container>
