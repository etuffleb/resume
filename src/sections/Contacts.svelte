<script>
  import Text from '../components/Text.svelte';
</script>

<section class={`w-full flex flex-wrap flex-col sm:flex-row print:flex-row justify-around items-center ${$$props.class ?? ''}`}>

  <div class="border-solid border-onyx border-t 
    w-full sm:basis-full print:basis-full 
    sm:self-stretch print:self-stretch 
    mb-6"
  ></div>

  <Text class="text-sm font-semibold">
    Tbilisi, Georgia
  </Text>

  <div class="border-solid border-onyx 
    border-t sm:border-t-0 print:border-t-0 
    border-l-0 sm:border-l print:border-l 
    w-24 sm:w-0 print:w-0 
    sm:self-stretch print:self-stretch 
    my-3 sm:my-0 print:my-0 mx-0 
    sm:mx-2 print:mx-2"
  ></div>

  <Text class="text-sm font-semibold">
    <a href="mailto:dmitry.mihaylov.main@gmail.com">dmitry.mihaylov.main@gmail.com</a>
  </Text>

  <div class="border-solid border-onyx 
    border-t sm:border-t-0 print:border-t-0 
    border-l-0 sm:border-l print:border-l 
    w-24 sm:w-0 print:w-0 
    sm:self-stretch print:self-stretch 
    my-3 sm:my-0 print:my-0 mx-0 
    sm:mx-2 print:mx-2"
  ></div>



  <Text class="text-sm font-semibold">
    <a href="https://www.linkedin.com/in/dmitry-mikhaylov-79a01a135/" target="_blank">LinkedIn</a>
  </Text>

  <div class="border-solid border-onyx 
    border-t sm:border-t-0 print:border-t-0 
    border-l-0 sm:border-l print:border-l 
    w-24 sm:w-0 print:w-0 
    sm:self-stretch print:self-stretch 
    my-3 sm:my-0 print:my-0 mx-0 
    sm:mx-2 print:mx-2"
  ></div>

  <Text class="text-sm font-semibold">
    <a href="tel:+995-557-26-97-41">+995 557 26 97 41</a>
  </Text>
</section>
