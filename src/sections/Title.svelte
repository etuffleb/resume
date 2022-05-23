<script>
	import I18n from './../components/I18n.svelte';
  import Text from '../components/Text.svelte';
</script>

<section class={$$props.class}>

  <Text class="text-6xl text-center font-fancy font-medium leading-tight">
    <I18n>
      Dmitry Mikhaylov
    </I18n>
    <I18n lang="ru">
      Дмитрий Михайлов
    </I18n>
  </Text>

  <Text class="mt-3 text-lg text-center uppercase tracking-wider">
    <I18n>
      Senior Frontend Developer
    </I18n>
    <I18n lang="ru">
      Старший Разработчик Пользовательских Интерфейсов
    </I18n>
  </Text>

</section>
