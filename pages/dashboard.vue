<script lang="ts" setup>
import Dark_sidebar_with_light_header
  from '~/components/tailwindUI/application-ui/application-shells/sidebar/dark_sidebar_with_light_header.vue'

definePageMeta({
  middleware: ['auth'],
})

const supabase = useSupabaseAuthClient()
onMounted(async () => {
  await setCookie()
  await getUser()
  // fix this for an extra refresh
})

async function setCookie() {
  const url = new URL(window.location.href)
  const hashParams = new URLSearchParams(url.hash.slice(1)) // slice(1) to remove the '#'

  const refreshToken = hashParams.get('refresh_token') ?? ''
  // const accessToken = hashParams.get('access_token') ?? ''
  // const expiresIn = hashParams.get('expires_in')
  // const providerToken = hashParams.get('provider_token')
  // const tokenType = hashParams.get('token_type')
  // console.log('Expires in:', expiresIn)
  // console.log('Provider token:', providerToken)
  // console.log('Refresh token:', refreshToken)
  // console.log('Token type:', tokenType)

  const { data, error } = await supabase.auth.refreshSession({
    refresh_token: refreshToken,
  })

  console.log(data)
}

async function getUser() {
  const { data } = await supabase.auth.getSession()
}
</script>

<template>
  <dark_sidebar_with_light_header />
</template>
