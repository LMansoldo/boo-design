<script lang="ts">
	import { Modal } from '$lib/components/modal'
	import type { NAVIGATION_OPTIONS } from '$lib/types/navigation'

	export let id: string | undefined = undefined
	export let isOpen = false
	export let close: boolean | undefined = undefined
	export let open: boolean | undefined = undefined
	export let options: NAVIGATION_OPTIONS[]
    export let title: string = ""
</script>

<Modal {id} {isOpen} {close} {open} dialog={true} >
    <div class="h-12 flex items-center px-4 border-b-[1px] border-solid border-secondary-300 ">
      {title}
    </div>
    <div class="p-4">
        <slot />
    </div>
    <div class="h-14 flex flex-row border-t-[1px] border-solid border-secondary-300 gap-[1px] bg-secondary-300">
        {#each options as option}
            <span class="w-full flex items-center justify-center bg-secondary-50 border-[3px] border-solid border-transparent hover:animate-pulseborder cursor-pointer" on:click={() => option.clickEvent(option)}>
                {option.label}
            </span>
        {/each}
    </div>
</Modal>
