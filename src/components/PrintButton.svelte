<script>
	import PrintIcon from './../icons/PrintIcon.svelte';
  import Text from './Text.svelte';
</script>

<button class={`print:hidden hover:bg-opacity-5 hover:bg-onyx px-2 py-1 ${$$props.class}`} on:click={() => window.print()}>
  <Text inline class="flex items-center">
    <PrintIcon class="mr-2"/>
    Get Hard Copy
  </Text>
</button>