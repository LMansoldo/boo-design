
<script lang="ts">
	import { Modal } from '$lib/components/modal'
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
</script>

<Meta title="Modal" component={Modal} />

<Template let:args>
	<Modal {...args}>
		card
	</Modal>
</Template>

<Story
	name="Default"
	args={{
	id: "modal",
	isOpen: true
	}}
/>
