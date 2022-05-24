<script>
  import Text from './../components/Text.svelte';
  import Section from './../components/Section.svelte';
  import I18n from '../components/I18n.svelte';
</script>

<Section class={$$props.class}>
  <div slot="title">
    <I18n>
      Education
    </I18n>
    <I18n lang="ru">
      Образование
    </I18n>
  </div>

  <div class="flex items-center justify-between items-baseline">
    <Text class="text-xl font-medium uppercase">
      School 21
    </Text>

    <I18n>
      <Text>Nov 2018 – Present Day</Text>
    </I18n>
    <I18n lang="ru">
      <Text>Ноя 2018 - Настоящее время</Text>
    </I18n>
  </div>

  <div class="flex justify-between items-baseline mt-4">
    <div class="flex items-center">
      <I18n>
        <Text class="text-xl font-medium uppercase">
          First Moscow State Medical University (FMSMU)
        </Text>
      </I18n>
      <I18n lang="ru">
        <Text class="text-xl font-medium uppercase">
          Первый МГМУ им. И. М. Сеченова
        </Text>
      </I18n>
    </div>

    <I18n>
      <Text>Sep 2013 – May 2019</Text>
    </I18n>
    <I18n lang="ru">
      <Text>Сен 2013 - Май 2019</Text>
    </I18n>
  </div>

</Section>