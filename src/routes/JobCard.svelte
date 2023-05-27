<script lang="ts">
	import { Badge, Card, Group, Text } from '@svelteuidev/core';
	import type { Job } from '$lib/types';
	export let job: Job;

	const CardWidth = {
		width: '16em'
	};
	console.log('in job');
</script>

<Card shadow="xl" padding="lg" override={CardWidth}>
	<Card.Section first padding="lg">
		<Group position="apart" mr="sm" ml="sm">
			<Text>hallo</Text>
			<Badge>
				{job.date}
			</Badge>
		</Group>
	</Card.Section>
	<Group direction="column">
		<Text size="lg">
			{job.title}
		</Text>
		<Text>
			{job.name}
		</Text>
	</Group>
	<Badge>
		{job.tech}
	</Badge>
</Card>
