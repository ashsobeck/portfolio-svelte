<script lang="ts">
	import { Badge, Card, Center, Group, Text } from '@svelteuidev/core';
	import type { Job } from '$lib/types';
	export let job: Job;

	const CardWidth = {
		width: '16em'
	};
	console.log('in job');
</script>

<Card shadow="sm" padding="lg" override={CardWidth}>
	<Card.Section first padding="md">
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
	<Center>
		<Badge title={job.tech}>
			{job.tech}
		</Badge>
	</Center>
</Card>
