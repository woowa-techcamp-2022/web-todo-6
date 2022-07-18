import { request } from "./config";
export const requestGetTodoCard= (sectionId) => {
    return new Promise((resolve, reject) => {
        request.get(`/todo?sectionId=${sectionId}`).then( todoCard => {
            return resolve(todoCard )
        })
    })
}

export const requestPostTodoCard = (title, contents,sectionId ) => {
    return new Promise((resolve, reject) => {
        request.post('/todo',{title, contents, sectionId} ).then( todoCard => {
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
    console.log(updateData)
    return new Promise((resolve, reject) => {
        request.patch(`/todo/${id}`,updateData ).then( result => {
            return resolve(result)
        })
    })
}