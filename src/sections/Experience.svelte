<script>  
  import Text from './../components/Text.svelte';
  import Section from './../components/Section.svelte';
</script>

<Section class={$$props.class} title="Experience">
  
  <div class="flex items-center">
    <img src="/nc_logo.jpeg" alt="Netcracker Logo" class="mr-2 w-6 h-6 min-w-6 min-h-6 rounded-full">

    <Text class="text-xl font-semibold uppercase">
      Senior Frontend developer
    </Text>
  </div>

  <div class="flex justify-between items-baseline mt-1">
    <Text class="text-lg font-medium">
      Netcracker, Moscow Russia
    </Text>
    <Text class="font-medium">
      Sep 2017 - Present Day
    </Text>
  </div>

  <Text class="mt-4">
    My work consisted of developing and supporting OSS/BSS solutions for telecom companies, developing internal projects, creating training materials for new developers, and mentoring.
  </Text>

  <Text class="mt-2">
    Have been engaged in more than 10 different projects in Netcracker among which
  </Text>

  <ul class="list-disc mt-2 pl-6">
    <li>
      <Text>
        Participated in the creation of an internal UI components library on Angular, wrote more than 500 unit tests, and put together CI/CD pipeline
      </Text>
    </li>
    <li class="mt-2">
      <Text>
        Created an interactive map for connecting global telecom services (Angular + Google Maps API)
      </Text>
    </li>
    <li class="mt-2">
      <Text>
        Created a portal for viewing and editing the internal organisational structure of management
      </Text>
    </li>
    <li class="mt-2">
      <Text>
        Developed a mobile app for eCommerce/eCare portals (React native)
      </Text>
    </li>
    <li class="mt-2">
      <Text>
        Participated in the development of service with microfrontend architecture. Optimized our implementation of this technology
      </Text>
    </li>
    <li class="mt-2">
      <Text>
        Created a web app that visualizes office interiors. One can view an interactive 3d model of each company office and reserve a vacant table taking into account covid restrictions (React + Three.js)
      </Text>
    </li>
    <li class="mt-2">
      <Text>
        Was engaged in a number of internal projects for backend departments as an expert
      </Text>
    </li>
    <li class="mt-2">
      <Text>
        Implemented a payment gateway (Amazon Pay Gateway) for an eCommerce portal
      </Text>
    </li>
    <li class="mt-2">
      <Text>
        Was doing research and developing of an open-source project that finds and presents differences in OpenApi specifications 
      </Text>
    </li>
  </ul>
  

</Section>