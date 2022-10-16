<script lang="ts">
    export let icon: string | undefined = undefined
    export let label: string | undefined = undefined
</script>

<li on:click>
    <span class={icon}><slot />{label || ""}</span>
</li>