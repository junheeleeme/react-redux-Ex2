import { ADD_COUNT, MINUS_COUNT } from "./types"

export const addCount = (msg) => {
    return {
        type : ADD_COUNT,
        data : msg
    }
}

export const minusCount = (msg) => {
    return {
        type : MINUS_COUNT,
        data : msg
    }

}