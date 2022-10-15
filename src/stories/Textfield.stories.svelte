<script lang="ts">
	import { Textfield } from '$lib/components/textfield'
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'

</script>

<Meta
	title="Textfield"
	component={Textfield}
/>

<Template let:args>
	<Textfield
		{...args}
    />
</Template>

<Story
	name="Default"
	args={{
		id: "default",
        label: "default",
		name: "default",
        type: "text",
        placeholder: "default"
	}}
/>

<Story
	name="Default w/ Error"
	args={{
		id: "default",
        label: "default",
		name: "default",
        type: "text",
        placeholder: "default",
        error: "Error message"
	}}
/>

<Story
	name="Default w/ Icon"
	args={{
		id: "default",
        label: "default",
		name: "default",
        type: "text",
        placeholder: "default",
        icon: "icon icon-fine-search fine-search"
	}}
/>
