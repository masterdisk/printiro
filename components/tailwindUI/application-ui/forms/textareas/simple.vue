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
    <label for="comment" class="block text-sm font-medium text-gray-700">Add your comment</label>
    <div class="mt-1">
      <textarea id="comment" rows="4" name="comment" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
    </div>
  </div>
</template>
