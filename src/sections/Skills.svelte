<script>
  import I18n from '../components/I18n.svelte';
  import Section from '../components/Section.svelte';

  const skills = [
    { title: 'Primary languages', titleRu: 'Основные языки', items: ['C#', 'C++', 'Python'] },
    { title: 'Frameworks', titleRu: 'Фреймворки', items: ['Pytorch', 'CNTK'] },
    { title: 'Libraries', titleRu: 'Библиотеки', items: ['OpenCV', 'NumPy'] },
    { title: 'Version control', titleRu: 'Системы контроля версий', items: ['Git', 'Mercurial'] },
  ]
</script>

<Section class={$$props.class}>
  <div slot="title">
    <I18n>
      Skills
    </I18n>
    <I18n lang="ru">
      Навыки
    </I18n>
  </div>

  <ul class="list-disc pl-4 columns-1 md:columns-2 print:columns-2">
    {#each skills as skill, index}
      <li class={`break-inside-avoid ${index !== 0 ? 'mt-2' : ''}`}>
        <div>
          <I18n>
            {skill.title}
          </I18n>
          <I18n lang="ru">
            {skill.titleRu}
          </I18n>
        </div>
        <div class="font-medium">
          {#each skill.items as item, i}
            {item}{#if i !== skill.items.length - 1},{' '}{/if}
          {/each}
        </div>
      </li>
    {/each}
  </ul>
</Section>