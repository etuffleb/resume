<script>
	import Section from '../components/Section.svelte';
  import Text from '../components/Text.svelte';
  import I18n from '../components/I18n.svelte';
</script>

<Section class={$$props.class}>
  <I18n>
    <Text class="text-lg">
      For the past 5.5 years, I have been developing computer vision and machine learning solutions for 2D object detection/recognition and 3D object recognition using point clouds.
      I have experience across the full ML lifecycle, including data preparation, model training, evaluation, optimization, deployment, and integration into production systems.
      I also have experience working in cross-functional teams and collaborating with engineers and product stakeholders.
   </Text>
  </I18n>
  <I18n lang="ru">
    <Text class="text-lg">
      Последние 5.5 лет я разрабатываю решения в области компьютерного зрения и машинного обучения для распознавания и детекции объектов на изображениях, а также распознавания 3D-объектов по облакам точек.
      Есть опыт полного цикла разработки ML-решений: подготовка данных, обучение и оценка моделей, оптимизация, деплой и интеграция в продакшн.
      Также есть опыт работы в кросс-функциональных командах и взаимодействия с инженерами и бизнес-стейкхолдерами.
    </Text>
  </I18n>
</Section>
