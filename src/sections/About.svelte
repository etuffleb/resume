<script>
	import Section from '../components/Section.svelte';
  import Text from '../components/Text.svelte';
  import I18n from '../components/I18n.svelte';
</script>

<Section class={$$props.class}>
  <I18n>
    <Text class="text-lg">
      For the last 3.5 years, I have been working on object recognition in images, as well as on the recognition of 3D objects using a cloud of points.
      I have experience in the entire cycle of producing machine learning models and computer vision algorithms.
      Also, I have experience of work in a team.
      I am learning math for ML, English, and Spanish.
      Always motivated and would like to self-improve. 
   </Text>
  </I18n>
  <I18n lang="ru">
    <Text class="text-lg">
      Последние 3.5 года работаю над распознаванием объектов на изображениях, а также над распознаванием 3D обьектов используя облако точек.
      Есть опыт полного цикла производства моделей машинного обучения и компьютерного зрения, 
      а также опыт работы в команде.
    </Text>
  </I18n>
</Section>
