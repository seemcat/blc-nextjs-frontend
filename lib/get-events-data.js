export async function getEventsData(didToken) {
  console.log('BEARER TOKEN: ', didToken)
  // Local URL
  const strapiBackendUrl = 'http://localhost:1337/events'
  
  // Production URL
  // const strapiBackendUrl = 'ADD_YOUR_LIVE_HEROKU_APP_URL_HERE'
  
  // Call Strapi API
  const res = await fetch(strapiBackendUrl,
  {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${didToken}`,
      'Accept' : 'application/json',
    }
  })

  const data = await res.json()
  return data
}