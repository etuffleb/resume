<script>
  import Title from '../sections/Title.svelte';
  import Contacts from '../sections/Contacts.svelte';
  import About from '../sections/About.svelte';
  import Skills from '../sections/Skills.svelte';
  import Experience from '../sections/Experience.svelte';
  import Education from '../sections/Education.svelte';
  import Languages from '../sections/Languages.svelte';
</script>

<main class="bg-snow min-w-screen min-h-screen py-8 px-4">
  <div class="max-w-ideal mx-auto">
    <Title/>
    <Contacts class="mt-6"/>
    <About class="mt-6"/>
    <Skills class="mt-6"/>
    <Experience class="mt-6"/>
    <Education class="mt-6"/>
    <Languages class="mt-6"/>
  </div>
</main>
