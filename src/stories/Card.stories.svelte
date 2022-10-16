
<script lang="ts">
	import { Card } from '$lib/components/card'
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
</script>

<Meta title="Card" component={Card} />

<Template let:args>
	<Card {...args}>
		card
	</Card>
</Template>

<Story
	name="Default"
/>
