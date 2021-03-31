export async function getGatheringsData(jwtToken) {
  console.log('BEARER TOKEN: ', jwtToken)
  const strapiBackendUrl = 'http://localhost:1337/events'
  //const strapiBackendUrl = 'https://morning-stream-41715.herokuapp.com/events'
  const res = await fetch(strapiBackendUrl,
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwtToken}`
    }
  })
  console.log('res: ', res)
  const data = await res.json()
  return data
}
