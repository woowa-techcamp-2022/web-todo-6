import { request } from "./config";

export const requsetGetTodoCard= () => {
    return new Promise((resolve, reject) => {
        request.get('/todo').then( todoCard => {
            return resolve(todoCard )
        })
    })
}

export const requsetPostTodoCard = (title, contents,todoSectionId ) => {
    return new Promise((resolve, reject) => {
        request.post('/todo',{title, contents, todoSectionId} ).then( todoCard => {
            return resolve(todoCard)
        })
    })
}


export const requsetDeleteTodoCard = (id) => {
    return new Promise((resolve, reject) => {
        request.delete(`/todo/${id}`).then( result => {
            return resolve( result )
        })
    })
}



export const requsetUpdateTodoCard = ( id, updateData ) => {
    return new Promise((resolve, reject) => {
        request.patch(`/todo/${id}`,updateData ).then( result => {
            return resolve(result)
        })
    })
}