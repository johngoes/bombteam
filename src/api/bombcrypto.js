import axios from "axios"

const baseUrl = 'https://api.bombcrypto.io/'

export const apiBomb = axios.create({
  baseURL: baseUrl
})

export const getHeroById = id => {
  return apiBomb.get('/hero', {
    params: {
      id: id
    }
  })
}