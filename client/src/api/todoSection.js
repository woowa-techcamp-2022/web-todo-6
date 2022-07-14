import { request } from "../api/config";

export const getSections = () => {
    return new Promise((resolve, reject) => {
        request.get('/todo-section').then( sections => {
            return resolve(sections)
        })
    })
}