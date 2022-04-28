<script>
  import Text from '../components/Text.svelte';
</script>

<section class={`w-full flex flex-wrap flex-col lg:flex-row justify-around items-center ${$$props.class ?? ''}`}>

  <div class="border-solid border-onyx border-t w-full lg:basis-full lg:self-stretch mb-6"></div>

  <Text class="text-sm font-semibold">
    Tbilisi, Georgia
  </Text>

  <div class="border-solid border-onyx border-t lg:border-t-0 border-l-0 lg:border-l w-24 lg:w-0 lg:self-stretch my-3 lg:my-0 mx-0 lg:mx-2"></div>

  <Text class="text-sm font-semibold">
    <a href="mailto:dmitry.mihaylov.main@gmail.com">dmitry.mihaylov.main@gmail.com</a>
  </Text>

  <div class="border-solid border-onyx border-t lg:border-t-0 border-l-0 lg:border-l w-24 lg:w-0 lg:self-stretch my-3 lg:my-0 mx-0 lg:mx-2"></div>

  <Text class="text-sm font-semibold">
    <a href="https://www.linkedin.com/in/dmitry-mikhaylov-79a01a135/" target="_blank">LinkedIn</a>
  </Text>

  <div class="border-solid border-onyx border-t lg:border-t-0 border-l-0 lg:border-l w-24 lg:w-0 lg:self-stretch my-3 lg:my-0 mx-0 lg:mx-2"></div>

  <Text class="text-sm font-semibold">
    <a href="tel:+995-557-26-97-41">+995 557 26 97 41</a>
  </Text>
</section>
