<script>
	import Section from '../components/Section.svelte';
  import Text from '../components/Text.svelte';
</script>

<Section class={$$props.class} title="Languages">
  <div class="columns-1 sm:columns-2 print:columns-2">
    <div class="flex items-baseline">
      <Text inline class="text-lg font-medium">
        English
      </Text>
      <Text inline class="text-lg mx-1">
        -
      </Text>
      <Text inline class="text-lg">
        B2 Upper Intermediate
      </Text>
    </div>
    <div class="flex items-baseline">
      <Text inline class="text-lg font-medium">
        Russian
      </Text>
      <Text inline class="text-lg mx-1">
        -
      </Text>
      <Text inline class="text-lg">
        Native
      </Text>
    </div>
  </div>
</Section>
