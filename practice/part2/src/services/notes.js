import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
  const request =  axios.get(baseUrl)
  const nonExisting = {
      id: 10000,
      content: 'This note is not in the server',
      date: '2019-05-30T17:30:31.098Z',
      important: true,
  }
  return request.then(response => response.data.concat(nonExisting))
}

const create = newObject => {
  const request =  axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request =  axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

// Initial export object
// export default { 
//   getAll: getAll, 
//   create: create, 
//   update: update 
// }

// New export object (New is ES6, if object keys are same as var names, can just omit the keys)
export default {getAll, create, update}