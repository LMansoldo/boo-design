<script lang="ts">
	export let open: false
</script>

<div class="flex flex-row items-center shadow-sm shadow-additional-500 justify-center bg-secondary-50 min-h-[4.375rem] drop-shadow-sm px-5 relative left-0 right-0">
	{#if open}
		<ul>
			<slot />
		</ul>
	{/if}
</div>
