<script>
	import Section from '../components/Section.svelte';
  import Text from '../components/Text.svelte';
  import I18n from '../components/I18n.svelte';
</script>

<Section class={$$props.class}>
  <div slot="title">
    <I18n>
      Languages
    </I18n>
    <I18n lang="ru">
      Языки
    </I18n>
  </div>

  <div class="columns-1 sm:columns-2 print:columns-2">
    
    
    <div class="flex items-baseline">
      <I18n>
        <Text inline class="text-lg font-medium">
          Russian
        </Text>
      </I18n>
      <I18n lang="ru">
        <Text inline class="text-lg font-medium">
          Русский
        </Text>
      </I18n>
      <Text inline class="text-lg mx-1">
        -
      </Text>
      <I18n>
        <Text inline class="text-lg">
          Native
        </Text>
      </I18n>
      <I18n lang="ru">
        <Text inline class="text-lg">
          Родной
        </Text>
      </I18n>
    </div>
    
    
    <div class="flex items-baseline">
      <I18n>
        <Text inline class="text-lg font-medium">
          English
        </Text>
      </I18n>
      <I18n lang="ru">
        <Text inline class="text-lg font-medium">
          Английский
        </Text>
      </I18n>
      <Text inline class="text-lg mx-1">
        -
      </Text>
      <Text inline class="text-lg">
        B2 Upper Intermediate
      </Text>
    </div>


    <div class="flex items-baseline">
      <I18n>
        <Text inline class="text-lg font-medium">
          Spanish
        </Text>
      </I18n>
      <I18n lang="ru">
        <Text inline class="text-lg font-medium">
          Испанский
        </Text>
      </I18n>
      <Text inline class="text-lg mx-1">
        -
      </Text>
      <I18n>
        <Text inline class="text-lg">
          A2 Elementary
        </Text>
      </I18n>
    </div>

  </div>
</Section>
