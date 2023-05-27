<script lang="ts">
    import { Badge, Card, Group, Text } from '@svelteuidev/core';
    import type { Job } from '$lib/types';
    export let job: Job;

    const CardWidth = {
        'width': '20em'
    }
    console.log("in job");
</script>

<Card shadow='sm' padding='lg' override={CardWidth}>
    <Card.Section first padding='lg'>
        <Group position='apart'>
            <Text>hallo</Text>
            <Badge>
                {job.date}
            </Badge>
        </Group>
    </Card.Section>
    <Group direction='column'>
        <Text size='lg'>
            {job.title}
        </Text>
        <Text>
            {job.name}
        </Text>
        <Badge>
            {job.tech}
        </Badge>
    </Group>
</Card>
