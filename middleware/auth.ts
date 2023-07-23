export default defineNuxtRouteMiddleware(async (context) => {
  const redirectedUrlTokenFromatted = context.hash.slice(1)
  const redirectedUrlToken = `/dashboard/#/${redirectedUrlTokenFromatted}`
  const UrlTokenHash = context.hash
  // const redirectedUrlTokenHash = '/'

  // if (!user.value)
  //   return navigateTo('/')
  // await console.log(transformURL(redirectedUrlToken))

  // console.log(redirectedUrlToken)

  if (UrlTokenHash.startsWith('#access_token='))
    return navigateTo(redirectedUrlToken, { replace: false })
})

function transformURL(inputURL) {
  if (inputURL.includes('#access_token=')) {
    // Split the URL at '#access_token='
    const [baseUrl, accessTokenPart] = inputURL.split('#access_token=')

    // Reassemble the URL with a '/' after the '#' before 'access_token'
    const transformedURL = `${baseUrl}#/${accessTokenPart}`

    return transformedURL
  }

  // If the URL does not contain '#access_token=', return the original URL
  return inputURL
}
