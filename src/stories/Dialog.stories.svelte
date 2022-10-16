<script lang="ts">
	import { Dialog } from '$lib/components/dialog'
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
</script>

<Meta title="Dialog" component={Dialog} />

<Template let:args>
	<Dialog {...args}>card</Dialog>
</Template>

<Story
	name="Default"
	args={{
		id: 'modal',
		isOpen: true,
		title: "Dialog",
		options: [
			{
				label: 'Ok',
				route: '/',
				icon: '',
				clickEvent: (e) => console.log(e),
			},
			{
				label: 'Cancel',
				route: '/',
				icon: '',
				clickEvent: (e) => console.log(e),
			},
		],
	}}
/>
