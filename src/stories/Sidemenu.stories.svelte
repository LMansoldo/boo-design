<script lang="ts">
	import Button from '$lib/components/button/button.svelte'
	import { Sidemenu, SidemenuItem } from '$lib/components/sidemenu'
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
</script>

<Meta title="Sidemenu" component={Sidemenu} />

<Template let:args>
	<Sidemenu {...args}>
		<SidemenuItem
			label="label"
			on:click={() => console.log('a')}
		/>
		<SidemenuItem
			label="label"
			on:click={() => console.log('a')}
		/>
		<SidemenuItem
			label="label"
			on:click={() => console.log('a')}
		/>
		<SidemenuItem
			label="label"
			on:click={() => console.log('a')}
		/>
	</Sidemenu>
</Template>

<Story
	name="Default"
/>
