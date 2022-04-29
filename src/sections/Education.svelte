<script>  
  import Text from './../components/Text.svelte';
  import Section from './../components/Section.svelte';
</script>

<Section class={$$props.class} title="Education">
  
  <div class="flex items-center">
    <img src="/msu_logo.jpeg" alt="Lomonosov Moscow State University Logo" class="mr-2 w-6 h-6 min-w-6 min-h-6 rounded-full">

    <Text class="text-xl font-medium uppercase">
      Bachelor's, Applied Mathematics
    </Text>
  </div>

  <div class="flex justify-between items-baseline mt-1">
    <Text>
      Lomonosov Moscow State University (MSU), Moscow Russia
    </Text>
    <Text>
      Sep 2015 – May 2019
    </Text>
  </div>

</Section>