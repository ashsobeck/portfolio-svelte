<script>
	import { typewriter } from '$lib/typewriter';
	import { onMount } from 'svelte';
	import Experience from './Experience.svelte';
	import { Center, Container, Title } from '@svelteuidev/core';

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

<Container>
	<Center>
		<Title order={1}>Ashton Sobeck</Title>
	</Center>
	{#if ready}
		<Center>
			<p transition:typewriter|local>Software Engineer</p>
		</Center>
	{/if}
	<Experience />
</Container>
