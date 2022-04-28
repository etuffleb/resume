<script>
	import Text from './Text.svelte';
  import HDivider from './HDivider.svelte';

  export let title = null;
</script>

<section class={$$props.class}>
  {#if title}
    <Text class="uppercase text-3xl font-semibold">
      {title}
    </Text>

    <HDivider class="mt-4 mb-6"/>
  {/if}

  <slot></slot>
</section>