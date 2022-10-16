<script lang="ts">
	import { Switch } from '$lib/components/switch'
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
</script>

<Meta title="Switch" component={Switch} />

<Template let:args>
	<Switch {...args} />
</Template>

<Story
	name="Default"
	args={{
        name: "Switch",
        checked: false,
	}}
/>
