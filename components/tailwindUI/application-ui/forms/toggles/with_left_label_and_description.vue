<script setup>
import { ref } from 'vue'
import { Switch, SwitchDescription, SwitchGroup, SwitchLabel } from '@headlessui/vue'

const enabled = ref(false)
</script>

<template>
  <SwitchGroup as="div" class="flex items-center justify-between">
    <span class="flex flex-grow flex-col">
      <SwitchLabel as="span" class="text-sm font-medium text-gray-900" passive>Available to hire</SwitchLabel>
      <SwitchDescription as="span" class="text-sm text-gray-500">Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.</SwitchDescription>
    </span>
    <Switch v-model="enabled" class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" :class="[enabled ? 'bg-indigo-600' : 'bg-gray-200']">
      <span aria-hidden="true" class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" :class="[enabled ? 'translate-x-5' : 'translate-x-0']" />
    </Switch>
  </SwitchGroup>
</template>
