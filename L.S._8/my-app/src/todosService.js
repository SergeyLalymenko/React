import axios from 'axios'

export default axios.create({
  // baseURL: 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos'  основной сервер,может не работать потому что в данных объект сохранился
  baseURL: 'https://5f4cdc1ceeec51001608e4c8.mockapi.io/todos'  // мой сервер,идентичный основному
})