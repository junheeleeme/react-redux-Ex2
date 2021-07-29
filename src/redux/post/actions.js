import { ADD_POST, REMOVE_POST, SET_POST  } from "./types"

export const addPost = (post) => {
    return {
        type : ADD_POST,
        data : post
    }
}

export const removePost = (post) => {
    return {
        type : REMOVE_POST,
        data : post
    }
}


export const setPost = (post) => {
    return {
        type : REMOVE_POST,
        data : post
    }
}
