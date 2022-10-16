<script lang="ts">
	import { TopMenu } from '$lib/components/topmenu'
	import { Button } from '$lib/components/button'
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
</script>

<Meta title="TopMenu" component={TopMenu} />

<Template let:args>
	<TopMenu {...args}>
		<Button circle={true} small={true}>
			<span class="icon icon-star star text-lg " />
		</Button>
		<Button circle={true} small={true}>
			<span class="icon icon-star star text-lg " />
		</Button>
	</TopMenu>
</Template>

<Story
	name="Default"
	args={{
		imgSource:
			'https://seeklogo.com/images/L/logo-com-hr-logo-5636A4D2D5-seeklogo.com.png',
		activeRoute: 'overview',
	}}
/>
