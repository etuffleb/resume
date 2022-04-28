<script>  
  import Text from './../components/Text.svelte';
  import Section from './../components/Section.svelte';

  const skills = [
    'Typescript',
    'JavaScript',
    'React',
    'Angular',
    'HTML', 
    'CSS',
  ]

  const additionalSkills = [
    'Node.js',
    'Three.js',
    'Git',
    'Docker',
    'React Native',
    'Svelte',
    'rxJs',
    'Redux',
    'ngRx',
    'Recoil',
    'Storybook',
    'Webpack',
    'Rollup',
    'Vite',
    'Sass',
    'Less',
    'Tailwind css',
    'SVN',
    'SQL',
    'Java',
  ]

</script>

<!-- TODO: more readable -->

<Section class={$$props.class} title="Skills">
  <Text class="text-lg">
    Main:
  </Text>
  {#each skills as skill, i}
    <Text inline>{skill}{#if i !== skills.length - 1},{' '}{/if}</Text>
  {/each}

  <Text class="text-lg mt-2">
    Additional:
  </Text>
  {#each additionalSkills as skill, i}
    <Text inline>{skill}{#if i !== additionalSkills.length - 1},{' '}{/if}</Text>
  {/each}
</Section>