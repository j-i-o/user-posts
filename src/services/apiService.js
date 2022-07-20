import axios from 'axios'

const baseUrl = "https://jsonplaceholder.typicode.com"

export default {
  getUsers: () => axios.get(`${baseUrl}/users`),

  getPostsByUser: (id) => axios.get(`${baseUrl}/users/${id}/posts`),

  createUser: (payload) => axios.post(`${baseUrl}/users`, payload)
}