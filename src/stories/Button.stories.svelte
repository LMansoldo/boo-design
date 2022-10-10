<script lang="ts">
	import { Button } from '$lib/components/button'
	import { BUTTON_COLORS, BUTTON_VARIANTS } from '$lib/types/button'
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'

</script>

<Meta
	title="Button"
	component={Button}
	argTypes={{
		'on:click': { action: 'on:click' }
	}}
/>

<Template let:args>
	<Button
		{...args}
		on:click={args['on:click']}
		
	>
		Button
	</Button>
</Template>

<Story
	name="Default"
	args={{
		variant: BUTTON_VARIANTS.TEXT,
		colors: BUTTON_COLORS.PRIMARY
	}}
/>

<Story
	name="Small"
	args={{
		variant: BUTTON_VARIANTS.TEXT,
		colors: BUTTON_COLORS.PRIMARY,
		small: true
	}}
/>

<Story
	name="Large"
	args={{
		variant: BUTTON_VARIANTS.TEXT,
		colors: BUTTON_COLORS.PRIMARY,
		large: true
	}}
/>

<Story
	name="Full"
	args={{
		variant: BUTTON_VARIANTS.TEXT,
		colors: BUTTON_COLORS.PRIMARY,
		full: true
	}}
/>

<Story
	name="Circle"
	args={{
		variant: BUTTON_VARIANTS.TEXT,
		colors: BUTTON_COLORS.PRIMARY,
		circle: true
	}}
/>
