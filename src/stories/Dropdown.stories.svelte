<script lang="ts">
	import Button from '$lib/components/button/button.svelte'
	import { DropdownMenu, DropdownItem } from '$lib/components/dropdown-menu'
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
</script>

<Meta title="DropdownMenu" component={DropdownMenu} />

<Template let:args>
	<DropdownMenu {...args}>
		<DropdownItem
			label="label"
			icon="icon icon-star star"
			on:click={() => console.log('a')}
		/>
		<DropdownItem
			label="label"
			icon="icon icon-star star"
			on:click={() => console.log('a')}
		/>
		<DropdownItem
			label="label"
			icon="icon icon-star star"
			on:click={() => console.log('a')}
		/>
		<DropdownItem
			label="label"
			icon="icon icon-star star"
			on:click={() => console.log('a')}
		/>
	</DropdownMenu>
</Template>

<Story
	name="Default"
	args={{
		open: true,
	}}
/>
