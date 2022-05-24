<script>
	import Text from './Text.svelte';
  import HDivider from './HDivider.svelte';
</script>

<section class={$$props.class}>
  {#if $$slots.title}
    <Text class="uppercase text-3xl font-semibold tracking-wide">
      <slot name="title"></slot>
    </Text>

    <HDivider class="mt-4 mb-6"/>
  {/if}

  <slot></slot>
</section>