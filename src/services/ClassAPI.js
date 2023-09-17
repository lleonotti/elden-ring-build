import axios from 'axios'

const classApi = axios.create({
  baseURL: 'https://eldenring.fanapis.com'
})

export const getClass = async () => {
  const response = await classApi.get('/api/classes')
  return response.data
}

export default classApi
