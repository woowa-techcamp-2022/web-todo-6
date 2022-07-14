import { request } from "../api/config";

export const getSections = () => {
    return new Promise((resolve, reject) => {
        request.get('/todo-section').then( sections => {
            return resolve(sections)
        })
    })
}

export const updateSection = (id, data) => {
    return request.patch(`/todo-section/${id}`, data)
}