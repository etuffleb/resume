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

  <div class="break-inside-avoid">
    <div class="flex items-center justify-between items-baseline">
      <I18n>
        <div class="text-xl font-medium uppercase">
          School 21
        </div>
      </I18n>
      <I18n lang="ru">
        <div class="text-xl font-medium uppercase">
          Школа 21
        </div>
      </I18n>

      <I18n>
        Nov 2018 – Present Day
      </I18n>
      <I18n lang="ru">
        Ноя 2018 - Настоящее время
      </I18n>
    </div>
    

    <div>
      <I18n>
        Completed more than 20 projects in C, C++, and Python. Also implemented algorithms and worked with graphics, both in a team and alone.
      </I18n>
      <I18n lang="ru">
        Завершила более 20 проектов на С, С++ и Python. В том числе реализовывала алгоритмы и работала с графикой, как в комадне, так и в одиночку.
      </I18n>
    </div>
  </div>

  <div class="break-inside-avoid">
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
        Sep 2013 – May 2019
      </I18n>
      <I18n lang="ru">
        Сен 2013 - Май 2019
      </I18n>
    </div>

    <div>
      <I18n>
        Doctor of General Hygiene and Epidemiology
      </I18n>
      <I18n lang="ru">
        Врач по общей гигиене и эпидемиологии
      </I18n>
    </div>
  </div>

</Section>