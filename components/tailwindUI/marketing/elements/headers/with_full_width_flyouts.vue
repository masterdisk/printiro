<script setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  Bars3Icon,
  BookmarkSquareIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { storeToRefs } from 'pinia'

const supabase = useSupabaseAuthClient()
const user = useSupabaseUser()
const accountStore = useAccountStore()
const { dbUser, activeAccountId } = storeToRefs(accountStore)
const notifyStore = useNotifyStore()
const { notifications } = storeToRefs(notifyStore)

onMounted(async () => {
  await accountStore.init()
})

async function signout() {
  await supabase.auth.signOut()
  if (accountStore)
    accountStore.signout()

  navigateTo('/', { replace: true })
}

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Security', description: 'Your customers\' data will be safe and secure.', href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools that you\'re already using.',
    href: '#',
    icon: Squares2X2Icon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'View All Products', href: '#', icon: CheckCircleIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const company = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: BuildingOfficeIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookmarkSquareIcon },
  { name: 'Webinars', href: '#', icon: ComputerDesktopIcon },
]
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
        'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
]
</script>

<template>
  <Popover class="relative bg-white">
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 z-30 shadow" />
    <div class="relative z-20">
      <div
        class="mx-auto flex max-w-7xl items-center justify-between py-5 px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8"
      >
        <div>
          <a class="flex" href="/">
            <span class="sr-only">Your Company</span>
            <img
              alt="" class="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            >
          </a>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton
            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <Bars3Icon aria-hidden="true" class="h-6 w-6" />
          </PopoverButton>
        </div>
        <div class="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <PopoverGroup as="nav" class="flex space-x-10">
            <Popover v-slot="{ open }">
              <PopoverButton
                :class="[open ? 'text-gray-900' : 'text-gray-500']"
                class="group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span>Solutions</span>
                <ChevronDownIcon
                  :class="[open ? 'text-gray-600' : 'text-gray-400']" aria-hidden="true"
                  class="ml-2 h-5 w-5 group-hover:text-gray-500"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1"
              >
                <PopoverPanel class="absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg md:block">
                  <div
                    class="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16"
                  >
                    <a
                      v-for="item in solutions" :key="item.name" :href="item.href"
                      class="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div class="flex md:h-full lg:flex-col">
                        <div class="flex-shrink-0">
                          <span
                            class="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
                          >
                            <component :is="item.icon" aria-hidden="true" class="h-6 w-6" />
                          </span>
                        </div>
                        <div class="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                          <div>
                            <p class="text-base font-medium text-gray-900">{{ item.name }}</p>
                            <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
                          </div>
                          <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                            Learn more
                            <span aria-hidden="true"> &rarr;</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="bg-gray-50">
                    <div
                      class="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8"
                    >
                      <div v-for="item in callsToAction" :key="item.name" class="flow-root">
                        <a
                          :href="item.href"
                          class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                          <component :is="item.icon" aria-hidden="true" class="h-6 w-6 flex-shrink-0 text-gray-400" />
                          <span class="ml-3">{{ item.name }}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
            <a class="text-base font-medium text-gray-500 hover:text-gray-900" href="#">Pricing</a>
            <a class="text-base font-medium text-gray-500 hover:text-gray-900" href="#">Docs</a>
            <Popover v-slot="{ open }">
              <PopoverButton
                :class="[open ? 'text-gray-900' : 'text-gray-500']"
                class="group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span>More</span>
                <ChevronDownIcon
                  :class="[open ? 'text-gray-600' : 'text-gray-400']" aria-hidden="true"
                  class="ml-2 h-5 w-5 group-hover:text-gray-500"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1"
              >
                <PopoverPanel class="absolute inset-x-0 top-full z-10 hidden transform shadow-lg md:block">
                  <div class="absolute inset-0 flex">
                    <div class="w-1/2 bg-white" />
                    <div class="w-1/2 bg-gray-50" />
                  </div>
                  <div class="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <nav
                      class="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                    >
                      <div>
                        <h3 class="text-base font-medium text-gray-500">
                          Company
                        </h3>
                        <ul class="mt-5 space-y-6" role="list">
                          <li v-for="item in company" :key="item.name" class="flow-root">
                            <a
                              :href="item.href"
                              class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                              <component
                                :is="item.icon" aria-hidden="true"
                                class="h-6 w-6 flex-shrink-0 text-gray-400"
                              />
                              <span class="ml-4">{{ item.name }}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 class="text-base font-medium text-gray-500">
                          Resources
                        </h3>
                        <ul class="mt-5 space-y-6" role="list">
                          <li v-for="item in resources" :key="item.name" class="flow-root">
                            <a
                              :href="item.href"
                              class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                              <component
                                :is="item.icon" aria-hidden="true"
                                class="h-6 w-6 flex-shrink-0 text-gray-400"
                              />
                              <span class="ml-4">{{ item.name }}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <div class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                      <div>
                        <h3 class="text-base font-medium text-gray-500">
                          From the blog
                        </h3>
                        <ul class="mt-6 space-y-6" role="list">
                          <li v-for="post in blogPosts" :key="post.id" class="flow-root">
                            <a :href="post.href" class="-m-3 flex rounded-lg p-3 hover:bg-gray-100">
                              <div class="hidden flex-shrink-0 sm:block">
                                <img :src="post.imageUrl" alt="" class="h-20 w-32 rounded-md object-cover">
                              </div>
                              <div class="w-0 flex-1 sm:ml-8">
                                <h4 class="truncate text-base font-medium text-gray-900">{{ post.name }}</h4>
                                <p class="mt-1 text-sm text-gray-500">{{ post.preview }}</p>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="mt-6 text-sm font-medium">
                        <a class="text-indigo-600 hover:text-indigo-500" href="#">
                          View all posts
                          <span aria-hidden="true"> &rarr;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>
          <div class="flex items-center md:ml-12">
            <nuxt-link
              class="text-base font-medium text-gray-500 hover:text-gray-900"
              to="/signin"
            >
              Sign in
            </nuxt-link>
            <nuxt-link
              v-if="!user"
              class="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              to="/signup"
            >
              Sign
              up
            </nuxt-link>
            <nuxt-link
              v-if="user"
              class="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              @click="signout"
            >
              Sign Out
            </nuxt-link>
            <nuxt-link
              v-if="user"
              class="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              to="/dashboard"
            >
              Dashboard
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel class="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden" focus>
        <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="px-5 pt-5 pb-6 sm:pb-8">
            <div class="flex items-center justify-between">
              <div>
                <img
                  alt="Your Company" class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                >
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" class="h-6 w-6" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6 sm:mt-8">
              <nav>
                <div class="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                  <a
                    v-for="item in solutions" :key="item.name" :href="item.href"
                    class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                  >
                    <div
                      class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
                    >
                      <component :is="item.icon" aria-hidden="true" class="h-6 w-6" />
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">{{ item.name }}</div>
                  </a>
                </div>
                <div class="mt-8 text-base">
                  <a class="font-medium text-indigo-600 hover:text-indigo-500" href="#">
                    View all products
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5">
            <div class="grid grid-cols-2 gap-4">
              <a class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700" href="#">Pricing</a>
              <a class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700" href="#">Docs</a>
              <a class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700" href="#">Company</a>
              <a class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700" href="#">Resources</a>
              <a class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700" href="#">Blog</a>
              <a class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700" href="#">Contact Sales</a>
            </div>
            <div class="mt-6">
              <a
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                href="#"
              >Sign
                up</a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                {{ ' ' }}
                <a class="text-indigo-600 hover:text-indigo-500" href="#">Sign in</a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
