import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const createEntry = (newEntry) => {
    const request = axios.post(baseUrl, newEntry)
    return request.then(response => response.data)
}

const deleteEntry = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const updateEntry = (id, newEntry) => {
    const request = axios.put(`${baseUrl}/${id}`, newEntry)
    console.log(request);
    return request.then(response => response.data)
}

export default {getAll, createEntry, deleteEntry, updateEntry}