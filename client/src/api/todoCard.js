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
        request.post('/todo',{title, contents, todoSectionId} ).then( todoCard => {
            return resolve(todoCard)
        })
    })
}


export const deleteTodoCard = (id) => {
    return new Promise((resolve, reject) => {
        request.delete(`/todo/${id}`).then( todoCard => {
            return resolve(todoCard)
        })
    })
}



export const updateTodoCard = ( id, updateData ) => {
    return new Promise((resolve, reject) => {
        request.patch(`/todo/${id}`,{updateData} ).then( todoCard => {
            return resolve(todoCard)
        })
    })
}