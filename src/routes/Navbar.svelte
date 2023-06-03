<script lang="ts">
	import { Text } from '@svelteuidev/core';
</script>

<nav class="flex items-center">
	<div class="w-full flex-grow lg:flex lg:items-center">
		<Text component="span" variant="gradient" weight="bold" gradient={{ from: 'dark', to: 'gray' }}>
			about
		</Text>
		<Text component="span" variant="gradient" weight="bold" gradient={{ from: 'dark', to: 'gray' }}>
			experience
		</Text>
		<Text component="span" variant="gradient" weight="bold" gradient={{ from: 'dark', to: 'gray' }}>
			resume
		</Text>
		<Text component="span" variant="gradient" weight="bold" gradient={{ from: 'dark', to: 'gray' }}>
			contact
		</Text>
	</div>
</nav>
