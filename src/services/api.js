import axios from 'axios'


const API = import.meta.env.VITE_API
// const API = "http://localhost:7777"
// const API = import.meta.env.APIMOCK

const getProjects = () => axios.get(`${API}/projects/all`)
const getProjectbyID = (id) => axios.get(`${API}/projects/${id}`)
const addProject = (projectdata) => axios.post(`${API}/projects/add`, projectdata)
const editProject = (id, projectdata) => axios.put(`${API}/projects/edit/${id}`, projectdata)
const deleteProject = (id) => axios.delete(`${API}/projects/delete/${id}`)
export { getProjects, getProjectbyID, addProject, editProject, deleteProject }