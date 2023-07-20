<script lang="ts" setup>
import WithFullWidthFlyouts from '~/components/tailwindUI/marketing/elements/headers/with_full_width_flyouts.vue'
import ColumnSimple from '~/components/tailwindUI/marketing/sections/footers/column_with_company_mission.vue'
</script>

<template>
  <div>
    <WithFullWidthFlyouts />
    <slot />
    <ColumnSimple />
  </div>
</template>
