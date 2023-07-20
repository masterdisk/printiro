<script lang="ts" setup>
const user = useSupabaseUser()
const supabase = useSupabaseAuthClient()

const notifyStore = useNotifyStore()

const loading = ref(false)
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const signUpOk = ref(false)

async function handleStandardSignup() {
  try {
    loading.value = true
    const { data, error } = await supabase.auth.signUp({ email: email.value, password: password.value })
    if (error)
      throw error
    else
      signUpOk.value = true
  }
  catch (error) {
    notifyStore.notify(error, NotificationType.Error)
  }
  finally {
    loading.value = false
  }
}

watchEffect(() => {
  if (user.value)
    navigateTo('/dashboard', { replace: true })
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div class="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold text-center">
        Sign up
      </h1>
      <form class="space-y-4" @submit.prevent="handleStandardSignup">
        <div>
          <label class="block mb-2 font-bold" for="email">Email</label>
          <input
            id="email" v-model="email" class="w-full p-2 border border-gray-400 rounded-md" placeholder="Enter your email"
            required type="email"
          >
        </div>
        <div>
          <label class="block mb-2 font-bold" for="password">Password</label>
          <input
            id="password" v-model="password" class="w-full p-2 border border-gray-400 rounded-md" placeholder="Enter your password"
            required type="password"
          >
        </div>
        <div>
          <label class="block mb-2 font-bold" for="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword" v-model="confirmPassword" class="w-full p-2 border border-gray-400 rounded-md"
            placeholder="Confirm your password" required type="password"
          >
        </div>
        <button
          :disabled="loading || password === '' || (confirmPassword !== password)" class="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          type="submit"
        >
          Sign up
        </button>

        <p v-if="signUpOk" class="mt-4 text-lg text-center">
          You have successfully signed up. Please check your email for
          a link to confirm your email address and proceed.
        </p>
      </form>
      <p class="text-center">
        or
      </p>
      <button
        class="w-full py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
        @click="supabase.auth.signInWithOAuth({ provider: 'facebook' })"
      >
        <span class="flex items-center justify-center space-x-2">
          <Icon class="w-5 h-5" name="fa-brands:facebook" />
          <span>Sign up with Facebook</span>
        </span>
      </button>
      <p class="mt-4 text-xs text-center text-gray-500">
        By proceeding, I agree to the
        <NuxtLink to="/privacy">
          Privacy Statement
        </NuxtLink>
        and
        <NuxtLink to="/terms">
          Terms
          of Service
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
