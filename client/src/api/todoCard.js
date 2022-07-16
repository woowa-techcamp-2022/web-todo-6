import { request } from "./config";
export const requestGetTodoCard= () => {
    return new Promise((resolve, reject) => {
        request.get('/todo').then( todoCard => {
            return resolve(todoCard )
        })
    })
}

export const requestPostTodoCard = (title, contents,todoSectionId ) => {
    return new Promise((resolve, reject) => {
        request.post('/todo',{title, contents, todoSectionId} ).then( todoCard => {
            return resolve(todoCard)
        })
    })
}


export const requestDeleteTodoCard = (id) => {
    return new Promise((resolve, reject) => {
        request.delete(`/todo/${id}`).then( result => {
            return resolve( result )
        })
    })
}



export const requestUpdateTodoCard = ( id, updateData ) => {
    return new Promise((resolve, reject) => {
        request.patch(`/todo/${id}`,updateData ).then( result => {
            return resolve(result)
        })
    })
}