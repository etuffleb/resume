<script>
  import Text from './../components/Text.svelte';
  import Section from './../components/Section.svelte';

  const skills = [
    { title: 'Primary languages', items: ['Typescript', 'JavaScript'] },
    { title: 'Frameworks', items: ['React', 'Angular', 'React Native', 'Svelte'] },
    { title: 'Layout', items: ['HTML'] },
    { title: 'Styling', items: ['CSS', 'SCSS', 'Less', 'BEM', 'Tailwind CSS'] },
    { title: 'Web standards', items: ['WCAG'] },
    { title: 'Component libraries', items: ['Material UI', 'Ant design', 'Storybook'] },
    { title: 'State management', items: ['Redux', 'ngRx', 'Recoil', 'Jotai', 'rxJs'] },
    { title: '3D Representation', items: ['WebGL', 'Three.js', 'React Three Fiber'] },
    { title: 'Bundling', items: ['Webpack', 'Rollup', 'Vite'] },
    { title: 'Version control', items: ['Git', 'SVN'] },
    { title: 'Back end', items: ['Node.js', 'Express', 'SQL', 'Java Quarkus'] },
    { title: 'Content management systems', items: ['Strapi', 'Liferay'] },
    { title: 'Integration and delivery', items: ['Docker', 'Github and Gitlab pipelines'] },
  ]
</script>

<Section class={$$props.class} title="Skills">

  <ul class="list-disc pl-4 columns-1 md:columns-2 print:columns-2">
    {#each skills as skill}
      <li class="break-inside-avoid">
        <Text>
          {skill.title}
        </Text>
        <Text class="font-medium">
          /{' '}{#each skill.items as item}{' '}{item}{' '}/{/each}
        </Text>
      </li>
    {/each}
  </ul>
</Section>