<script lang="ts">
	import type { Job } from '$lib/types';
	import { Center, Group } from '@svelteuidev/core';
	import JobCard from './JobCard.svelte';
	const jobs: Job[] = [
		{
			name: 'Cognito Forms',
			title: 'Software Engineer',
			desc: '- Assisted in implementing Cosmos DB into our product allowing for a new way to query our entry data \
                   - Engage in weekly demos with product management with our progress',
			tech: 'C#, Vue, Azure',
			date: '2023 - Current'
		},
		{
			name: 'Workiva',
			title: 'Software Engineer Intern',
			desc: '',
			tech: 'Dart, Java, React',
			date: '2022'
		},
		{
			name: 'Clemson University',
			title: 'Cloud Engineer Intern',
			desc: '',
			tech: 'AWS, Python, YAML, Lambda, CloudFormation',
			date: '2020 - 2021'
		}
	];
</script>

<Center>
	<h1>Experience</h1>
</Center>
<Group position="center">
	{#each jobs as job}
		<JobCard {job} />
	{/each}
</Group>
