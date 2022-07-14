import { request } from "./config";

export const getTodoCard= () => {
    return new Promise((resolve, reject) => {
        request.get('/todo').then( todoCard => {
            return resolve(todoCard )
        })
    })
}

export const postTodoCard = (title, contents,todoSectionId ) => {
    console.log()
    return new Promise((resolve, reject) => {
        request.post('/todo',{title, contents,todoSectionId} ).then( todoCard => {
            return resolve(todoCard)
        })
    })
}