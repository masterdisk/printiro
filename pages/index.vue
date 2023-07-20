<script lang="ts" setup>
import with_product_screenshot
  from '~/components/tailwindUI/marketing/sections/feature-sections/with_product_screenshot.vue'
import Dark_panel_with_app_screenshot
  from '~/components/tailwindUI/marketing/sections/cta-sections/dark_panel_with_app_screenshot.vue'
import Split_with_code_example from '~/components/tailwindUI/marketing/sections/heroes/split_with_code_example.vue'

const user = useSupabaseUser()
watchEffect(() => {
  if (user.value)
    navigateTo('/', { replace: true })
})
definePageMeta({ layout: 'landing-page' })
</script>

<template>
  <Split_with_code_example />
  <Dark_panel_with_app_screenshot />
  <with_product_screenshot />
</template>
