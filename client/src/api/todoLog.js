import { request } from "../api/config";

export const getTodoLogs = () => {
    return new Promise((resolve, reject) => {
        request.get('/todo-log').then( newLogs => {
            return resolve(newLogs)
        })
    })
}

export const setTodoLogs = () => {
    return new Promise((resolve, reject) => {
        request.set('/todo-log').then( newLogs => {
            return resolve(newLogs)
        })
    })
}
