<script>
  import Text from '../components/Text.svelte';
</script>

<section class={`w-full flex flex-col lg:flex-row lg:justify-around ${$$props.class ?? ''}`}>

  <Text class="text-sm text-center font-semibold">
    Tbilisi, Georgia
  </Text>

  <div class="basis-px shrink-0 self-stretch my-2 lg:my-0 mx-0 lg:mx-2 bg-onyx"></div>

  <Text class="text-sm text-center font-semibold">
    <a href="mailto:dmitry.mihaylov.main@gmail.com">dmitry.mihaylov.main@gmail.com</a>
  </Text>

  <div class="basis-px shrink-0 self-stretch my-2 lg:my-0 mx-0 lg:mx-2 bg-onyx"></div>

  <Text class="text-sm text-center font-semibold">
    <a href="https://www.linkedin.com/in/dmitry-mikhaylov-79a01a135/" target="_blank">LinkedIn</a>
  </Text>

  <div class="basis-px shrink-0 self-stretch my-2 lg:my-0 mx-0 lg:mx-2 bg-onyx"></div>

  <Text class="text-sm text-center font-semibold">
    <a href="tel:+995-557-26-97-41">+995 557 26 97 41</a>
  </Text>
</section>
