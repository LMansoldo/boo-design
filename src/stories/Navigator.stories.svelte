<script lang="ts">
	import { Navigation } from '$lib/components/navigation'
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
</script>

<Meta title="Navigation" component={Navigation} />

<Template let:args>
	<Navigation {...args} />
</Template>

<Story
	name="Navigation"
	args={{
		options: [
			{
				path: '/',
				title: 'home',
				icon: 'icon icon-star star',
				redirect: (e) => console.log(e)
			},
			{
				path: '/profile',
				title: 'profile',
				icon: 'icon icon-star star',
				redirect: (e) => console.log(e)
			},
		],
	}}
/>
