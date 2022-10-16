<script lang="ts">
	export let open: false
</script>

<div>
	{#if open}
		<ul class="flex flex-col shadow-sm shadow-additional-500 justify-center bg-secondary-50 min-h-[4.375rem] drop-shadow-sm p-3 rounded-md relative left-0 right-0 max-w-xs">
			<slot />
		</ul>
	{/if}
</div>

