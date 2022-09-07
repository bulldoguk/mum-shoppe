export default function ({ $axios, $config }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
      headers: {
        common: {
          Accept: 'text/plain, */*',
          x_key: $config.apikey
        }
      }
    })
  
    // Set baseURL to something different
    api.setBaseURL($config.apiprotocol + $config.apiurl)
  
    // Inject to context as $api
    inject('api', api)
  }