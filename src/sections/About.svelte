<script>
	import Section from '../components/Section.svelte';
  import Text from '../components/Text.svelte';
  import I18n from '../components/I18n.svelte';
</script>

<Section class={$$props.class}>
  <I18n>
    <Text class="text-lg">
      Professional and attentive developer!
    </Text>
  </I18n>
  <I18n lang="ru">
    <Text class="text-lg">
      Разработчица более чем с 2 годами стажа. Всегда мотивирована и стремлюсь к развитию.
    </Text>
  </I18n>
</Section>
