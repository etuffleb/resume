<script>
	import LinkedInIcon from '../icons/LinkedInIcon.svelte';
	import PhoneIcon from '../icons/PhoneIcon.svelte';
	import EmailIcon from '../icons/EmailIcon.svelte';
	import LocationIcon from '../icons/LocationIcon.svelte';
	import LinkIcon from '../icons/LinkIcon.svelte';
  import Text from '../components/Text.svelte';
</script>

<section class={`w-full flex flex-wrap flex-col sm:flex-row print:flex-row justify-around items-center ${$$props.class ?? ''}`}>

  <div class="border-solid border-onyx border-t
    w-full sm:basis-full print:basis-full
    sm:self-stretch print:self-stretch
    mb-6"
  ></div>

  <Text class="text-sm font-semibold flex items-center">
    <LocationIcon class="mr-1"/>
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
    <a href="mailto:dmitry.mihaylov.main@gmail.com"  class="flex items-center">
      <EmailIcon class="mr-1"/>
      dmitry.mihaylov.main@gmail.com
    </a>
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
    <a href="https://www.linkedin.com/in/dmitry-mikhaylov-79a01a135/" target="_blank" class="flex items-center">
      <span class="mr-1">LinkedIn</span>
      <LinkIcon/>
    </a>
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
    <a href="tel:+995-557-26-97-41" class="flex items-center">
      <PhoneIcon class="mr-1"/>
      +995 557 26 97 41
    </a>
  </Text>
</section>
