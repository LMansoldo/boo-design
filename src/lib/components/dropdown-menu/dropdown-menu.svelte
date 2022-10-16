<script lang="ts">
	export let open: false
</script>

<div>
	{#if open}
		<ul class="flex flex-col justify-center border-[3px] border-solid border-secondary-200 bg-secondary-50 min-h-[4.375rem] p-3 rounded-md relative left-0 right-0 max-w-xs">
			<slot />
		</ul>
	{/if}
</div>

