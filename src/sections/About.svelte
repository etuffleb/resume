<script>
	import Section from '../components/Section.svelte';
  import Text from '../components/Text.svelte';
  import I18n from '../components/I18n.svelte';
</script>

<Section class={$$props.class}>
  <I18n>
    <Text class="text-lg">
      For the last 2 and a half years, I have been working on object recognition in images.
      I have experience in the entire cycle of producing machine learning models and computer vision algorithms.
      I know how to work in a team.
      I am learning math for ML, English, and Spanish.
      Always motivated and want to self-improve. 
   </Text>
  </I18n>
  <I18n lang="ru">
    <Text class="text-lg">
      Последние 2 с половиной года работаю над распознаванием объектов на изображениях.
      Есть опыт полного цикла производства моделей машинного обучения и компьютерного зрения. 
      Умею работать в команде.
      Учу математику для ML, английский и испанский языки. Всегда мотивирована и стремлюсь к развитию.
    </Text>
  </I18n>
</Section>
