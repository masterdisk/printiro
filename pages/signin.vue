<script lang="ts" setup>
const user = useSupabaseUser()
const supabase = useSupabaseAuthClient()

const accountStore = useAccountStore()
const notifyStore = useNotifyStore()

const loading = ref(false)
const email = ref('')
const password = ref('')

async function handleStandardSignin() {
  // eslint-disable-next-line no-console
  console.log(`handleStandardSignin email.value:${email.value}, password.value:${password.value}`)
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithPassword({ email: email.value, password: password.value })
    if (error)
      throw error
  }
  catch (error) {
    notifyStore.notify(error, NotificationType.Error)
  }
  finally {
    loading.value = false
  }
}

async function handleFacebookSignin() {
  try {
    loading.value = true
    await supabase.auth.signInWithOAuth({ provider: 'facebook' })
  }
  catch (error) {
    notifyStore.notify(error, NotificationType.Error)
  }
  finally {
    loading.value = false
  }
  // eslint-disable-next-line no-console
  console.log('handleFacebookSignins22323sss')
}

watchEffect(async () => {
  if (user.value) {
    await accountStore.init()
    navigateTo('/dashboard', { replace: true })
  }
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div class="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold text-center">
        Sign in
      </h1>
      <form class="space-y-4" @submit.prevent="handleStandardSignin">
        <div>
          <label class="block mb-2 font-bold" for="email">Email</label>
          <input
            id="email" v-model="email" class="w-full p-2 border border-gray-400 rounded-md"
            placeholder="Enter your email"
            required type="email"
          >
        </div>
        <div>
          <label class="block mb-2 font-bold" for="password">Password</label>
          <input
            id="password" v-model="password" class="w-full p-2 border border-gray-400 rounded-md"
            placeholder="Enter your password"
            required type="password"
          >
        </div>
        <NuxtLink id="forgotPasswordLink" class="text-right block" to="/forgotpassword">
          Forgot your password?
        </NuxtLink>
        <button
          :disabled="loading || password === ''"
          class="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          type="submit"
        >
          Sign in
        </button>
      </form>
      <p class="text-center">
        or
      </p>
      <!--      <button -->
      <!--        class="w-full py-2 text-white bg-red-600 rounded-md hover:bg-red-700" -->
      <!--        @click="handleFacebookSignin()" -->
      <!--      > -->
      <!--        <span class="flex items-center justify-center space-x-2"> -->
      <!--          <Icon class="w-5 h-5" name="fa-brands:facebook" /> -->
      <!--          <span>Sign in with Facebook</span> -->
      <!--        </span> -->
      <!--      </button> -->
    </div>
  </div>
</template>
