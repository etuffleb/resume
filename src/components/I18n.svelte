<script>
  import { DEFAULT_LANG, i18nLang } from "../store/i18n";

  export let lang = DEFAULT_LANG;
</script>

{#if $i18nLang === lang}
  <slot></slot>
{/if}