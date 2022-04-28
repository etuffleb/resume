<script>
  export let inline = false;
</script>

<svelte:element this={inline ? 'span' : 'div'} class={`text-onyx ${$$props.class ?? ''}`}>
  <slot></slot>
</svelte:element>