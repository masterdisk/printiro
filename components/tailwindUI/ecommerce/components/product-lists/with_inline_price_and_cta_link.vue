<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<script setup>
const products = [
  {
    id: 1,
    name: 'Fusion',
    category: 'UI Kit',
    href: '#',
    price: '$49',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  },
  // More products...
]
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="flex items-center justify-between space-x-4">
        <h2 class="text-lg font-medium text-gray-900">
          Customers also viewed
        </h2>
        <a href="#" class="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500">
          View all
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
      <div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        <div v-for="product in products" :key="product.id" class="group relative">
          <div class="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="object-cover object-center">
            <div class="flex items-end p-4 opacity-0 group-hover:opacity-100" aria-hidden="true">
              <div class="w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                View Product
              </div>
            </div>
          </div>
          <div class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
            <h3>
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0" />
                {{ product.name }}
              </a>
            </h3>
            <p>{{ product.price }}</p>
          </div>
          <p class="mt-1 text-sm text-gray-500">
            {{ product.category }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
