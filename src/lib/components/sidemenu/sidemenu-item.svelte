<script lang="ts">
	export let label: string | undefined = undefined
</script>

<li
	class="w-full flex items-center border-solid px-2 border-[3px] border-transparent hover:animate-pulseborder cursor-pointer"
	on:click
>
	<div class="px-2 py-4 relative">
		<span class="absolute -left-1 border-solid border-l-[2px]" />
		<span class=" text-base">
			{label || ''}
		</span>
	</div>
</li>
