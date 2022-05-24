<script>
  import Text from './../components/Text.svelte';
  import Section from './../components/Section.svelte';
  import I18n from '../components/I18n.svelte';
</script>

<Section class={$$props.class}>
  <div slot="title">
    <I18n>
      Experience
    </I18n>
    <I18n lang="ru">
      Опыт работы
    </I18n>
  </div>

  <div class="flex items-center">
    <img src="/images/tvema_logo.png" alt="TVEMA Logo" class="mr-2 w-6 h-6 min-w-6 min-h-6 rounded-full">

    <Text class="text-xl font-semibold uppercase">
      Middle Engineer
    </Text>
  </div>

  <div class="flex justify-between items-baseline mt-1">
    <Text class="text-lg font-medium">
      TVEMA, Moscow Russia
    </Text>
    <Text class="font-medium">
      Jan 2020 - Present Day
    </Text>
  </div>

  <div class="mt-2 break-inside-avoid">
    <ul class="list-disc mt-2 pl-6">
      <li class="mt-2">
        <I18n>
          Software development in C#, C++
        </I18n>
        <I18n lang="ru">
          Разработка программного обеспечения на С#, C++
        </I18n>
      </li>

      <li class="mt-2">
        <I18n>
          Writing scripts to create datasets
        </I18n>
        <I18n lang="ru">
          Написание скриптов для создания датасетов
        </I18n>
      </li>

      <li class="mt-2">
        <I18n>
          Writing scripts to train models
        </I18n>
        <I18n lang="ru">
          Написание скриптов для обучения моделей
        </I18n>
      </li>

      <li class="mt-2">
        <I18n>
          Injecting models into the Production Environment
        </I18n>
        <I18n lang="ru">
          Внедрение моделей в продакшн среду
        </I18n>
      </li>

      <li class="mt-2">
        <I18n>
          Implementation of models from scientific articles
        </I18n>
        <I18n lang="ru">
          Имплементация моделей из научных статей
        </I18n>
      </li>

      <li class="mt-2">
        <I18n>
          Writing image preprocessing algorithms
        </I18n>
        <I18n lang="ru">
          Написание алгоритмов предобработки изображений
        </I18n>
      </li>

      <li class="mt-2">
        <I18n>
          <Text>Development and implementation of computer vision algorithms</Text>
        </I18n>
        <I18n lang="ru">
          <Text>Разработка и реализация алгоритмов компьютерного зрения</Text>
        </I18n>
      </li>

      <li class="mt-2">
        <I18n>
          Registering the dynamics of model training
        </I18n>
        <I18n lang="ru">
          Регистрация динамики обучения моделей
        </I18n>
      </li>

    </ul>
  </div>


</Section>