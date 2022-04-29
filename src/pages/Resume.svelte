<script>
  import Title from '../sections/Title.svelte';
  import Contacts from '../sections/Contacts.svelte';
  import About from '../sections/About.svelte';
  import Skills from '../sections/Skills.svelte';
  import Experience from '../sections/Experience.svelte';
  import Education from '../sections/Education.svelte';
  // import Languages from '../sections/Languages.svelte';
</script>

<main class="bg-snow min-w-screen min-h-screen py-8 px-4">
  <div class="max-w-ideal mx-auto">
    <Title/>
    <Contacts class="mt-8"/>
    <About class="mt-8"/>
    <Skills class="mt-8 print:break-after-page"/>
    <Experience class="mt-8"/>
    <Education class="mt-8"/>
    <!-- <Languages class="mb-8"/> -->
  </div>
</main>
