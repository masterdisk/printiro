<script lang="ts" setup>
import with_phone_mockup from '~/components/tailwindUI/marketing/sections/heroes/split_with_screenshot.vue'
import with_product_screenshot from '~/components/tailwindUI/marketing/sections/feature-sections/with_product_screenshot.vue'
import Dark_panel_with_app_screenshot from '~/components/tailwindUI/marketing/sections/cta-sections/dark_panel_with_app_screenshot.vue'

definePageMeta({ layout: 'landing-page' })
</script>

<template>
  <with_phone_mockup />
  <Dark_panel_with_app_screenshot />
  <with_product_screenshot />
</template>
