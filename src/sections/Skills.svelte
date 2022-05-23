<script>
  import Text from './../components/Text.svelte';
  import Section from './../components/Section.svelte';

  const skills = [
    { title: 'Primary languages', items: ['C#', 'C++', 'Python'] },
    { title: 'Frameworks', items: ['Pytorch', 'CNTK'] },
    { title: 'Libraries', items: ['OpenCV', 'NumPy'] },
    { title: 'Version control', items: ['Git', 'Mercurial'] },
  ]
</script>

<Section class={$$props.class} title="Skills">
  <ul class="list-disc pl-4 columns-1 md:columns-2 print:columns-2">
    {#each skills as skill, index}
      <li class={`break-inside-avoid ${index !== 0 ? 'mt-2' : ''}`}>
        <Text>
          {skill.title}
        </Text>
        <Text class="font-medium">
          {#each skill.items as item, i}
            {item}{#if i !== skill.items.length - 1},{' '}{/if}
          {/each}
        </Text>
      </li>
    {/each}
  </ul>
</Section>