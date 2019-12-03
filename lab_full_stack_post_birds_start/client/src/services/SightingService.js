const baseURL = 'http://localhost:3000/api/sightings/'

export default {
  getSightings(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  sendBird(bird){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(bird),
      header: {'content-type': 'application/json'}
    })
    .then(result => result.json())
  }
}
