<script>
	import I18n from './../components/I18n.svelte';
  import Text from '../components/Text.svelte';
</script>

<section class={$$props.class}>

  <I18n>
    <Text class="text-6xl text-center font-fancy font-medium leading-tight">
        Ekaterina Mikhaylova
    </Text>
  </I18n>
  <I18n lang="ru">
    <Text class="text-6xl text-center font-fancy font-medium leading-tight">
        Екатерина Михайлова
    </Text>
  </I18n>

  <I18n>
    <Text class="mt-3 text-lg text-center uppercase tracking-wider">
      Computer Vision and Machine Learning Engineer
    </Text>
  </I18n>
  <I18n lang="ru">
    <Text class="mt-3 text-lg text-center uppercase tracking-wider">
      Инженер компьютерного зрения и машинного обучения
    </Text>
  </I18n>


</section>
