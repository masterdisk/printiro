<script setup>
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'

const projects = [
  { name: 'Graph API', initials: 'GA', href: '#', members: 16, bgColor: 'bg-pink-600' },
  { name: 'Component Design', initials: 'CD', href: '#', members: 12, bgColor: 'bg-purple-600' },
  { name: 'Templates', initials: 'T', href: '#', members: 16, bgColor: 'bg-yellow-500' },
  { name: 'React Components', initials: 'RC', href: '#', members: 8, bgColor: 'bg-green-500' },
]
</script>

<template>
  <div>
    <h2 class="text-sm font-medium text-gray-500">
      Pinned Projects
    </h2>
    <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
      <li v-for="project in projects" :key="project.name" class="col-span-1 flex rounded-md shadow-sm">
        <div class="flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md" :class="[project.bgColor]">
          {{ project.initials }}
        </div>
        <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
          <div class="flex-1 truncate px-4 py-2 text-sm">
            <a :href="project.href" class="font-medium text-gray-900 hover:text-gray-600">{{ project.name }}</a>
            <p class="text-gray-500">
              {{ project.members }} Members
            </p>
          </div>
          <div class="flex-shrink-0 pr-2">
            <button type="button" class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span class="sr-only">Open options</span>
              <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
