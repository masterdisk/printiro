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
    <div class="flex justify-between">
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <span id="email-optional" class="text-sm text-gray-500">Optional</span>
    </div>
    <div class="mt-1">
      <input id="email" type="email" name="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="you@example.com" aria-describedby="email-optional">
    </div>
  </div>
</template>
