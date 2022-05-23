<script>
  import Text from './../components/Text.svelte';
  import Section from './../components/Section.svelte';
</script>

<Section class={$$props.class} title="Education">

  <div class="flex items-center justify-between items-baseline">
    <Text class="text-xl font-medium uppercase">
      School 21
    </Text>

    <Text>
      Nov 2018 – Now
    </Text>
  </div>

  <div class="mt-4 flex items-center">
    <Text class="text-xl font-medium uppercase">
      First Moscow State Medical University (FMSMU)
    </Text>
  </div>

  <div class="flex justify-between items-baseline mt-1">
    <Text>
      Spesialist, Higiene and epidemiology doctor
    </Text>
    <Text>
      Sep 2013 – May 2019
    </Text>
  </div>

</Section>