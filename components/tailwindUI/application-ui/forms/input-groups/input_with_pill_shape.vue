<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div>
    <label for="name" class="ml-px block pl-4 text-sm font-medium text-gray-700">Name</label>
    <div class="mt-1">
      <input id="name" type="text" name="name" class="block w-full rounded-full border-gray-300 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Jane Smith">
    </div>
  </div>
</template>
