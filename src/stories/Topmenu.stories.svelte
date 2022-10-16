<script lang="ts">
	import { TopMenu } from '$lib/components/topmenu'
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
</script>

<Meta title="TopMenu" component={TopMenu} />

<Template let:args>
	<TopMenu {...args} />
</Template>

<Story
	name="Default"
	args={{
		imgSource: 'https://seeklogo.com/images/L/logo-com-hr-logo-5636A4D2D5-seeklogo.com.png',
		navigationOptions: [
			{
				label: 'Overview',
				route: 'overview',
			},
			{
				label: 'Activity',
				route: 'activity',
			},
			{
				label: 'Support',
				route: 'support',
			},
			{
				label: 'Settings',
				route: 'settings',
			},
		],
		userControlOptions: [
			{
				label: 'Docs',
				route: 'docs',
			},
			{
				label: 'Login',
				route: 'login',
			},
		],
		activeRoute: 'overview',
	}}
/>
