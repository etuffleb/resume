<script>
	import PhoneIcon from '../icons/PhoneIcon.svelte';
	import EmailIcon from '../icons/EmailIcon.svelte';
	import LocationIcon from '../icons/LocationIcon.svelte';
	import LinkIcon from '../icons/LinkIcon.svelte';
  import Text from '../components/Text.svelte';
</script>

<section class={`w-full flex flex-wrap flex-col md:flex-row print:flex-row justify-around items-center ${$$props.class ?? ''}`}>

  <div class="border-solid border-onyx border-t
    w-full md:basis-full print:basis-full
    md:self-stretch print:self-stretch
    mb-6"
  ></div>

  <Text class="text-sm font-semibold">
    <a href="https://www.google.com/maps/place/Moscow,+Russia" target="_blank" class="flex items-center underline-offset-2 hover:underline">
      <LocationIcon class="mr-1"/>
      Moscow, Russia
    </a>
  </Text>

  <div class="border-solid border-onyx
    border-t md:border-t-0 print:border-t-0
    border-l-0 md:border-l print:border-l
    w-24 md:w-0 print:w-0
    md:self-stretch print:self-stretch
    my-3 md:my-0 print:my-0 mx-0
    md:mx-2 print:mx-2"
  ></div>

  <Text class="text-sm font-semibold">
    <a href="mailto:katya.mihh@gmail.com"  class="flex items-center underline-offset-2 hover:underline">
      <EmailIcon class="mr-1"/>
      katya.mihh@gmail.com
    </a>
  </Text>

  <div class="border-solid border-onyx
    border-t md:border-t-0 print:border-t-0
    border-l-0 md:border-l print:border-l
    w-24 md:w-0 print:w-0
    md:self-stretch print:self-stretch
    my-3 md:my-0 print:my-0 mx-0
    md:mx-2 print:mx-2"
  ></div>

  <Text class="text-sm font-semibold">
    <a href="#" target="_blank" class="flex items-center underline-offset-2 hover:underline">
      <span class="mr-1">LinkedIn</span>
      <LinkIcon/>
    </a>
  </Text>

  <div class="border-solid border-onyx
    border-t md:border-t-0 print:border-t-0
    border-l-0 md:border-l print:border-l
    w-24 md:w-0 print:w-0
    md:self-stretch print:self-stretch
    my-3 md:my-0 print:my-0 mx-0
    md:mx-2 print:mx-2"
  ></div>

  <Text class="text-sm font-semibold">
    <a href="tel:+79998001342" class="flex items-center underline-offset-2 hover:underline">
      <PhoneIcon class="mr-1"/>
      +7 999 800 13 42
    </a>
  </Text>
</section>
