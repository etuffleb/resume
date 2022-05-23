<script>
	import TranslateIcon from './../icons/TranslateIcon.svelte';
  import Text from './Text.svelte';
  import { i18nLang } from '../store/i18n';

  const availableLanguages = [
    'en',
    'ru',
  ];
  let langIndex = 0;
</script>

<button
  class={`print:hidden hover:bg-opacity-5 hover:bg-onyx px-2 py-1 ${$$props.class}`}
  on:click={() => {
    langIndex = (langIndex + 1) % availableLanguages.length;
    i18nLang.set(availableLanguages[langIndex]);
  }}
>
  <Text inline class="flex items-center capitalize">
    <TranslateIcon class="mr-2"/>
    {availableLanguages[langIndex]}
  </Text>
</button>