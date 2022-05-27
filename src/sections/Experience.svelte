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

    <I18n>
      <Text class="text-xl font-semibold uppercase">
        Middle Engineer
      </Text>
    </I18n>
    <I18n lang="ru">
      <Text class="text-xl font-semibold uppercase">
        Инженер-разработчик
      </Text>
    </I18n>
  </div>

  <div class="flex justify-between items-baseline mt-1 font-medium">
    <I18n>
      <Text class="text-lg">
        TVEMA, Moscow Russia
      </Text>
    </I18n>
    <I18n lang="ru">
      <Text class="text-lg">
        ТВЕМА, Москва Россия
      </Text>
    </I18n>

    <I18n>
      Jan 2020 - Present Day
    </I18n>
    <I18n lang="ru">
      Янв 2020 - Настоящее время
    </I18n>
  </div>

  <div class="mt-2 break-inside-avoid">
    <ul class="list-disc mt-2 pl-6">
      <li class="mt-1">
        <I18n>
          Developed software in C#, C++ and maintained legacy code
        </I18n>
        <I18n lang="ru">
          Разрабатывала программное обеспечение на С#, C++ и поддерживала старый код
        </I18n>
      </li>

      <li class="mt-1">
        <I18n>
          Wrote image preprocessing algorithms
        </I18n>
        <I18n lang="ru">
          Писала алгоритмы предобработки изображений
        </I18n>
      </li>

      <li class="mt-1">
        <I18n>
          Developed and implemented computer vision algorithms
        </I18n>
        <I18n lang="ru">
          Разрабатывала и реализовывала алгоритмы компьютерного зрения
        </I18n>
      </li>

      <li class="mt-1">
        <I18n>
          Automated the formation of datasets of marked data
        </I18n>
        <I18n lang="ru">
          Автоматизировала формирование датасетов размеченных данных
        </I18n>
      </li>

      <li class="mt-1">
        <I18n>
          Wrote scripts for the learning process of ML models, implemented their structure from scientific articles
        </I18n>
        <I18n lang="ru">
          Писала скрипты для запуска процесса обучения ML-моделей, имплементировала их структуру из научных статей
        </I18n>
      </li>

      <li class="mt-1">
        <I18n>
          Trained networks for image detection, segmentation, and classification. Such as SSD, FCOS, U-Net, PointNet. Controlled and recorded the dynamics of their learning
        </I18n>
        <I18n lang="ru">
          Обучала сети для детекции, сегментации и классификации изображений. Такие как SSD, FCOS, U-Net, PointNet. Контролировала и регистрировала динамику их обучения
        </I18n>
      </li>

      <li class="mt-1">
        <I18n>
          Implemented trained ML models into the production environment
        </I18n>
        <I18n lang="ru">
          Внедряла обученные ML-модели в продакшн среду
        </I18n>
      </li>

    </ul>
  </div>


</Section>