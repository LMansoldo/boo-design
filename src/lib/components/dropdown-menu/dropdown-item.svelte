<script lang="ts">
    export let icon: string | undefined = undefined
    export let label: string | undefined = undefined
</script>

<li class="w-full flex items-center border-solid  px-2 border-[3px] border-transparent hover:animate-pulseborder cursor-pointer" on:click>
    <span class={icon} />
    <span class="px-2 py-1 text-sm">
        {label || ""}
    </span>
</li>