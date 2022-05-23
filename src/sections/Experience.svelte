<script>
  import Text from './../components/Text.svelte';
  import Section from './../components/Section.svelte';
</script>

<Section class={$$props.class} title="Experience">

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
        <Text>
          Разработка программного обеспечения на С#, C++
        </Text>
      </li>
      <li class="mt-2">
        <Text>
          Написание скриптов для создания датасетов
        </Text>
      </li>
      <li class="mt-2">
        <Text>
          Написание скриптов для обучения моделей
        </Text>
      </li>
      <li class="mt-2">
        <Text>
          Внедрение нейронных сетей в продакшн
        </Text>
      </li>
    </ul>
  </div>


</Section>